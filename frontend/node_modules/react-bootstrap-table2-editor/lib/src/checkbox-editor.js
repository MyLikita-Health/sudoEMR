'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

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


var CheckBoxEditor = function (_Component) {
  _inherits(CheckBoxEditor, _Component);

  function CheckBoxEditor(props) {
    _classCallCheck(this, CheckBoxEditor);

    var _this = _possibleConstructorReturn(this, (CheckBoxEditor.__proto__ || Object.getPrototypeOf(CheckBoxEditor)).call(this, props));

    _this.state = {
      checked: props.defaultValue.toString() === props.value.split(':')[0]
    };
    _this.handleChange = _this.handleChange.bind(_this);
    return _this;
  }

  _createClass(CheckBoxEditor, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var didMount = this.props.didMount;

      this.checkbox.focus();
      if (didMount) didMount();
    }
  }, {
    key: 'getValue',
    value: function getValue() {
      var _props$value$split = this.props.value.split(':'),
          _props$value$split2 = _slicedToArray(_props$value$split, 2),
          positive = _props$value$split2[0],
          negative = _props$value$split2[1];

      return this.checkbox.checked ? positive : negative;
    }
  }, {
    key: 'handleChange',
    value: function handleChange(e) {
      if (this.props.onChange) this.props.onChange(e);
      var target = e.target;

      this.setState(function () {
        return { checked: target.checked };
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          defaultValue = _props.defaultValue,
          didMount = _props.didMount,
          className = _props.className,
          rest = _objectWithoutProperties(_props, ['defaultValue', 'didMount', 'className']);

      var editorClass = (0, _classnames2.default)('editor edit-chseckbox checkbox', className);
      return _react2.default.createElement('input', _extends({
        ref: function ref(node) {
          return _this2.checkbox = node;
        },
        type: 'checkbox',
        className: editorClass
      }, rest, {
        checked: this.state.checked,
        onChange: this.handleChange
      }));
    }
  }]);

  return CheckBoxEditor;
}(_react.Component);

CheckBoxEditor.propTypes = {
  className: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.object]),
  value: _propTypes2.default.string,
  defaultValue: _propTypes2.default.any,
  onChange: _propTypes2.default.func,
  didMount: _propTypes2.default.func
};
CheckBoxEditor.defaultProps = {
  className: '',
  value: 'on:off',
  defaultValue: false,
  onChange: undefined,
  didMount: undefined
};
exports.default = CheckBoxEditor;