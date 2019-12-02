import _extends from "@babel/runtime/helpers/esm/extends";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";

var _css;

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Box from 'ui-box';
import { css } from 'glamor';
import cx from 'classnames';
import { Text } from '../../typography';
import { withTheme } from '../../theme';
var labelClass = css({
  display: 'flex',
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative'
});
var wrapperClass = css((_css = {
  position: 'relative',
  display: 'flex',
  flex: 1,
  cursor: 'pointer',
  marginLeft: '-1px'
}, _defineProperty(_css, ":first-child .".concat(labelClass), {
  borderTopLeftRadius: 3,
  borderBottomLeftRadius: 3
}), _defineProperty(_css, ":last-child .".concat(labelClass), {
  borderTopRightRadius: 3,
  borderBottomRightRadius: 3
}), _css));
var offscreenCss = css({
  overflow: 'hidden',
  position: 'absolute',
  height: '1px',
  width: '1px',
  padding: 0,
  margin: '-1px',
  border: 0,
  clip: 'rect(0 0 0 0)'
});

var SegmentedControlRadio =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(SegmentedControlRadio, _PureComponent);

  function SegmentedControlRadio() {
    _classCallCheck(this, SegmentedControlRadio);

    return _possibleConstructorReturn(this, _getPrototypeOf(SegmentedControlRadio).apply(this, arguments));
  }

  _createClass(SegmentedControlRadio, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          theme = _this$props.theme,
          id = _this$props.id,
          name = _this$props.name,
          label = _this$props.label,
          value = _this$props.value,
          height = _this$props.height,
          checked = _this$props.checked,
          _onChange = _this$props.onChange,
          appearance = _this$props.appearance,
          isFirstItem = _this$props.isFirstItem,
          isLastItem = _this$props.isLastItem;
      var themedClassName = theme.getSegmentedControlRadioClassName(appearance);
      var textSize = theme.getTextSizeForControlHeight(height);
      var borderRadius = theme.getBorderRadiusForControlHeight(height);
      return React.createElement(Box, _extends({
        className: cx(wrapperClass.toString(), themedClassName),
        "data-active": checked
      }, isFirstItem ? {
        borderTopLeftRadius: borderRadius,
        borderBottomLeftRadius: borderRadius
      } : {}, isLastItem ? {
        borderTopRightRadius: borderRadius,
        borderBottomRightRadius: borderRadius
      } : {}), React.createElement("input", {
        type: "radio",
        id: id,
        className: "".concat(offscreenCss),
        name: name,
        value: value,
        checked: checked,
        onChange: function onChange(e) {
          return _onChange(e.target.value);
        }
      }), React.createElement(Text, {
        is: "label",
        cursor: "pointer",
        htmlFor: id,
        fontWeight: 500,
        size: textSize,
        className: "".concat(labelClass)
      }, label));
    }
  }]);

  return SegmentedControlRadio;
}(PureComponent);

SegmentedControlRadio.displayName = "SegmentedControlRadio";

_defineProperty(SegmentedControlRadio, "propTypes", {
  /**
   * The name attribute of the radio input.
   */
  name: PropTypes.string.isRequired,

  /**
   * The label used for the radio.
   */
  label: PropTypes.node.isRequired,

  /**
   * The value attribute of the radio input.
   */
  value: PropTypes.string.isRequired,

  /**
   * The height of the control.
   */
  height: PropTypes.number.isRequired,

  /**
   * When true, the radio input is checked.
   */
  checked: PropTypes.bool.isRequired,

  /**
   * Function called when the state changes.
   */
  onChange: PropTypes.func.isRequired,

  /**
   * The appearance of the control. Currently only `default` is possible.
   */
  appearance: PropTypes.string.isRequired,

  /**
   * When true, this item is the first item.
   */
  isFirstItem: PropTypes.bool,

  /**
   * When true, this item is the last item.
   */
  isLastItem: PropTypes.bool,

  /**
   * The unique id of the radio option.
   */
  id: PropTypes.string,

  /**
   * Theme provided by ThemeProvider.
   */
  theme: PropTypes.object.isRequired
});

export default withTheme(SegmentedControlRadio);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zZWdtZW50ZWQtY29udHJvbC9zcmMvU2VnbWVudGVkQ29udHJvbFJhZGlvLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiUHVyZUNvbXBvbmVudCIsIlByb3BUeXBlcyIsIkJveCIsImNzcyIsImN4IiwiVGV4dCIsIndpdGhUaGVtZSIsImxhYmVsQ2xhc3MiLCJkaXNwbGF5IiwiZmxleCIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsInBvc2l0aW9uIiwid3JhcHBlckNsYXNzIiwiY3Vyc29yIiwibWFyZ2luTGVmdCIsImJvcmRlclRvcExlZnRSYWRpdXMiLCJib3JkZXJCb3R0b21MZWZ0UmFkaXVzIiwiYm9yZGVyVG9wUmlnaHRSYWRpdXMiLCJib3JkZXJCb3R0b21SaWdodFJhZGl1cyIsIm9mZnNjcmVlbkNzcyIsIm92ZXJmbG93IiwiaGVpZ2h0Iiwid2lkdGgiLCJwYWRkaW5nIiwibWFyZ2luIiwiYm9yZGVyIiwiY2xpcCIsIlNlZ21lbnRlZENvbnRyb2xSYWRpbyIsInByb3BzIiwidGhlbWUiLCJpZCIsIm5hbWUiLCJsYWJlbCIsInZhbHVlIiwiY2hlY2tlZCIsIm9uQ2hhbmdlIiwiYXBwZWFyYW5jZSIsImlzRmlyc3RJdGVtIiwiaXNMYXN0SXRlbSIsInRoZW1lZENsYXNzTmFtZSIsImdldFNlZ21lbnRlZENvbnRyb2xSYWRpb0NsYXNzTmFtZSIsInRleHRTaXplIiwiZ2V0VGV4dFNpemVGb3JDb250cm9sSGVpZ2h0IiwiYm9yZGVyUmFkaXVzIiwiZ2V0Qm9yZGVyUmFkaXVzRm9yQ29udHJvbEhlaWdodCIsInRvU3RyaW5nIiwiZSIsInRhcmdldCIsInN0cmluZyIsImlzUmVxdWlyZWQiLCJub2RlIiwibnVtYmVyIiwiYm9vbCIsImZ1bmMiLCJvYmplY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxPQUFPQSxLQUFQLElBQWdCQyxhQUFoQixRQUFxQyxPQUFyQztBQUNBLE9BQU9DLFNBQVAsTUFBc0IsWUFBdEI7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RCxNQUFWLENBQWlCQyxVQWxDWjs7QUFvQ2pCOzs7QUFHQVosRUFBQUEsV0FBVyxFQUFFckMsU0FBUyxDQUFDb0QsSUF2Q047O0FBeUNqQjs7O0FBR0FkLEVBQUFBLFVBQVUsRUFBRXRDLFNBQVMsQ0FBQ29ELElBNUNMOztBQThDakI7OztBQUdBdEIsRUFBQUEsRUFBRSxFQUFFOUIsU0FBUyxDQUFDZ0QsTUFqREc7O0FBbURqQjs7O0FBR0FuQixFQUFBQSxLQUFLLEVBQUU3QixTQUFTLENBQUNzRCxNQUFWLENBQWlCTDtBQXREUCxDOztBQXNIckIsZUFBZTVDLFNBQVMsQ0FBQ3NCLHFCQUFELENBQXhCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCBCb3ggZnJvbSAndWktYm94J1xuaW1wb3J0IHsgY3NzIH0gZnJvbSAnZ2xhbW9yJ1xuaW1wb3J0IGN4IGZyb20gJ2NsYXNzbmFtZXMnXG5pbXBvcnQgeyBUZXh0IH0gZnJvbSAnLi4vLi4vdHlwb2dyYXBoeSdcbmltcG9ydCB7IHdpdGhUaGVtZSB9IGZyb20gJy4uLy4uL3RoZW1lJ1xuXG5jb25zdCBsYWJlbENsYXNzID0gY3NzKHtcbiAgZGlzcGxheTogJ2ZsZXgnLFxuICBmbGV4OiAxLFxuICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICBwb3NpdGlvbjogJ3JlbGF0aXZlJ1xufSlcblxuY29uc3Qgd3JhcHBlckNsYXNzID0gY3NzKHtcbiAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gIGRpc3BsYXk6ICdmbGV4JyxcbiAgZmxleDogMSxcbiAgY3Vyc29yOiAncG9pbnRlcicsXG4gIG1hcmdpbkxlZnQ6ICctMXB4JyxcbiAgW2A6Zmlyc3QtY2hpbGQgLiR7bGFiZWxDbGFzc31gXToge1xuICAgIGJvcmRlclRvcExlZnRSYWRpdXM6IDMsXG4gICAgYm9yZGVyQm90dG9tTGVmdFJhZGl1czogM1xuICB9LFxuICBbYDpsYXN0LWNoaWxkIC4ke2xhYmVsQ2xhc3N9YF06IHtcbiAgICBib3JkZXJUb3BSaWdodFJhZGl1czogMyxcbiAgICBib3JkZXJCb3R0b21SaWdodFJhZGl1czogM1xuICB9XG59KVxuXG5jb25zdCBvZmZzY3JlZW5Dc3MgPSBjc3Moe1xuICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICBoZWlnaHQ6ICcxcHgnLFxuICB3aWR0aDogJzFweCcsXG4gIHBhZGRpbmc6IDAsXG4gIG1hcmdpbjogJy0xcHgnLFxuICBib3JkZXI6IDAsXG4gIGNsaXA6ICdyZWN0KDAgMCAwIDApJ1xufSlcblxuY2xhc3MgU2VnbWVudGVkQ29udHJvbFJhZGlvIGV4dGVuZHMgUHVyZUNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgLyoqXG4gICAgICogVGhlIG5hbWUgYXR0cmlidXRlIG9mIHRoZSByYWRpbyBpbnB1dC5cbiAgICAgKi9cbiAgICBuYW1lOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG5cbiAgICAvKipcbiAgICAgKiBUaGUgbGFiZWwgdXNlZCBmb3IgdGhlIHJhZGlvLlxuICAgICAqL1xuICAgIGxhYmVsOiBQcm9wVHlwZXMubm9kZS5pc1JlcXVpcmVkLFxuXG4gICAgLyoqXG4gICAgICogVGhlIHZhbHVlIGF0dHJpYnV0ZSBvZiB0aGUgcmFkaW8gaW5wdXQuXG4gICAgICovXG4gICAgdmFsdWU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcblxuICAgIC8qKlxuICAgICAqIFRoZSBoZWlnaHQgb2YgdGhlIGNvbnRyb2wuXG4gICAgICovXG4gICAgaGVpZ2h0OiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG5cbiAgICAvKipcbiAgICAgKiBXaGVuIHRydWUsIHRoZSByYWRpbyBpbnB1dCBpcyBjaGVja2VkLlxuICAgICAqL1xuICAgIGNoZWNrZWQ6IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXG5cbiAgICAvKipcbiAgICAgKiBGdW5jdGlvbiBjYWxsZWQgd2hlbiB0aGUgc3RhdGUgY2hhbmdlcy5cbiAgICAgKi9cbiAgICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcblxuICAgIC8qKlxuICAgICAqIFRoZSBhcHBlYXJhbmNlIG9mIHRoZSBjb250cm9sLiBDdXJyZW50bHkgb25seSBgZGVmYXVsdGAgaXMgcG9zc2libGUuXG4gICAgICovXG4gICAgYXBwZWFyYW5jZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuXG4gICAgLyoqXG4gICAgICogV2hlbiB0cnVlLCB0aGlzIGl0ZW0gaXMgdGhlIGZpcnN0IGl0ZW0uXG4gICAgICovXG4gICAgaXNGaXJzdEl0ZW06IFByb3BUeXBlcy5ib29sLFxuXG4gICAgLyoqXG4gICAgICogV2hlbiB0cnVlLCB0aGlzIGl0ZW0gaXMgdGhlIGxhc3QgaXRlbS5cbiAgICAgKi9cbiAgICBpc0xhc3RJdGVtOiBQcm9wVHlwZXMuYm9vbCxcblxuICAgIC8qKlxuICAgICAqIFRoZSB1bmlxdWUgaWQgb2YgdGhlIHJhZGlvIG9wdGlvbi5cbiAgICAgKi9cbiAgICBpZDogUHJvcFR5cGVzLnN0cmluZyxcblxuICAgIC8qKlxuICAgICAqIFRoZW1lIHByb3ZpZGVkIGJ5IFRoZW1lUHJvdmlkZXIuXG4gICAgICovXG4gICAgdGhlbWU6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZFxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIHRoZW1lLFxuXG4gICAgICBpZCxcbiAgICAgIG5hbWUsXG4gICAgICBsYWJlbCxcbiAgICAgIHZhbHVlLFxuICAgICAgaGVpZ2h0LFxuICAgICAgY2hlY2tlZCxcbiAgICAgIG9uQ2hhbmdlLFxuICAgICAgYXBwZWFyYW5jZSxcbiAgICAgIGlzRmlyc3RJdGVtLFxuICAgICAgaXNMYXN0SXRlbVxuICAgIH0gPSB0aGlzLnByb3BzXG5cbiAgICBjb25zdCB0aGVtZWRDbGFzc05hbWUgPSB0aGVtZS5nZXRTZWdtZW50ZWRDb250cm9sUmFkaW9DbGFzc05hbWUoYXBwZWFyYW5jZSlcbiAgICBjb25zdCB0ZXh0U2l6ZSA9IHRoZW1lLmdldFRleHRTaXplRm9yQ29udHJvbEhlaWdodChoZWlnaHQpXG4gICAgY29uc3QgYm9yZGVyUmFkaXVzID0gdGhlbWUuZ2V0Qm9yZGVyUmFkaXVzRm9yQ29udHJvbEhlaWdodChoZWlnaHQpXG5cbiAgICByZXR1cm4gKFxuICAgICAgPEJveFxuICAgICAgICBjbGFzc05hbWU9e2N4KHdyYXBwZXJDbGFzcy50b1N0cmluZygpLCB0aGVtZWRDbGFzc05hbWUpfVxuICAgICAgICBkYXRhLWFjdGl2ZT17Y2hlY2tlZH1cbiAgICAgICAgey4uLihpc0ZpcnN0SXRlbVxuICAgICAgICAgID8ge1xuICAgICAgICAgICAgICBib3JkZXJUb3BMZWZ0UmFkaXVzOiBib3JkZXJSYWRpdXMsXG4gICAgICAgICAgICAgIGJvcmRlckJvdHRvbUxlZnRSYWRpdXM6IGJvcmRlclJhZGl1c1xuICAgICAgICAgICAgfVxuICAgICAgICAgIDoge30pfVxuICAgICAgICB7Li4uKGlzTGFzdEl0ZW1cbiAgICAgICAgICA/IHtcbiAgICAgICAgICAgICAgYm9yZGVyVG9wUmlnaHRSYWRpdXM6IGJvcmRlclJhZGl1cyxcbiAgICAgICAgICAgICAgYm9yZGVyQm90dG9tUmlnaHRSYWRpdXM6IGJvcmRlclJhZGl1c1xuICAgICAgICAgICAgfVxuICAgICAgICAgIDoge30pfVxuICAgICAgPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICB0eXBlPVwicmFkaW9cIlxuICAgICAgICAgIGlkPXtpZH1cbiAgICAgICAgICBjbGFzc05hbWU9e2Ake29mZnNjcmVlbkNzc31gfVxuICAgICAgICAgIG5hbWU9e25hbWV9XG4gICAgICAgICAgdmFsdWU9e3ZhbHVlfVxuICAgICAgICAgIGNoZWNrZWQ9e2NoZWNrZWR9XG4gICAgICAgICAgb25DaGFuZ2U9e2UgPT4gb25DaGFuZ2UoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAvPlxuICAgICAgICA8VGV4dFxuICAgICAgICAgIGlzPVwibGFiZWxcIlxuICAgICAgICAgIGN1cnNvcj1cInBvaW50ZXJcIlxuICAgICAgICAgIGh0bWxGb3I9e2lkfVxuICAgICAgICAgIGZvbnRXZWlnaHQ9ezUwMH1cbiAgICAgICAgICBzaXplPXt0ZXh0U2l6ZX1cbiAgICAgICAgICBjbGFzc05hbWU9e2Ake2xhYmVsQ2xhc3N9YH1cbiAgICAgICAgPlxuICAgICAgICAgIHtsYWJlbH1cbiAgICAgICAgPC9UZXh0PlxuICAgICAgPC9Cb3g+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhUaGVtZShTZWdtZW50ZWRDb250cm9sUmFkaW8pXG4iXX0=