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
import Box from 'ui-box';
import { withTheme } from '../../theme';

var Heading =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(Heading, _PureComponent);

  function Heading() {
    _classCallCheck(this, Heading);

    return _possibleConstructorReturn(this, _getPrototypeOf(Heading).apply(this, arguments));
  }

  _createClass(Heading, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          theme = _this$props.theme,
          marginTop = _this$props.marginTop,
          size = _this$props.size,
          props = _objectWithoutProperties(_this$props, ["theme", "marginTop", "size"]);

      var _theme$getHeadingStyl = theme.getHeadingStyle(size),
          defaultMarginTop = _theme$getHeadingStyl.marginTop,
          headingStyle = _objectWithoutProperties(_theme$getHeadingStyl, ["marginTop"]);

      var finalMarginTop = marginTop;

      if (marginTop === 'default') {
        finalMarginTop = defaultMarginTop;
      }

      return React.createElement(Box, _extends({
        is: "h2",
        marginTop: finalMarginTop || 0,
        marginBottom: 0
      }, headingStyle, props));
    }
  }]);

  return Heading;
}(PureComponent);

Heading.displayName = "Heading";

_defineProperty(Heading, "propTypes", _objectSpread({}, Box.propTypes, {
  /**
   * The size of the heading.
   */
  size: PropTypes.oneOf([100, 200, 300, 400, 500, 600, 700, 800, 900]).isRequired,

  /**
   * Pass `default` to use the default margin top for that size.
   */
  marginTop: PropTypes.oneOfType([PropTypes.bool, PropTypes.number, PropTypes.string]),

  /**
   * Theme provided by ThemeProvider.
   */
  theme: PropTypes.object.isRequired
}));

_defineProperty(Heading, "defaultProps", {
  size: 500
});

export default withTheme(Heading);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90eXBvZ3JhcGh5L3NyYy9IZWFkaW5nLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiUHVyZUNvbXBvbmVudCIsIlByb3BUeXBlcyIsIkJveCIsIndpdGhUaGVtZSIsIkhlYWRpbmciLCJwcm9wcyIsInRoZW1lIiwibWFyZ2luVG9wIiwic2l6ZSIsImdldEhlYWRpbmdTdHlsZSIsImRlZmF1bHRNYXJnaW5Ub3AiLCJoZWFkaW5nU3R5bGUiLCJmaW5hbE1hcmdpblRvcCIsInByb3BUeXBlcyIsIm9uZU9mIiwiaXNSZXF1aXJlZCIsIm9uZU9mVHlwZSIsImJvb2wiLCJudW1iZXIiLCJzdHJpbmciLCJvYmplY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLE9BQU9BLEtBQVAsSUFBZ0JDLGFBQWhCLFFBQXFDLE9BQXJDO0FBQ0EsT0FBT0MsU0FBUCxNQUFzQixZQUF0QjtBQUNBLE9BQU9DLEdBQVAsTUFBZ0IsUUFBaEI7QUFDQSxTQUFTQyxTQUFULFFBQTBCLGFBQTFCOztJQUVNQyxPOzs7Ozs7Ozs7Ozs7OzZCQWdDSztBQUFBLHdCQUNzQyxLQUFLQyxLQUQzQztBQUFBLFVBQ0NDLEtBREQsZUFDQ0EsS0FERDtBQUFBLFVBQ1FDLFNBRFIsZUFDUUEsU0FEUjtBQUFBLFVBQ21CQyxJQURuQixlQUNtQkEsSUFEbkI7QUFBQSxVQUM0QkgsS0FENUI7O0FBQUEsa0NBS0hDLEtBQUssQ0FBQ0csZUFBTixDQUFzQkQsSUFBdEIsQ0FMRztBQUFBLFVBR01FLGdCQUhOLHlCQUdMSCxTQUhLO0FBQUEsVUFJRkksWUFKRTs7QUFPUCxVQUFJQyxjQUFjLEdBQUdMLFNBQXJCOztBQUNBLFVBQUlBLFNBQVMsS0FBSyxTQUFsQixFQUE2QjtBQUMzQkssUUFBQUEsY0FBYyxHQUFHRixnQkFBakI7QUFDRDs7QUFFRCxhQUNFLG9CQUFDLEdBQUQ7QUFDRSxRQUFBLEVBQUUsRUFBQyxJQURMO0FBRUUsUUFBQSxTQUFTLEVBQUVFLGNBQWMsSUFBSSxDQUYvQjtBQUdFLFFBQUEsWUFBWSxFQUFFO0FBSGhCLFNBSU1ELFlBSk4sRUFLTU4sS0FMTixFQURGO0FBU0Q7Ozs7RUFyRG1CTCxhOztBQUFoQkksTzs7Z0JBQUFBLE8saUNBS0NGLEdBQUcsQ0FBQ1csUztBQUVQOzs7QUFHQUwsRUFBQUEsSUFBSSxFQUFFUCxTQUFTLENBQUNhLEtBQVYsQ0FBZ0IsQ0FBQyxHQUFELEVBQU0sR0FBTixFQUFXLEdBQVgsRUFBZ0IsR0FBaEIsRUFBcUIsR0FBckIsRUFBMEIsR0FBMUIsRUFBK0IsR0FBL0IsRUFBb0MsR0FBcEMsRUFBeUMsR0FBekMsQ0FBaEIsRUFDSEMsVTs7QUFFSDs7O0FBR0FSLEVBQUFBLFNBQVMsRUFBRU4sU0FBUyxDQUFDZSxTQUFWLENBQW9CLENBQzdCZixTQUFTLENBQUNnQixJQURtQixFQUU3QmhCLFNBQVMsQ0FBQ2lCLE1BRm1CLEVBRzdCakIsU0FBUyxDQUFDa0IsTUFIbUIsQ0FBcEIsQzs7QUFNWDs7O0FBR0FiLEVBQUFBLEtBQUssRUFBRUwsU0FBUyxDQUFDbUIsTUFBVixDQUFpQkw7OztnQkF6QnRCWCxPLGtCQTRCa0I7QUFDcEJJLEVBQUFBLElBQUksRUFBRTtBQURjLEM7O0FBNEJ4QixlQUFlTCxTQUFTLENBQUNDLE9BQUQsQ0FBeEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IEJveCBmcm9tICd1aS1ib3gnXG5pbXBvcnQgeyB3aXRoVGhlbWUgfSBmcm9tICcuLi8uLi90aGVtZSdcblxuY2xhc3MgSGVhZGluZyBleHRlbmRzIFB1cmVDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIC8qKlxuICAgICAqIEhlYWRpbmcgY29tcG9zZXMgQm94IGFzIHRoZSBiYXNlLlxuICAgICAqL1xuICAgIC4uLkJveC5wcm9wVHlwZXMsXG5cbiAgICAvKipcbiAgICAgKiBUaGUgc2l6ZSBvZiB0aGUgaGVhZGluZy5cbiAgICAgKi9cbiAgICBzaXplOiBQcm9wVHlwZXMub25lT2YoWzEwMCwgMjAwLCAzMDAsIDQwMCwgNTAwLCA2MDAsIDcwMCwgODAwLCA5MDBdKVxuICAgICAgLmlzUmVxdWlyZWQsXG5cbiAgICAvKipcbiAgICAgKiBQYXNzIGBkZWZhdWx0YCB0byB1c2UgdGhlIGRlZmF1bHQgbWFyZ2luIHRvcCBmb3IgdGhhdCBzaXplLlxuICAgICAqL1xuICAgIG1hcmdpblRvcDogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgICBQcm9wVHlwZXMuYm9vbCxcbiAgICAgIFByb3BUeXBlcy5udW1iZXIsXG4gICAgICBQcm9wVHlwZXMuc3RyaW5nXG4gICAgXSksXG5cbiAgICAvKipcbiAgICAgKiBUaGVtZSBwcm92aWRlZCBieSBUaGVtZVByb3ZpZGVyLlxuICAgICAqL1xuICAgIHRoZW1lOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWRcbiAgfVxuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgc2l6ZTogNTAwXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyB0aGVtZSwgbWFyZ2luVG9wLCBzaXplLCAuLi5wcm9wcyB9ID0gdGhpcy5wcm9wc1xuICAgIGNvbnN0IHtcbiAgICAgIG1hcmdpblRvcDogZGVmYXVsdE1hcmdpblRvcCxcbiAgICAgIC4uLmhlYWRpbmdTdHlsZVxuICAgIH0gPSB0aGVtZS5nZXRIZWFkaW5nU3R5bGUoc2l6ZSlcblxuICAgIGxldCBmaW5hbE1hcmdpblRvcCA9IG1hcmdpblRvcFxuICAgIGlmIChtYXJnaW5Ub3AgPT09ICdkZWZhdWx0Jykge1xuICAgICAgZmluYWxNYXJnaW5Ub3AgPSBkZWZhdWx0TWFyZ2luVG9wXG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxCb3hcbiAgICAgICAgaXM9XCJoMlwiXG4gICAgICAgIG1hcmdpblRvcD17ZmluYWxNYXJnaW5Ub3AgfHwgMH1cbiAgICAgICAgbWFyZ2luQm90dG9tPXswfVxuICAgICAgICB7Li4uaGVhZGluZ1N0eWxlfVxuICAgICAgICB7Li4ucHJvcHN9XG4gICAgICAvPlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoVGhlbWUoSGVhZGluZylcbiJdfQ==