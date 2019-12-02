/** @jsx React.DOM */

var React = require('react');
var BothScrollbar = require('./examples/both-scrollbar.jsx');
var HorizontalScrollbar = require('./examples/horizontal-scrollbar.jsx');
var VerticalScrollbar = require('./examples/vertical-scrollbar.jsx');
var CustomScrollbar = require('./examples/custom-scrollbar.jsx');

require('./home-view.scss');

module.exports = React.createClass({

  getInitialState: function() {
    return {
    };
  },

  render: function () {
    return (
      <div className="Home">
        <header className="Home-header">
          <h1>React-Scrollbars</h1>
          <h2><a href="https://github.com/ojame/react-scrollbar">view on github</a></h2>
        </header>

        <div className="Home-container">
          <aside className="Home-navigation">
            <p>
              Super simple custom scrollbars. Works on Chrome, Firefox, Safari, IE10+ and mobile.
            </p>
            <nav>
              <ul>
                <li><a href="#vertical">Vertical</a></li>
                <li><a href="#horizontal">Horizontal</a></li>
                <li><a href="#both">Both</a></li>
                <li><a href="#implementation">Implementation</a></li>
              </ul>
            </nav>
          </aside>

          <div className="Home-content">
            <div className="Home-content-block" id="vertical">
              <h3>Vertical Scrollbars</h3>
              <VerticalScrollbar />
            </div>

            <div className="Home-content-block" id="horizontal">
              <h3>Horizontal Scrollbars</h3>
              <HorizontalScrollbar />
            </div>

            <div className="Home-content-block" id="both">
              <h3>Horizontal and Vertical Scrollbars</h3>
              <BothScrollbar />
            </div>

            <div className="Home-content-block" id="custom">
              <h3>Custom Scrollbars</h3>
              <CustomScrollbar />
            </div>

            <div className="Home-content-block" id="implementation">
              <h3>Implementation</h3>
              <div className="markdown">
                <div dangerouslySetInnerHTML={{__html: require('../../../README.md')}}></div>
              </div>
            </div>
          </div>
        </div>

        <footer className="Home-footer">
          made by <a href="https://twitter.com/_ojame" target="_blank">@_ojame</a> and <a href="https://twitter.com/ncreen_same" target="_blank">@nscreen_same</a> on Macropod (<a href="https://twitter.com/MacropodHQ" target="_blank">@MacropodHQ</a>) time.
        </footer>

      </div>
    );
  }
});