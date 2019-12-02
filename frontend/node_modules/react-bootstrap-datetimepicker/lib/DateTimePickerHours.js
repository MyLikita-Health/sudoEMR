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

var DateTimePickerHours = (function (_Component) {
  _inherits(DateTimePickerHours, _Component);

  function DateTimePickerHours() {
    var _this = this;

    _classCallCheck(this, DateTimePickerHours);

    _get(Object.getPrototypeOf(DateTimePickerHours.prototype), "constructor", this).apply(this, arguments);

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

  _createClass(DateTimePickerHours, [{
    key: "render",
    value: function render() {
      return _react2["default"].createElement(
        "div",
        { className: "timepicker-hours", "data-action": "selectHour", style: { display: "block" } },
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
                { className: "hour", onClick: this.props.setSelectedHour },
                "01"
              ),
              _react2["default"].createElement(
                "td",
                { className: "hour", onClick: this.props.setSelectedHour },
                "02"
              ),
              _react2["default"].createElement(
                "td",
                { className: "hour", onClick: this.props.setSelectedHour },
                "03"
              ),
              _react2["default"].createElement(
                "td",
                { className: "hour", onClick: this.props.setSelectedHour },
                "04"
              )
            ),
            _react2["default"].createElement(
              "tr",
              null,
              _react2["default"].createElement(
                "td",
                { className: "hour", onClick: this.props.setSelectedHour },
                "05"
              ),
              _react2["default"].createElement(
                "td",
                { className: "hour", onClick: this.props.setSelectedHour },
                "06"
              ),
              _react2["default"].createElement(
                "td",
                { className: "hour", onClick: this.props.setSelectedHour },
                "07"
              ),
              _react2["default"].createElement(
                "td",
                { className: "hour", onClick: this.props.setSelectedHour },
                "08"
              )
            ),
            _react2["default"].createElement(
              "tr",
              null,
              _react2["default"].createElement(
                "td",
                { className: "hour", onClick: this.props.setSelectedHour },
                "09"
              ),
              _react2["default"].createElement(
                "td",
                { className: "hour", onClick: this.props.setSelectedHour },
                "10"
              ),
              _react2["default"].createElement(
                "td",
                { className: "hour", onClick: this.props.setSelectedHour },
                "11"
              ),
              _react2["default"].createElement(
                "td",
                { className: "hour", onClick: this.props.setSelectedHour },
                "12"
              )
            ),
            _react2["default"].createElement(
              "tr",
              null,
              _react2["default"].createElement(
                "td",
                { className: "hour", onClick: this.props.setSelectedHour },
                "13"
              ),
              _react2["default"].createElement(
                "td",
                { className: "hour", onClick: this.props.setSelectedHour },
                "14"
              ),
              _react2["default"].createElement(
                "td",
                { className: "hour", onClick: this.props.setSelectedHour },
                "15"
              ),
              _react2["default"].createElement(
                "td",
                { className: "hour", onClick: this.props.setSelectedHour },
                "16"
              )
            ),
            _react2["default"].createElement(
              "tr",
              null,
              _react2["default"].createElement(
                "td",
                { className: "hour", onClick: this.props.setSelectedHour },
                "17"
              ),
              _react2["default"].createElement(
                "td",
                { className: "hour", onClick: this.props.setSelectedHour },
                "18"
              ),
              _react2["default"].createElement(
                "td",
                { className: "hour", onClick: this.props.setSelectedHour },
                "19"
              ),
              _react2["default"].createElement(
                "td",
                { className: "hour", onClick: this.props.setSelectedHour },
                "20"
              )
            ),
            _react2["default"].createElement(
              "tr",
              null,
              _react2["default"].createElement(
                "td",
                { className: "hour", onClick: this.props.setSelectedHour },
                "21"
              ),
              _react2["default"].createElement(
                "td",
                { className: "hour", onClick: this.props.setSelectedHour },
                "22"
              ),
              _react2["default"].createElement(
                "td",
                { className: "hour", onClick: this.props.setSelectedHour },
                "23"
              ),
              _react2["default"].createElement(
                "td",
                { className: "hour", onClick: this.props.setSelectedHour },
                "24"
              )
            )
          )
        )
      );
    }
  }], [{
    key: "propTypes",
    value: {
      setSelectedHour: _react.PropTypes.func.isRequired,
      onSwitch: _react.PropTypes.func.isRequired,
      mode: _react.PropTypes.string.isRequired
    },
    enumerable: true
  }]);

  return DateTimePickerHours;
})(_react.Component);

exports["default"] = DateTimePickerHours;
module.exports = exports["default"];