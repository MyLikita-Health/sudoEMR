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

var _typography = require("../../typography");

var _icon = require("../../icon");

var _spinner = require("../../spinner");

var _theme = require("../../theme");

var TextDropdownButton =
/*#__PURE__*/
function (_PureComponent) {
  (0, _inherits2.default)(TextDropdownButton, _PureComponent);

  function TextDropdownButton() {
    (0, _classCallCheck2.default)(this, TextDropdownButton);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(TextDropdownButton).apply(this, arguments));
  }

  (0, _createClass2.default)(TextDropdownButton, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          theme = _this$props.theme,
          className = _this$props.className,
          intent = _this$props.intent,
          height = _this$props.height,
          isActive = _this$props.isActive,
          children = _this$props.children,
          disabled = _this$props.disabled,
          appearance = _this$props.appearance,
          isLoading = _this$props.isLoading,
          paddingRight = _this$props.paddingRight,
          paddingLeft = _this$props.paddingLeft,
          paddingTop = _this$props.paddingTop,
          paddingBottom = _this$props.paddingBottom,
          icon = _this$props.icon,
          props = (0, _objectWithoutProperties2.default)(_this$props, ["theme", "className", "intent", "height", "isActive", "children", "disabled", "appearance", "isLoading", "paddingRight", "paddingLeft", "paddingTop", "paddingBottom", "icon"]);
      var themedClassName = theme.getTextDropdownButtonClassName();
      return _react.default.createElement(_typography.Text, (0, _extends2.default)({
        is: "button",
        className: themedClassName,
        paddingX: 4,
        marginX: -4,
        paddingY: 2,
        marginY: -2,
        size: 300,
        "data-active": isActive
      }, TextDropdownButton.styles, props, {
        disabled: disabled
      }), isLoading && _react.default.createElement(_spinner.Spinner, {
        marginLeft: -Math.round(height / 8),
        marginRight: Math.round(height / 4),
        size: Math.round(height / 2)
      }), children, _react.default.createElement(_icon.Icon, {
        color: "default",
        icon: icon,
        size: 12,
        marginLeft: 2
      }));
    }
  }]);
  return TextDropdownButton;
}(_react.PureComponent);

TextDropdownButton.displayName = "TextDropdownButton";
(0, _defineProperty2.default)(TextDropdownButton, "propTypes", (0, _objectSpread2.default)({}, _uiBox.dimensions.propTypes, _uiBox.spacing.propTypes, _uiBox.position.propTypes, _uiBox.layout.propTypes, {
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
  icon: _propTypes.default.string.isRequired,

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
(0, _defineProperty2.default)(TextDropdownButton, "defaultProps", {
  isActive: false,
  icon: 'caret-down'
});
(0, _defineProperty2.default)(TextDropdownButton, "styles", {
  position: 'relative',
  fontFamily: 'ui',
  fontWeight: 500,
  display: 'inline-flex',
  alignItems: 'center',
  flexWrap: 'nowrap'
});

var _default = (0, _theme.withTheme)(TextDropdownButton);

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9idXR0b25zL3NyYy9UZXh0RHJvcGRvd25CdXR0b24uanMiXSwibmFtZXMiOlsiVGV4dERyb3Bkb3duQnV0dG9uIiwicHJvcHMiLCJ0aGVtZSIsImNsYXNzTmFtZSIsImludGVudCIsImhlaWdodCIsImlzQWN0aXZlIiwiY2hpbGRyZW4iLCJkaXNhYmxlZCIsImFwcGVhcmFuY2UiLCJpc0xvYWRpbmciLCJwYWRkaW5nUmlnaHQiLCJwYWRkaW5nTGVmdCIsInBhZGRpbmdUb3AiLCJwYWRkaW5nQm90dG9tIiwiaWNvbiIsInRoZW1lZENsYXNzTmFtZSIsImdldFRleHREcm9wZG93bkJ1dHRvbkNsYXNzTmFtZSIsInN0eWxlcyIsIk1hdGgiLCJyb3VuZCIsIlB1cmVDb21wb25lbnQiLCJkaW1lbnNpb25zIiwicHJvcFR5cGVzIiwic3BhY2luZyIsInBvc2l0aW9uIiwibGF5b3V0IiwiUHJvcFR5cGVzIiwiYm9vbCIsInN0cmluZyIsImlzUmVxdWlyZWQiLCJvYmplY3QiLCJmb250RmFtaWx5IiwiZm9udFdlaWdodCIsImRpc3BsYXkiLCJhbGlnbkl0ZW1zIiwiZmxleFdyYXAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0lBRU1BLGtCOzs7Ozs7Ozs7Ozs7NkJBMEVLO0FBQUEsd0JBdUJILEtBQUtDLEtBdkJGO0FBQUEsVUFFTEMsS0FGSyxlQUVMQSxLQUZLO0FBQUEsVUFHTEMsU0FISyxlQUdMQSxTQUhLO0FBQUEsVUFLTEMsTUFMSyxlQUtMQSxNQUxLO0FBQUEsVUFNTEMsTUFOSyxlQU1MQSxNQU5LO0FBQUEsVUFPTEMsUUFQSyxlQU9MQSxRQVBLO0FBQUEsVUFRTEMsUUFSSyxlQVFMQSxRQVJLO0FBQUEsVUFTTEMsUUFUSyxlQVNMQSxRQVRLO0FBQUEsVUFVTEMsVUFWSyxlQVVMQSxVQVZLO0FBQUEsVUFXTEMsU0FYSyxlQVdMQSxTQVhLO0FBQUEsVUFjTEMsWUFkSyxlQWNMQSxZQWRLO0FBQUEsVUFlTEMsV0FmSyxlQWVMQSxXQWZLO0FBQUEsVUFnQkxDLFVBaEJLLGVBZ0JMQSxVQWhCSztBQUFBLFVBaUJMQyxhQWpCSyxlQWlCTEEsYUFqQks7QUFBQSxVQW9CTEMsSUFwQkssZUFvQkxBLElBcEJLO0FBQUEsVUFzQkZkLEtBdEJFO0FBeUJQLFVBQU1lLGVBQWUsR0FBR2QsS0FBSyxDQUFDZSw4QkFBTixFQUF4QjtBQUVBLGFBQ0UsNkJBQUMsZ0JBQUQ7QUFDRSxRQUFBLEVBQUUsRUFBQyxRQURMO0FBRUUsUUFBQSxTQUFTLEVBQUVELGVBRmI7QUFHRSxRQUFBLFFBQVEsRUFBRSxDQUhaO0FBSUUsUUFBQSxPQUFPLEVBQUUsQ0FBQyxDQUpaO0FBS0UsUUFBQSxRQUFRLEVBQUUsQ0FMWjtBQU1FLFFBQUEsT0FBTyxFQUFFLENBQUMsQ0FOWjtBQU9FLFFBQUEsSUFBSSxFQUFFLEdBUFI7QUFRRSx1QkFBYVY7QUFSZixTQVNNTixrQkFBa0IsQ0FBQ2tCLE1BVHpCLEVBVU1qQixLQVZOO0FBV0UsUUFBQSxRQUFRLEVBQUVPO0FBWFosVUFhR0UsU0FBUyxJQUNSLDZCQUFDLGdCQUFEO0FBQ0UsUUFBQSxVQUFVLEVBQUUsQ0FBQ1MsSUFBSSxDQUFDQyxLQUFMLENBQVdmLE1BQU0sR0FBRyxDQUFwQixDQURmO0FBRUUsUUFBQSxXQUFXLEVBQUVjLElBQUksQ0FBQ0MsS0FBTCxDQUFXZixNQUFNLEdBQUcsQ0FBcEIsQ0FGZjtBQUdFLFFBQUEsSUFBSSxFQUFFYyxJQUFJLENBQUNDLEtBQUwsQ0FBV2YsTUFBTSxHQUFHLENBQXBCO0FBSFIsUUFkSixFQW9CR0UsUUFwQkgsRUFxQkUsNkJBQUMsVUFBRDtBQUFNLFFBQUEsS0FBSyxFQUFDLFNBQVo7QUFBc0IsUUFBQSxJQUFJLEVBQUVRLElBQTVCO0FBQWtDLFFBQUEsSUFBSSxFQUFFLEVBQXhDO0FBQTRDLFFBQUEsVUFBVSxFQUFFO0FBQXhELFFBckJGLENBREY7QUF5QkQ7OztFQTlIOEJNLG9COztBQUEzQnJCLGtCOzhCQUFBQSxrQiwrQ0FLQ3NCLGtCQUFXQyxTLEVBS1hDLGVBQVFELFMsRUFLUkUsZ0JBQVNGLFMsRUFLVEcsY0FBT0gsUztBQUVWOzs7O0FBSUFqQixFQUFBQSxRQUFRLEVBQUVxQixtQkFBVUMsSTs7QUFFcEI7Ozs7QUFJQXBCLEVBQUFBLFFBQVEsRUFBRW1CLG1CQUFVQyxJOztBQUVwQjs7Ozs7Ozs7Ozs7O0FBWUFiLEVBQUFBLElBQUksRUFBRVksbUJBQVVFLE1BQVYsQ0FBaUJDLFU7O0FBRXZCOzs7QUFHQTVCLEVBQUFBLEtBQUssRUFBRXlCLG1CQUFVSSxNQUFWLENBQWlCRCxVOztBQUV4Qjs7OztBQUlBM0IsRUFBQUEsU0FBUyxFQUFFd0IsbUJBQVVFOzs4QkF6RG5CN0Isa0Isa0JBNERrQjtBQUNwQk0sRUFBQUEsUUFBUSxFQUFFLEtBRFU7QUFFcEJTLEVBQUFBLElBQUksRUFBRTtBQUZjLEM7OEJBNURsQmYsa0IsWUFpRVk7QUFDZHlCLEVBQUFBLFFBQVEsRUFBRSxVQURJO0FBRWRPLEVBQUFBLFVBQVUsRUFBRSxJQUZFO0FBR2RDLEVBQUFBLFVBQVUsRUFBRSxHQUhFO0FBSWRDLEVBQUFBLE9BQU8sRUFBRSxhQUpLO0FBS2RDLEVBQUFBLFVBQVUsRUFBRSxRQUxFO0FBTWRDLEVBQUFBLFFBQVEsRUFBRTtBQU5JLEM7O2VBZ0VILHNCQUFVcEMsa0JBQVYsQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgeyBkaW1lbnNpb25zLCBzcGFjaW5nLCBwb3NpdGlvbiwgbGF5b3V0IH0gZnJvbSAndWktYm94J1xuaW1wb3J0IHsgVGV4dCB9IGZyb20gJy4uLy4uL3R5cG9ncmFwaHknXG5pbXBvcnQgeyBJY29uIH0gZnJvbSAnLi4vLi4vaWNvbidcbmltcG9ydCB7IFNwaW5uZXIgfSBmcm9tICcuLi8uLi9zcGlubmVyJ1xuaW1wb3J0IHsgd2l0aFRoZW1lIH0gZnJvbSAnLi4vLi4vdGhlbWUnXG5cbmNsYXNzIFRleHREcm9wZG93bkJ1dHRvbiBleHRlbmRzIFB1cmVDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIC8qKlxuICAgICAqIENvbXBvc2VzIHRoZSBkaW1lbnNpb25zIHNwZWMgZnJvbSB0aGUgQm94IHByaW1pdGl2aWUuXG4gICAgICovXG4gICAgLi4uZGltZW5zaW9ucy5wcm9wVHlwZXMsXG5cbiAgICAvKipcbiAgICAgKiBDb21wb3NlcyB0aGUgc3BhY2luZyBzcGVjIGZyb20gdGhlIEJveCBwcmltaXRpdmllLlxuICAgICAqL1xuICAgIC4uLnNwYWNpbmcucHJvcFR5cGVzLFxuXG4gICAgLyoqXG4gICAgICogQ29tcG9zZXMgdGhlIHBvc2l0aW9uIHNwZWMgZnJvbSB0aGUgQm94IHByaW1pdGl2aWUuXG4gICAgICovXG4gICAgLi4ucG9zaXRpb24ucHJvcFR5cGVzLFxuXG4gICAgLyoqXG4gICAgICogQ29tcG9zZXMgdGhlIGxheW91dCBzcGVjIGZyb20gdGhlIEJveCBwcmltaXRpdmllLlxuICAgICAqL1xuICAgIC4uLmxheW91dC5wcm9wVHlwZXMsXG5cbiAgICAvKipcbiAgICAgKiBGb3JjZWZ1bGx5IHNldCB0aGUgYWN0aXZlIHN0YXRlIG9mIGEgYnV0dG9uLlxuICAgICAqIFVzZWZ1bCBpbiBjb25qdWN0aW9uIHdpdGggYSBQb3BvdmVyLlxuICAgICAqL1xuICAgIGlzQWN0aXZlOiBQcm9wVHlwZXMuYm9vbCxcblxuICAgIC8qKlxuICAgICAqIFdoZW4gdHJ1ZSwgdGhlIGJ1dHRvbiBpcyBkaXNhYmxlZC5cbiAgICAgKiBpc0xvYWRpbmcgYWxzbyBzZXRzIHRoZSBidXR0b24gdG8gZGlzYWJsZWQuXG4gICAgICovXG4gICAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxuXG4gICAgLyoqXG4gICAgICogTmFtZSBvZiBhIEJsdWVwcmludCBVSSBpY29uLCBvciBhbiBpY29uIGVsZW1lbnQsIHRvIHJlbmRlci5cbiAgICAgKiBUaGlzIHByb3AgaXMgcmVxdWlyZWQgYmVjYXVzZSBpdCBkZXRlcm1pbmVzIHRoZSBjb250ZW50IG9mIHRoZSBjb21wb25lbnQsIGJ1dCBpdCBjYW5cbiAgICAgKiBiZSBleHBsaWNpdGx5IHNldCB0byBmYWxzeSB2YWx1ZXMgdG8gcmVuZGVyIG5vdGhpbmcuXG4gICAgICpcbiAgICAgKiAtIElmIGBudWxsYCBvciBgdW5kZWZpbmVkYCBvciBgZmFsc2VgLCB0aGlzIGNvbXBvbmVudCB3aWxsIHJlbmRlciBub3RoaW5nLlxuICAgICAqIC0gSWYgZ2l2ZW4gYW4gYEljb25OYW1lYCAoYSBzdHJpbmcgbGl0ZXJhbCB1bmlvbiBvZiBhbGwgaWNvbiBuYW1lcyksXG4gICAgICogICB0aGF0IGljb24gd2lsbCBiZSByZW5kZXJlZCBhcyBhbiBgPHN2Zz5gIHdpdGggYDxwYXRoPmAgdGFncy5cbiAgICAgKiAtIElmIGdpdmVuIGEgYEpTWC5FbGVtZW50YCwgdGhhdCBlbGVtZW50IHdpbGwgYmUgcmVuZGVyZWQgYW5kIF9hbGwgb3RoZXIgcHJvcHMgb24gdGhpcyBjb21wb25lbnQgYXJlIGlnbm9yZWQuX1xuICAgICAqICAgVGhpcyB0eXBlIGlzIHN1cHBvcnRlZCB0byBzaW1wbGlmeSB1c2FnZSBvZiB0aGlzIGNvbXBvbmVudCBpbiBvdGhlciBCbHVlcHJpbnQgY29tcG9uZW50cy5cbiAgICAgKiAgIEFzIGEgY29uc3VtZXIsIHlvdSBzaG91bGQgbmV2ZXIgdXNlIGA8SWNvbiBpY29uPXs8ZWxlbWVudCAvPn1gIGRpcmVjdGx5OyBzaW1wbHkgcmVuZGVyIGA8ZWxlbWVudCAvPmAgaW5zdGVhZC5cbiAgICAgKi9cbiAgICBpY29uOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG5cbiAgICAvKipcbiAgICAgKiBUaGVtZSBwcm92aWRlZCBieSBUaGVtZVByb3ZpZGVyLlxuICAgICAqL1xuICAgIHRoZW1lOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG5cbiAgICAvKipcbiAgICAgKiBDbGFzcyBuYW1lIHBhc3NlZCB0byB0aGUgYnV0dG9uLlxuICAgICAqIE9ubHkgdXNlIGlmIHlvdSBrbm93IHdoYXQgeW91IGFyZSBkb2luZy5cbiAgICAgKi9cbiAgICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmdcbiAgfVxuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgaXNBY3RpdmU6IGZhbHNlLFxuICAgIGljb246ICdjYXJldC1kb3duJ1xuICB9XG5cbiAgc3RhdGljIHN0eWxlcyA9IHtcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICBmb250RmFtaWx5OiAndWknLFxuICAgIGZvbnRXZWlnaHQ6IDUwMCxcbiAgICBkaXNwbGF5OiAnaW5saW5lLWZsZXgnLFxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgIGZsZXhXcmFwOiAnbm93cmFwJ1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIHRoZW1lLFxuICAgICAgY2xhc3NOYW1lLFxuXG4gICAgICBpbnRlbnQsXG4gICAgICBoZWlnaHQsXG4gICAgICBpc0FjdGl2ZSxcbiAgICAgIGNoaWxkcmVuLFxuICAgICAgZGlzYWJsZWQsXG4gICAgICBhcHBlYXJhbmNlLFxuICAgICAgaXNMb2FkaW5nLFxuXG4gICAgICAvLyBQYWRkaW5nc1xuICAgICAgcGFkZGluZ1JpZ2h0LFxuICAgICAgcGFkZGluZ0xlZnQsXG4gICAgICBwYWRkaW5nVG9wLFxuICAgICAgcGFkZGluZ0JvdHRvbSxcblxuICAgICAgLy8gSWNvbnNcbiAgICAgIGljb24sXG5cbiAgICAgIC4uLnByb3BzXG4gICAgfSA9IHRoaXMucHJvcHNcblxuICAgIGNvbnN0IHRoZW1lZENsYXNzTmFtZSA9IHRoZW1lLmdldFRleHREcm9wZG93bkJ1dHRvbkNsYXNzTmFtZSgpXG5cbiAgICByZXR1cm4gKFxuICAgICAgPFRleHRcbiAgICAgICAgaXM9XCJidXR0b25cIlxuICAgICAgICBjbGFzc05hbWU9e3RoZW1lZENsYXNzTmFtZX1cbiAgICAgICAgcGFkZGluZ1g9ezR9XG4gICAgICAgIG1hcmdpblg9ey00fVxuICAgICAgICBwYWRkaW5nWT17Mn1cbiAgICAgICAgbWFyZ2luWT17LTJ9XG4gICAgICAgIHNpemU9ezMwMH1cbiAgICAgICAgZGF0YS1hY3RpdmU9e2lzQWN0aXZlfVxuICAgICAgICB7Li4uVGV4dERyb3Bkb3duQnV0dG9uLnN0eWxlc31cbiAgICAgICAgey4uLnByb3BzfVxuICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XG4gICAgICA+XG4gICAgICAgIHtpc0xvYWRpbmcgJiYgKFxuICAgICAgICAgIDxTcGlubmVyXG4gICAgICAgICAgICBtYXJnaW5MZWZ0PXstTWF0aC5yb3VuZChoZWlnaHQgLyA4KX1cbiAgICAgICAgICAgIG1hcmdpblJpZ2h0PXtNYXRoLnJvdW5kKGhlaWdodCAvIDQpfVxuICAgICAgICAgICAgc2l6ZT17TWF0aC5yb3VuZChoZWlnaHQgLyAyKX1cbiAgICAgICAgICAvPlxuICAgICAgICApfVxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgIDxJY29uIGNvbG9yPVwiZGVmYXVsdFwiIGljb249e2ljb259IHNpemU9ezEyfSBtYXJnaW5MZWZ0PXsyfSAvPlxuICAgICAgPC9UZXh0PlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoVGhlbWUoVGV4dERyb3Bkb3duQnV0dG9uKVxuIl19