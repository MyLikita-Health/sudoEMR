var React = require('react');
var ScrollbarWrapper = require('react-scrollbar').ScrollbarWrapper;
require('./horizontal-scrollbar.scss');

var HorizontalScrollbar = React.createClass({
  render: function() {
    return (
      <ScrollbarWrapper className="ScrollbarContent--horizontal">
        <div className="ScrollbarContent--horizontal-columnContainer">
          <div className="ScrollbarContent--horizontal-column">
            Love
          </div>

          <div className="ScrollbarContent--horizontal-column">
            Don`t
          </div>

          <div className="ScrollbarContent--horizontal-column">
            Live
          </div>

          <div className="ScrollbarContent--horizontal-column">
            Here
          </div>

          <div className="ScrollbarContent--horizontal-column">
            No
          </div>

          <div className="ScrollbarContent--horizontal-column">
            More
          </div>
        </div>
      </ScrollbarWrapper>
    );
  }
});

module.exports = HorizontalScrollbar;

