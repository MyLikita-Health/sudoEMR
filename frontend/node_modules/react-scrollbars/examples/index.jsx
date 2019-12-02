/** @jsx React.DOM */
'use strict'
var React = require('react');

var Home = require('./views/home/index.jsx');

require('normalize.css/normalize.css');
require('./app.scss');

var App = React.createClass({
  render: function () {
    return (
      <div className="App">
        <header className="App-header">
        </header>

        <div className="App-content">
          <Home />
        </div>
      </div>
    );
  }
});

React.render(<App />, document.body);
