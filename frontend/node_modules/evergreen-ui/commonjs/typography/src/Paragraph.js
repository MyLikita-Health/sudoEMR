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

var _uiBox = _interopRequireDefault(require("ui-box"));

var _theme = require("../../theme");

var Paragraph =
/*#__PURE__*/
function (_PureComponent) {
  (0, _inherits2.default)(Paragraph, _PureComponent);

  function Paragraph() {
    (0, _classCallCheck2.default)(this, Paragraph);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Paragraph).apply(this, arguments));
  }

  (0, _createClass2.default)(Paragraph, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          theme = _this$props.theme,
          size = _this$props.size,
          color = _this$props.color,
          fontFamily = _this$props.fontFamily,
          marginTop = _this$props.marginTop,
          props = (0, _objectWithoutProperties2.default)(_this$props, ["theme", "size", "color", "fontFamily", "marginTop"]);

      var _theme$getParagraphSt = theme.getParagraphStyle(size),
          defaultMarginTop = _theme$getParagraphSt.marginTop,
          textStyle = (0, _objectWithoutProperties2.default)(_theme$getParagraphSt, ["marginTop"]);

      var finalMarginTop = marginTop === 'default' ? defaultMarginTop : marginTop;
      return _react.default.createElement(_uiBox.default, (0, _extends2.default)({
        is: "p",
        color: theme.getTextColor(color),
        fontFamily: theme.getFontFamily(fontFamily),
        marginTop: finalMarginTop || 0,
        marginBottom: 0
      }, textStyle, props));
    }
  }]);
  return Paragraph;
}(_react.PureComponent);

Paragraph.displayName = "Paragraph";
(0, _defineProperty2.default)(Paragraph, "propTypes", (0, _objectSpread2.default)({}, _uiBox.default.propTypes, {
  /**
   * Size of the text style.
   * Can be: 300, 400, 500.
   */
  size: _propTypes.default.oneOf([300, 400, 500]).isRequired,

  /**
   * Font family.
   * Can be: `ui`, `display` or `mono` or a custom font family.
   */
  fontFamily: _propTypes.default.string.isRequired,

  /**
   * Theme provided by ThemeProvider.
   */
  theme: _propTypes.default.object.isRequired
}));
(0, _defineProperty2.default)(Paragraph, "defaultProps", {
  size: 400,
  color: 'default',
  fontFamily: 'ui'
});

var _default = (0, _theme.withTheme)(Paragraph);

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90eXBvZ3JhcGh5L3NyYy9QYXJhZ3JhcGguanMiXSwibmFtZXMiOlsiUGFyYWdyYXBoIiwicHJvcHMiLCJ0aGVtZSIsInNpemUiLCJjb2xvciIsImZvbnRGYW1pbHkiLCJtYXJnaW5Ub3AiLCJnZXRQYXJhZ3JhcGhTdHlsZSIsImRlZmF1bHRNYXJnaW5Ub3AiLCJ0ZXh0U3R5bGUiLCJmaW5hbE1hcmdpblRvcCIsImdldFRleHRDb2xvciIsImdldEZvbnRGYW1pbHkiLCJQdXJlQ29tcG9uZW50IiwiQm94IiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwib25lT2YiLCJpc1JlcXVpcmVkIiwic3RyaW5nIiwib2JqZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztJQUVNQSxTOzs7Ozs7Ozs7Ozs7NkJBK0JLO0FBQUEsd0JBQ3lELEtBQUtDLEtBRDlEO0FBQUEsVUFDQ0MsS0FERCxlQUNDQSxLQUREO0FBQUEsVUFDUUMsSUFEUixlQUNRQSxJQURSO0FBQUEsVUFDY0MsS0FEZCxlQUNjQSxLQURkO0FBQUEsVUFDcUJDLFVBRHJCLGVBQ3FCQSxVQURyQjtBQUFBLFVBQ2lDQyxTQURqQyxlQUNpQ0EsU0FEakM7QUFBQSxVQUMrQ0wsS0FEL0M7O0FBQUEsa0NBTUhDLEtBQUssQ0FBQ0ssaUJBQU4sQ0FBd0JKLElBQXhCLENBTkc7QUFBQSxVQUlNSyxnQkFKTix5QkFJTEYsU0FKSztBQUFBLFVBS0ZHLFNBTEU7O0FBUVAsVUFBTUMsY0FBYyxHQUNsQkosU0FBUyxLQUFLLFNBQWQsR0FBMEJFLGdCQUExQixHQUE2Q0YsU0FEL0M7QUFHQSxhQUNFLDZCQUFDLGNBQUQ7QUFDRSxRQUFBLEVBQUUsRUFBQyxHQURMO0FBRUUsUUFBQSxLQUFLLEVBQUVKLEtBQUssQ0FBQ1MsWUFBTixDQUFtQlAsS0FBbkIsQ0FGVDtBQUdFLFFBQUEsVUFBVSxFQUFFRixLQUFLLENBQUNVLGFBQU4sQ0FBb0JQLFVBQXBCLENBSGQ7QUFJRSxRQUFBLFNBQVMsRUFBRUssY0FBYyxJQUFJLENBSi9CO0FBS0UsUUFBQSxZQUFZLEVBQUU7QUFMaEIsU0FNTUQsU0FOTixFQU9NUixLQVBOLEVBREY7QUFXRDs7O0VBckRxQlksb0I7O0FBQWxCYixTOzhCQUFBQSxTLCtDQUtDYyxlQUFJQyxTO0FBRVA7Ozs7QUFJQVosRUFBQUEsSUFBSSxFQUFFYSxtQkFBVUMsS0FBVixDQUFnQixDQUFDLEdBQUQsRUFBTSxHQUFOLEVBQVcsR0FBWCxDQUFoQixFQUFpQ0MsVTs7QUFFdkM7Ozs7QUFJQWIsRUFBQUEsVUFBVSxFQUFFVyxtQkFBVUcsTUFBVixDQUFpQkQsVTs7QUFFN0I7OztBQUdBaEIsRUFBQUEsS0FBSyxFQUFFYyxtQkFBVUksTUFBVixDQUFpQkY7OzhCQXRCdEJsQixTLGtCQXlCa0I7QUFDcEJHLEVBQUFBLElBQUksRUFBRSxHQURjO0FBRXBCQyxFQUFBQSxLQUFLLEVBQUUsU0FGYTtBQUdwQkMsRUFBQUEsVUFBVSxFQUFFO0FBSFEsQzs7ZUErQlQsc0JBQVVMLFNBQVYsQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgQm94IGZyb20gJ3VpLWJveCdcbmltcG9ydCB7IHdpdGhUaGVtZSB9IGZyb20gJy4uLy4uL3RoZW1lJ1xuXG5jbGFzcyBQYXJhZ3JhcGggZXh0ZW5kcyBQdXJlQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAvKipcbiAgICAgKiBDb21wb3NlcyB0aGUgQm94IGNvbXBvbmVudCBhcyB0aGUgYmFzZS5cbiAgICAgKi9cbiAgICAuLi5Cb3gucHJvcFR5cGVzLFxuXG4gICAgLyoqXG4gICAgICogU2l6ZSBvZiB0aGUgdGV4dCBzdHlsZS5cbiAgICAgKiBDYW4gYmU6IDMwMCwgNDAwLCA1MDAuXG4gICAgICovXG4gICAgc2l6ZTogUHJvcFR5cGVzLm9uZU9mKFszMDAsIDQwMCwgNTAwXSkuaXNSZXF1aXJlZCxcblxuICAgIC8qKlxuICAgICAqIEZvbnQgZmFtaWx5LlxuICAgICAqIENhbiBiZTogYHVpYCwgYGRpc3BsYXlgIG9yIGBtb25vYCBvciBhIGN1c3RvbSBmb250IGZhbWlseS5cbiAgICAgKi9cbiAgICBmb250RmFtaWx5OiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG5cbiAgICAvKipcbiAgICAgKiBUaGVtZSBwcm92aWRlZCBieSBUaGVtZVByb3ZpZGVyLlxuICAgICAqL1xuICAgIHRoZW1lOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWRcbiAgfVxuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgc2l6ZTogNDAwLFxuICAgIGNvbG9yOiAnZGVmYXVsdCcsXG4gICAgZm9udEZhbWlseTogJ3VpJ1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgdGhlbWUsIHNpemUsIGNvbG9yLCBmb250RmFtaWx5LCBtYXJnaW5Ub3AsIC4uLnByb3BzIH0gPSB0aGlzLnByb3BzXG5cbiAgICBjb25zdCB7XG4gICAgICBtYXJnaW5Ub3A6IGRlZmF1bHRNYXJnaW5Ub3AsXG4gICAgICAuLi50ZXh0U3R5bGVcbiAgICB9ID0gdGhlbWUuZ2V0UGFyYWdyYXBoU3R5bGUoc2l6ZSlcblxuICAgIGNvbnN0IGZpbmFsTWFyZ2luVG9wID1cbiAgICAgIG1hcmdpblRvcCA9PT0gJ2RlZmF1bHQnID8gZGVmYXVsdE1hcmdpblRvcCA6IG1hcmdpblRvcFxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxCb3hcbiAgICAgICAgaXM9XCJwXCJcbiAgICAgICAgY29sb3I9e3RoZW1lLmdldFRleHRDb2xvcihjb2xvcil9XG4gICAgICAgIGZvbnRGYW1pbHk9e3RoZW1lLmdldEZvbnRGYW1pbHkoZm9udEZhbWlseSl9XG4gICAgICAgIG1hcmdpblRvcD17ZmluYWxNYXJnaW5Ub3AgfHwgMH1cbiAgICAgICAgbWFyZ2luQm90dG9tPXswfVxuICAgICAgICB7Li4udGV4dFN0eWxlfVxuICAgICAgICB7Li4ucHJvcHN9XG4gICAgICAvPlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoVGhlbWUoUGFyYWdyYXBoKVxuIl19