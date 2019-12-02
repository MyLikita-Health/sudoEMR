// Load in test dependencies
var lineHeight = require('../lib/line-height.js'),
    assert = require('proclaim'),
    domify = require('domify'),
    cssControls = require('css-controls');

// Create common fixture actions
function fixtureNode() {
  before(function () {
    var node = domify(this.html);
    document.body.appendChild(node);
    this.node = node;
  });
  after(function () {
    document.body.removeChild(this.node);
  });
}

function processNode() {
  before(function () {
    this.lineHeight = lineHeight(this.node);
  });

  it('has a line-height which is a number', function () {
    assert.strictEqual(typeof this.lineHeight, 'number');
    assert.notEqual(isNaN(this.lineHeight), true);
  });
}

function styleBody(css) {
  before(function () {
    document.body.style.cssText = css;
  });
  after(function () {
    document.body.style.cssText = '';
  });
}

var styleSheet = cssControls.createStyleSheet();
function globalStyle(selector, rule) {
  var index;
  before(function () {
    index = cssControls.addRule(styleSheet, selector, rule);
  });
  after(function () {
    cssControls.removeRule(styleSheet, index);
  });
}

// Basic tests
var _defaultLnHeight;
describe('An unstyled div', function () {
  before(function () {
    this.html = '<div>abc</div>';
  });
  fixtureNode();

  describe('processed by line-height', function () {
    processNode();

    before(function () {
      // Save the line height for other tests
      _defaultLnHeight = this.lineHeight;
    });

    it('has a line-height equal to its height', function () {
      var height = this.node.offsetHeight;
      assert.strictEqual(this.lineHeight, height);
    });
  });
});

describe('A line-height styled div', function () {
  before(function () {
    this.html = '<div style="line-height: 50px;">abc</div>';
  });
  fixtureNode();

  describe('processed by line-height', function () {
    processNode();

    it('has the styled line-height\'s height', function () {
      assert.strictEqual(this.lineHeight, 50);
    });
  });
});

// DEV: Tests and disproves that an element has a constant ratio for its font-size
describe('A font-size styled div', function () {
  before(function () {
    this.html = '<div style="font-size: 50px;">abc</div>';
  });
  fixtureNode();

  describe('processed by line-height', function () {
    processNode();

    it('has the styled line-height\'s height', function () {
      var height = this.node.offsetHeight;
      assert.strictEqual(this.lineHeight, height);
    });

    it('has a line-height greater than the its font-size', function () {
      var lnHeight = this.lineHeight;
      assert.ok(lnHeight > 50, 'Expected: > 50, Actual: ' + lnHeight);
    });
  });
});

// Intermediate tests
describe('A percentage line-height div', function () {
  before(function () {
    this.html = '<div style="line-height: 150%;">abc</div>';
  });
  fixtureNode();

  describe('processed by line-height', function () {
    processNode();

    it('has a line-height equal to its height', function () {
      var height = this.node.offsetHeight;
      assert.strictEqual(this.lineHeight, height);
    });

    it('has a line-height greater than the default', function () {
      // DEV: In IE6, 150% !== default * 1.5; 24 !== 28.5 (19 * 1.5)
      var lnHeight = this.lineHeight;
      assert.ok(lnHeight > _defaultLnHeight, 'Expected: > ' + _defaultLnHeight + ' (default), Actual: ' + lnHeight);
    });
  });
});

describe('A relative line-height div', function () {
  before(function () {
    this.html = '<div style="line-height: 3em;">abc</div>';
  });
  fixtureNode();

  describe('processed by line-height', function () {
    processNode();

    it('has a line-height equal to its height', function () {
      var height = this.node.offsetHeight;
      assert.strictEqual(this.lineHeight, height);
    });

    it('has a line-height greater than the default', function () {
      // DEV: In IE6, 1.3em !== default * 1.3; 22 !== 24.7 (19 * 1.3)
      var lnHeight = this.lineHeight;
      assert.ok(lnHeight > _defaultLnHeight, 'Expected: > ' + _defaultLnHeight + ' (default), Actual: ' + lnHeight);
    });
  });
});

// DEV: This is redundant but the test name is practical
describe('An absolute line-height div', function () {
  before(function () {
    this.html = '<div style="line-height: 50px;">abc</div>';
  });
  fixtureNode();

  describe('processed by line-height', function () {
    processNode();

    it('has a line-height equal to 50px', function () {
      var height = this.node.offsetHeight;
      assert.strictEqual(this.lineHeight, 50);
    });
  });
});

describe('A numeric line-height div', function () {
  before(function () {
    this.html = '<div style="line-height: 2.3;">abc</div>';
  });
  fixtureNode();

  describe('processed by line-height', function () {
    processNode();

    it('has a line-height equal to its height', function () {
      var height = this.node.offsetHeight;
      assert.strictEqual(this.lineHeight, height);
    });

    it('has a line-height greater than the default', function () {
      // DEV: In IE6, 2.3 !== default * 2.3; 37 !== 43.6999... (19 * 2.3)
      var lnHeight = this.lineHeight;
      assert.ok(lnHeight > _defaultLnHeight, 'Expected: > ' + _defaultLnHeight + ' (default), Actual: ' + lnHeight);
    });
  });
});

// Verify ancestor -> descendant works on global styling to node level
describe('An inherit line-height div', function () {
  before(function () {
    this.html = '<div style="line-height: inherit;">abc</div>';
  });
  styleBody('line-height: 40px;');
  fixtureNode();

  describe('processed by line-height', function () {
    processNode();

    it('has a line-height equal to the inherited amount', function () {
      assert.strictEqual(this.lineHeight, 40);
    });
  });
});

// Verify ancestor -> descendant works on node to node level
describe('A child in a styled div', function () {
  before(function () {
    this.html = '<div style="line-height: 50px;"><div id="child">abc</div></div>';
  });
  fixtureNode();

  describe('processed by line-height', function () {
    before(function () {
      var childNode = document.getElementById('child');
      this.lineHeight = lineHeight(childNode);
    });

    it('has a line-height equal to the parent\'s line-height', function () {
      assert.strictEqual(this.lineHeight, 50);
    });
  });
});

// Advanced tests
// Verify more global styling inheritance
describe('A globally styled body and an unstyled div', function () {
  before(function () {
    this.html = '<div>abc</div>';
  });
  styleBody('font-size: 40px;');
  fixtureNode();

  describe('processed by line-height', function () {
    processNode();

    it('has a line-height equal to its height', function () {
      var height = this.node.offsetHeight;
      assert.strictEqual(this.lineHeight, height);
    });

    it('has a line-height greater than the body\'s font-size', function () {
      var lnHeight = this.lineHeight;
      assert.ok(lnHeight > 40, 'Expected: > 40, Actual: ' + lnHeight);
    });
  });
});

// Kitchen sink tests
// Testing a pt unit type explicitly
describe('A pt line-height div', function () {
  before(function () {
    this.html = '<div style="line-height: 27pt;">abc</div>';
  });
  fixtureNode();

  describe('processed by line-height', function () {
    processNode();

    it('has a line-height equal to its height', function () {
      var height = this.node.offsetHeight;
      assert.strictEqual(this.lineHeight, height);
    });

    // DEV: This verifies our conversion is correct
    it('has a line-height of 36px', function () {
      assert.strictEqual(this.lineHeight, 27 * 4/3);
    });
  });
});

// Testing a mm unit type explicitly (IE6)
describe('A mm line-height div', function () {
  before(function () {
    this.html = '<div style="line-height: 50.8mm;">abc</div>';
  });
  fixtureNode();

  describe('processed by line-height', function () {
    processNode();

    it('has a line-height equal to its height', function () {
      var height = this.node.offsetHeight;
      assert.strictEqual(this.lineHeight, height);
    });

    // DEV: This verifies our conversion is correct
    it('has a line-height of 192px', function () {
      assert.strictEqual(this.lineHeight, 192); // 50.8 * 96/25.4
    });
  });
});

// Testing a cm unit type explicitly (IE6)
describe('A cm line-height div', function () {
  before(function () {
    this.html = '<div style="line-height: 2.54cm;">abc</div>';
  });
  fixtureNode();

  describe('processed by line-height', function () {
    processNode();

    it('has a line-height equal to its height', function () {
      var height = this.node.offsetHeight;
      assert.strictEqual(this.lineHeight, height);
    });

    // DEV: This verifies our conversion is correct
    it('has a line-height of 96px', function () {
      assert.strictEqual(this.lineHeight, 96); // 2.54 * 96/2.54
    });
  });
});

// Testing a in unit type explicitly (IE6)
describe('A in line-height div', function () {
  before(function () {
    this.html = '<div style="line-height: 2in;">abc</div>';
  });
  fixtureNode();

  describe('processed by line-height', function () {
    processNode();

    it('has a line-height equal to its height', function () {
      var height = this.node.offsetHeight;
      assert.strictEqual(this.lineHeight, height);
    });

    // DEV: This verifies our conversion is correct
    it('has a line-height of 192px', function () {
      assert.strictEqual(this.lineHeight, 192); // 2 * 96
    });
  });
});

// Testing a pc unit type explicitly (IE6)
describe('A pc line-height div', function () {
  before(function () {
    this.html = '<div style="line-height: 2pc;">abc</div>';
  });
  fixtureNode();

  describe('processed by line-height', function () {
    processNode();

    it('has a line-height equal to its height', function () {
      var height = this.node.offsetHeight;
      assert.strictEqual(this.lineHeight, height);
    });

    // DEV: This verifies our conversion is correct
    it('has a line-height of 32px', function () {
      assert.strictEqual(this.lineHeight, 32); // 2pc * 12pt/1pc * 4px/3pt
    });
  });
});

// Mass test all other unit types
// DEV: Units taken from https://developer.mozilla.org/en-US/docs/Web/CSS/length
var cssLengths = ['em', 'ex', 'ch', 'rem', 'vh', 'vw', 'vmin', 'vmax', 'px', 'mm', 'cm', 'in', 'pt', 'pc', 'mozmm'],
    i = cssLengths.length;
function testCssLength(cssLength) {
  describe('A ' + cssLength + ' line-height div', function () {
    before(function () {
      this.html = '<div style="line-height: 200' + cssLength + ';">abc</div>';
    });
    fixtureNode();

    describe('processed by line-height', function () {
      processNode();

      it('has a line-height equal to its height', function () {
        var height = this.node.offsetHeight;
        assert.strictEqual(this.lineHeight, height);
      });
    });
  });
}
while (i--) {
  testCssLength(cssLengths[i]);
}


// Verify there is no bleeding between
describe('An em line-height with a pt font div', function () {
  before(function () {
    this.html = '<div style="line-height: 2.5em; font-size: 33pt;">abc</div>';
  });
  fixtureNode();

  describe('processed by line-height', function () {
    processNode();

    it('has a line-height equal to its height', function () {
      var height = this.node.offsetHeight;
      assert.strictEqual(this.lineHeight, height);
    });

    it('has a line-height greater than the default', function () {
      var lnHeight = this.lineHeight;
      assert.ok(lnHeight > _defaultLnHeight, 'Expected: > ' + _defaultLnHeight + ' (default), Actual: ' + lnHeight);
    });
  });
});

// Verify we return a line-height specific for a the tag type (e.g. h2 over div)
describe('A div-specific font-size style and an h2', function () {
  before(function () {
    this.html = '<h2>abc</h2>';
  });
  globalStyle('div', 'font-size: 60px;');
  fixtureNode();

  describe('processed by line-height', function () {
    processNode();

    it('has a line-height equal to its height', function () {
      var height = this.node.offsetHeight;
      assert.strictEqual(this.lineHeight, height);
    });

    it('has a line-height under the div font-size', function () {
      var lnHeight = this.lineHeight;
      assert.ok(lnHeight < 60, 'Expected: < 60, Actual: ' + lnHeight);
    });
  });
});
