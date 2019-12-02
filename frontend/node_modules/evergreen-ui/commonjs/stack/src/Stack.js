"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _constants = require("../../constants");

var _StackingContext = _interopRequireDefault(require("./StackingContext"));

var Stack =
/*#__PURE__*/
function (_PureComponent) {
  (0, _inherits2.default)(Stack, _PureComponent);

  function Stack() {
    (0, _classCallCheck2.default)(this, Stack);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Stack).apply(this, arguments));
  }

  (0, _createClass2.default)(Stack, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          value = _this$props.value;
      return _react.default.createElement(_StackingContext.default.Consumer, null, function (previousValue) {
        var currentValue = Math.max(value, previousValue);
        var nextValue = currentValue + 1;
        return _react.default.createElement(_StackingContext.default.Provider, {
          value: nextValue
        }, children(currentValue));
      });
    }
  }]);
  return Stack;
}(_react.PureComponent);

exports.default = Stack;
Stack.displayName = "Stack";
(0, _defineProperty2.default)(Stack, "propTypes", {
  /**
   * Function that takes the current z-index and returns a React Node.
   * (zIndex) => ReactNode.
   */
  children: _propTypes.default.func.isRequired,

  /**
   * Set the value of the stack. This will increment for children.
   */
  value: _propTypes.default.number
});
(0, _defineProperty2.default)(Stack, "defaultProps", {
  value: _constants.StackingOrder.STACKING_CONTEXT
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zdGFjay9zcmMvU3RhY2suanMiXSwibmFtZXMiOlsiU3RhY2siLCJwcm9wcyIsImNoaWxkcmVuIiwidmFsdWUiLCJwcmV2aW91c1ZhbHVlIiwiY3VycmVudFZhbHVlIiwiTWF0aCIsIm1heCIsIm5leHRWYWx1ZSIsIlB1cmVDb21wb25lbnQiLCJQcm9wVHlwZXMiLCJmdW5jIiwiaXNSZXF1aXJlZCIsIm51bWJlciIsIlN0YWNraW5nT3JkZXIiLCJTVEFDS0lOR19DT05URVhUIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztJQUVxQkEsSzs7Ozs7Ozs7Ozs7OzZCQWtCVjtBQUFBLHdCQUNxQixLQUFLQyxLQUQxQjtBQUFBLFVBQ0NDLFFBREQsZUFDQ0EsUUFERDtBQUFBLFVBQ1dDLEtBRFgsZUFDV0EsS0FEWDtBQUVQLGFBQ0UsNkJBQUMsd0JBQUQsQ0FBaUIsUUFBakIsUUFDRyxVQUFBQyxhQUFhLEVBQUk7QUFDaEIsWUFBTUMsWUFBWSxHQUFHQyxJQUFJLENBQUNDLEdBQUwsQ0FBU0osS0FBVCxFQUFnQkMsYUFBaEIsQ0FBckI7QUFDQSxZQUFNSSxTQUFTLEdBQUdILFlBQVksR0FBRyxDQUFqQztBQUNBLGVBQ0UsNkJBQUMsd0JBQUQsQ0FBaUIsUUFBakI7QUFBMEIsVUFBQSxLQUFLLEVBQUVHO0FBQWpDLFdBQ0dOLFFBQVEsQ0FBQ0csWUFBRCxDQURYLENBREY7QUFLRCxPQVRILENBREY7QUFhRDs7O0VBakNnQ0ksb0I7OztBQUFkVCxLOzhCQUFBQSxLLGVBQ0E7QUFDakI7Ozs7QUFJQUUsRUFBQUEsUUFBUSxFQUFFUSxtQkFBVUMsSUFBVixDQUFlQyxVQUxSOztBQU9qQjs7O0FBR0FULEVBQUFBLEtBQUssRUFBRU8sbUJBQVVHO0FBVkEsQzs4QkFEQWIsSyxrQkFjRztBQUNwQkcsRUFBQUEsS0FBSyxFQUFFVyx5QkFBY0M7QUFERCxDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCB7IFN0YWNraW5nT3JkZXIgfSBmcm9tICcuLi8uLi9jb25zdGFudHMnXG5pbXBvcnQgU3RhY2tpbmdDb250ZXh0IGZyb20gJy4vU3RhY2tpbmdDb250ZXh0J1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdGFjayBleHRlbmRzIFB1cmVDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIC8qKlxuICAgICAqIEZ1bmN0aW9uIHRoYXQgdGFrZXMgdGhlIGN1cnJlbnQgei1pbmRleCBhbmQgcmV0dXJucyBhIFJlYWN0IE5vZGUuXG4gICAgICogKHpJbmRleCkgPT4gUmVhY3ROb2RlLlxuICAgICAqL1xuICAgIGNoaWxkcmVuOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuXG4gICAgLyoqXG4gICAgICogU2V0IHRoZSB2YWx1ZSBvZiB0aGUgc3RhY2suIFRoaXMgd2lsbCBpbmNyZW1lbnQgZm9yIGNoaWxkcmVuLlxuICAgICAqL1xuICAgIHZhbHVlOiBQcm9wVHlwZXMubnVtYmVyXG4gIH1cblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIHZhbHVlOiBTdGFja2luZ09yZGVyLlNUQUNLSU5HX0NPTlRFWFRcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGNoaWxkcmVuLCB2YWx1ZSB9ID0gdGhpcy5wcm9wc1xuICAgIHJldHVybiAoXG4gICAgICA8U3RhY2tpbmdDb250ZXh0LkNvbnN1bWVyPlxuICAgICAgICB7cHJldmlvdXNWYWx1ZSA9PiB7XG4gICAgICAgICAgY29uc3QgY3VycmVudFZhbHVlID0gTWF0aC5tYXgodmFsdWUsIHByZXZpb3VzVmFsdWUpXG4gICAgICAgICAgY29uc3QgbmV4dFZhbHVlID0gY3VycmVudFZhbHVlICsgMVxuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8U3RhY2tpbmdDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtuZXh0VmFsdWV9PlxuICAgICAgICAgICAgICB7Y2hpbGRyZW4oY3VycmVudFZhbHVlKX1cbiAgICAgICAgICAgIDwvU3RhY2tpbmdDb250ZXh0LlByb3ZpZGVyPlxuICAgICAgICAgIClcbiAgICAgICAgfX1cbiAgICAgIDwvU3RhY2tpbmdDb250ZXh0LkNvbnN1bWVyPlxuICAgIClcbiAgfVxufVxuIl19