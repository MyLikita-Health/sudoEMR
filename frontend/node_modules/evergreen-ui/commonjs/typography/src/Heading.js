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

var Heading =
/*#__PURE__*/
function (_PureComponent) {
  (0, _inherits2.default)(Heading, _PureComponent);

  function Heading() {
    (0, _classCallCheck2.default)(this, Heading);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Heading).apply(this, arguments));
  }

  (0, _createClass2.default)(Heading, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          theme = _this$props.theme,
          marginTop = _this$props.marginTop,
          size = _this$props.size,
          props = (0, _objectWithoutProperties2.default)(_this$props, ["theme", "marginTop", "size"]);

      var _theme$getHeadingStyl = theme.getHeadingStyle(size),
          defaultMarginTop = _theme$getHeadingStyl.marginTop,
          headingStyle = (0, _objectWithoutProperties2.default)(_theme$getHeadingStyl, ["marginTop"]);

      var finalMarginTop = marginTop;

      if (marginTop === 'default') {
        finalMarginTop = defaultMarginTop;
      }

      return _react.default.createElement(_uiBox.default, (0, _extends2.default)({
        is: "h2",
        marginTop: finalMarginTop || 0,
        marginBottom: 0
      }, headingStyle, props));
    }
  }]);
  return Heading;
}(_react.PureComponent);

Heading.displayName = "Heading";
(0, _defineProperty2.default)(Heading, "propTypes", (0, _objectSpread2.default)({}, _uiBox.default.propTypes, {
  /**
   * The size of the heading.
   */
  size: _propTypes.default.oneOf([100, 200, 300, 400, 500, 600, 700, 800, 900]).isRequired,

  /**
   * Pass `default` to use the default margin top for that size.
   */
  marginTop: _propTypes.default.oneOfType([_propTypes.default.bool, _propTypes.default.number, _propTypes.default.string]),

  /**
   * Theme provided by ThemeProvider.
   */
  theme: _propTypes.default.object.isRequired
}));
(0, _defineProperty2.default)(Heading, "defaultProps", {
  size: 500
});

var _default = (0, _theme.withTheme)(Heading);

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90eXBvZ3JhcGh5L3NyYy9IZWFkaW5nLmpzIl0sIm5hbWVzIjpbIkhlYWRpbmciLCJwcm9wcyIsInRoZW1lIiwibWFyZ2luVG9wIiwic2l6ZSIsImdldEhlYWRpbmdTdHlsZSIsImRlZmF1bHRNYXJnaW5Ub3AiLCJoZWFkaW5nU3R5bGUiLCJmaW5hbE1hcmdpblRvcCIsIlB1cmVDb21wb25lbnQiLCJCb3giLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJvbmVPZiIsImlzUmVxdWlyZWQiLCJvbmVPZlR5cGUiLCJib29sIiwibnVtYmVyIiwic3RyaW5nIiwib2JqZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztJQUVNQSxPOzs7Ozs7Ozs7Ozs7NkJBZ0NLO0FBQUEsd0JBQ3NDLEtBQUtDLEtBRDNDO0FBQUEsVUFDQ0MsS0FERCxlQUNDQSxLQUREO0FBQUEsVUFDUUMsU0FEUixlQUNRQSxTQURSO0FBQUEsVUFDbUJDLElBRG5CLGVBQ21CQSxJQURuQjtBQUFBLFVBQzRCSCxLQUQ1Qjs7QUFBQSxrQ0FLSEMsS0FBSyxDQUFDRyxlQUFOLENBQXNCRCxJQUF0QixDQUxHO0FBQUEsVUFHTUUsZ0JBSE4seUJBR0xILFNBSEs7QUFBQSxVQUlGSSxZQUpFOztBQU9QLFVBQUlDLGNBQWMsR0FBR0wsU0FBckI7O0FBQ0EsVUFBSUEsU0FBUyxLQUFLLFNBQWxCLEVBQTZCO0FBQzNCSyxRQUFBQSxjQUFjLEdBQUdGLGdCQUFqQjtBQUNEOztBQUVELGFBQ0UsNkJBQUMsY0FBRDtBQUNFLFFBQUEsRUFBRSxFQUFDLElBREw7QUFFRSxRQUFBLFNBQVMsRUFBRUUsY0FBYyxJQUFJLENBRi9CO0FBR0UsUUFBQSxZQUFZLEVBQUU7QUFIaEIsU0FJTUQsWUFKTixFQUtNTixLQUxOLEVBREY7QUFTRDs7O0VBckRtQlEsb0I7O0FBQWhCVCxPOzhCQUFBQSxPLCtDQUtDVSxlQUFJQyxTO0FBRVA7OztBQUdBUCxFQUFBQSxJQUFJLEVBQUVRLG1CQUFVQyxLQUFWLENBQWdCLENBQUMsR0FBRCxFQUFNLEdBQU4sRUFBVyxHQUFYLEVBQWdCLEdBQWhCLEVBQXFCLEdBQXJCLEVBQTBCLEdBQTFCLEVBQStCLEdBQS9CLEVBQW9DLEdBQXBDLEVBQXlDLEdBQXpDLENBQWhCLEVBQ0hDLFU7O0FBRUg7OztBQUdBWCxFQUFBQSxTQUFTLEVBQUVTLG1CQUFVRyxTQUFWLENBQW9CLENBQzdCSCxtQkFBVUksSUFEbUIsRUFFN0JKLG1CQUFVSyxNQUZtQixFQUc3QkwsbUJBQVVNLE1BSG1CLENBQXBCLEM7O0FBTVg7OztBQUdBaEIsRUFBQUEsS0FBSyxFQUFFVSxtQkFBVU8sTUFBVixDQUFpQkw7OzhCQXpCdEJkLE8sa0JBNEJrQjtBQUNwQkksRUFBQUEsSUFBSSxFQUFFO0FBRGMsQzs7ZUE0QlQsc0JBQVVKLE9BQVYsQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgQm94IGZyb20gJ3VpLWJveCdcbmltcG9ydCB7IHdpdGhUaGVtZSB9IGZyb20gJy4uLy4uL3RoZW1lJ1xuXG5jbGFzcyBIZWFkaW5nIGV4dGVuZHMgUHVyZUNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgLyoqXG4gICAgICogSGVhZGluZyBjb21wb3NlcyBCb3ggYXMgdGhlIGJhc2UuXG4gICAgICovXG4gICAgLi4uQm94LnByb3BUeXBlcyxcblxuICAgIC8qKlxuICAgICAqIFRoZSBzaXplIG9mIHRoZSBoZWFkaW5nLlxuICAgICAqL1xuICAgIHNpemU6IFByb3BUeXBlcy5vbmVPZihbMTAwLCAyMDAsIDMwMCwgNDAwLCA1MDAsIDYwMCwgNzAwLCA4MDAsIDkwMF0pXG4gICAgICAuaXNSZXF1aXJlZCxcblxuICAgIC8qKlxuICAgICAqIFBhc3MgYGRlZmF1bHRgIHRvIHVzZSB0aGUgZGVmYXVsdCBtYXJnaW4gdG9wIGZvciB0aGF0IHNpemUuXG4gICAgICovXG4gICAgbWFyZ2luVG9wOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICAgIFByb3BUeXBlcy5ib29sLFxuICAgICAgUHJvcFR5cGVzLm51bWJlcixcbiAgICAgIFByb3BUeXBlcy5zdHJpbmdcbiAgICBdKSxcblxuICAgIC8qKlxuICAgICAqIFRoZW1lIHByb3ZpZGVkIGJ5IFRoZW1lUHJvdmlkZXIuXG4gICAgICovXG4gICAgdGhlbWU6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZFxuICB9XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBzaXplOiA1MDBcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHRoZW1lLCBtYXJnaW5Ub3AsIHNpemUsIC4uLnByb3BzIH0gPSB0aGlzLnByb3BzXG4gICAgY29uc3Qge1xuICAgICAgbWFyZ2luVG9wOiBkZWZhdWx0TWFyZ2luVG9wLFxuICAgICAgLi4uaGVhZGluZ1N0eWxlXG4gICAgfSA9IHRoZW1lLmdldEhlYWRpbmdTdHlsZShzaXplKVxuXG4gICAgbGV0IGZpbmFsTWFyZ2luVG9wID0gbWFyZ2luVG9wXG4gICAgaWYgKG1hcmdpblRvcCA9PT0gJ2RlZmF1bHQnKSB7XG4gICAgICBmaW5hbE1hcmdpblRvcCA9IGRlZmF1bHRNYXJnaW5Ub3BcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPEJveFxuICAgICAgICBpcz1cImgyXCJcbiAgICAgICAgbWFyZ2luVG9wPXtmaW5hbE1hcmdpblRvcCB8fCAwfVxuICAgICAgICBtYXJnaW5Cb3R0b209ezB9XG4gICAgICAgIHsuLi5oZWFkaW5nU3R5bGV9XG4gICAgICAgIHsuLi5wcm9wc31cbiAgICAgIC8+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhUaGVtZShIZWFkaW5nKVxuIl19