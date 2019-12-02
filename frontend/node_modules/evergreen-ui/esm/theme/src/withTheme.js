import _extends from "@babel/runtime/helpers/esm/extends";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import React from 'react';
import { ThemeConsumer } from './ThemeContext';
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
    _inherits(_class, _React$Component);

    function _class() {
      _classCallCheck(this, _class);

      return _possibleConstructorReturn(this, _getPrototypeOf(_class).apply(this, arguments));
    }

    _createClass(_class, [{
      key: "render",
      value: function render() {
        var _this = this;

        return React.createElement(ThemeConsumer, null, function (theme) {
          return React.createElement(WrappedComponent, _extends({
            theme: theme
          }, _this.props));
        });
      }
    }]);

    return _class;
  }(React.Component), _defineProperty(_class, "displayName", "withTheme(".concat(displayName, ")")), _temp;
}

export default withTheme;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90aGVtZS9zcmMvd2l0aFRoZW1lLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiVGhlbWVDb25zdW1lciIsIndpdGhUaGVtZSIsIldyYXBwZWRDb21wb25lbnQiLCJkaXNwbGF5TmFtZSIsIm5hbWUiLCJ0aGVtZSIsInByb3BzIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUEsT0FBT0EsS0FBUCxNQUFrQixPQUFsQjtBQUNBLFNBQVNDLGFBQVQsUUFBOEIsZ0JBQTlCO0FBRUE7Ozs7O0FBSUEsU0FBU0MsU0FBVCxDQUFtQkMsZ0JBQW5CLEVBQXFDO0FBQUE7O0FBQ25DLE1BQU1DLFdBQVcsR0FDZkQsZ0JBQWdCLENBQUNDLFdBQWpCLElBQWdDRCxnQkFBZ0IsQ0FBQ0UsSUFBakQsSUFBeUQsV0FEM0Q7QUFHQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBLCtCQUdXO0FBQUE7O0FBQ1AsZUFDRSxvQkFBQyxhQUFELFFBQ0csVUFBQUMsS0FBSztBQUFBLGlCQUFJLG9CQUFDLGdCQUFEO0FBQWtCLFlBQUEsS0FBSyxFQUFFQTtBQUF6QixhQUFvQyxLQUFJLENBQUNDLEtBQXpDLEVBQUo7QUFBQSxTQURSLENBREY7QUFLRDtBQVRIOztBQUFBO0FBQUEsSUFBcUJQLEtBQUssQ0FBQ1EsU0FBM0IsOERBQ29DSixXQURwQztBQVdEOztBQUVELGVBQWVGLFNBQWYiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBUaGVtZUNvbnN1bWVyIH0gZnJvbSAnLi9UaGVtZUNvbnRleHQnXG5cbi8qKlxuICogSE9DIHRoYXQgdXNlcyBUaGVtZUNvbnN1bWVyLlxuICogQHBhcmFtIHtSZWFjdC5Db21wb25lbnR9IFdyYXBwZWRDb21wb25lbnQgLSBDb21wb25lbnQgdGhhdCBnZXRzIHRoZW1lLlxuICovXG5mdW5jdGlvbiB3aXRoVGhlbWUoV3JhcHBlZENvbXBvbmVudCkge1xuICBjb25zdCBkaXNwbGF5TmFtZSA9XG4gICAgV3JhcHBlZENvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBXcmFwcGVkQ29tcG9uZW50Lm5hbWUgfHwgJ0NvbXBvbmVudCdcblxuICByZXR1cm4gY2xhc3MgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIHN0YXRpYyBkaXNwbGF5TmFtZSA9IGB3aXRoVGhlbWUoJHtkaXNwbGF5TmFtZX0pYFxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPFRoZW1lQ29uc3VtZXI+XG4gICAgICAgICAge3RoZW1lID0+IDxXcmFwcGVkQ29tcG9uZW50IHRoZW1lPXt0aGVtZX0gey4uLnRoaXMucHJvcHN9IC8+fVxuICAgICAgICA8L1RoZW1lQ29uc3VtZXI+XG4gICAgICApXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhUaGVtZVxuIl19