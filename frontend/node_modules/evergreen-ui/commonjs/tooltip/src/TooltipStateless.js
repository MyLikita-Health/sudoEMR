"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _layers = require("../../layers");

var _typography = require("../../typography");

var _theme = require("../../theme");

var TooltipStateless =
/*#__PURE__*/
function (_PureComponent) {
  (0, _inherits2.default)(TooltipStateless, _PureComponent);

  function TooltipStateless() {
    (0, _classCallCheck2.default)(this, TooltipStateless);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(TooltipStateless).apply(this, arguments));
  }

  (0, _createClass2.default)(TooltipStateless, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          theme = _this$props.theme,
          children = _this$props.children,
          appearance = _this$props.appearance,
          props = (0, _objectWithoutProperties2.default)(_this$props, ["theme", "children", "appearance"]);

      var _theme$getTooltipProp = theme.getTooltipProps(appearance),
          color = _theme$getTooltipProp.color,
          themedProps = (0, _objectWithoutProperties2.default)(_theme$getTooltipProp, ["color"]);

      var child;

      if (typeof children === 'string') {
        child = _react.default.createElement(_typography.Paragraph, {
          color: color,
          size: 400
        }, children);
      } else {
        child = children;
      }

      return _react.default.createElement(_layers.Pane, (0, _extends2.default)({
        borderRadius: 3,
        paddingX: 8,
        paddingY: 4,
        maxWidth: 240
      }, themedProps, props), child);
    }
  }]);
  return TooltipStateless;
}(_react.PureComponent);

TooltipStateless.displayName = "TooltipStateless";
(0, _defineProperty2.default)(TooltipStateless, "propTypes", {
  children: _propTypes.default.node,

  /**
   * The appearance of the tooltip.
   */
  appearance: _propTypes.default.oneOf(['default', 'card']).isRequired,

  /**
   * Theme provided by ThemeProvider.
   */
  theme: _propTypes.default.object.isRequired
});

var _default = (0, _theme.withTheme)(TooltipStateless);

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90b29sdGlwL3NyYy9Ub29sdGlwU3RhdGVsZXNzLmpzIl0sIm5hbWVzIjpbIlRvb2x0aXBTdGF0ZWxlc3MiLCJwcm9wcyIsInRoZW1lIiwiY2hpbGRyZW4iLCJhcHBlYXJhbmNlIiwiZ2V0VG9vbHRpcFByb3BzIiwiY29sb3IiLCJ0aGVtZWRQcm9wcyIsImNoaWxkIiwiUHVyZUNvbXBvbmVudCIsIlByb3BUeXBlcyIsIm5vZGUiLCJvbmVPZiIsImlzUmVxdWlyZWQiLCJvYmplY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztJQUVNQSxnQjs7Ozs7Ozs7Ozs7OzZCQWVLO0FBQUEsd0JBQzJDLEtBQUtDLEtBRGhEO0FBQUEsVUFDQ0MsS0FERCxlQUNDQSxLQUREO0FBQUEsVUFDUUMsUUFEUixlQUNRQSxRQURSO0FBQUEsVUFDa0JDLFVBRGxCLGVBQ2tCQSxVQURsQjtBQUFBLFVBQ2lDSCxLQURqQzs7QUFBQSxrQ0FFMkJDLEtBQUssQ0FBQ0csZUFBTixDQUFzQkQsVUFBdEIsQ0FGM0I7QUFBQSxVQUVDRSxLQUZELHlCQUVDQSxLQUZEO0FBQUEsVUFFV0MsV0FGWDs7QUFJUCxVQUFJQyxLQUFKOztBQUNBLFVBQUksT0FBT0wsUUFBUCxLQUFvQixRQUF4QixFQUFrQztBQUNoQ0ssUUFBQUEsS0FBSyxHQUNILDZCQUFDLHFCQUFEO0FBQVcsVUFBQSxLQUFLLEVBQUVGLEtBQWxCO0FBQXlCLFVBQUEsSUFBSSxFQUFFO0FBQS9CLFdBQ0dILFFBREgsQ0FERjtBQUtELE9BTkQsTUFNTztBQUNMSyxRQUFBQSxLQUFLLEdBQUdMLFFBQVI7QUFDRDs7QUFFRCxhQUNFLDZCQUFDLFlBQUQ7QUFDRSxRQUFBLFlBQVksRUFBRSxDQURoQjtBQUVFLFFBQUEsUUFBUSxFQUFFLENBRlo7QUFHRSxRQUFBLFFBQVEsRUFBRSxDQUhaO0FBSUUsUUFBQSxRQUFRLEVBQUU7QUFKWixTQUtNSSxXQUxOLEVBTU1OLEtBTk4sR0FRR08sS0FSSCxDQURGO0FBWUQ7OztFQTFDNEJDLG9COztBQUF6QlQsZ0I7OEJBQUFBLGdCLGVBQ2U7QUFDakJHLEVBQUFBLFFBQVEsRUFBRU8sbUJBQVVDLElBREg7O0FBR2pCOzs7QUFHQVAsRUFBQUEsVUFBVSxFQUFFTSxtQkFBVUUsS0FBVixDQUFnQixDQUFDLFNBQUQsRUFBWSxNQUFaLENBQWhCLEVBQXFDQyxVQU5oQzs7QUFRakI7OztBQUdBWCxFQUFBQSxLQUFLLEVBQUVRLG1CQUFVSSxNQUFWLENBQWlCRDtBQVhQLEM7O2VBNENOLHNCQUFVYixnQkFBVixDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCB7IFBhbmUgfSBmcm9tICcuLi8uLi9sYXllcnMnXG5pbXBvcnQgeyBQYXJhZ3JhcGggfSBmcm9tICcuLi8uLi90eXBvZ3JhcGh5J1xuaW1wb3J0IHsgd2l0aFRoZW1lIH0gZnJvbSAnLi4vLi4vdGhlbWUnXG5cbmNsYXNzIFRvb2x0aXBTdGF0ZWxlc3MgZXh0ZW5kcyBQdXJlQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG5cbiAgICAvKipcbiAgICAgKiBUaGUgYXBwZWFyYW5jZSBvZiB0aGUgdG9vbHRpcC5cbiAgICAgKi9cbiAgICBhcHBlYXJhbmNlOiBQcm9wVHlwZXMub25lT2YoWydkZWZhdWx0JywgJ2NhcmQnXSkuaXNSZXF1aXJlZCxcblxuICAgIC8qKlxuICAgICAqIFRoZW1lIHByb3ZpZGVkIGJ5IFRoZW1lUHJvdmlkZXIuXG4gICAgICovXG4gICAgdGhlbWU6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZFxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgdGhlbWUsIGNoaWxkcmVuLCBhcHBlYXJhbmNlLCAuLi5wcm9wcyB9ID0gdGhpcy5wcm9wc1xuICAgIGNvbnN0IHsgY29sb3IsIC4uLnRoZW1lZFByb3BzIH0gPSB0aGVtZS5nZXRUb29sdGlwUHJvcHMoYXBwZWFyYW5jZSlcblxuICAgIGxldCBjaGlsZFxuICAgIGlmICh0eXBlb2YgY2hpbGRyZW4gPT09ICdzdHJpbmcnKSB7XG4gICAgICBjaGlsZCA9IChcbiAgICAgICAgPFBhcmFncmFwaCBjb2xvcj17Y29sb3J9IHNpemU9ezQwMH0+XG4gICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICA8L1BhcmFncmFwaD5cbiAgICAgIClcbiAgICB9IGVsc2Uge1xuICAgICAgY2hpbGQgPSBjaGlsZHJlblxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8UGFuZVxuICAgICAgICBib3JkZXJSYWRpdXM9ezN9XG4gICAgICAgIHBhZGRpbmdYPXs4fVxuICAgICAgICBwYWRkaW5nWT17NH1cbiAgICAgICAgbWF4V2lkdGg9ezI0MH1cbiAgICAgICAgey4uLnRoZW1lZFByb3BzfVxuICAgICAgICB7Li4ucHJvcHN9XG4gICAgICA+XG4gICAgICAgIHtjaGlsZH1cbiAgICAgIDwvUGFuZT5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFRoZW1lKFRvb2x0aXBTdGF0ZWxlc3MpXG4iXX0=