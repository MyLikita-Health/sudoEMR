"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _Text = _interopRequireDefault(require("./Text"));

var Label =
/*#__PURE__*/
function (_PureComponent) {
  (0, _inherits2.default)(Label, _PureComponent);

  function Label() {
    (0, _classCallCheck2.default)(this, Label);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Label).apply(this, arguments));
  }

  (0, _createClass2.default)(Label, [{
    key: "render",
    value: function render() {
      return _react.default.createElement(_Text.default, (0, _extends2.default)({
        is: "label",
        fontWeight: 500
      }, this.props));
    }
  }]);
  return Label;
}(_react.PureComponent);

exports.default = Label;
Label.displayName = "Label";
(0, _defineProperty2.default)(Label, "propTypes", (0, _objectSpread2.default)({}, _Text.default.propTypes));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90eXBvZ3JhcGh5L3NyYy9MYWJlbC5qcyJdLCJuYW1lcyI6WyJMYWJlbCIsInByb3BzIiwiUHVyZUNvbXBvbmVudCIsIlRleHQiLCJwcm9wVHlwZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOztJQUVxQkEsSzs7Ozs7Ozs7Ozs7OzZCQUtWO0FBQ1AsYUFBTyw2QkFBQyxhQUFEO0FBQU0sUUFBQSxFQUFFLEVBQUMsT0FBVDtBQUFpQixRQUFBLFVBQVUsRUFBRTtBQUE3QixTQUFzQyxLQUFLQyxLQUEzQyxFQUFQO0FBQ0Q7OztFQVBnQ0Msb0I7OztBQUFkRixLOzhCQUFBQSxLLCtDQUVkRyxjQUFLQyxTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBUZXh0IGZyb20gJy4vVGV4dCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGFiZWwgZXh0ZW5kcyBQdXJlQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAuLi5UZXh0LnByb3BUeXBlc1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiA8VGV4dCBpcz1cImxhYmVsXCIgZm9udFdlaWdodD17NTAwfSB7Li4udGhpcy5wcm9wc30gLz5cbiAgfVxufVxuIl19