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

var _typography = require("../../typography");

var _theme = require("../../theme");

var _icon = require("../../icon");

var _layers = require("../../layers");

var FormFieldValidationMessage =
/*#__PURE__*/
function (_PureComponent) {
  (0, _inherits2.default)(FormFieldValidationMessage, _PureComponent);

  function FormFieldValidationMessage() {
    (0, _classCallCheck2.default)(this, FormFieldValidationMessage);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(FormFieldValidationMessage).apply(this, arguments));
  }

  (0, _createClass2.default)(FormFieldValidationMessage, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          theme = _this$props.theme,
          children = _this$props.children,
          props = (0, _objectWithoutProperties2.default)(_this$props, ["theme", "children"]);
      return _react.default.createElement(_layers.Pane, (0, _extends2.default)({
        display: "flex"
      }, props), _react.default.createElement(_icon.Icon, {
        icon: "error",
        color: "danger",
        marginTop: 1,
        size: 14,
        marginRight: 8
      }), _react.default.createElement(_typography.Paragraph, {
        marginTop: 0,
        size: 300,
        color: "danger",
        role: "alert"
      }, children));
    }
  }]);
  return FormFieldValidationMessage;
}(_react.PureComponent);

FormFieldValidationMessage.displayName = "FormFieldValidationMessage";
(0, _defineProperty2.default)(FormFieldValidationMessage, "propTypes", (0, _objectSpread2.default)({}, _layers.Pane.propTypes, {
  /**
   * The contents of the validation message.
   * This is wrapped in a paragraph, use a string.
   */
  children: _propTypes.default.node,

  /**
   * Theme provided by ThemeProvider.
   */
  theme: _propTypes.default.object.isRequired
}));

var _default = (0, _theme.withTheme)(FormFieldValidationMessage);

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9mb3JtLWZpZWxkL3NyYy9Gb3JtRmllbGRWYWxpZGF0aW9uTWVzc2FnZS5qcyJdLCJuYW1lcyI6WyJGb3JtRmllbGRWYWxpZGF0aW9uTWVzc2FnZSIsInByb3BzIiwidGhlbWUiLCJjaGlsZHJlbiIsIlB1cmVDb21wb25lbnQiLCJQYW5lIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwibm9kZSIsIm9iamVjdCIsImlzUmVxdWlyZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0lBRU1BLDBCOzs7Ozs7Ozs7Ozs7NkJBbUJLO0FBQUEsd0JBQytCLEtBQUtDLEtBRHBDO0FBQUEsVUFDQ0MsS0FERCxlQUNDQSxLQUREO0FBQUEsVUFDUUMsUUFEUixlQUNRQSxRQURSO0FBQUEsVUFDcUJGLEtBRHJCO0FBRVAsYUFDRSw2QkFBQyxZQUFEO0FBQU0sUUFBQSxPQUFPLEVBQUM7QUFBZCxTQUF5QkEsS0FBekIsR0FDRSw2QkFBQyxVQUFEO0FBQ0UsUUFBQSxJQUFJLEVBQUMsT0FEUDtBQUVFLFFBQUEsS0FBSyxFQUFDLFFBRlI7QUFHRSxRQUFBLFNBQVMsRUFBRSxDQUhiO0FBSUUsUUFBQSxJQUFJLEVBQUUsRUFKUjtBQUtFLFFBQUEsV0FBVyxFQUFFO0FBTGYsUUFERixFQVFFLDZCQUFDLHFCQUFEO0FBQVcsUUFBQSxTQUFTLEVBQUUsQ0FBdEI7QUFBeUIsUUFBQSxJQUFJLEVBQUUsR0FBL0I7QUFBb0MsUUFBQSxLQUFLLEVBQUMsUUFBMUM7QUFBbUQsUUFBQSxJQUFJLEVBQUM7QUFBeEQsU0FDR0UsUUFESCxDQVJGLENBREY7QUFjRDs7O0VBbkNzQ0Msb0I7O0FBQW5DSiwwQjs4QkFBQUEsMEIsK0NBS0NLLGFBQUtDLFM7QUFFUjs7OztBQUlBSCxFQUFBQSxRQUFRLEVBQUVJLG1CQUFVQyxJOztBQUVwQjs7O0FBR0FOLEVBQUFBLEtBQUssRUFBRUssbUJBQVVFLE1BQVYsQ0FBaUJDOzs7ZUFzQmIsc0JBQVVWLDBCQUFWLEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IHsgUGFyYWdyYXBoIH0gZnJvbSAnLi4vLi4vdHlwb2dyYXBoeSdcbmltcG9ydCB7IHdpdGhUaGVtZSB9IGZyb20gJy4uLy4uL3RoZW1lJ1xuaW1wb3J0IHsgSWNvbiB9IGZyb20gJy4uLy4uL2ljb24nXG5pbXBvcnQgeyBQYW5lIH0gZnJvbSAnLi4vLi4vbGF5ZXJzJ1xuXG5jbGFzcyBGb3JtRmllbGRWYWxpZGF0aW9uTWVzc2FnZSBleHRlbmRzIFB1cmVDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIC8qKlxuICAgICAqIENvbXBvc2VzIHRoZSBQYW5lIGNvbXBvbmVudCBhcyB0aGUgYmFzZS5cbiAgICAgKi9cbiAgICAuLi5QYW5lLnByb3BUeXBlcyxcblxuICAgIC8qKlxuICAgICAqIFRoZSBjb250ZW50cyBvZiB0aGUgdmFsaWRhdGlvbiBtZXNzYWdlLlxuICAgICAqIFRoaXMgaXMgd3JhcHBlZCBpbiBhIHBhcmFncmFwaCwgdXNlIGEgc3RyaW5nLlxuICAgICAqL1xuICAgIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcblxuICAgIC8qKlxuICAgICAqIFRoZW1lIHByb3ZpZGVkIGJ5IFRoZW1lUHJvdmlkZXIuXG4gICAgICovXG4gICAgdGhlbWU6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZFxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgdGhlbWUsIGNoaWxkcmVuLCAuLi5wcm9wcyB9ID0gdGhpcy5wcm9wc1xuICAgIHJldHVybiAoXG4gICAgICA8UGFuZSBkaXNwbGF5PVwiZmxleFwiIHsuLi5wcm9wc30+XG4gICAgICAgIDxJY29uXG4gICAgICAgICAgaWNvbj1cImVycm9yXCJcbiAgICAgICAgICBjb2xvcj1cImRhbmdlclwiXG4gICAgICAgICAgbWFyZ2luVG9wPXsxfVxuICAgICAgICAgIHNpemU9ezE0fVxuICAgICAgICAgIG1hcmdpblJpZ2h0PXs4fVxuICAgICAgICAvPlxuICAgICAgICA8UGFyYWdyYXBoIG1hcmdpblRvcD17MH0gc2l6ZT17MzAwfSBjb2xvcj1cImRhbmdlclwiIHJvbGU9XCJhbGVydFwiPlxuICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgPC9QYXJhZ3JhcGg+XG4gICAgICA8L1BhbmU+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhUaGVtZShGb3JtRmllbGRWYWxpZGF0aW9uTWVzc2FnZSlcbiJdfQ==