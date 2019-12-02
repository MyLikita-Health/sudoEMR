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

var _uiBox = _interopRequireDefault(require("ui-box"));

var _Tab = _interopRequireDefault(require("./Tab"));

var SidebarTab =
/*#__PURE__*/
function (_PureComponent) {
  (0, _inherits2.default)(SidebarTab, _PureComponent);

  function SidebarTab() {
    (0, _classCallCheck2.default)(this, SidebarTab);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(SidebarTab).apply(this, arguments));
  }

  (0, _createClass2.default)(SidebarTab, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          height = _this$props.height,
          isSelected = _this$props.isSelected,
          props = (0, _objectWithoutProperties2.default)(_this$props, ["children", "height", "isSelected"]);
      return _react.default.createElement(_Tab.default, (0, _extends2.default)({
        isSelected: isSelected,
        height: height
      }, SidebarTab.styles, props, {
        display: "flex"
      }), _react.default.createElement(_uiBox.default, {
        is: "span",
        flex: "1"
      }, children));
    }
  }]);
  return SidebarTab;
}(_react.PureComponent);

exports.default = SidebarTab;
SidebarTab.displayName = "SidebarTab";
(0, _defineProperty2.default)(SidebarTab, "propTypes", (0, _objectSpread2.default)({}, _Tab.default.propTypes));
(0, _defineProperty2.default)(SidebarTab, "defaultProps", {
  height: 32
});
(0, _defineProperty2.default)(SidebarTab, "styles", {
  width: '100%',
  paddingX: 0,
  paddingLeft: 8,
  marginX: 0,
  marginBottom: 4,
  justifyContent: 'auto'
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90YWJzL3NyYy9TaWRlYmFyVGFiLmpzIl0sIm5hbWVzIjpbIlNpZGViYXJUYWIiLCJwcm9wcyIsImNoaWxkcmVuIiwiaGVpZ2h0IiwiaXNTZWxlY3RlZCIsInN0eWxlcyIsIlB1cmVDb21wb25lbnQiLCJUYWIiLCJwcm9wVHlwZXMiLCJ3aWR0aCIsInBhZGRpbmdYIiwicGFkZGluZ0xlZnQiLCJtYXJnaW5YIiwibWFyZ2luQm90dG9tIiwianVzdGlmeUNvbnRlbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0lBRXFCQSxVOzs7Ozs7Ozs7Ozs7NkJBa0JWO0FBQUEsd0JBQzRDLEtBQUtDLEtBRGpEO0FBQUEsVUFDQ0MsUUFERCxlQUNDQSxRQUREO0FBQUEsVUFDV0MsTUFEWCxlQUNXQSxNQURYO0FBQUEsVUFDbUJDLFVBRG5CLGVBQ21CQSxVQURuQjtBQUFBLFVBQ2tDSCxLQURsQztBQUVQLGFBQ0UsNkJBQUMsWUFBRDtBQUNFLFFBQUEsVUFBVSxFQUFFRyxVQURkO0FBRUUsUUFBQSxNQUFNLEVBQUVEO0FBRlYsU0FHTUgsVUFBVSxDQUFDSyxNQUhqQixFQUlNSixLQUpOO0FBS0UsUUFBQSxPQUFPLEVBQUM7QUFMVixVQU9FLDZCQUFDLGNBQUQ7QUFBSyxRQUFBLEVBQUUsRUFBQyxNQUFSO0FBQWUsUUFBQSxJQUFJLEVBQUM7QUFBcEIsU0FDR0MsUUFESCxDQVBGLENBREY7QUFhRDs7O0VBakNxQ0ksb0I7OztBQUFuQk4sVTs4QkFBQUEsVSwrQ0FFZE8sYUFBSUMsUzs4QkFGVVIsVSxrQkFLRztBQUNwQkcsRUFBQUEsTUFBTSxFQUFFO0FBRFksQzs4QkFMSEgsVSxZQVNIO0FBQ2RTLEVBQUFBLEtBQUssRUFBRSxNQURPO0FBRWRDLEVBQUFBLFFBQVEsRUFBRSxDQUZJO0FBR2RDLEVBQUFBLFdBQVcsRUFBRSxDQUhDO0FBSWRDLEVBQUFBLE9BQU8sRUFBRSxDQUpLO0FBS2RDLEVBQUFBLFlBQVksRUFBRSxDQUxBO0FBTWRDLEVBQUFBLGNBQWMsRUFBRTtBQU5GLEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEJveCBmcm9tICd1aS1ib3gnXG5pbXBvcnQgVGFiIGZyb20gJy4vVGFiJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaWRlYmFyVGFiIGV4dGVuZHMgUHVyZUNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgLi4uVGFiLnByb3BUeXBlc1xuICB9XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBoZWlnaHQ6IDMyXG4gIH1cblxuICBzdGF0aWMgc3R5bGVzID0ge1xuICAgIHdpZHRoOiAnMTAwJScsXG4gICAgcGFkZGluZ1g6IDAsXG4gICAgcGFkZGluZ0xlZnQ6IDgsXG4gICAgbWFyZ2luWDogMCxcbiAgICBtYXJnaW5Cb3R0b206IDQsXG4gICAganVzdGlmeUNvbnRlbnQ6ICdhdXRvJ1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgY2hpbGRyZW4sIGhlaWdodCwgaXNTZWxlY3RlZCwgLi4ucHJvcHMgfSA9IHRoaXMucHJvcHNcbiAgICByZXR1cm4gKFxuICAgICAgPFRhYlxuICAgICAgICBpc1NlbGVjdGVkPXtpc1NlbGVjdGVkfVxuICAgICAgICBoZWlnaHQ9e2hlaWdodH1cbiAgICAgICAgey4uLlNpZGViYXJUYWIuc3R5bGVzfVxuICAgICAgICB7Li4ucHJvcHN9XG4gICAgICAgIGRpc3BsYXk9XCJmbGV4XCJcbiAgICAgID5cbiAgICAgICAgPEJveCBpcz1cInNwYW5cIiBmbGV4PVwiMVwiPlxuICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgPC9Cb3g+XG4gICAgICA8L1RhYj5cbiAgICApXG4gIH1cbn1cbiJdfQ==