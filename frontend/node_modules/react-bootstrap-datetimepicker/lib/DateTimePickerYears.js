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

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

var DateTimePickerYears = (function (_Component) {
  _inherits(DateTimePickerYears, _Component);

  function DateTimePickerYears() {
    var _this = this;

    _classCallCheck(this, DateTimePickerYears);

    _get(Object.getPrototypeOf(DateTimePickerYears.prototype), "constructor", this).apply(this, arguments);

    this.renderYears = function () {
      var classes, i, year, years;
      years = [];
      year = parseInt(_this.props.viewDate.year() / 10, 10) * 10;
      year--;
      i = -1;
      while (i < 11) {
        classes = {
          year: true,
          old: i === -1 | i === 10,
          active: _this.props.selectedDate.year() === year
        };
        years.push(_react2["default"].createElement(
          "span",
          { className: (0, _classnames2["default"])(classes), key: year, onClick: _this.props.setViewYear },
          year
        ));
        year++;
        i++;
      }
      return years;
    };
  }

  _createClass(DateTimePickerYears, [{
    key: "render",
    value: function render() {
      var year;
      year = parseInt(this.props.viewDate.year() / 10, 10) * 10;
      return _react2["default"].createElement(
        "div",
        { className: "datepicker-years", style: { display: "block" } },
        _react2["default"].createElement(
          "table",
          { className: "table-condensed" },
          _react2["default"].createElement(
            "thead",
            null,
            _react2["default"].createElement(
              "tr",
              null,
              _react2["default"].createElement(
                "th",
                { className: "prev", onClick: this.props.subtractDecade },
                "‹"
              ),
              _react2["default"].createElement(
                "th",
                { className: "switch", colSpan: "5" },
                year,
                " - ",
                year + 9
              ),
              _react2["default"].createElement(
                "th",
                { className: "next", onClick: this.props.addDecade },
                "›"
              )
            )
          ),
          _react2["default"].createElement(
            "tbody",
            null,
            _react2["default"].createElement(
              "tr",
              null,
              _react2["default"].createElement(
                "td",
                { colSpan: "7" },
                this.renderYears()
              )
            )
          )
        )
      );
    }
  }], [{
    key: "propTypes",
    value: {
      subtractDecade: _react.PropTypes.func.isRequired,
      addDecade: _react.PropTypes.func.isRequired,
      viewDate: _react.PropTypes.object.isRequired,
      selectedDate: _react.PropTypes.object.isRequired,
      setViewYear: _react.PropTypes.func.isRequired
    },
    enumerable: true
  }]);

  return DateTimePickerYears;
})(_react.Component);

exports["default"] = DateTimePickerYears;
module.exports = exports["default"];