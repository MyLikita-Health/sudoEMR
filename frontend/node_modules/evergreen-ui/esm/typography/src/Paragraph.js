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

var Paragraph =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(Paragraph, _PureComponent);

  function Paragraph() {
    _classCallCheck(this, Paragraph);

    return _possibleConstructorReturn(this, _getPrototypeOf(Paragraph).apply(this, arguments));
  }

  _createClass(Paragraph, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          theme = _this$props.theme,
          size = _this$props.size,
          color = _this$props.color,
          fontFamily = _this$props.fontFamily,
          marginTop = _this$props.marginTop,
          props = _objectWithoutProperties(_this$props, ["theme", "size", "color", "fontFamily", "marginTop"]);

      var _theme$getParagraphSt = theme.getParagraphStyle(size),
          defaultMarginTop = _theme$getParagraphSt.marginTop,
          textStyle = _objectWithoutProperties(_theme$getParagraphSt, ["marginTop"]);

      var finalMarginTop = marginTop === 'default' ? defaultMarginTop : marginTop;
      return React.createElement(Box, _extends({
        is: "p",
        color: theme.getTextColor(color),
        fontFamily: theme.getFontFamily(fontFamily),
        marginTop: finalMarginTop || 0,
        marginBottom: 0
      }, textStyle, props));
    }
  }]);

  return Paragraph;
}(PureComponent);

Paragraph.displayName = "Paragraph";

_defineProperty(Paragraph, "propTypes", _objectSpread({}, Box.propTypes, {
  /**
   * Size of the text style.
   * Can be: 300, 400, 500.
   */
  size: PropTypes.oneOf([300, 400, 500]).isRequired,

  /**
   * Font family.
   * Can be: `ui`, `display` or `mono` or a custom font family.
   */
  fontFamily: PropTypes.string.isRequired,

  /**
   * Theme provided by ThemeProvider.
   */
  theme: PropTypes.object.isRequired
}));

_defineProperty(Paragraph, "defaultProps", {
  size: 400,
  color: 'default',
  fontFamily: 'ui'
});

export default withTheme(Paragraph);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90eXBvZ3JhcGh5L3NyYy9QYXJhZ3JhcGguanMiXSwibmFtZXMiOlsiUmVhY3QiLCJQdXJlQ29tcG9uZW50IiwiUHJvcFR5cGVzIiwiQm94Iiwid2l0aFRoZW1lIiwiUGFyYWdyYXBoIiwicHJvcHMiLCJ0aGVtZSIsInNpemUiLCJjb2xvciIsImZvbnRGYW1pbHkiLCJtYXJnaW5Ub3AiLCJnZXRQYXJhZ3JhcGhTdHlsZSIsImRlZmF1bHRNYXJnaW5Ub3AiLCJ0ZXh0U3R5bGUiLCJmaW5hbE1hcmdpblRvcCIsImdldFRleHRDb2xvciIsImdldEZvbnRGYW1pbHkiLCJwcm9wVHlwZXMiLCJvbmVPZiIsImlzUmVxdWlyZWQiLCJzdHJpbmciLCJvYmplY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLE9BQU9BLEtBQVAsSUFBZ0JDLGFBQWhCLFFBQXFDLE9BQXJDO0FBQ0EsT0FBT0MsU0FBUCxNQUFzQixZQUF0QjtBQUNBLE9BQU9DLEdBQVAsTUFBZ0IsUUFBaEI7QUFDQSxTQUFTQyxTQUFULFFBQTBCLGFBQTFCOztJQUVNQyxTOzs7Ozs7Ozs7Ozs7OzZCQStCSztBQUFBLHdCQUN5RCxLQUFLQyxLQUQ5RDtBQUFBLFVBQ0NDLEtBREQsZUFDQ0EsS0FERDtBQUFBLFVBQ1FDLElBRFIsZUFDUUEsSUFEUjtBQUFBLFVBQ2NDLEtBRGQsZUFDY0EsS0FEZDtBQUFBLFVBQ3FCQyxVQURyQixlQUNxQkEsVUFEckI7QUFBQSxVQUNpQ0MsU0FEakMsZUFDaUNBLFNBRGpDO0FBQUEsVUFDK0NMLEtBRC9DOztBQUFBLGtDQU1IQyxLQUFLLENBQUNLLGlCQUFOLENBQXdCSixJQUF4QixDQU5HO0FBQUEsVUFJTUssZ0JBSk4seUJBSUxGLFNBSks7QUFBQSxVQUtGRyxTQUxFOztBQVFQLFVBQU1DLGNBQWMsR0FDbEJKLFNBQVMsS0FBSyxTQUFkLEdBQTBCRSxnQkFBMUIsR0FBNkNGLFNBRC9DO0FBR0EsYUFDRSxvQkFBQyxHQUFEO0FBQ0UsUUFBQSxFQUFFLEVBQUMsR0FETDtBQUVFLFFBQUEsS0FBSyxFQUFFSixLQUFLLENBQUNTLFlBQU4sQ0FBbUJQLEtBQW5CLENBRlQ7QUFHRSxRQUFBLFVBQVUsRUFBRUYsS0FBSyxDQUFDVSxhQUFOLENBQW9CUCxVQUFwQixDQUhkO0FBSUUsUUFBQSxTQUFTLEVBQUVLLGNBQWMsSUFBSSxDQUovQjtBQUtFLFFBQUEsWUFBWSxFQUFFO0FBTGhCLFNBTU1ELFNBTk4sRUFPTVIsS0FQTixFQURGO0FBV0Q7Ozs7RUFyRHFCTCxhOztBQUFsQkksUzs7Z0JBQUFBLFMsaUNBS0NGLEdBQUcsQ0FBQ2UsUztBQUVQOzs7O0FBSUFWLEVBQUFBLElBQUksRUFBRU4sU0FBUyxDQUFDaUIsS0FBVixDQUFnQixDQUFDLEdBQUQsRUFBTSxHQUFOLEVBQVcsR0FBWCxDQUFoQixFQUFpQ0MsVTs7QUFFdkM7Ozs7QUFJQVYsRUFBQUEsVUFBVSxFQUFFUixTQUFTLENBQUNtQixNQUFWLENBQWlCRCxVOztBQUU3Qjs7O0FBR0FiLEVBQUFBLEtBQUssRUFBRUwsU0FBUyxDQUFDb0IsTUFBVixDQUFpQkY7OztnQkF0QnRCZixTLGtCQXlCa0I7QUFDcEJHLEVBQUFBLElBQUksRUFBRSxHQURjO0FBRXBCQyxFQUFBQSxLQUFLLEVBQUUsU0FGYTtBQUdwQkMsRUFBQUEsVUFBVSxFQUFFO0FBSFEsQzs7QUErQnhCLGVBQWVOLFNBQVMsQ0FBQ0MsU0FBRCxDQUF4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgQm94IGZyb20gJ3VpLWJveCdcbmltcG9ydCB7IHdpdGhUaGVtZSB9IGZyb20gJy4uLy4uL3RoZW1lJ1xuXG5jbGFzcyBQYXJhZ3JhcGggZXh0ZW5kcyBQdXJlQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAvKipcbiAgICAgKiBDb21wb3NlcyB0aGUgQm94IGNvbXBvbmVudCBhcyB0aGUgYmFzZS5cbiAgICAgKi9cbiAgICAuLi5Cb3gucHJvcFR5cGVzLFxuXG4gICAgLyoqXG4gICAgICogU2l6ZSBvZiB0aGUgdGV4dCBzdHlsZS5cbiAgICAgKiBDYW4gYmU6IDMwMCwgNDAwLCA1MDAuXG4gICAgICovXG4gICAgc2l6ZTogUHJvcFR5cGVzLm9uZU9mKFszMDAsIDQwMCwgNTAwXSkuaXNSZXF1aXJlZCxcblxuICAgIC8qKlxuICAgICAqIEZvbnQgZmFtaWx5LlxuICAgICAqIENhbiBiZTogYHVpYCwgYGRpc3BsYXlgIG9yIGBtb25vYCBvciBhIGN1c3RvbSBmb250IGZhbWlseS5cbiAgICAgKi9cbiAgICBmb250RmFtaWx5OiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG5cbiAgICAvKipcbiAgICAgKiBUaGVtZSBwcm92aWRlZCBieSBUaGVtZVByb3ZpZGVyLlxuICAgICAqL1xuICAgIHRoZW1lOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWRcbiAgfVxuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgc2l6ZTogNDAwLFxuICAgIGNvbG9yOiAnZGVmYXVsdCcsXG4gICAgZm9udEZhbWlseTogJ3VpJ1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgdGhlbWUsIHNpemUsIGNvbG9yLCBmb250RmFtaWx5LCBtYXJnaW5Ub3AsIC4uLnByb3BzIH0gPSB0aGlzLnByb3BzXG5cbiAgICBjb25zdCB7XG4gICAgICBtYXJnaW5Ub3A6IGRlZmF1bHRNYXJnaW5Ub3AsXG4gICAgICAuLi50ZXh0U3R5bGVcbiAgICB9ID0gdGhlbWUuZ2V0UGFyYWdyYXBoU3R5bGUoc2l6ZSlcblxuICAgIGNvbnN0IGZpbmFsTWFyZ2luVG9wID1cbiAgICAgIG1hcmdpblRvcCA9PT0gJ2RlZmF1bHQnID8gZGVmYXVsdE1hcmdpblRvcCA6IG1hcmdpblRvcFxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxCb3hcbiAgICAgICAgaXM9XCJwXCJcbiAgICAgICAgY29sb3I9e3RoZW1lLmdldFRleHRDb2xvcihjb2xvcil9XG4gICAgICAgIGZvbnRGYW1pbHk9e3RoZW1lLmdldEZvbnRGYW1pbHkoZm9udEZhbWlseSl9XG4gICAgICAgIG1hcmdpblRvcD17ZmluYWxNYXJnaW5Ub3AgfHwgMH1cbiAgICAgICAgbWFyZ2luQm90dG9tPXswfVxuICAgICAgICB7Li4udGV4dFN0eWxlfVxuICAgICAgICB7Li4ucHJvcHN9XG4gICAgICAvPlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoVGhlbWUoUGFyYWdyYXBoKVxuIl19