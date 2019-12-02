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

var _Pane = _interopRequireDefault(require("./Pane"));

var Card =
/*#__PURE__*/
function (_PureComponent) {
  (0, _inherits2.default)(Card, _PureComponent);

  function Card() {
    (0, _classCallCheck2.default)(this, Card);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Card).apply(this, arguments));
  }

  (0, _createClass2.default)(Card, [{
    key: "render",
    value: function render() {
      return _react.default.createElement(_Pane.default, (0, _extends2.default)({
        borderRadius: 5
      }, this.props));
    }
  }]);
  return Card;
}(_react.PureComponent);

exports.default = Card;
Card.displayName = "Card";
(0, _defineProperty2.default)(Card, "propTypes", (0, _objectSpread2.default)({}, _Pane.default.propTypes));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9sYXllcnMvc3JjL0NhcmQuanMiXSwibmFtZXMiOlsiQ2FyZCIsInByb3BzIiwiUHVyZUNvbXBvbmVudCIsIlBhbmUiLCJwcm9wVHlwZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOztJQUVxQkEsSTs7Ozs7Ozs7Ozs7OzZCQUtWO0FBQ1AsYUFBTyw2QkFBQyxhQUFEO0FBQU0sUUFBQSxZQUFZLEVBQUU7QUFBcEIsU0FBMkIsS0FBS0MsS0FBaEMsRUFBUDtBQUNEOzs7RUFQK0JDLG9COzs7QUFBYkYsSTs4QkFBQUEsSSwrQ0FFZEcsY0FBS0MsUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUGFuZSBmcm9tICcuL1BhbmUnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhcmQgZXh0ZW5kcyBQdXJlQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAuLi5QYW5lLnByb3BUeXBlc1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiA8UGFuZSBib3JkZXJSYWRpdXM9ezV9IHsuLi50aGlzLnByb3BzfSAvPlxuICB9XG59XG4iXX0=