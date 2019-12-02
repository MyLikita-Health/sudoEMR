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

var Link =
/*#__PURE__*/
function (_PureComponent) {
  (0, _inherits2.default)(Link, _PureComponent);

  function Link() {
    (0, _classCallCheck2.default)(this, Link);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Link).apply(this, arguments));
  }

  (0, _createClass2.default)(Link, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          theme = _this$props.theme,
          className = _this$props.className,
          color = _this$props.color,
          props = (0, _objectWithoutProperties2.default)(_this$props, ["theme", "className", "color"]);
      var themedClassName = theme.getLinkClassName(color);
      return _react.default.createElement(_Text.default, (0, _extends2.default)({
        is: "a",
        className: (0, _classnames.default)(className, themedClassName),
        textDecoration: "underline",
        color: null
      }, props));
    }
  }]);
  return Link;
}(_react.PureComponent);

Link.displayName = "Link";
(0, _defineProperty2.default)(Link, "propTypes", (0, _objectSpread2.default)({}, _Text.default.propTypes, {
  /**
   * This attribute names a relationship of the linked document to the current document.
   * Common use case is: rel="noopener noreferrer".
   */
  rel: _propTypes.default.string,

  /**
   * Specifies the URL of the linked resource. A URL might be absolute or relative.
   */
  href: _propTypes.default.string,

  /**
   * Target atrribute, common use case is target="_blank."
   */
  target: _propTypes.default.string,

  /**
   * The color (and styling) of the Link. Can be default, blue, green or neutral.
   */
  color: _propTypes.default.string.isRequired,

  /**
   * Theme provided by ThemeProvider.
   */
  theme: _propTypes.default.object.isRequired,

  /**
   * Class name passed to the link.
   * Only use if you know what you are doing.
   */
  className: _propTypes.default.string
}));
(0, _defineProperty2.default)(Link, "defaultProps", {
  color: 'default'
});

var _default = (0, _theme.withTheme)(Link);

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90eXBvZ3JhcGh5L3NyYy9MaW5rLmpzIl0sIm5hbWVzIjpbIkxpbmsiLCJwcm9wcyIsInRoZW1lIiwiY2xhc3NOYW1lIiwiY29sb3IiLCJ0aGVtZWRDbGFzc05hbWUiLCJnZXRMaW5rQ2xhc3NOYW1lIiwiUHVyZUNvbXBvbmVudCIsIlRleHQiLCJwcm9wVHlwZXMiLCJyZWwiLCJQcm9wVHlwZXMiLCJzdHJpbmciLCJocmVmIiwidGFyZ2V0IiwiaXNSZXF1aXJlZCIsIm9iamVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7SUFFTUEsSTs7Ozs7Ozs7Ozs7OzZCQXlDSztBQUFBLHdCQUN1QyxLQUFLQyxLQUQ1QztBQUFBLFVBQ0NDLEtBREQsZUFDQ0EsS0FERDtBQUFBLFVBQ1FDLFNBRFIsZUFDUUEsU0FEUjtBQUFBLFVBQ21CQyxLQURuQixlQUNtQkEsS0FEbkI7QUFBQSxVQUM2QkgsS0FEN0I7QUFHUCxVQUFNSSxlQUFlLEdBQUdILEtBQUssQ0FBQ0ksZ0JBQU4sQ0FBdUJGLEtBQXZCLENBQXhCO0FBRUEsYUFDRSw2QkFBQyxhQUFEO0FBQ0UsUUFBQSxFQUFFLEVBQUMsR0FETDtBQUVFLFFBQUEsU0FBUyxFQUFFLHlCQUFHRCxTQUFILEVBQWNFLGVBQWQsQ0FGYjtBQUdFLFFBQUEsY0FBYyxFQUFDLFdBSGpCO0FBSUUsUUFBQSxLQUFLLEVBQUU7QUFKVCxTQUtNSixLQUxOLEVBREY7QUFTRDs7O0VBdkRnQk0sb0I7O0FBQWJQLEk7OEJBQUFBLEksK0NBRUNRLGNBQUtDLFM7QUFFUjs7OztBQUlBQyxFQUFBQSxHQUFHLEVBQUVDLG1CQUFVQyxNOztBQUVmOzs7QUFHQUMsRUFBQUEsSUFBSSxFQUFFRixtQkFBVUMsTTs7QUFFaEI7OztBQUdBRSxFQUFBQSxNQUFNLEVBQUVILG1CQUFVQyxNOztBQUVsQjs7O0FBR0FSLEVBQUFBLEtBQUssRUFBRU8sbUJBQVVDLE1BQVYsQ0FBaUJHLFU7O0FBRXhCOzs7QUFHQWIsRUFBQUEsS0FBSyxFQUFFUyxtQkFBVUssTUFBVixDQUFpQkQsVTs7QUFFeEI7Ozs7QUFJQVosRUFBQUEsU0FBUyxFQUFFUSxtQkFBVUM7OzhCQWxDbkJaLEksa0JBcUNrQjtBQUNwQkksRUFBQUEsS0FBSyxFQUFFO0FBRGEsQzs7ZUFxQlQsc0JBQVVKLElBQVYsQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgY3ggZnJvbSAnY2xhc3NuYW1lcydcbmltcG9ydCB7IHdpdGhUaGVtZSB9IGZyb20gJy4uLy4uL3RoZW1lJ1xuaW1wb3J0IFRleHQgZnJvbSAnLi9UZXh0J1xuXG5jbGFzcyBMaW5rIGV4dGVuZHMgUHVyZUNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgLi4uVGV4dC5wcm9wVHlwZXMsXG5cbiAgICAvKipcbiAgICAgKiBUaGlzIGF0dHJpYnV0ZSBuYW1lcyBhIHJlbGF0aW9uc2hpcCBvZiB0aGUgbGlua2VkIGRvY3VtZW50IHRvIHRoZSBjdXJyZW50IGRvY3VtZW50LlxuICAgICAqIENvbW1vbiB1c2UgY2FzZSBpczogcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiLlxuICAgICAqL1xuICAgIHJlbDogUHJvcFR5cGVzLnN0cmluZyxcblxuICAgIC8qKlxuICAgICAqIFNwZWNpZmllcyB0aGUgVVJMIG9mIHRoZSBsaW5rZWQgcmVzb3VyY2UuIEEgVVJMIG1pZ2h0IGJlIGFic29sdXRlIG9yIHJlbGF0aXZlLlxuICAgICAqL1xuICAgIGhyZWY6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgICAvKipcbiAgICAgKiBUYXJnZXQgYXRycmlidXRlLCBjb21tb24gdXNlIGNhc2UgaXMgdGFyZ2V0PVwiX2JsYW5rLlwiXG4gICAgICovXG4gICAgdGFyZ2V0OiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gICAgLyoqXG4gICAgICogVGhlIGNvbG9yIChhbmQgc3R5bGluZykgb2YgdGhlIExpbmsuIENhbiBiZSBkZWZhdWx0LCBibHVlLCBncmVlbiBvciBuZXV0cmFsLlxuICAgICAqL1xuICAgIGNvbG9yOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG5cbiAgICAvKipcbiAgICAgKiBUaGVtZSBwcm92aWRlZCBieSBUaGVtZVByb3ZpZGVyLlxuICAgICAqL1xuICAgIHRoZW1lOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG5cbiAgICAvKipcbiAgICAgKiBDbGFzcyBuYW1lIHBhc3NlZCB0byB0aGUgbGluay5cbiAgICAgKiBPbmx5IHVzZSBpZiB5b3Uga25vdyB3aGF0IHlvdSBhcmUgZG9pbmcuXG4gICAgICovXG4gICAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nXG4gIH1cblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIGNvbG9yOiAnZGVmYXVsdCdcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHRoZW1lLCBjbGFzc05hbWUsIGNvbG9yLCAuLi5wcm9wcyB9ID0gdGhpcy5wcm9wc1xuXG4gICAgY29uc3QgdGhlbWVkQ2xhc3NOYW1lID0gdGhlbWUuZ2V0TGlua0NsYXNzTmFtZShjb2xvcilcblxuICAgIHJldHVybiAoXG4gICAgICA8VGV4dFxuICAgICAgICBpcz1cImFcIlxuICAgICAgICBjbGFzc05hbWU9e2N4KGNsYXNzTmFtZSwgdGhlbWVkQ2xhc3NOYW1lKX1cbiAgICAgICAgdGV4dERlY29yYXRpb249XCJ1bmRlcmxpbmVcIlxuICAgICAgICBjb2xvcj17bnVsbH1cbiAgICAgICAgey4uLnByb3BzfVxuICAgICAgLz5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFRoZW1lKExpbmspXG4iXX0=