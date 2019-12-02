var React = require('react');
var _ = require('lodash-node');

var Scrollbar = React.createClass({
  getDefaultProps: function() {
    return {
      offset: 2,
      scrollbarThickness: 10,
      stickLength: {
        horizontal: 100,
        vertical: 100
      },
      stickPosition: {
        horizontal: 0,
        vertical: 0
      },
      scrollbarLength: {
        horizontal: 100,
        vertical: 100
      },
      showScrollbar: {
        horizontal: true,
        vertical: false
      },
      vertical: true,
      horizontal: true
    };
  },

  verticalScrollbar: function(style, stickStyle) {
    if (this.props.vertical && this.props.showScrollbar.vertical) {
      return (
        <div className="Scrollbar" style={style}>
          <div className="Scrollbar-stick" style={stickStyle} onMouseDown={this.props.onMouseDown.bind(null, 'y')}></div>
        </div>
      );
    } else {
      return null;
    }
  },

  horizontalScrollbar: function(style, stickStyle) {
    if (this.props.horizontal && this.props.showScrollbar.horizontal) {
      return (
        <div style={style}>
          <div style={stickStyle} onMouseDown={this.props.onMouseDown.bind(null, 'x')}></div>
        </div>
      );
    } else {
      return null;
    }
  },

  render: function() {
    if (!this.props.render) {
      return <div></div>;
    }

    var verticalScrollbarHeight;
    var horizontalScrollbarWidth;

    if (this.props.scrollbarLength.vertical) {
      verticalScrollbarHeight = this.props.scrollbarLength.vertical;
    }

    if (this.props.scrollbarLength.horizontal) {
      horizontalScrollbarWidth = this.props.scrollbarLength.horizontal;
    }

    var scrollbarStyle = {
      borderRadius: 4,
      background: 'rgba(0, 0, 0, 0.5)',
      position: 'absolute',
      opacity: 1
    };

    var stickStyle = {
      background: 'rgba(255, 255, 255, 0.7)',
      position: 'absolute',
      borderRadius: 4
    };

    // TODO: clean this junk UP

    var scrollbarStyleVertical = _.extend({
      width: this.props.scrollbarThickness,
      top: this.props.offset,
      height: verticalScrollbarHeight || 'auto',
      bottom: verticalScrollbarHeight ? 'auto' : this.props.offset,
      right: this.props.offset,
    }, scrollbarStyle);

    var scrollbarStyleHorizontal = _.extend({
      left: this.props.offset,
      bottom: this.props.offset,
      width: horizontalScrollbarWidth || 'auto',
      right: horizontalScrollbarWidth ? 'auto' : this.props.offset,
      height: this.props.scrollbarThickness
    }, scrollbarStyle);

    var scrollbarStickStyleVertical = _.extend({
      width: this.props.scrollbarThickness,
      height: this.props.stickLength.vertical,
      right: 0,
      top: this.props.stickPosition.vertical
    }, stickStyle);

    var scrollbarStickStyleHorizontal = _.extend({
      height: this.props.scrollbarThickness,
      width: this.props.stickLength.horizontal,
      left: this.props.stickPosition.horizontal
    }, stickStyle);

    return (
      <div className="Scrollbar-wrapper">
        {this.verticalScrollbar(scrollbarStyleVertical, scrollbarStickStyleVertical)}
        {this.horizontalScrollbar(scrollbarStyleHorizontal, scrollbarStickStyleHorizontal)}
      </div>
    );
  }
});

module.exports = Scrollbar;
