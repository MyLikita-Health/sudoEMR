"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

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

var Image =
/*#__PURE__*/
function (_PureComponent) {
  (0, _inherits2.default)(Image, _PureComponent);

  function Image() {
    (0, _classCallCheck2.default)(this, Image);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Image).apply(this, arguments));
  }

  (0, _createClass2.default)(Image, [{
    key: "render",
    value: function render() {
      return _react.default.createElement(_uiBox.default, (0, _extends2.default)({
        is: "img"
      }, this.props));
    }
  }]);
  return Image;
}(_react.PureComponent);

exports.default = Image;
Image.displayName = "Image";
(0, _defineProperty2.default)(Image, "propTypes", (0, _objectSpread2.default)({}, _uiBox.default.propTypes, {
  src: _propTypes.default.string
}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9pbWFnZS9zcmMvSW1hZ2UuanMiXSwibmFtZXMiOlsiSW1hZ2UiLCJwcm9wcyIsIlB1cmVDb21wb25lbnQiLCJCb3giLCJwcm9wVHlwZXMiLCJzcmMiLCJQcm9wVHlwZXMiLCJzdHJpbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztJQUVxQkEsSzs7Ozs7Ozs7Ozs7OzZCQU1WO0FBQ1AsYUFBTyw2QkFBQyxjQUFEO0FBQUssUUFBQSxFQUFFLEVBQUM7QUFBUixTQUFrQixLQUFLQyxLQUF2QixFQUFQO0FBQ0Q7OztFQVJnQ0Msb0I7OztBQUFkRixLOzhCQUFBQSxLLCtDQUVkRyxlQUFJQyxTO0FBQ1BDLEVBQUFBLEdBQUcsRUFBRUMsbUJBQVVDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCBCb3ggZnJvbSAndWktYm94J1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbWFnZSBleHRlbmRzIFB1cmVDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIC4uLkJveC5wcm9wVHlwZXMsXG4gICAgc3JjOiBQcm9wVHlwZXMuc3RyaW5nXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIDxCb3ggaXM9XCJpbWdcIiB7Li4udGhpcy5wcm9wc30gLz5cbiAgfVxufVxuIl19