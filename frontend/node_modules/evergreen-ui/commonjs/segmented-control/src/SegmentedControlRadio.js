"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _uiBox = _interopRequireDefault(require("ui-box"));

var _glamor = require("glamor");

var _classnames = _interopRequireDefault(require("classnames"));

var _typography = require("../../typography");

var _theme = require("../../theme");

var _css;

var labelClass = (0, _glamor.css)({
  display: 'flex',
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative'
});
var wrapperClass = (0, _glamor.css)((_css = {
  position: 'relative',
  display: 'flex',
  flex: 1,
  cursor: 'pointer',
  marginLeft: '-1px'
}, (0, _defineProperty2.default)(_css, ":first-child .".concat(labelClass), {
  borderTopLeftRadius: 3,
  borderBottomLeftRadius: 3
}), (0, _defineProperty2.default)(_css, ":last-child .".concat(labelClass), {
  borderTopRightRadius: 3,
  borderBottomRightRadius: 3
}), _css));
var offscreenCss = (0, _glamor.css)({
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
  (0, _inherits2.default)(SegmentedControlRadio, _PureComponent);

  function SegmentedControlRadio() {
    (0, _classCallCheck2.default)(this, SegmentedControlRadio);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(SegmentedControlRadio).apply(this, arguments));
  }

  (0, _createClass2.default)(SegmentedControlRadio, [{
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
      return _react.default.createElement(_uiBox.default, (0, _extends2.default)({
        className: (0, _classnames.default)(wrapperClass.toString(), themedClassName),
        "data-active": checked
      }, isFirstItem ? {
        borderTopLeftRadius: borderRadius,
        borderBottomLeftRadius: borderRadius
      } : {}, isLastItem ? {
        borderTopRightRadius: borderRadius,
        borderBottomRightRadius: borderRadius
      } : {}), _react.default.createElement("input", {
        type: "radio",
        id: id,
        className: "".concat(offscreenCss),
        name: name,
        value: value,
        checked: checked,
        onChange: function onChange(e) {
          return _onChange(e.target.value);
        }
      }), _react.default.createElement(_typography.Text, {
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
}(_react.PureComponent);

SegmentedControlRadio.displayName = "SegmentedControlRadio";
(0, _defineProperty2.default)(SegmentedControlRadio, "propTypes", {
  /**
   * The name attribute of the radio input.
   */
  name: _propTypes.default.string.isRequired,

  /**
   * The label used for the radio.
   */
  label: _propTypes.default.node.isRequired,

  /**
   * The value attribute of the radio input.
   */
  value: _propTypes.default.string.isRequired,

  /**
   * The height of the control.
   */
  height: _propTypes.default.number.isRequired,

  /**
   * When true, the radio input is checked.
   */
  checked: _propTypes.default.bool.isRequired,

  /**
   * Function called when the state changes.
   */
  onChange: _propTypes.default.func.isRequired,

  /**
   * The appearance of the control. Currently only `default` is possible.
   */
  appearance: _propTypes.default.string.isRequired,

  /**
   * When true, this item is the first item.
   */
  isFirstItem: _propTypes.default.bool,

  /**
   * When true, this item is the last item.
   */
  isLastItem: _propTypes.default.bool,

  /**
   * The unique id of the radio option.
   */
  id: _propTypes.default.string,

  /**
   * Theme provided by ThemeProvider.
   */
  theme: _propTypes.default.object.isRequired
});

var _default = (0, _theme.withTheme)(SegmentedControlRadio);

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zZWdtZW50ZWQtY29udHJvbC9zcmMvU2VnbWVudGVkQ29udHJvbFJhZGlvLmpzIl0sIm5hbWVzIjpbImxhYmVsQ2xhc3MiLCJkaXNwbGF5IiwiZmxleCIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsInBvc2l0aW9uIiwid3JhcHBlckNsYXNzIiwiY3Vyc29yIiwibWFyZ2luTGVmdCIsImJvcmRlclRvcExlZnRSYWRpdXMiLCJib3JkZXJCb3R0b21MZWZ0UmFkaXVzIiwiYm9yZGVyVG9wUmlnaHRSYWRpdXMiLCJib3JkZXJCb3R0b21SaWdodFJhZGl1cyIsIm9mZnNjcmVlbkNzcyIsIm92ZXJmbG93IiwiaGVpZ2h0Iiwid2lkdGgiLCJwYWRkaW5nIiwibWFyZ2luIiwiYm9yZGVyIiwiY2xpcCIsIlNlZ21lbnRlZENvbnRyb2xSYWRpbyIsInByb3BzIiwidGhlbWUiLCJpZCIsIm5hbWUiLCJsYWJlbCIsInZhbHVlIiwiY2hlY2tlZCIsIm9uQ2hhbmdlIiwiYXBwZWFyYW5jZSIsImlzRmlyc3RJdGVtIiwiaXNMYXN0SXRlbSIsInRoZW1lZENsYXNzTmFtZSIsImdldFNlZ21lbnRlZENvbnRyb2xSYWRpb0NsYXNzTmFtZSIsInRleHRTaXplIiwiZ2V0VGV4dFNpemVGb3JDb250cm9sSGVpZ2h0IiwiYm9yZGVyUmFkaXVzIiwiZ2V0Qm9yZGVyUmFkaXVzRm9yQ29udHJvbEhlaWdodCIsInRvU3RyaW5nIiwiZSIsInRhcmdldCIsIlB1cmVDb21wb25lbnQiLCJQcm9wVHlwZXMiLCJzdHJpbmciLCJpc1JlcXVpcmVkIiwibm9kZSIsIm51bWJlciIsImJvb2wiLCJmdW5jIiwib2JqZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7QUFFQSxJQUFNQSxVQUFVLEdBQUcsaUJBQUk7QUFDckJDLEVBQUFBLE9BQU8sRUFBRSxNQURZ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Q29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IEJveCBmcm9tICd1aS1ib3gnXG5pbXBvcnQgeyBjc3MgfSBmcm9tICdnbGFtb3InXG5pbXBvcnQgY3ggZnJvbSAnY2xhc3NuYW1lcydcbmltcG9ydCB7IFRleHQgfSBmcm9tICcuLi8uLi90eXBvZ3JhcGh5J1xuaW1wb3J0IHsgd2l0aFRoZW1lIH0gZnJvbSAnLi4vLi4vdGhlbWUnXG5cbmNvbnN0IGxhYmVsQ2xhc3MgPSBjc3Moe1xuICBkaXNwbGF5OiAnZmxleCcsXG4gIGZsZXg6IDEsXG4gIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gIHBvc2l0aW9uOiAncmVsYXRpdmUnXG59KVxuXG5jb25zdCB3cmFwcGVyQ2xhc3MgPSBjc3Moe1xuICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgZGlzcGxheTogJ2ZsZXgnLFxuICBmbGV4OiAxLFxuICBjdXJzb3I6ICdwb2ludGVyJyxcbiAgbWFyZ2luTGVmdDogJy0xcHgnLFxuICBbYDpmaXJzdC1jaGlsZCAuJHtsYWJlbENsYXNzfWBdOiB7XG4gICAgYm9yZGVyVG9wTGVmdFJhZGl1czogMyxcbiAgICBib3JkZXJCb3R0b21MZWZ0UmFkaXVzOiAzXG4gIH0sXG4gIFtgOmxhc3QtY2hpbGQgLiR7bGFiZWxDbGFzc31gXToge1xuICAgIGJvcmRlclRvcFJpZ2h0UmFkaXVzOiAzLFxuICAgIGJvcmRlckJvdHRvbVJpZ2h0UmFkaXVzOiAzXG4gIH1cbn0pXG5cbmNvbnN0IG9mZnNjcmVlbkNzcyA9IGNzcyh7XG4gIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gIGhlaWdodDogJzFweCcsXG4gIHdpZHRoOiAnMXB4JyxcbiAgcGFkZGluZzogMCxcbiAgbWFyZ2luOiAnLTFweCcsXG4gIGJvcmRlcjogMCxcbiAgY2xpcDogJ3JlY3QoMCAwIDAgMCknXG59KVxuXG5jbGFzcyBTZWdtZW50ZWRDb250cm9sUmFkaW8gZXh0ZW5kcyBQdXJlQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAvKipcbiAgICAgKiBUaGUgbmFtZSBhdHRyaWJ1dGUgb2YgdGhlIHJhZGlvIGlucHV0LlxuICAgICAqL1xuICAgIG5hbWU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcblxuICAgIC8qKlxuICAgICAqIFRoZSBsYWJlbCB1c2VkIGZvciB0aGUgcmFkaW8uXG4gICAgICovXG4gICAgbGFiZWw6IFByb3BUeXBlcy5ub2RlLmlzUmVxdWlyZWQsXG5cbiAgICAvKipcbiAgICAgKiBUaGUgdmFsdWUgYXR0cmlidXRlIG9mIHRoZSByYWRpbyBpbnB1dC5cbiAgICAgKi9cbiAgICB2YWx1ZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuXG4gICAgLyoqXG4gICAgICogVGhlIGhlaWdodCBvZiB0aGUgY29udHJvbC5cbiAgICAgKi9cbiAgICBoZWlnaHQ6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcblxuICAgIC8qKlxuICAgICAqIFdoZW4gdHJ1ZSwgdGhlIHJhZGlvIGlucHV0IGlzIGNoZWNrZWQuXG4gICAgICovXG4gICAgY2hlY2tlZDogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcblxuICAgIC8qKlxuICAgICAqIEZ1bmN0aW9uIGNhbGxlZCB3aGVuIHRoZSBzdGF0ZSBjaGFuZ2VzLlxuICAgICAqL1xuICAgIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuXG4gICAgLyoqXG4gICAgICogVGhlIGFwcGVhcmFuY2Ugb2YgdGhlIGNvbnRyb2wuIEN1cnJlbnRseSBvbmx5IGBkZWZhdWx0YCBpcyBwb3NzaWJsZS5cbiAgICAgKi9cbiAgICBhcHBlYXJhbmNlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG5cbiAgICAvKipcbiAgICAgKiBXaGVuIHRydWUsIHRoaXMgaXRlbSBpcyB0aGUgZmlyc3QgaXRlbS5cbiAgICAgKi9cbiAgICBpc0ZpcnN0SXRlbTogUHJvcFR5cGVzLmJvb2wsXG5cbiAgICAvKipcbiAgICAgKiBXaGVuIHRydWUsIHRoaXMgaXRlbSBpcyB0aGUgbGFzdCBpdGVtLlxuICAgICAqL1xuICAgIGlzTGFzdEl0ZW06IFByb3BUeXBlcy5ib29sLFxuXG4gICAgLyoqXG4gICAgICogVGhlIHVuaXF1ZSBpZCBvZiB0aGUgcmFkaW8gb3B0aW9uLlxuICAgICAqL1xuICAgIGlkOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gICAgLyoqXG4gICAgICogVGhlbWUgcHJvdmlkZWQgYnkgVGhlbWVQcm92aWRlci5cbiAgICAgKi9cbiAgICB0aGVtZTogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgdGhlbWUsXG5cbiAgICAgIGlkLFxuICAgICAgbmFtZSxcbiAgICAgIGxhYmVsLFxuICAgICAgdmFsdWUsXG4gICAgICBoZWlnaHQsXG4gICAgICBjaGVja2VkLFxuICAgICAgb25DaGFuZ2UsXG4gICAgICBhcHBlYXJhbmNlLFxuICAgICAgaXNGaXJzdEl0ZW0sXG4gICAgICBpc0xhc3RJdGVtXG4gICAgfSA9IHRoaXMucHJvcHNcblxuICAgIGNvbnN0IHRoZW1lZENsYXNzTmFtZSA9IHRoZW1lLmdldFNlZ21lbnRlZENvbnRyb2xSYWRpb0NsYXNzTmFtZShhcHBlYXJhbmNlKVxuICAgIGNvbnN0IHRleHRTaXplID0gdGhlbWUuZ2V0VGV4dFNpemVGb3JDb250cm9sSGVpZ2h0KGhlaWdodClcbiAgICBjb25zdCBib3JkZXJSYWRpdXMgPSB0aGVtZS5nZXRCb3JkZXJSYWRpdXNGb3JDb250cm9sSGVpZ2h0KGhlaWdodClcblxuICAgIHJldHVybiAoXG4gICAgICA8Qm94XG4gICAgICAgIGNsYXNzTmFtZT17Y3god3JhcHBlckNsYXNzLnRvU3RyaW5nKCksIHRoZW1lZENsYXNzTmFtZSl9XG4gICAgICAgIGRhdGEtYWN0aXZlPXtjaGVja2VkfVxuICAgICAgICB7Li4uKGlzRmlyc3RJdGVtXG4gICAgICAgICAgPyB7XG4gICAgICAgICAgICAgIGJvcmRlclRvcExlZnRSYWRpdXM6IGJvcmRlclJhZGl1cyxcbiAgICAgICAgICAgICAgYm9yZGVyQm90dG9tTGVmdFJhZGl1czogYm9yZGVyUmFkaXVzXG4gICAgICAgICAgICB9XG4gICAgICAgICAgOiB7fSl9XG4gICAgICAgIHsuLi4oaXNMYXN0SXRlbVxuICAgICAgICAgID8ge1xuICAgICAgICAgICAgICBib3JkZXJUb3BSaWdodFJhZGl1czogYm9yZGVyUmFkaXVzLFxuICAgICAgICAgICAgICBib3JkZXJCb3R0b21SaWdodFJhZGl1czogYm9yZGVyUmFkaXVzXG4gICAgICAgICAgICB9XG4gICAgICAgICAgOiB7fSl9XG4gICAgICA+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIHR5cGU9XCJyYWRpb1wiXG4gICAgICAgICAgaWQ9e2lkfVxuICAgICAgICAgIGNsYXNzTmFtZT17YCR7b2Zmc2NyZWVuQ3NzfWB9XG4gICAgICAgICAgbmFtZT17bmFtZX1cbiAgICAgICAgICB2YWx1ZT17dmFsdWV9XG4gICAgICAgICAgY2hlY2tlZD17Y2hlY2tlZH1cbiAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBvbkNoYW5nZShlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgIC8+XG4gICAgICAgIDxUZXh0XG4gICAgICAgICAgaXM9XCJsYWJlbFwiXG4gICAgICAgICAgY3Vyc29yPVwicG9pbnRlclwiXG4gICAgICAgICAgaHRtbEZvcj17aWR9XG4gICAgICAgICAgZm9udFdlaWdodD17NTAwfVxuICAgICAgICAgIHNpemU9e3RleHRTaXplfVxuICAgICAgICAgIGNsYXNzTmFtZT17YCR7bGFiZWxDbGFzc31gfVxuICAgICAgICA+XG4gICAgICAgICAge2xhYmVsfVxuICAgICAgICA8L1RleHQ+XG4gICAgICA8L0JveD5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFRoZW1lKFNlZ21lbnRlZENvbnRyb2xSYWRpbylcbiJdfQ==