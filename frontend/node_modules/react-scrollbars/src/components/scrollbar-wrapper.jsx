'use strict';
var React = require('react/addons');

var ScrollbarMixin = require('../mixins/scrollbar');
var Scrollbar = require('./scrollbar');

var ScrollbarWrapper = React.createClass({
  mixins: [ScrollbarMixin],

  componentDidMount: function() {
    window.addEventListener('message', this.handleReceive, false);
  },

  handleReceive: function(event) {
    var data = event.data;

    if (typeof(this[data.func]) === 'function') {
      this[data.func]();
    }
  },

  onResize: function() {
    this.handleContentResize();
  },

  render: function() {
    return (
      <div style={this.scrollbarContainerStyle()} className={this.containerClass()}>
        <div ref="scrollableContent" style={this.scrollbarContentStyle()} onScroll={this.handleScroll} className={this.props.className + ' ScrollbarContent'}>
          <div className="ScrollbarChildren" style={{position: 'relative'}}>
            {this.props.children}

            <iframe style={{width: '100%', height: '100%', position: 'absolute', top: '-100%', left: '-100%'}} frameBorder="0" src="javascript:window.onresize=function(){parent.postMessage({'func': 'onResize'}, '*')}" ></iframe>
          </div>

          <Scrollbar
            {... this.props}
            {... this.getScrollbarProps()} />
        </div>
      </div>
    );
  }
});

module.exports = ScrollbarWrapper;