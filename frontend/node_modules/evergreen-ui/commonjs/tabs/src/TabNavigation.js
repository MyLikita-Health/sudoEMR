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

var _uiBox = _interopRequireDefault(require("ui-box"));

var TabNavigation =
/*#__PURE__*/
function (_PureComponent) {
  (0, _inherits2.default)(TabNavigation, _PureComponent);

  function TabNavigation() {
    (0, _classCallCheck2.default)(this, TabNavigation);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(TabNavigation).apply(this, arguments));
  }

  (0, _createClass2.default)(TabNavigation, [{
    key: "render",
    value: function render() {
      return _react.default.createElement(_uiBox.default, (0, _extends2.default)({
        is: "nav",
        role: "navigation"
      }, this.props));
    }
  }]);
  return TabNavigation;
}(_react.PureComponent);

exports.default = TabNavigation;
TabNavigation.displayName = "TabNavigation";
(0, _defineProperty2.default)(TabNavigation, "propTypes", (0, _objectSpread2.default)({}, _uiBox.default.propTypes));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90YWJzL3NyYy9UYWJOYXZpZ2F0aW9uLmpzIl0sIm5hbWVzIjpbIlRhYk5hdmlnYXRpb24iLCJwcm9wcyIsIlB1cmVDb21wb25lbnQiLCJCb3giLCJwcm9wVHlwZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOztJQUVxQkEsYTs7Ozs7Ozs7Ozs7OzZCQUtWO0FBQ1AsYUFBTyw2QkFBQyxjQUFEO0FBQUssUUFBQSxFQUFFLEVBQUMsS0FBUjtBQUFjLFFBQUEsSUFBSSxFQUFDO0FBQW5CLFNBQW9DLEtBQUtDLEtBQXpDLEVBQVA7QUFDRDs7O0VBUHdDQyxvQjs7O0FBQXRCRixhOzhCQUFBQSxhLCtDQUVkRyxlQUFJQyxTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBCb3ggZnJvbSAndWktYm94J1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUYWJOYXZpZ2F0aW9uIGV4dGVuZHMgUHVyZUNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgLi4uQm94LnByb3BUeXBlc1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiA8Qm94IGlzPVwibmF2XCIgcm9sZT1cIm5hdmlnYXRpb25cIiB7Li4udGhpcy5wcm9wc30gLz5cbiAgfVxufVxuIl19