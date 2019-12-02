"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _ThemeContext = require("./ThemeContext");

/**
 * HOC that uses ThemeConsumer.
 * @param {React.Component} WrappedComponent - Component that gets theme.
 */
function withTheme(WrappedComponent) {
  var _class, _temp;

  var displayName = WrappedComponent.displayName || WrappedComponent.name || 'Component';
  return _temp = _class =
  /*#__PURE__*/
  function (_React$Component) {
    (0, _inherits2.default)(_class, _React$Component);

    function _class() {
      (0, _classCallCheck2.default)(this, _class);
      return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(_class).apply(this, arguments));
    }

    (0, _createClass2.default)(_class, [{
      key: "render",
      value: function render() {
        var _this = this;

        return _react.default.createElement(_ThemeContext.ThemeConsumer, null, function (theme) {
          return _react.default.createElement(WrappedComponent, (0, _extends2.default)({
            theme: theme
          }, _this.props));
        });
      }
    }]);
    return _class;
  }(_react.default.Component), (0, _defineProperty2.default)(_class, "displayName", "withTheme(".concat(displayName, ")")), _temp;
}

var _default = withTheme;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90aGVtZS9zcmMvd2l0aFRoZW1lLmpzIl0sIm5hbWVzIjpbIndpdGhUaGVtZSIsIldyYXBwZWRDb21wb25lbnQiLCJkaXNwbGF5TmFtZSIsIm5hbWUiLCJ0aGVtZSIsInByb3BzIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBRUE7Ozs7QUFJQSxTQUFTQSxTQUFULENBQW1CQyxnQkFBbkIsRUFBcUM7QUFBQTs7QUFDbkMsTUFBTUMsV0FBVyxHQUNmRCxnQkFBZ0IsQ0FBQ0MsV0FBakIsSUFBZ0NELGdCQUFnQixDQUFDRSxJQUFqRCxJQUF5RCxXQUQzRDtBQUdBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQSwrQkFHVztBQUFBOztBQUNQLGVBQ0UsNkJBQUMsMkJBQUQsUUFDRyxVQUFBQyxLQUFLO0FBQUEsaUJBQUksNkJBQUMsZ0JBQUQ7QUFBa0IsWUFBQSxLQUFLLEVBQUVBO0FBQXpCLGFBQW9DLEtBQUksQ0FBQ0MsS0FBekMsRUFBSjtBQUFBLFNBRFIsQ0FERjtBQUtEO0FBVEg7QUFBQTtBQUFBLElBQXFCQyxlQUFNQyxTQUEzQiw0RUFDb0NMLFdBRHBDO0FBV0Q7O2VBRWNGLFMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBUaGVtZUNvbnN1bWVyIH0gZnJvbSAnLi9UaGVtZUNvbnRleHQnXG5cbi8qKlxuICogSE9DIHRoYXQgdXNlcyBUaGVtZUNvbnN1bWVyLlxuICogQHBhcmFtIHtSZWFjdC5Db21wb25lbnR9IFdyYXBwZWRDb21wb25lbnQgLSBDb21wb25lbnQgdGhhdCBnZXRzIHRoZW1lLlxuICovXG5mdW5jdGlvbiB3aXRoVGhlbWUoV3JhcHBlZENvbXBvbmVudCkge1xuICBjb25zdCBkaXNwbGF5TmFtZSA9XG4gICAgV3JhcHBlZENvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBXcmFwcGVkQ29tcG9uZW50Lm5hbWUgfHwgJ0NvbXBvbmVudCdcblxuICByZXR1cm4gY2xhc3MgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIHN0YXRpYyBkaXNwbGF5TmFtZSA9IGB3aXRoVGhlbWUoJHtkaXNwbGF5TmFtZX0pYFxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPFRoZW1lQ29uc3VtZXI+XG4gICAgICAgICAge3RoZW1lID0+IDxXcmFwcGVkQ29tcG9uZW50IHRoZW1lPXt0aGVtZX0gey4uLnRoaXMucHJvcHN9IC8+fVxuICAgICAgICA8L1RoZW1lQ29uc3VtZXI+XG4gICAgICApXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhUaGVtZVxuIl19