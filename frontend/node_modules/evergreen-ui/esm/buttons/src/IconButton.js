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
import { dimensions, spacing, position, layout } from 'ui-box';
import { Icon } from '../../icon';
import { withTheme } from '../../theme';
import Button from './Button';

var IconButton =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(IconButton, _PureComponent);

  function IconButton() {
    _classCallCheck(this, IconButton);

    return _possibleConstructorReturn(this, _getPrototypeOf(IconButton).apply(this, arguments));
  }

  _createClass(IconButton, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          theme = _this$props.theme,
          iconAim = _this$props.iconAim,
          icon = _this$props.icon,
          iconSize = _this$props.iconSize,
          height = _this$props.height,
          intent = _this$props.intent,
          props = _objectWithoutProperties(_this$props, ["theme", "iconAim", "icon", "iconSize", "height", "intent"]);

      var size = iconSize || theme.getIconSizeForIconButton(height);
      return React.createElement(Button, _extends({
        intent: intent,
        height: height,
        width: height,
        paddingLeft: 0,
        paddingRight: 0,
        display: "flex",
        justifyContent: "center"
      }, props), React.createElement(Icon, {
        icon: icon,
        size: size,
        color: intent === 'none' ? 'default' : 'currentColor'
      }));
    }
  }]);

  return IconButton;
}(PureComponent);

IconButton.displayName = "IconButton";

_defineProperty(IconButton, "propTypes", _objectSpread({}, dimensions.propTypes, spacing.propTypes, position.propTypes, layout.propTypes, {
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
  icon: PropTypes.string,

  /**
   * Specifies an explicit icon size instead of the default value
   */
  iconSize: PropTypes.number,

  /**
   * The intent of the button.
   */
  intent: PropTypes.oneOf(['none', 'success', 'warning', 'danger']).isRequired,

  /**
   * The appearance of the button.
   */
  appearance: PropTypes.oneOf(['default', 'minimal', 'primary']).isRequired,

  /**
   * Forcefully set the active state of a button.
   * Useful in conjuction with a Popover.
   */
  isActive: PropTypes.bool,

  /**
   * When true, the button is disabled.
   * isLoading also sets the button to disabled.
   */
  disabled: PropTypes.bool,

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

_defineProperty(IconButton, "defaultProps", {
  intent: 'none',
  appearance: 'default',
  height: 32
});

export default withTheme(IconButton);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9idXR0b25zL3NyYy9JY29uQnV0dG9uLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiUHVyZUNvbXBvbmVudCIsIlByb3BUeXBlcyIsImRpbWVuc2lvbnMiLCJzcGFjaW5nIiwicG9zaXRpb24iLCJsYXlvdXQiLCJJY29uIiwid2l0aFRoZW1lIiwiQnV0dG9uIiwiSWNvbkJ1dHRvbiIsInByb3BzIiwidGhlbWUiLCJpY29uQWltIiwiaWNvbiIsImljb25TaXplIiwiaGVpZ2h0IiwiaW50ZW50Iiwic2l6ZSIsImdldEljb25TaXplRm9ySWNvbkJ1dHRvbiIsInByb3BUeXBlcyIsInN0cmluZyIsIm51bWJlciIsIm9uZU9mIiwiaXNSZXF1aXJlZCIsImFwcGVhcmFuY2UiLCJpc0FjdGl2ZSIsImJvb2wiLCJkaXNhYmxlZCIsIm9iamVjdCIsImNsYXNzTmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsT0FBT0EsS0FBUCxJQUFnQkMsYUFBaEIsUUFBcUMsT0FBckM7QUFDQSxPQUFPQyxTQUFQLE1BQXNCLFlBQXRCO0FBQ0EsU0FBU0MsVUFBVCxFQUFxQkMsT0FBckIsRUFBOEJDLFFBQTlCLEVBQXdDQyxNQUF4QyxRQUFzRCxRQUF0RDtBQUNBLFNBQVNDLElBQVQsUUFBcUIsWUFBckI7QUFDQSxTQUFTQyxTQUFULFFBQTBCLGFBQTFCO0FBQ0EsT0FBT0MsTUFBUCxNQUFtQixVQUFuQjs7SUFFTUMsVTs7Ozs7Ozs7Ozs7Ozs2QkFrRks7QUFBQSx3QkFTSCxLQUFLQyxLQVRGO0FBQUEsVUFFTEMsS0FGSyxlQUVMQSxLQUZLO0FBQUEsVUFHTEMsT0FISyxlQUdMQSxPQUhLO0FBQUEsVUFJTEMsSUFKSyxlQUlMQSxJQUpLO0FBQUEsVUFLTEMsUUFMSyxlQUtMQSxRQUxLO0FBQUEsVUFNTEMsTUFOSyxlQU1MQSxNQU5LO0FBQUEsVUFPTEMsTUFQSyxlQU9MQSxNQVBLO0FBQUEsVUFRRk4sS0FSRTs7QUFVUCxVQUFNTyxJQUFJLEdBQUdILFFBQVEsSUFBSUgsS0FBSyxDQUFDTyx3QkFBTixDQUErQkgsTUFBL0IsQ0FBekI7QUFFQSxhQUNFLG9CQUFDLE1BQUQ7QUFDRSxRQUFBLE1BQU0sRUFBRUMsTUFEVjtBQUVFLFFBQUEsTUFBTSxFQUFFRCxNQUZWO0FBR0UsUUFBQSxLQUFLLEVBQUVBLE1BSFQ7QUFJRSxRQUFBLFdBQVcsRUFBRSxDQUpmO0FBS0UsUUFBQSxZQUFZLEVBQUUsQ0FMaEI7QUFNRSxRQUFBLE9BQU8sRUFBQyxNQU5WO0FBT0UsUUFBQSxjQUFjLEVBQUM7QUFQakIsU0FRTUwsS0FSTixHQVVFLG9CQUFDLElBQUQ7QUFDRSxRQUFBLElBQUksRUFBRUcsSUFEUjtBQUVFLFFBQUEsSUFBSSxFQUFFSSxJQUZSO0FBR0UsUUFBQSxLQUFLLEVBQUVELE1BQU0sS0FBSyxNQUFYLEdBQW9CLFNBQXBCLEdBQWdDO0FBSHpDLFFBVkYsQ0FERjtBQWtCRDs7OztFQWhIc0JoQixhOztBQUFuQlMsVTs7Z0JBQUFBLFUsaUNBS0NQLFVBQVUsQ0FBQ2lCLFMsRUFLWGhCLE9BQU8sQ0FBQ2dCLFMsRUFLUmYsUUFBUSxDQUFDZSxTLEVBS1RkLE1BQU0sQ0FBQ2MsUztBQUVWOzs7Ozs7Ozs7Ozs7QUFZQU4sRUFBQUEsSUFBSSxFQUFFWixTQUFTLENBQUNtQixNOztBQUVoQjs7O0FBR0FOLEVBQUFBLFFBQVEsRUFBRWIsU0FBUyxDQUFDb0IsTTs7QUFFcEI7OztBQUdBTCxFQUFBQSxNQUFNLEVBQUVmLFNBQVMsQ0FBQ3FCLEtBQVYsQ0FBZ0IsQ0FBQyxNQUFELEVBQVMsU0FBVCxFQUFvQixTQUFwQixFQUErQixRQUEvQixDQUFoQixFQUNMQyxVOztBQUVIOzs7QUFHQUMsRUFBQUEsVUFBVSxFQUFFdkIsU0FBUyxDQUFDcUIsS0FBVixDQUFnQixDQUFDLFNBQUQsRUFBWSxTQUFaLEVBQXVCLFNBQXZCLENBQWhCLEVBQW1EQyxVOztBQUUvRDs7OztBQUlBRSxFQUFBQSxRQUFRLEVBQUV4QixTQUFTLENBQUN5QixJOztBQUVwQjs7OztBQUlBQyxFQUFBQSxRQUFRLEVBQUUxQixTQUFTLENBQUN5QixJOztBQUVwQjs7O0FBR0FmLEVBQUFBLEtBQUssRUFBRVYsU0FBUyxDQUFDMkIsTUFBVixDQUFpQkwsVTs7QUFFeEI7Ozs7QUFJQU0sRUFBQUEsU0FBUyxFQUFFNUIsU0FBUyxDQUFDbUI7OztnQkF6RW5CWCxVLGtCQTRFa0I7QUFDcEJPLEVBQUFBLE1BQU0sRUFBRSxNQURZO0FBRXBCUSxFQUFBQSxVQUFVLEVBQUUsU0FGUTtBQUdwQlQsRUFBQUEsTUFBTSxFQUFFO0FBSFksQzs7QUF1Q3hCLGVBQWVSLFNBQVMsQ0FBQ0UsVUFBRCxDQUF4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgeyBkaW1lbnNpb25zLCBzcGFjaW5nLCBwb3NpdGlvbiwgbGF5b3V0IH0gZnJvbSAndWktYm94J1xuaW1wb3J0IHsgSWNvbiB9IGZyb20gJy4uLy4uL2ljb24nXG5pbXBvcnQgeyB3aXRoVGhlbWUgfSBmcm9tICcuLi8uLi90aGVtZSdcbmltcG9ydCBCdXR0b24gZnJvbSAnLi9CdXR0b24nXG5cbmNsYXNzIEljb25CdXR0b24gZXh0ZW5kcyBQdXJlQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAvKipcbiAgICAgKiBDb21wb3NlcyB0aGUgZGltZW5zaW9ucyBzcGVjIGZyb20gdGhlIEJveCBwcmltaXRpdmllLlxuICAgICAqL1xuICAgIC4uLmRpbWVuc2lvbnMucHJvcFR5cGVzLFxuXG4gICAgLyoqXG4gICAgICogQ29tcG9zZXMgdGhlIHNwYWNpbmcgc3BlYyBmcm9tIHRoZSBCb3ggcHJpbWl0aXZpZS5cbiAgICAgKi9cbiAgICAuLi5zcGFjaW5nLnByb3BUeXBlcyxcblxuICAgIC8qKlxuICAgICAqIENvbXBvc2VzIHRoZSBwb3NpdGlvbiBzcGVjIGZyb20gdGhlIEJveCBwcmltaXRpdmllLlxuICAgICAqL1xuICAgIC4uLnBvc2l0aW9uLnByb3BUeXBlcyxcblxuICAgIC8qKlxuICAgICAqIENvbXBvc2VzIHRoZSBsYXlvdXQgc3BlYyBmcm9tIHRoZSBCb3ggcHJpbWl0aXZpZS5cbiAgICAgKi9cbiAgICAuLi5sYXlvdXQucHJvcFR5cGVzLFxuXG4gICAgLyoqXG4gICAgICogTmFtZSBvZiBhIEJsdWVwcmludCBVSSBpY29uLCBvciBhbiBpY29uIGVsZW1lbnQsIHRvIHJlbmRlci5cbiAgICAgKiBUaGlzIHByb3AgaXMgcmVxdWlyZWQgYmVjYXVzZSBpdCBkZXRlcm1pbmVzIHRoZSBjb250ZW50IG9mIHRoZSBjb21wb25lbnQsIGJ1dCBpdCBjYW5cbiAgICAgKiBiZSBleHBsaWNpdGx5IHNldCB0byBmYWxzeSB2YWx1ZXMgdG8gcmVuZGVyIG5vdGhpbmcuXG4gICAgICpcbiAgICAgKiAtIElmIGBudWxsYCBvciBgdW5kZWZpbmVkYCBvciBgZmFsc2VgLCB0aGlzIGNvbXBvbmVudCB3aWxsIHJlbmRlciBub3RoaW5nLlxuICAgICAqIC0gSWYgZ2l2ZW4gYW4gYEljb25OYW1lYCAoYSBzdHJpbmcgbGl0ZXJhbCB1bmlvbiBvZiBhbGwgaWNvbiBuYW1lcyksXG4gICAgICogICB0aGF0IGljb24gd2lsbCBiZSByZW5kZXJlZCBhcyBhbiBgPHN2Zz5gIHdpdGggYDxwYXRoPmAgdGFncy5cbiAgICAgKiAtIElmIGdpdmVuIGEgYEpTWC5FbGVtZW50YCwgdGhhdCBlbGVtZW50IHdpbGwgYmUgcmVuZGVyZWQgYW5kIF9hbGwgb3RoZXIgcHJvcHMgb24gdGhpcyBjb21wb25lbnQgYXJlIGlnbm9yZWQuX1xuICAgICAqICAgVGhpcyB0eXBlIGlzIHN1cHBvcnRlZCB0byBzaW1wbGlmeSB1c2FnZSBvZiB0aGlzIGNvbXBvbmVudCBpbiBvdGhlciBCbHVlcHJpbnQgY29tcG9uZW50cy5cbiAgICAgKiAgIEFzIGEgY29uc3VtZXIsIHlvdSBzaG91bGQgbmV2ZXIgdXNlIGA8SWNvbiBpY29uPXs8ZWxlbWVudCAvPn1gIGRpcmVjdGx5OyBzaW1wbHkgcmVuZGVyIGA8ZWxlbWVudCAvPmAgaW5zdGVhZC5cbiAgICAgKi9cbiAgICBpY29uOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gICAgLyoqXG4gICAgICogU3BlY2lmaWVzIGFuIGV4cGxpY2l0IGljb24gc2l6ZSBpbnN0ZWFkIG9mIHRoZSBkZWZhdWx0IHZhbHVlXG4gICAgICovXG4gICAgaWNvblNpemU6IFByb3BUeXBlcy5udW1iZXIsXG5cbiAgICAvKipcbiAgICAgKiBUaGUgaW50ZW50IG9mIHRoZSBidXR0b24uXG4gICAgICovXG4gICAgaW50ZW50OiBQcm9wVHlwZXMub25lT2YoWydub25lJywgJ3N1Y2Nlc3MnLCAnd2FybmluZycsICdkYW5nZXInXSlcbiAgICAgIC5pc1JlcXVpcmVkLFxuXG4gICAgLyoqXG4gICAgICogVGhlIGFwcGVhcmFuY2Ugb2YgdGhlIGJ1dHRvbi5cbiAgICAgKi9cbiAgICBhcHBlYXJhbmNlOiBQcm9wVHlwZXMub25lT2YoWydkZWZhdWx0JywgJ21pbmltYWwnLCAncHJpbWFyeSddKS5pc1JlcXVpcmVkLFxuXG4gICAgLyoqXG4gICAgICogRm9yY2VmdWxseSBzZXQgdGhlIGFjdGl2ZSBzdGF0ZSBvZiBhIGJ1dHRvbi5cbiAgICAgKiBVc2VmdWwgaW4gY29uanVjdGlvbiB3aXRoIGEgUG9wb3Zlci5cbiAgICAgKi9cbiAgICBpc0FjdGl2ZTogUHJvcFR5cGVzLmJvb2wsXG5cbiAgICAvKipcbiAgICAgKiBXaGVuIHRydWUsIHRoZSBidXR0b24gaXMgZGlzYWJsZWQuXG4gICAgICogaXNMb2FkaW5nIGFsc28gc2V0cyB0aGUgYnV0dG9uIHRvIGRpc2FibGVkLlxuICAgICAqL1xuICAgIGRpc2FibGVkOiBQcm9wVHlwZXMuYm9vbCxcblxuICAgIC8qKlxuICAgICAqIFRoZW1lIHByb3ZpZGVkIGJ5IFRoZW1lUHJvdmlkZXIuXG4gICAgICovXG4gICAgdGhlbWU6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcblxuICAgIC8qKlxuICAgICAqIENsYXNzIG5hbWUgcGFzc2VkIHRvIHRoZSBidXR0b24uXG4gICAgICogT25seSB1c2UgaWYgeW91IGtub3cgd2hhdCB5b3UgYXJlIGRvaW5nLlxuICAgICAqL1xuICAgIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZ1xuICB9XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBpbnRlbnQ6ICdub25lJyxcbiAgICBhcHBlYXJhbmNlOiAnZGVmYXVsdCcsXG4gICAgaGVpZ2h0OiAzMlxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIHRoZW1lLFxuICAgICAgaWNvbkFpbSxcbiAgICAgIGljb24sXG4gICAgICBpY29uU2l6ZSxcbiAgICAgIGhlaWdodCxcbiAgICAgIGludGVudCxcbiAgICAgIC4uLnByb3BzXG4gICAgfSA9IHRoaXMucHJvcHNcbiAgICBjb25zdCBzaXplID0gaWNvblNpemUgfHwgdGhlbWUuZ2V0SWNvblNpemVGb3JJY29uQnV0dG9uKGhlaWdodClcblxuICAgIHJldHVybiAoXG4gICAgICA8QnV0dG9uXG4gICAgICAgIGludGVudD17aW50ZW50fVxuICAgICAgICBoZWlnaHQ9e2hlaWdodH1cbiAgICAgICAgd2lkdGg9e2hlaWdodH1cbiAgICAgICAgcGFkZGluZ0xlZnQ9ezB9XG4gICAgICAgIHBhZGRpbmdSaWdodD17MH1cbiAgICAgICAgZGlzcGxheT1cImZsZXhcIlxuICAgICAgICBqdXN0aWZ5Q29udGVudD1cImNlbnRlclwiXG4gICAgICAgIHsuLi5wcm9wc31cbiAgICAgID5cbiAgICAgICAgPEljb25cbiAgICAgICAgICBpY29uPXtpY29ufVxuICAgICAgICAgIHNpemU9e3NpemV9XG4gICAgICAgICAgY29sb3I9e2ludGVudCA9PT0gJ25vbmUnID8gJ2RlZmF1bHQnIDogJ2N1cnJlbnRDb2xvcid9XG4gICAgICAgIC8+XG4gICAgICA8L0J1dHRvbj5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFRoZW1lKEljb25CdXR0b24pXG4iXX0=