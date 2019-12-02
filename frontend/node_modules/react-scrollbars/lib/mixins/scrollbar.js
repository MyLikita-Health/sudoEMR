'use strict';
var React = require('react/addons');
var _ = require('lodash-node');

var ScrollbarMixin = {
  getInitialState: function() {
    return {
      stickPosition: {
        horizontal: 0,
        vertical: 0
      },
      initialScroll: {
        left: 0,
        top: 0
      },
      initialPosition: {
        x: 0,
        y: 0
      },
      axis: null,
      initialMovement: false,
      scrolling: false,
      nativeScrollbarWidth: 0,
      firstRender: null
    };
  },

  getDefaultProps: function() {
    return {
      scrollbarOffset: 2,
      overflowTolerance: 3
    };
  },

  componentDidMount: function() {
    var scrollbarElement = document.createElement('div');
    scrollbarElement.style.width = '100px';
    scrollbarElement.style.height = '100px';
    scrollbarElement.style.overflow = 'scroll';
    scrollbarElement.style.position = 'absolute';
    scrollbarElement.style.top = '-100%';
    scrollbarElement.style.left = '-100%';
    document.body.appendChild(scrollbarElement);

    this.setState({
      nativeScrollbarWidth: scrollbarElement.offsetWidth - scrollbarElement.clientWidth,
      firstRender: true
    }, function() {
      document.body.removeChild(scrollbarElement);
    });
  },

  componentDidUpdate: function() {
    if (this.state.firstRender) {
      this.setState({
        firstRender: false
      });
    }
  },

  getRatio: function() {
    if (!this.refs.scrollableContent) {
      return {};
    }

    var element = this.refs.scrollableContent.getDOMNode();

    return {
      horizontal: this.getContentDimensions().width / element.scrollWidth,
      vertical: this.getContentDimensions().height / element.scrollHeight
    };
  },

  getStickLength: function() {
    if (!this.refs.scrollableContent) {
      return {};
    }

    var scrollbarLength = this.getScrollbarLength();
    var horizontal = scrollbarLength.horizontal * this.getRatio().horizontal;
    var vertical = scrollbarLength.vertical * this.getRatio().vertical;

    return {
      horizontal: horizontal,
      vertical: vertical
    };
  },

  getContentDimensions: function() {
    if (!this.refs.scrollableContent) {
      return {};
    }

    var element = this.refs.scrollableContent.getDOMNode();

    return {
      height: element.clientHeight,
      scrollHeight: element.scrollHeight,
      scrollWidth: element.scrollWidth,
      width: element.clientWidth,
    };
  },

  getScrollbarLength: function() {
    var horizontal = this.getContentDimensions().width - (this.props.scrollbarOffset * 2);
    var vertical = this.getContentDimensions().height - (this.props.scrollbarOffset * 2);


    if (this.scrollbarRequired().both) {
      horizontal = horizontal - this.state.nativeScrollbarWidth;
      vertical = vertical - this.state.nativeScrollbarWidth;
    }

    return {
      horizontal: horizontal,
      vertical: vertical
    };
  },

  calculateStickPosition: function(left, top) {
    var scrollbarRatioWidth = this.getScrollbarLength().horizontal / this.getContentDimensions().scrollWidth;
    var scrollbarRatioHeight = this.getScrollbarLength().vertical / this.getContentDimensions().scrollHeight;

    return {
      horizontal: left * scrollbarRatioWidth,
      vertical: top * scrollbarRatioHeight
    };
  },

  scrollbarRequired: function() {
    if (!this.refs.scrollableContent) {
      return {};
    }

    var dimensions = this.getContentDimensions();
    var horizontalRequired = dimensions.scrollWidth - this.props.overflowTolerance > dimensions.width;
    var verticalRequired = dimensions.scrollHeight - this.props.overflowTolerance > dimensions.height;

    return {
      horizontal: horizontalRequired,
      vertical: verticalRequired,
      both: horizontalRequired && verticalRequired
    };
  },

  handleScroll: function(event) {
    this.setState({
      stickPosition: this.calculateStickPosition(event.target.scrollLeft, event.target.scrollTop)
    });
  },

  handleMouseDown: function(axis, event) {
    event.preventDefault();

    this.setState({
      axis: axis,
      initialPosition: {
        x: event.pageX,
        y: event.pageY
      },
      initialMovement: true,
      scrolling: true
    });

    document.addEventListener('mousemove', this.handleStickDrag);
    document.addEventListener('mouseup', this.handleMouseUp);
  },

  handleMouseUp: function() {
    this.setState({
      scrolling: false
    });

    document.removeEventListener('mousemove', this.handleStickDrag);
    document.removeEventListener('mouseup', this.handleMouseUp);
  },

  handleStickDrag: function(event) {
    // TODO: this needs refactoring
    var origin = this.state.axis === 'x' ? 'left' : 'top';

    var initialScrollPosition = this.state.initialScroll[origin];

    if (this.state.initialMovement) {
      initialScrollPosition = origin === 'left' ? this.refs.scrollableContent.getDOMNode().scrollLeft : this.refs.scrollableContent.getDOMNode().scrollTop;
      var initialScroll = _.extend({}, this.state.initialScroll);
      initialScroll[origin] = initialScrollPosition;

      this.setState({
        initialScroll: initialScroll,
        initialMovement: false
      });
    }

    var movement = {
      x: (this.state.initialPosition.x - event.pageX) * -1,
      y: (this.state.initialPosition.y - event.pageY) * -1
    };

    var scaledMovement = {
      x: movement.x / this.getRatio().horizontal,
      y: movement.y / this.getRatio().vertical
    };

    if (this.state.axis === 'x') {
      this.refs.scrollableContent.getDOMNode().scrollLeft = initialScrollPosition + scaledMovement.x;
    } else {
      this.refs.scrollableContent.getDOMNode().scrollTop = initialScrollPosition + scaledMovement.y;
    }
  },

  handleContentResize: function() {
    this.forceUpdate();
  },

  getScrollbarProps: function() {
    if (this.state.firstRender !== false) {
      return {
        render: false
      };
    }

    return {
      render: true,
      stickLength: this.getStickLength(),
      scrollbarLength: this.getScrollbarLength(),
      stickPosition: this.state.stickPosition,
      onMouseDown: this.handleMouseDown,
      showScrollbar: this.scrollbarRequired(),
      offset: this.props.scrollbarOffset
    };
  },

  containerClass: function() { // TODO: rename getStyle or something
    var cx = React.addons.classSet;

    return cx({
      'ScrollbarContainer': true,
      'ScrollbarContainer--scrolling': this.state.scrolling
    });
  },

  scrollbarContainerStyle: function() {
    return {
      position: 'relative',
      overflow: 'hidden'
    };
  },

  scrollbarContentStyle: function() {
    var style = {};

    if (this.scrollbarRequired().vertical) {
      style['paddingRight'] = this.state.nativeScrollbarWidth;
    }

    if (this.scrollbarRequired().horizontal) {
      style['marginBottom'] = this.state.nativeScrollbarWidth * -1;
    }

    return style;
  }
};

module.exports = ScrollbarMixin;
