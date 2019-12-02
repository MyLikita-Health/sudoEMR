"use strict";

var _get = require("babel-runtime/helpers/get")["default"];

var _inherits = require("babel-runtime/helpers/inherits")["default"];

var _createClass = require("babel-runtime/helpers/create-class")["default"];

var _classCallCheck = require("babel-runtime/helpers/class-call-check")["default"];

var _interopRequireDefault = require("babel-runtime/helpers/interop-require-default")["default"];

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _ConstantsJs = require("./Constants.js");

var _ConstantsJs2 = _interopRequireDefault(_ConstantsJs);

var DateTimePickerMinutes = (function (_Component) {
  _inherits(DateTimePickerMinutes, _Component);

  function DateTimePickerMinutes() {
    var _this = this;

    _classCallCheck(this, DateTimePickerMinutes);

    _get(Object.getPrototypeOf(DateTimePickerMinutes.prototype), "constructor", this).apply(this, arguments);

    this.renderSwitchButton = function () {
      return _this.props.mode === _ConstantsJs2["default"].MODE_TIME ? _react2["default"].createElement(
        "ul",
        { className: "list-unstyled" },
        _react2["default"].createElement(
          "li",
          null,
          _react2["default"].createElement(
            "span",
            { className: "btn picker-switch", onClick: _this.props.onSwitch, style: { width: "100%" } },
            _react2["default"].createElement("span", { className: "glyphicon glyphicon-time" })
          )
        )
      ) : null;
    };
  }

  _createClass(DateTimePickerMinutes, [{
    key: "render",
    value: function render() {
      return _react2["default"].createElement(
        "div",
        { className: "timepicker-minutes", "data-action": "selectMinute", style: { display: "block" } },
        this.renderSwitchButton(),
        _react2["default"].createElement(
          "table",
          { className: "table-condensed" },
          _react2["default"].createElement(
            "tbody",
            null,
            _react2["default"].createElement(
              "tr",
              null,
              _react2["default"].createElement(
                "td",
                { className: "minute", onClick: this.props.setSelectedMinute },
                "00"
              ),
              _react2["default"].createElement(
                "td",
                { className: "minute", onClick: this.props.setSelectedMinute },
                "05"
              ),
              _react2["default"].createElement(
                "td",
                { className: "minute", onClick: this.props.setSelectedMinute },
                "10"
              ),
              _react2["default"].createElement(
                "td",
                { className: "minute", onClick: this.props.setSelectedMinute },
                "15"
              )
            ),
            _react2["default"].createElement(
              "tr",
              null,
              _react2["default"].createElement(
                "td",
                { className: "minute", onClick: this.props.setSelectedMinute },
                "20"
              ),
              _react2["default"].createElement(
                "td",
                { className: "minute", onClick: this.props.setSelectedMinute },
                "25"
              ),
              _react2["default"].createElement(
                "td",
                { className: "minute", onClick: this.props.setSelectedMinute },
                "30"
              ),
              _react2["default"].createElement(
                "td",
                { className: "minute", onClick: this.props.setSelectedMinute },
                "35"
              )
            ),
            _react2["default"].createElement(
              "tr",
              null,
              _react2["default"].createElement(
                "td",
                { className: "minute", onClick: this.props.setSelectedMinute },
                "40"
              ),
              _react2["default"].createElement(
                "td",
                { className: "minute", onClick: this.props.setSelectedMinute },
                "45"
              ),
              _react2["default"].createElement(
                "td",
                { className: "minute", onClick: this.props.setSelectedMinute },
                "50"
              ),
              _react2["default"].createElement(
                "td",
                { className: "minute", onClick: this.props.setSelectedMinute },
                "55"
              )
            )
          )
        )
      );
    }
  }], [{
    key: "propTypes",
    value: {
      setSelectedMinute: _react.PropTypes.func.isRequired,
      onSwitch: _react.PropTypes.func.isRequired,
      mode: _react.PropTypes.string.isRequired
    },
    enumerable: true
  }]);

  return DateTimePickerMinutes;
})(_react.Component);

exports["default"] = DateTimePickerMinutes;
module.exports = exports["default"];