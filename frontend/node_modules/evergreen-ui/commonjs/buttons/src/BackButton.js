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

var _Button = _interopRequireDefault(require("./Button"));

var BackButton =
/*#__PURE__*/
function (_PureComponent) {
  (0, _inherits2.default)(BackButton, _PureComponent);

  function BackButton() {
    (0, _classCallCheck2.default)(this, BackButton);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(BackButton).apply(this, arguments));
  }

  (0, _createClass2.default)(BackButton, [{
    key: "render",
    value: function render() {
      return _react.default.createElement(_Button.default, (0, _extends2.default)({
        iconBefore: "arrow-left"
      }, this.props));
    }
  }]);
  return BackButton;
}(_react.PureComponent);

exports.default = BackButton;
BackButton.displayName = "BackButton";
(0, _defineProperty2.default)(BackButton, "propTypes", (0, _objectSpread2.default)({}, _Button.default.propTypes));
(0, _defineProperty2.default)(BackButton, "defaultProps", (0, _objectSpread2.default)({}, _Button.default.defaultProps, {
  children: 'Back'
}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9idXR0b25zL3NyYy9CYWNrQnV0dG9uLmpzIl0sIm5hbWVzIjpbIkJhY2tCdXR0b24iLCJwcm9wcyIsIlB1cmVDb21wb25lbnQiLCJCdXR0b24iLCJwcm9wVHlwZXMiLCJkZWZhdWx0UHJvcHMiLCJjaGlsZHJlbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0lBRXFCQSxVOzs7Ozs7Ozs7Ozs7NkJBaUJWO0FBQ1AsYUFBTyw2QkFBQyxlQUFEO0FBQVEsUUFBQSxVQUFVLEVBQUM7QUFBbkIsU0FBb0MsS0FBS0MsS0FBekMsRUFBUDtBQUNEOzs7RUFuQnFDQyxvQjs7O0FBQW5CRixVOzhCQUFBQSxVLCtDQUtkRyxnQkFBT0MsUzs4QkFMT0osVSxrREFZZEcsZ0JBQU9FLFk7QUFFVkMsRUFBQUEsUUFBUSxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBCdXR0b24gZnJvbSAnLi9CdXR0b24nXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhY2tCdXR0b24gZXh0ZW5kcyBQdXJlQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAvKipcbiAgICAgKiBDb21wb3NlcyB0aGUgQnV0dG9uIGNvbXBvbmVudCBhcyB0aGUgYmFzZS5cbiAgICAgKi9cbiAgICAuLi5CdXR0b24ucHJvcFR5cGVzXG4gIH1cblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIC8qKlxuICAgICAqIENvbXBvc2VzIHRoZSBCdXR0b24gY29tcG9uZW50IGFzIHRoZSBiYXNlLlxuICAgICAqL1xuICAgIC4uLkJ1dHRvbi5kZWZhdWx0UHJvcHMsXG5cbiAgICBjaGlsZHJlbjogJ0JhY2snXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIDxCdXR0b24gaWNvbkJlZm9yZT1cImFycm93LWxlZnRcIiB7Li4udGhpcy5wcm9wc30gLz5cbiAgfVxufVxuIl19