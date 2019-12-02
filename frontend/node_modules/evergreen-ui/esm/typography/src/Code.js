import _objectSpread from "@babel/runtime/helpers/esm/objectSpread";
import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { withTheme } from '../../theme';
import Text from './Text';

var Code =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(Code, _PureComponent);

  function Code() {
    _classCallCheck(this, Code);

    return _possibleConstructorReturn(this, _getPrototypeOf(Code).apply(this, arguments));
  }

  _createClass(Code, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          theme = _this$props.theme,
          className = _this$props.className,
          appearance = _this$props.appearance,
          props = _objectWithoutProperties(_this$props, ["theme", "className", "appearance"]);

      var _theme$getCodeProps = theme.getCodeProps(appearance),
          _theme$getCodeProps$c = _theme$getCodeProps.className,
          themedClassName = _theme$getCodeProps$c === void 0 ? '' : _theme$getCodeProps$c,
          themeProps = _objectWithoutProperties(_theme$getCodeProps, ["className"]);

      return React.createElement(Text, _extends({
        is: "code",
        className: cx(className, themedClassName),
        fontFamily: "mono"
      }, themeProps, props));
    }
  }]);

  return Code;
}(PureComponent);

Code.displayName = "Code";

_defineProperty(Code, "propTypes", _objectSpread({}, Text.propTypes, {
  /**
   * The appearance of the code.
   */
  appearance: PropTypes.oneOf(['default', 'minimal']).isRequired,

  /**
   * Theme provided by ThemeProvider.
   */
  theme: PropTypes.object.isRequired,

  /**
   * Class name passed to the button.
   * Only use if you know what you are doing.
   */
  className: PropTypes.string
}));

_defineProperty(Code, "defaultProps", {
  appearance: 'default'
});

export default withTheme(Code);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90eXBvZ3JhcGh5L3NyYy9Db2RlLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiUHVyZUNvbXBvbmVudCIsIlByb3BUeXBlcyIsImN4Iiwid2l0aFRoZW1lIiwiVGV4dCIsIkNvZGUiLCJwcm9wcyIsInRoZW1lIiwiY2xhc3NOYW1lIiwiYXBwZWFyYW5jZSIsImdldENvZGVQcm9wcyIsInRoZW1lZENsYXNzTmFtZSIsInRoZW1lUHJvcHMiLCJwcm9wVHlwZXMiLCJvbmVPZiIsImlzUmVxdWlyZWQiLCJvYmplY3QiLCJzdHJpbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLE9BQU9BLEtBQVAsSUFBZ0JDLGFBQWhCLFFBQXFDLE9BQXJDO0FBQ0EsT0FBT0MsU0FBUCxNQUFzQixZQUF0QjtBQUNBLE9BQU9DLEVBQVAsTUFBZSxZQUFmO0FBQ0EsU0FBU0MsU0FBVCxRQUEwQixhQUExQjtBQUNBLE9BQU9DLElBQVAsTUFBaUIsUUFBakI7O0lBRU1DLEk7Ozs7Ozs7Ozs7Ozs7NkJBeUJLO0FBQUEsd0JBQzRDLEtBQUtDLEtBRGpEO0FBQUEsVUFDQ0MsS0FERCxlQUNDQSxLQUREO0FBQUEsVUFDUUMsU0FEUixlQUNRQSxTQURSO0FBQUEsVUFDbUJDLFVBRG5CLGVBQ21CQSxVQURuQjtBQUFBLFVBQ2tDSCxLQURsQzs7QUFBQSxnQ0FNSEMsS0FBSyxDQUFDRyxZQUFOLENBQW1CRCxVQUFuQixDQU5HO0FBQUEsc0RBSUxELFNBSks7QUFBQSxVQUlNRyxlQUpOLHNDQUl3QixFQUp4QjtBQUFBLFVBS0ZDLFVBTEU7O0FBUVAsYUFDRSxvQkFBQyxJQUFEO0FBQ0UsUUFBQSxFQUFFLEVBQUMsTUFETDtBQUVFLFFBQUEsU0FBUyxFQUFFVixFQUFFLENBQUNNLFNBQUQsRUFBWUcsZUFBWixDQUZmO0FBR0UsUUFBQSxVQUFVLEVBQUM7QUFIYixTQUlNQyxVQUpOLEVBS01OLEtBTE4sRUFERjtBQVNEOzs7O0VBMUNnQk4sYTs7QUFBYkssSTs7Z0JBQUFBLEksaUNBRUNELElBQUksQ0FBQ1MsUztBQUVSOzs7QUFHQUosRUFBQUEsVUFBVSxFQUFFUixTQUFTLENBQUNhLEtBQVYsQ0FBZ0IsQ0FBQyxTQUFELEVBQVksU0FBWixDQUFoQixFQUF3Q0MsVTs7QUFFcEQ7OztBQUdBUixFQUFBQSxLQUFLLEVBQUVOLFNBQVMsQ0FBQ2UsTUFBVixDQUFpQkQsVTs7QUFFeEI7Ozs7QUFJQVAsRUFBQUEsU0FBUyxFQUFFUCxTQUFTLENBQUNnQjs7O2dCQWxCbkJaLEksa0JBcUJrQjtBQUNwQkksRUFBQUEsVUFBVSxFQUFFO0FBRFEsQzs7QUF3QnhCLGVBQWVOLFNBQVMsQ0FBQ0UsSUFBRCxDQUF4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgY3ggZnJvbSAnY2xhc3NuYW1lcydcbmltcG9ydCB7IHdpdGhUaGVtZSB9IGZyb20gJy4uLy4uL3RoZW1lJ1xuaW1wb3J0IFRleHQgZnJvbSAnLi9UZXh0J1xuXG5jbGFzcyBDb2RlIGV4dGVuZHMgUHVyZUNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgLi4uVGV4dC5wcm9wVHlwZXMsXG5cbiAgICAvKipcbiAgICAgKiBUaGUgYXBwZWFyYW5jZSBvZiB0aGUgY29kZS5cbiAgICAgKi9cbiAgICBhcHBlYXJhbmNlOiBQcm9wVHlwZXMub25lT2YoWydkZWZhdWx0JywgJ21pbmltYWwnXSkuaXNSZXF1aXJlZCxcblxuICAgIC8qKlxuICAgICAqIFRoZW1lIHByb3ZpZGVkIGJ5IFRoZW1lUHJvdmlkZXIuXG4gICAgICovXG4gICAgdGhlbWU6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcblxuICAgIC8qKlxuICAgICAqIENsYXNzIG5hbWUgcGFzc2VkIHRvIHRoZSBidXR0b24uXG4gICAgICogT25seSB1c2UgaWYgeW91IGtub3cgd2hhdCB5b3UgYXJlIGRvaW5nLlxuICAgICAqL1xuICAgIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZ1xuICB9XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBhcHBlYXJhbmNlOiAnZGVmYXVsdCdcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHRoZW1lLCBjbGFzc05hbWUsIGFwcGVhcmFuY2UsIC4uLnByb3BzIH0gPSB0aGlzLnByb3BzXG5cbiAgICBjb25zdCB7XG4gICAgICBjbGFzc05hbWU6IHRoZW1lZENsYXNzTmFtZSA9ICcnLFxuICAgICAgLi4udGhlbWVQcm9wc1xuICAgIH0gPSB0aGVtZS5nZXRDb2RlUHJvcHMoYXBwZWFyYW5jZSlcblxuICAgIHJldHVybiAoXG4gICAgICA8VGV4dFxuICAgICAgICBpcz1cImNvZGVcIlxuICAgICAgICBjbGFzc05hbWU9e2N4KGNsYXNzTmFtZSwgdGhlbWVkQ2xhc3NOYW1lKX1cbiAgICAgICAgZm9udEZhbWlseT1cIm1vbm9cIlxuICAgICAgICB7Li4udGhlbWVQcm9wc31cbiAgICAgICAgey4uLnByb3BzfVxuICAgICAgLz5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFRoZW1lKENvZGUpXG4iXX0=