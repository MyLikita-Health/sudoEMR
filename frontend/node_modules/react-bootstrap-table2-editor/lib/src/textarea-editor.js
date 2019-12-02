'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint no-return-assign: 0 */


var TextAreaEditor = function (_Component) {
  _inherits(TextAreaEditor, _Component);

  function TextAreaEditor(props) {
    _classCallCheck(this, TextAreaEditor);

    var _this = _possibleConstructorReturn(this, (TextAreaEditor.__proto__ || Object.getPrototypeOf(TextAreaEditor)).call(this, props));

    _this.handleKeyDown = _this.handleKeyDown.bind(_this);
    return _this;
  }

  _createClass(TextAreaEditor, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _props = this.props,
          defaultValue = _props.defaultValue,
          didMount = _props.didMount,
          autoSelectText = _props.autoSelectText;

      this.text.value = defaultValue;
      this.text.focus();
      if (autoSelectText) this.text.select();
      if (didMount) didMount();
    }
  }, {
    key: 'getValue',
    value: function getValue() {
      return this.text.value;
    }
  }, {
    key: 'handleKeyDown',
    value: function handleKeyDown(e) {
      if (e.keyCode === 13 && !e.shiftKey) return;
      if (this.props.onKeyDown) {
        this.props.onKeyDown(e);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props2 = this.props,
          defaultValue = _props2.defaultValue,
          didMount = _props2.didMount,
          className = _props2.className,
          autoSelectText = _props2.autoSelectText,
          rest = _objectWithoutProperties(_props2, ['defaultValue', 'didMount', 'className', 'autoSelectText']);

      var editorClass = (0, _classnames2.default)('form-control editor edit-textarea', className);
      return _react2.default.createElement('textarea', _extends({
        ref: function ref(node) {
          return _this2.text = node;
        },
        type: 'textarea',
        className: editorClass
      }, rest, {
        onKeyDown: this.handleKeyDown
      }));
    }
  }]);

  return TextAreaEditor;
}(_react.Component);

TextAreaEditor.propTypes = {
  className: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.object]),
  defaultValue: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  onKeyDown: _propTypes2.default.func,
  autoSelectText: _propTypes2.default.bool,
  didMount: _propTypes2.default.func
};
TextAreaEditor.defaultProps = {
  className: '',
  defaultValue: '',
  autoSelectText: false,
  onKeyDown: undefined,
  didMount: undefined
};
exports.default = TextAreaEditor;