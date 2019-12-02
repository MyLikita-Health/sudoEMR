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

var _classnames = _interopRequireDefault(require("classnames"));

var _theme = require("../../theme");

var _Text = _interopRequireDefault(require("./Text"));

var Code =
/*#__PURE__*/
function (_PureComponent) {
  (0, _inherits2.default)(Code, _PureComponent);

  function Code() {
    (0, _classCallCheck2.default)(this, Code);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Code).apply(this, arguments));
  }

  (0, _createClass2.default)(Code, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          theme = _this$props.theme,
          className = _this$props.className,
          appearance = _this$props.appearance,
          props = (0, _objectWithoutProperties2.default)(_this$props, ["theme", "className", "appearance"]);

      var _theme$getCodeProps = theme.getCodeProps(appearance),
          _theme$getCodeProps$c = _theme$getCodeProps.className,
          themedClassName = _theme$getCodeProps$c === void 0 ? '' : _theme$getCodeProps$c,
          themeProps = (0, _objectWithoutProperties2.default)(_theme$getCodeProps, ["className"]);

      return _react.default.createElement(_Text.default, (0, _extends2.default)({
        is: "code",
        className: (0, _classnames.default)(className, themedClassName),
        fontFamily: "mono"
      }, themeProps, props));
    }
  }]);
  return Code;
}(_react.PureComponent);

Code.displayName = "Code";
(0, _defineProperty2.default)(Code, "propTypes", (0, _objectSpread2.default)({}, _Text.default.propTypes, {
  /**
   * The appearance of the code.
   */
  appearance: _propTypes.default.oneOf(['default', 'minimal']).isRequired,

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
(0, _defineProperty2.default)(Code, "defaultProps", {
  appearance: 'default'
});

var _default = (0, _theme.withTheme)(Code);

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90eXBvZ3JhcGh5L3NyYy9Db2RlLmpzIl0sIm5hbWVzIjpbIkNvZGUiLCJwcm9wcyIsInRoZW1lIiwiY2xhc3NOYW1lIiwiYXBwZWFyYW5jZSIsImdldENvZGVQcm9wcyIsInRoZW1lZENsYXNzTmFtZSIsInRoZW1lUHJvcHMiLCJQdXJlQ29tcG9uZW50IiwiVGV4dCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsIm9uZU9mIiwiaXNSZXF1aXJlZCIsIm9iamVjdCIsInN0cmluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7SUFFTUEsSTs7Ozs7Ozs7Ozs7OzZCQXlCSztBQUFBLHdCQUM0QyxLQUFLQyxLQURqRDtBQUFBLFVBQ0NDLEtBREQsZUFDQ0EsS0FERDtBQUFBLFVBQ1FDLFNBRFIsZUFDUUEsU0FEUjtBQUFBLFVBQ21CQyxVQURuQixlQUNtQkEsVUFEbkI7QUFBQSxVQUNrQ0gsS0FEbEM7O0FBQUEsZ0NBTUhDLEtBQUssQ0FBQ0csWUFBTixDQUFtQkQsVUFBbkIsQ0FORztBQUFBLHNEQUlMRCxTQUpLO0FBQUEsVUFJTUcsZUFKTixzQ0FJd0IsRUFKeEI7QUFBQSxVQUtGQyxVQUxFOztBQVFQLGFBQ0UsNkJBQUMsYUFBRDtBQUNFLFFBQUEsRUFBRSxFQUFDLE1BREw7QUFFRSxRQUFBLFNBQVMsRUFBRSx5QkFBR0osU0FBSCxFQUFjRyxlQUFkLENBRmI7QUFHRSxRQUFBLFVBQVUsRUFBQztBQUhiLFNBSU1DLFVBSk4sRUFLTU4sS0FMTixFQURGO0FBU0Q7OztFQTFDZ0JPLG9COztBQUFiUixJOzhCQUFBQSxJLCtDQUVDUyxjQUFLQyxTO0FBRVI7OztBQUdBTixFQUFBQSxVQUFVLEVBQUVPLG1CQUFVQyxLQUFWLENBQWdCLENBQUMsU0FBRCxFQUFZLFNBQVosQ0FBaEIsRUFBd0NDLFU7O0FBRXBEOzs7QUFHQVgsRUFBQUEsS0FBSyxFQUFFUyxtQkFBVUcsTUFBVixDQUFpQkQsVTs7QUFFeEI7Ozs7QUFJQVYsRUFBQUEsU0FBUyxFQUFFUSxtQkFBVUk7OzhCQWxCbkJmLEksa0JBcUJrQjtBQUNwQkksRUFBQUEsVUFBVSxFQUFFO0FBRFEsQzs7ZUF3QlQsc0JBQVVKLElBQVYsQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgY3ggZnJvbSAnY2xhc3NuYW1lcydcbmltcG9ydCB7IHdpdGhUaGVtZSB9IGZyb20gJy4uLy4uL3RoZW1lJ1xuaW1wb3J0IFRleHQgZnJvbSAnLi9UZXh0J1xuXG5jbGFzcyBDb2RlIGV4dGVuZHMgUHVyZUNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgLi4uVGV4dC5wcm9wVHlwZXMsXG5cbiAgICAvKipcbiAgICAgKiBUaGUgYXBwZWFyYW5jZSBvZiB0aGUgY29kZS5cbiAgICAgKi9cbiAgICBhcHBlYXJhbmNlOiBQcm9wVHlwZXMub25lT2YoWydkZWZhdWx0JywgJ21pbmltYWwnXSkuaXNSZXF1aXJlZCxcblxuICAgIC8qKlxuICAgICAqIFRoZW1lIHByb3ZpZGVkIGJ5IFRoZW1lUHJvdmlkZXIuXG4gICAgICovXG4gICAgdGhlbWU6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcblxuICAgIC8qKlxuICAgICAqIENsYXNzIG5hbWUgcGFzc2VkIHRvIHRoZSBidXR0b24uXG4gICAgICogT25seSB1c2UgaWYgeW91IGtub3cgd2hhdCB5b3UgYXJlIGRvaW5nLlxuICAgICAqL1xuICAgIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZ1xuICB9XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBhcHBlYXJhbmNlOiAnZGVmYXVsdCdcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHRoZW1lLCBjbGFzc05hbWUsIGFwcGVhcmFuY2UsIC4uLnByb3BzIH0gPSB0aGlzLnByb3BzXG5cbiAgICBjb25zdCB7XG4gICAgICBjbGFzc05hbWU6IHRoZW1lZENsYXNzTmFtZSA9ICcnLFxuICAgICAgLi4udGhlbWVQcm9wc1xuICAgIH0gPSB0aGVtZS5nZXRDb2RlUHJvcHMoYXBwZWFyYW5jZSlcblxuICAgIHJldHVybiAoXG4gICAgICA8VGV4dFxuICAgICAgICBpcz1cImNvZGVcIlxuICAgICAgICBjbGFzc05hbWU9e2N4KGNsYXNzTmFtZSwgdGhlbWVkQ2xhc3NOYW1lKX1cbiAgICAgICAgZm9udEZhbWlseT1cIm1vbm9cIlxuICAgICAgICB7Li4udGhlbWVQcm9wc31cbiAgICAgICAgey4uLnByb3BzfVxuICAgICAgLz5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFRoZW1lKENvZGUpXG4iXX0=