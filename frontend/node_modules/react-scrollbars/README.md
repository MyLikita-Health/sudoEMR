## Installation

```
npm install react-scrollbars --save
```

## Basic usage

```
var React = require('react');
var ScrollbarWrapper = require('react-scrollbar').ScrollbarWrapper;

var Component = React.createClass({
  render: function() {
    return (
      <ScrollbarWrapper>
        <div>
            content
        </div>
      </ScrollbarWrapper>
    );
  }
});

module.exports = Component;
```

## Properties

```
vertical={true}
```

**values**: `true`, `false`

Force hide the scrollbars on the y-axis, regardless of what `overflow` value is set in the CSS. Works best with `overflow-y: hidden`.

```
horizontal={true}
```

**values**: `true`, `false`

Force hide the scrollbars on the x-axis, regardless of what `overflow` value is set in the CSS. Works best with `overflow-x: hidden`.

```
offest={2}
```

**values**: any integer

Changes the space (margin) around the scrollbar component.

```
scrollbarThickness={10}
```

**values**: any integer

Controls the `width` (in y-axis) or `height` (in x-axis) of the scrollbar.


## Styles

For optimized behavior add the following definitions to your stylesheets:

```
  .ScrollbarContainer--scrolling {
    -webkit-touch-callout: none;
    user-select: none;
  }
  
  .ScrollbarContainer>div::-webkit-scrollbar {
    width: 0;
    height: 0;
  }
  
  .ScrollbarContainer>div::scrollbar {
    width: 0;
    height: 0;
  }
```