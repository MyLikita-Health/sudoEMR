var React = require('react');

var style = {
  background: 'transparent',
  border: '2px solid #1ABC9C',
  borderRadius: 2,
  textYransform: 'uppercase',
  padding: '0.5em 1em'
};

var Button = React.createClass({
  render: function() {
    return (
      <button style={style} type={this.props.type} className="Button">{this.props.children}</button>
    );
  }
});

module.exports = Button;
