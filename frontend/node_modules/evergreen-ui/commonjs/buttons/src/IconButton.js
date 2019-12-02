"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

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

var _uiBox = require("ui-box");

var _icon = require("../../icon");

var _theme = require("../../theme");

var _Button = _interopRequireDefault(require("./Button"));

var IconButton =
/*#__PURE__*/
function (_PureComponent) {
  (0, _inherits2.default)(IconButton, _PureComponent);

  function IconButton() {
    (0, _classCallCheck2.default)(this, IconButton);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(IconButton).apply(this, arguments));
  }

  (0, _createClass2.default)(IconButton, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          theme = _this$props.theme,
          iconAim = _this$props.iconAim,
          icon = _this$props.icon,
          iconSize = _this$props.iconSize,
          height = _this$props.height,
          intent = _this$props.intent,
          props = (0, _objectWithoutProperties2.default)(_this$props, ["theme", "iconAim", "icon", "iconSize", "height", "intent"]);
      var size = iconSize || theme.getIconSizeForIconButton(height);
      return _react.default.createElement(_Button.default, (0, _extends2.default)({
        intent: intent,
        height: height,
        width: height,
        paddingLeft: 0,
        paddingRight: 0,
        display: "flex",
        justifyContent: "center"
      }, props), _react.default.createElement(_icon.Icon, {
        icon: icon,
        size: size,
        color: intent === 'none' ? 'default' : 'currentColor'
      }));
    }
  }]);
  return IconButton;
}(_react.PureComponent);

IconButton.displayName = "IconButton";
(0, _defineProperty2.default)(IconButton, "propTypes", (0, _objectSpread2.default)({}, _uiBox.dimensions.propTypes, _uiBox.spacing.propTypes, _uiBox.position.propTypes, _uiBox.layout.propTypes, {
  /**
   * Name of a Blueprint UI icon, or an icon element, to render.
   * This prop is required because it determines the content of the component, but it can
   * be explicitly set to falsy values to render nothing.
   *
   * - If `null` or `undefined` or `false`, this component will render nothing.
   * - If given an `IconName` (a string literal union of all icon names),
   *   that icon will be rendered as an `<svg>` with `<path>` tags.
   * - If given a `JSX.Element`, that element will be rendered and _all other props on this component are ignored._
   *   This type is supported to simplify usage of this component in other Blueprint components.
   *   As a consumer, you should never use `<Icon icon={<element />}` directly; simply render `<element />` instead.
   */
  icon: _propTypes.default.string,

  /**
   * Specifies an explicit icon size instead of the default value
   */
  iconSize: _propTypes.default.number,

  /**
   * The intent of the button.
   */
  intent: _propTypes.default.oneOf(['none', 'success', 'warning', 'danger']).isRequired,

  /**
   * The appearance of the button.
   */
  appearance: _propTypes.default.oneOf(['default', 'minimal', 'primary']).isRequired,

  /**
   * Forcefully set the active state of a button.
   * Useful in conjuction with a Popover.
   */
  isActive: _propTypes.default.bool,

  /**
   * When true, the button is disabled.
   * isLoading also sets the button to disabled.
   */
  disabled: _propTypes.default.bool,

  /**
   * Theme provided by ThemeProvider.
   */
  theme: _propTypes.default.object.isRequired,

  /**
   * Class name passed to the button.
   * Only use if you know what you are doing.
   */
  className: _propTypes.default.string
}));
(0, _defineProperty2.default)(IconButton, "defaultProps", {
  intent: 'none',
  appearance: 'default',
  height: 32
});

var _default = (0, _theme.withTheme)(IconButton);

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9idXR0b25zL3NyYy9JY29uQnV0dG9uLmpzIl0sIm5hbWVzIjpbIkljb25CdXR0b24iLCJwcm9wcyIsInRoZW1lIiwiaWNvbkFpbSIsImljb24iLCJpY29uU2l6ZSIsImhlaWdodCIsImludGVudCIsInNpemUiLCJnZXRJY29uU2l6ZUZvckljb25CdXR0b24iLCJQdXJlQ29tcG9uZW50IiwiZGltZW5zaW9ucyIsInByb3BUeXBlcyIsInNwYWNpbmciLCJwb3NpdGlvbiIsImxheW91dCIsIlByb3BUeXBlcyIsInN0cmluZyIsIm51bWJlciIsIm9uZU9mIiwiaXNSZXF1aXJlZCIsImFwcGVhcmFuY2UiLCJpc0FjdGl2ZSIsImJvb2wiLCJkaXNhYmxlZCIsIm9iamVjdCIsImNsYXNzTmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7SUFFTUEsVTs7Ozs7Ozs7Ozs7OzZCQWtGSztBQUFBLHdCQVNILEtBQUtDLEtBVEY7QUFBQSxVQUVMQyxLQUZLLGVBRUxBLEtBRks7QUFBQSxVQUdMQyxPQUhLLGVBR0xBLE9BSEs7QUFBQSxVQUlMQyxJQUpLLGVBSUxBLElBSks7QUFBQSxVQUtMQyxRQUxLLGVBS0xBLFFBTEs7QUFBQSxVQU1MQyxNQU5LLGVBTUxBLE1BTks7QUFBQSxVQU9MQyxNQVBLLGVBT0xBLE1BUEs7QUFBQSxVQVFGTixLQVJFO0FBVVAsVUFBTU8sSUFBSSxHQUFHSCxRQUFRLElBQUlILEtBQUssQ0FBQ08sd0JBQU4sQ0FBK0JILE1BQS9CLENBQXpCO0FBRUEsYUFDRSw2QkFBQyxlQUFEO0FBQ0UsUUFBQSxNQUFNLEVBQUVDLE1BRFY7QUFFRSxRQUFBLE1BQU0sRUFBRUQsTUFGVjtBQUdFLFFBQUEsS0FBSyxFQUFFQSxNQUhUO0FBSUUsUUFBQSxXQUFXLEVBQUUsQ0FKZjtBQUtFLFFBQUEsWUFBWSxFQUFFLENBTGhCO0FBTUUsUUFBQSxPQUFPLEVBQUMsTUFOVjtBQU9FLFFBQUEsY0FBYyxFQUFDO0FBUGpCLFNBUU1MLEtBUk4sR0FVRSw2QkFBQyxVQUFEO0FBQ0UsUUFBQSxJQUFJLEVBQUVHLElBRFI7QUFFRSxRQUFBLElBQUksRUFBRUksSUFGUjtBQUdFLFFBQUEsS0FBSyxFQUFFRCxNQUFNLEtBQUssTUFBWCxHQUFvQixTQUFwQixHQUFnQztBQUh6QyxRQVZGLENBREY7QUFrQkQ7OztFQWhIc0JHLG9COztBQUFuQlYsVTs4QkFBQUEsVSwrQ0FLQ1csa0JBQVdDLFMsRUFLWEMsZUFBUUQsUyxFQUtSRSxnQkFBU0YsUyxFQUtURyxjQUFPSCxTO0FBRVY7Ozs7Ozs7Ozs7OztBQVlBUixFQUFBQSxJQUFJLEVBQUVZLG1CQUFVQyxNOztBQUVoQjs7O0FBR0FaLEVBQUFBLFFBQVEsRUFBRVcsbUJBQVVFLE07O0FBRXBCOzs7QUFHQVgsRUFBQUEsTUFBTSxFQUFFUyxtQkFBVUcsS0FBVixDQUFnQixDQUFDLE1BQUQsRUFBUyxTQUFULEVBQW9CLFNBQXBCLEVBQStCLFFBQS9CLENBQWhCLEVBQ0xDLFU7O0FBRUg7OztBQUdBQyxFQUFBQSxVQUFVLEVBQUVMLG1CQUFVRyxLQUFWLENBQWdCLENBQUMsU0FBRCxFQUFZLFNBQVosRUFBdUIsU0FBdkIsQ0FBaEIsRUFBbURDLFU7O0FBRS9EOzs7O0FBSUFFLEVBQUFBLFFBQVEsRUFBRU4sbUJBQVVPLEk7O0FBRXBCOzs7O0FBSUFDLEVBQUFBLFFBQVEsRUFBRVIsbUJBQVVPLEk7O0FBRXBCOzs7QUFHQXJCLEVBQUFBLEtBQUssRUFBRWMsbUJBQVVTLE1BQVYsQ0FBaUJMLFU7O0FBRXhCOzs7O0FBSUFNLEVBQUFBLFNBQVMsRUFBRVYsbUJBQVVDOzs4QkF6RW5CakIsVSxrQkE0RWtCO0FBQ3BCTyxFQUFBQSxNQUFNLEVBQUUsTUFEWTtBQUVwQmMsRUFBQUEsVUFBVSxFQUFFLFNBRlE7QUFHcEJmLEVBQUFBLE1BQU0sRUFBRTtBQUhZLEM7O2VBdUNULHNCQUFVTixVQUFWLEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IHsgZGltZW5zaW9ucywgc3BhY2luZywgcG9zaXRpb24sIGxheW91dCB9IGZyb20gJ3VpLWJveCdcbmltcG9ydCB7IEljb24gfSBmcm9tICcuLi8uLi9pY29uJ1xuaW1wb3J0IHsgd2l0aFRoZW1lIH0gZnJvbSAnLi4vLi4vdGhlbWUnXG5pbXBvcnQgQnV0dG9uIGZyb20gJy4vQnV0dG9uJ1xuXG5jbGFzcyBJY29uQnV0dG9uIGV4dGVuZHMgUHVyZUNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgLyoqXG4gICAgICogQ29tcG9zZXMgdGhlIGRpbWVuc2lvbnMgc3BlYyBmcm9tIHRoZSBCb3ggcHJpbWl0aXZpZS5cbiAgICAgKi9cbiAgICAuLi5kaW1lbnNpb25zLnByb3BUeXBlcyxcblxuICAgIC8qKlxuICAgICAqIENvbXBvc2VzIHRoZSBzcGFjaW5nIHNwZWMgZnJvbSB0aGUgQm94IHByaW1pdGl2aWUuXG4gICAgICovXG4gICAgLi4uc3BhY2luZy5wcm9wVHlwZXMsXG5cbiAgICAvKipcbiAgICAgKiBDb21wb3NlcyB0aGUgcG9zaXRpb24gc3BlYyBmcm9tIHRoZSBCb3ggcHJpbWl0aXZpZS5cbiAgICAgKi9cbiAgICAuLi5wb3NpdGlvbi5wcm9wVHlwZXMsXG5cbiAgICAvKipcbiAgICAgKiBDb21wb3NlcyB0aGUgbGF5b3V0IHNwZWMgZnJvbSB0aGUgQm94IHByaW1pdGl2aWUuXG4gICAgICovXG4gICAgLi4ubGF5b3V0LnByb3BUeXBlcyxcblxuICAgIC8qKlxuICAgICAqIE5hbWUgb2YgYSBCbHVlcHJpbnQgVUkgaWNvbiwgb3IgYW4gaWNvbiBlbGVtZW50LCB0byByZW5kZXIuXG4gICAgICogVGhpcyBwcm9wIGlzIHJlcXVpcmVkIGJlY2F1c2UgaXQgZGV0ZXJtaW5lcyB0aGUgY29udGVudCBvZiB0aGUgY29tcG9uZW50LCBidXQgaXQgY2FuXG4gICAgICogYmUgZXhwbGljaXRseSBzZXQgdG8gZmFsc3kgdmFsdWVzIHRvIHJlbmRlciBub3RoaW5nLlxuICAgICAqXG4gICAgICogLSBJZiBgbnVsbGAgb3IgYHVuZGVmaW5lZGAgb3IgYGZhbHNlYCwgdGhpcyBjb21wb25lbnQgd2lsbCByZW5kZXIgbm90aGluZy5cbiAgICAgKiAtIElmIGdpdmVuIGFuIGBJY29uTmFtZWAgKGEgc3RyaW5nIGxpdGVyYWwgdW5pb24gb2YgYWxsIGljb24gbmFtZXMpLFxuICAgICAqICAgdGhhdCBpY29uIHdpbGwgYmUgcmVuZGVyZWQgYXMgYW4gYDxzdmc+YCB3aXRoIGA8cGF0aD5gIHRhZ3MuXG4gICAgICogLSBJZiBnaXZlbiBhIGBKU1guRWxlbWVudGAsIHRoYXQgZWxlbWVudCB3aWxsIGJlIHJlbmRlcmVkIGFuZCBfYWxsIG90aGVyIHByb3BzIG9uIHRoaXMgY29tcG9uZW50IGFyZSBpZ25vcmVkLl9cbiAgICAgKiAgIFRoaXMgdHlwZSBpcyBzdXBwb3J0ZWQgdG8gc2ltcGxpZnkgdXNhZ2Ugb2YgdGhpcyBjb21wb25lbnQgaW4gb3RoZXIgQmx1ZXByaW50IGNvbXBvbmVudHMuXG4gICAgICogICBBcyBhIGNvbnN1bWVyLCB5b3Ugc2hvdWxkIG5ldmVyIHVzZSBgPEljb24gaWNvbj17PGVsZW1lbnQgLz59YCBkaXJlY3RseTsgc2ltcGx5IHJlbmRlciBgPGVsZW1lbnQgLz5gIGluc3RlYWQuXG4gICAgICovXG4gICAgaWNvbjogUHJvcFR5cGVzLnN0cmluZyxcblxuICAgIC8qKlxuICAgICAqIFNwZWNpZmllcyBhbiBleHBsaWNpdCBpY29uIHNpemUgaW5zdGVhZCBvZiB0aGUgZGVmYXVsdCB2YWx1ZVxuICAgICAqL1xuICAgIGljb25TaXplOiBQcm9wVHlwZXMubnVtYmVyLFxuXG4gICAgLyoqXG4gICAgICogVGhlIGludGVudCBvZiB0aGUgYnV0dG9uLlxuICAgICAqL1xuICAgIGludGVudDogUHJvcFR5cGVzLm9uZU9mKFsnbm9uZScsICdzdWNjZXNzJywgJ3dhcm5pbmcnLCAnZGFuZ2VyJ10pXG4gICAgICAuaXNSZXF1aXJlZCxcblxuICAgIC8qKlxuICAgICAqIFRoZSBhcHBlYXJhbmNlIG9mIHRoZSBidXR0b24uXG4gICAgICovXG4gICAgYXBwZWFyYW5jZTogUHJvcFR5cGVzLm9uZU9mKFsnZGVmYXVsdCcsICdtaW5pbWFsJywgJ3ByaW1hcnknXSkuaXNSZXF1aXJlZCxcblxuICAgIC8qKlxuICAgICAqIEZvcmNlZnVsbHkgc2V0IHRoZSBhY3RpdmUgc3RhdGUgb2YgYSBidXR0b24uXG4gICAgICogVXNlZnVsIGluIGNvbmp1Y3Rpb24gd2l0aCBhIFBvcG92ZXIuXG4gICAgICovXG4gICAgaXNBY3RpdmU6IFByb3BUeXBlcy5ib29sLFxuXG4gICAgLyoqXG4gICAgICogV2hlbiB0cnVlLCB0aGUgYnV0dG9uIGlzIGRpc2FibGVkLlxuICAgICAqIGlzTG9hZGluZyBhbHNvIHNldHMgdGhlIGJ1dHRvbiB0byBkaXNhYmxlZC5cbiAgICAgKi9cbiAgICBkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsXG5cbiAgICAvKipcbiAgICAgKiBUaGVtZSBwcm92aWRlZCBieSBUaGVtZVByb3ZpZGVyLlxuICAgICAqL1xuICAgIHRoZW1lOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG5cbiAgICAvKipcbiAgICAgKiBDbGFzcyBuYW1lIHBhc3NlZCB0byB0aGUgYnV0dG9uLlxuICAgICAqIE9ubHkgdXNlIGlmIHlvdSBrbm93IHdoYXQgeW91IGFyZSBkb2luZy5cbiAgICAgKi9cbiAgICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmdcbiAgfVxuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgaW50ZW50OiAnbm9uZScsXG4gICAgYXBwZWFyYW5jZTogJ2RlZmF1bHQnLFxuICAgIGhlaWdodDogMzJcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICB0aGVtZSxcbiAgICAgIGljb25BaW0sXG4gICAgICBpY29uLFxuICAgICAgaWNvblNpemUsXG4gICAgICBoZWlnaHQsXG4gICAgICBpbnRlbnQsXG4gICAgICAuLi5wcm9wc1xuICAgIH0gPSB0aGlzLnByb3BzXG4gICAgY29uc3Qgc2l6ZSA9IGljb25TaXplIHx8IHRoZW1lLmdldEljb25TaXplRm9ySWNvbkJ1dHRvbihoZWlnaHQpXG5cbiAgICByZXR1cm4gKFxuICAgICAgPEJ1dHRvblxuICAgICAgICBpbnRlbnQ9e2ludGVudH1cbiAgICAgICAgaGVpZ2h0PXtoZWlnaHR9XG4gICAgICAgIHdpZHRoPXtoZWlnaHR9XG4gICAgICAgIHBhZGRpbmdMZWZ0PXswfVxuICAgICAgICBwYWRkaW5nUmlnaHQ9ezB9XG4gICAgICAgIGRpc3BsYXk9XCJmbGV4XCJcbiAgICAgICAganVzdGlmeUNvbnRlbnQ9XCJjZW50ZXJcIlxuICAgICAgICB7Li4ucHJvcHN9XG4gICAgICA+XG4gICAgICAgIDxJY29uXG4gICAgICAgICAgaWNvbj17aWNvbn1cbiAgICAgICAgICBzaXplPXtzaXplfVxuICAgICAgICAgIGNvbG9yPXtpbnRlbnQgPT09ICdub25lJyA/ICdkZWZhdWx0JyA6ICdjdXJyZW50Q29sb3InfVxuICAgICAgICAvPlxuICAgICAgPC9CdXR0b24+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhUaGVtZShJY29uQnV0dG9uKVxuIl19