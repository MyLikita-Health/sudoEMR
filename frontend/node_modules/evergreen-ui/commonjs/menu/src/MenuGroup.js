"use strict";

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

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _layers = require("../../layers");

var _typography = require("../../typography");

var MenuGroup =
/*#__PURE__*/
function (_React$PureComponent) {
  (0, _inherits2.default)(MenuGroup, _React$PureComponent);

  function MenuGroup() {
    (0, _classCallCheck2.default)(this, MenuGroup);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(MenuGroup).apply(this, arguments));
  }

  (0, _createClass2.default)(MenuGroup, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          title = _this$props.title,
          children = _this$props.children;
      return _react.default.createElement(_layers.Pane, {
        paddingY: 8
      }, title && _react.default.createElement(_typography.Heading, {
        size: 100,
        marginX: 16,
        marginY: 8
      }, title), children);
    }
  }]);
  return MenuGroup;
}(_react.default.PureComponent);

exports.default = MenuGroup;
MenuGroup.displayName = "MenuGroup";
(0, _defineProperty2.default)(MenuGroup, "propTypes", {
  /**
   * Title of the menu group.
   */
  title: _propTypes.default.node,

  /**
   * The children of the menu group.
   */
  children: _propTypes.default.node
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tZW51L3NyYy9NZW51R3JvdXAuanMiXSwibmFtZXMiOlsiTWVudUdyb3VwIiwicHJvcHMiLCJ0aXRsZSIsImNoaWxkcmVuIiwiUmVhY3QiLCJQdXJlQ29tcG9uZW50IiwiUHJvcFR5cGVzIiwibm9kZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0lBRXFCQSxTOzs7Ozs7Ozs7Ozs7NkJBYVY7QUFBQSx3QkFDcUIsS0FBS0MsS0FEMUI7QUFBQSxVQUNDQyxLQURELGVBQ0NBLEtBREQ7QUFBQSxVQUNRQyxRQURSLGVBQ1FBLFFBRFI7QUFFUCxhQUNFLDZCQUFDLFlBQUQ7QUFBTSxRQUFBLFFBQVEsRUFBRTtBQUFoQixTQUNHRCxLQUFLLElBQ0osNkJBQUMsbUJBQUQ7QUFBUyxRQUFBLElBQUksRUFBRSxHQUFmO0FBQW9CLFFBQUEsT0FBTyxFQUFFLEVBQTdCO0FBQWlDLFFBQUEsT0FBTyxFQUFFO0FBQTFDLFNBQ0dBLEtBREgsQ0FGSixFQU1HQyxRQU5ILENBREY7QUFVRDs7O0VBekJvQ0MsZUFBTUMsYTs7O0FBQXhCTCxTOzhCQUFBQSxTLGVBQ0E7QUFDakI7OztBQUdBRSxFQUFBQSxLQUFLLEVBQUVJLG1CQUFVQyxJQUpBOztBQU1qQjs7O0FBR0FKLEVBQUFBLFFBQVEsRUFBRUcsbUJBQVVDO0FBVEgsQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCB7IFBhbmUgfSBmcm9tICcuLi8uLi9sYXllcnMnXG5pbXBvcnQgeyBIZWFkaW5nIH0gZnJvbSAnLi4vLi4vdHlwb2dyYXBoeSdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWVudUdyb3VwIGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgLyoqXG4gICAgICogVGl0bGUgb2YgdGhlIG1lbnUgZ3JvdXAuXG4gICAgICovXG4gICAgdGl0bGU6IFByb3BUeXBlcy5ub2RlLFxuXG4gICAgLyoqXG4gICAgICogVGhlIGNoaWxkcmVuIG9mIHRoZSBtZW51IGdyb3VwLlxuICAgICAqL1xuICAgIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgdGl0bGUsIGNoaWxkcmVuIH0gPSB0aGlzLnByb3BzXG4gICAgcmV0dXJuIChcbiAgICAgIDxQYW5lIHBhZGRpbmdZPXs4fT5cbiAgICAgICAge3RpdGxlICYmIChcbiAgICAgICAgICA8SGVhZGluZyBzaXplPXsxMDB9IG1hcmdpblg9ezE2fSBtYXJnaW5ZPXs4fT5cbiAgICAgICAgICAgIHt0aXRsZX1cbiAgICAgICAgICA8L0hlYWRpbmc+XG4gICAgICAgICl9XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgIDwvUGFuZT5cbiAgICApXG4gIH1cbn1cbiJdfQ==