'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint no-return-assign: 0 */
var EditorIndicator = function EditorIndicator(_ref) {
  var invalidMessage = _ref.invalidMessage;
  return _react2.default.createElement(
    'div',
    { className: 'alert alert-danger fade in' },
    _react2.default.createElement(
      'strong',
      null,
      invalidMessage
    )
  );
};

EditorIndicator.propTypes = {
  invalidMessage: _propTypes2.default.string
};

EditorIndicator.defaultProps = {
  invalidMessage: null
};
exports.default = EditorIndicator;