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
import { Pane } from '../../layers';
import { Paragraph } from '../../typography';
import { withTheme } from '../../theme';

var TooltipStateless =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(TooltipStateless, _PureComponent);

  function TooltipStateless() {
    _classCallCheck(this, TooltipStateless);

    return _possibleConstructorReturn(this, _getPrototypeOf(TooltipStateless).apply(this, arguments));
  }

  _createClass(TooltipStateless, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          theme = _this$props.theme,
          children = _this$props.children,
          appearance = _this$props.appearance,
          props = _objectWithoutProperties(_this$props, ["theme", "children", "appearance"]);

      var _theme$getTooltipProp = theme.getTooltipProps(appearance),
          color = _theme$getTooltipProp.color,
          themedProps = _objectWithoutProperties(_theme$getTooltipProp, ["color"]);

      var child;

      if (typeof children === 'string') {
        child = React.createElement(Paragraph, {
          color: color,
          size: 400
        }, children);
      } else {
        child = children;
      }

      return React.createElement(Pane, _extends({
        borderRadius: 3,
        paddingX: 8,
        paddingY: 4,
        maxWidth: 240
      }, themedProps, props), child);
    }
  }]);

  return TooltipStateless;
}(PureComponent);

TooltipStateless.displayName = "TooltipStateless";

_defineProperty(TooltipStateless, "propTypes", {
  children: PropTypes.node,

  /**
   * The appearance of the tooltip.
   */
  appearance: PropTypes.oneOf(['default', 'card']).isRequired,

  /**
   * Theme provided by ThemeProvider.
   */
  theme: PropTypes.object.isRequired
});

export default withTheme(TooltipStateless);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90b29sdGlwL3NyYy9Ub29sdGlwU3RhdGVsZXNzLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiUHVyZUNvbXBvbmVudCIsIlByb3BUeXBlcyIsIlBhbmUiLCJQYXJhZ3JhcGgiLCJ3aXRoVGhlbWUiLCJUb29sdGlwU3RhdGVsZXNzIiwicHJvcHMiLCJ0aGVtZSIsImNoaWxkcmVuIiwiYXBwZWFyYW5jZSIsImdldFRvb2x0aXBQcm9wcyIsImNvbG9yIiwidGhlbWVkUHJvcHMiLCJjaGlsZCIsIm5vZGUiLCJvbmVPZiIsImlzUmVxdWlyZWQiLCJvYmplY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsT0FBT0EsS0FBUCxJQUFnQkMsYUFBaEIsUUFBcUMsT0FBckM7QUFDQSxPQUFPQyxTQUFQLE1BQXNCLFlBQXRCO0FBQ0EsU0FBU0MsSUFBVCxRQUFxQixjQUFyQjtBQUNBLFNBQVNDLFNBQVQsUUFBMEIsa0JBQTFCO0FBQ0EsU0FBU0MsU0FBVCxRQUEwQixhQUExQjs7SUFFTUMsZ0I7Ozs7Ozs7Ozs7Ozs7NkJBZUs7QUFBQSx3QkFDMkMsS0FBS0MsS0FEaEQ7QUFBQSxVQUNDQyxLQURELGVBQ0NBLEtBREQ7QUFBQSxVQUNRQyxRQURSLGVBQ1FBLFFBRFI7QUFBQSxVQUNrQkMsVUFEbEIsZUFDa0JBLFVBRGxCO0FBQUEsVUFDaUNILEtBRGpDOztBQUFBLGtDQUUyQkMsS0FBSyxDQUFDRyxlQUFOLENBQXNCRCxVQUF0QixDQUYzQjtBQUFBLFVBRUNFLEtBRkQseUJBRUNBLEtBRkQ7QUFBQSxVQUVXQyxXQUZYOztBQUlQLFVBQUlDLEtBQUo7O0FBQ0EsVUFBSSxPQUFPTCxRQUFQLEtBQW9CLFFBQXhCLEVBQWtDO0FBQ2hDSyxRQUFBQSxLQUFLLEdBQ0gsb0JBQUMsU0FBRDtBQUFXLFVBQUEsS0FBSyxFQUFFRixLQUFsQjtBQUF5QixVQUFBLElBQUksRUFBRTtBQUEvQixXQUNHSCxRQURILENBREY7QUFLRCxPQU5ELE1BTU87QUFDTEssUUFBQUEsS0FBSyxHQUFHTCxRQUFSO0FBQ0Q7O0FBRUQsYUFDRSxvQkFBQyxJQUFEO0FBQ0UsUUFBQSxZQUFZLEVBQUUsQ0FEaEI7QUFFRSxRQUFBLFFBQVEsRUFBRSxDQUZaO0FBR0UsUUFBQSxRQUFRLEVBQUUsQ0FIWjtBQUlFLFFBQUEsUUFBUSxFQUFFO0FBSlosU0FLTUksV0FMTixFQU1NTixLQU5OLEdBUUdPLEtBUkgsQ0FERjtBQVlEOzs7O0VBMUM0QmIsYTs7QUFBekJLLGdCOztnQkFBQUEsZ0IsZUFDZTtBQUNqQkcsRUFBQUEsUUFBUSxFQUFFUCxTQUFTLENBQUNhLElBREg7O0FBR2pCOzs7QUFHQUwsRUFBQUEsVUFBVSxFQUFFUixTQUFTLENBQUNjLEtBQVYsQ0FBZ0IsQ0FBQyxTQUFELEVBQVksTUFBWixDQUFoQixFQUFxQ0MsVUFOaEM7O0FBUWpCOzs7QUFHQVQsRUFBQUEsS0FBSyxFQUFFTixTQUFTLENBQUNnQixNQUFWLENBQWlCRDtBQVhQLEM7O0FBNENyQixlQUFlWixTQUFTLENBQUNDLGdCQUFELENBQXhCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCB7IFBhbmUgfSBmcm9tICcuLi8uLi9sYXllcnMnXG5pbXBvcnQgeyBQYXJhZ3JhcGggfSBmcm9tICcuLi8uLi90eXBvZ3JhcGh5J1xuaW1wb3J0IHsgd2l0aFRoZW1lIH0gZnJvbSAnLi4vLi4vdGhlbWUnXG5cbmNsYXNzIFRvb2x0aXBTdGF0ZWxlc3MgZXh0ZW5kcyBQdXJlQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG5cbiAgICAvKipcbiAgICAgKiBUaGUgYXBwZWFyYW5jZSBvZiB0aGUgdG9vbHRpcC5cbiAgICAgKi9cbiAgICBhcHBlYXJhbmNlOiBQcm9wVHlwZXMub25lT2YoWydkZWZhdWx0JywgJ2NhcmQnXSkuaXNSZXF1aXJlZCxcblxuICAgIC8qKlxuICAgICAqIFRoZW1lIHByb3ZpZGVkIGJ5IFRoZW1lUHJvdmlkZXIuXG4gICAgICovXG4gICAgdGhlbWU6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZFxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgdGhlbWUsIGNoaWxkcmVuLCBhcHBlYXJhbmNlLCAuLi5wcm9wcyB9ID0gdGhpcy5wcm9wc1xuICAgIGNvbnN0IHsgY29sb3IsIC4uLnRoZW1lZFByb3BzIH0gPSB0aGVtZS5nZXRUb29sdGlwUHJvcHMoYXBwZWFyYW5jZSlcblxuICAgIGxldCBjaGlsZFxuICAgIGlmICh0eXBlb2YgY2hpbGRyZW4gPT09ICdzdHJpbmcnKSB7XG4gICAgICBjaGlsZCA9IChcbiAgICAgICAgPFBhcmFncmFwaCBjb2xvcj17Y29sb3J9IHNpemU9ezQwMH0+XG4gICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICA8L1BhcmFncmFwaD5cbiAgICAgIClcbiAgICB9IGVsc2Uge1xuICAgICAgY2hpbGQgPSBjaGlsZHJlblxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8UGFuZVxuICAgICAgICBib3JkZXJSYWRpdXM9ezN9XG4gICAgICAgIHBhZGRpbmdYPXs4fVxuICAgICAgICBwYWRkaW5nWT17NH1cbiAgICAgICAgbWF4V2lkdGg9ezI0MH1cbiAgICAgICAgey4uLnRoZW1lZFByb3BzfVxuICAgICAgICB7Li4ucHJvcHN9XG4gICAgICA+XG4gICAgICAgIHtjaGlsZH1cbiAgICAgIDwvUGFuZT5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFRoZW1lKFRvb2x0aXBTdGF0ZWxlc3MpXG4iXX0=