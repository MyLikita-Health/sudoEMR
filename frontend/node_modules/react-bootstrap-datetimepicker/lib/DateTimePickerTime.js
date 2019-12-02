"use strict";

var _get = require("babel-runtime/helpers/get")["default"];

var _inherits = require("babel-runtime/helpers/inherits")["default"];

var _createClass = require("babel-runtime/helpers/create-class")["default"];

var _classCallCheck = require("babel-runtime/helpers/class-call-check")["default"];

var _extends = require("babel-runtime/helpers/extends")["default"];

var _interopRequireDefault = require("babel-runtime/helpers/interop-require-default")["default"];

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _DateTimePickerMinutes = require("./DateTimePickerMinutes");

var _DateTimePickerMinutes2 = _interopRequireDefault(_DateTimePickerMinutes);

var _DateTimePickerHours = require("./DateTimePickerHours");

var _DateTimePickerHours2 = _interopRequireDefault(_DateTimePickerHours);

var _ConstantsJs = require("./Constants.js");

var _ConstantsJs2 = _interopRequireDefault(_ConstantsJs);

var DateTimePickerTime = (function (_Component) {
  _inherits(DateTimePickerTime, _Component);

  function DateTimePickerTime() {
    var _this = this;

    _classCallCheck(this, DateTimePickerTime);

    _get(Object.getPrototypeOf(DateTimePickerTime.prototype), "constructor", this).apply(this, arguments);

    this.state = {
      minutesDisplayed: false,
      hoursDisplayed: false
    };

    this.goBack = function () {
      return _this.setState({
        minutesDisplayed: false,
        hoursDisplayed: false
      });
    };

    this.showMinutes = function () {
      return _this.setState({
        minutesDisplayed: true
      });
    };

    this.showHours = function () {
      return _this.setState({
        hoursDisplayed: true
      });
    };

    this.renderMinutes = function () {
      if (_this.state.minutesDisplayed) {
        return _react2["default"].createElement(_DateTimePickerMinutes2["default"], _extends({}, _this.props, { onSwitch: _this.goBack }));
      } else {
        return null;
      }
    };

    this.renderHours = function () {
      if (_this.state.hoursDisplayed) {
        return _react2["default"].createElement(_DateTimePickerHours2["default"], _extends({}, _this.props, { onSwitch: _this.goBack }));
      } else {
        return null;
      }
    };

    this.renderPicker = function () {
      if (!_this.state.minutesDisplayed && !_this.state.hoursDisplayed) {
        return _react2["default"].createElement(
          "div",
          { className: "timepicker-picker" },
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
                  null,
                  _react2["default"].createElement(
                    "a",
                    { className: "btn", onClick: _this.props.addHour },
                    _react2["default"].createElement("span", { className: "glyphicon glyphicon-chevron-up" })
                  )
                ),
                _react2["default"].createElement("td", { className: "separator" }),
                _react2["default"].createElement(
                  "td",
                  null,
                  _react2["default"].createElement(
                    "a",
                    { className: "btn", onClick: _this.props.addMinute },
                    _react2["default"].createElement("span", { className: "glyphicon glyphicon-chevron-up" })
                  )
                ),
                _react2["default"].createElement("td", { className: "separator" })
              ),
              _react2["default"].createElement(
                "tr",
                null,
                _react2["default"].createElement(
                  "td",
                  null,
                  _react2["default"].createElement(
                    "span",
                    { className: "timepicker-hour", onClick: _this.showHours },
                    _this.props.selectedDate.format("h")
                  )
                ),
                _react2["default"].createElement(
                  "td",
                  { className: "separator" },
                  ":"
                ),
                _react2["default"].createElement(
                  "td",
                  null,
                  _react2["default"].createElement(
                    "span",
                    { className: "timepicker-minute", onClick: _this.showMinutes },
                    _this.props.selectedDate.format("mm")
                  )
                ),
                _react2["default"].createElement("td", { className: "separator" }),
                _react2["default"].createElement(
                  "td",
                  null,
                  _react2["default"].createElement(
                    "button",
                    { className: "btn btn-primary", onClick: _this.props.togglePeriod, type: "button" },
                    _this.props.selectedDate.format("A")
                  )
                )
              ),
              _react2["default"].createElement(
                "tr",
                null,
                _react2["default"].createElement(
                  "td",
                  null,
                  _react2["default"].createElement(
                    "a",
                    { className: "btn", onClick: _this.props.subtractHour },
                    _react2["default"].createElement("span", { className: "glyphicon glyphicon-chevron-down" })
                  )
                ),
                _react2["default"].createElement("td", { className: "separator" }),
                _react2["default"].createElement(
                  "td",
                  null,
                  _react2["default"].createElement(
                    "a",
                    { className: "btn", onClick: _this.props.subtractMinute },
                    _react2["default"].createElement("span", { className: "glyphicon glyphicon-chevron-down" })
                  )
                ),
                _react2["default"].createElement("td", { className: "separator" })
              )
            )
          )
        );
      } else {
        return "";
      }
    };
  }

  _createClass(DateTimePickerTime, [{
    key: "render",
    value: function render() {
      return _react2["default"].createElement(
        "div",
        { className: "timepicker" },
        this.renderPicker(),
        this.renderHours(),
        this.renderMinutes()
      );
    }
  }], [{
    key: "propTypes",
    value: {
      setSelectedHour: _react.PropTypes.func.isRequired,
      setSelectedMinute: _react.PropTypes.func.isRequired,
      subtractHour: _react.PropTypes.func.isRequired,
      addHour: _react.PropTypes.func.isRequired,
      subtractMinute: _react.PropTypes.func.isRequired,
      addMinute: _react.PropTypes.func.isRequired,
      viewDate: _react.PropTypes.object.isRequired,
      selectedDate: _react.PropTypes.object.isRequired,
      togglePeriod: _react.PropTypes.func.isRequired,
      mode: _react.PropTypes.oneOf([_ConstantsJs2["default"].MODE_DATE, _ConstantsJs2["default"].MODE_DATETIME, _ConstantsJs2["default"].MODE_TIME])
    },
    enumerable: true
  }]);

  return DateTimePickerTime;
})(_react.Component);

exports["default"] = DateTimePickerTime;

module.exports = DateTimePickerTime;
module.exports = exports["default"];