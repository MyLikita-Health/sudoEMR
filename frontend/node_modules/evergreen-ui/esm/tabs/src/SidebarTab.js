import _objectSpread from "@babel/runtime/helpers/esm/objectSpread";
import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import React, { PureComponent } from 'react';
import Box from 'ui-box';
import Tab from './Tab';

var SidebarTab =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(SidebarTab, _PureComponent);

  function SidebarTab() {
    _classCallCheck(this, SidebarTab);

    return _possibleConstructorReturn(this, _getPrototypeOf(SidebarTab).apply(this, arguments));
  }

  _createClass(SidebarTab, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          height = _this$props.height,
          isSelected = _this$props.isSelected,
          props = _objectWithoutProperties(_this$props, ["children", "height", "isSelected"]);

      return React.createElement(Tab, _extends({
        isSelected: isSelected,
        height: height
      }, SidebarTab.styles, props, {
        display: "flex"
      }), React.createElement(Box, {
        is: "span",
        flex: "1"
      }, children));
    }
  }]);

  return SidebarTab;
}(PureComponent);

SidebarTab.displayName = "SidebarTab";

_defineProperty(SidebarTab, "propTypes", _objectSpread({}, Tab.propTypes));

_defineProperty(SidebarTab, "defaultProps", {
  height: 32
});

_defineProperty(SidebarTab, "styles", {
  width: '100%',
  paddingX: 0,
  paddingLeft: 8,
  marginX: 0,
  marginBottom: 4,
  justifyContent: 'auto'
});

export { SidebarTab as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90YWJzL3NyYy9TaWRlYmFyVGFiLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiUHVyZUNvbXBvbmVudCIsIkJveCIsIlRhYiIsIlNpZGViYXJUYWIiLCJwcm9wcyIsImNoaWxkcmVuIiwiaGVpZ2h0IiwiaXNTZWxlY3RlZCIsInN0eWxlcyIsInByb3BUeXBlcyIsIndpZHRoIiwicGFkZGluZ1giLCJwYWRkaW5nTGVmdCIsIm1hcmdpblgiLCJtYXJnaW5Cb3R0b20iLCJqdXN0aWZ5Q29udGVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsT0FBT0EsS0FBUCxJQUFnQkMsYUFBaEIsUUFBcUMsT0FBckM7QUFDQSxPQUFPQyxHQUFQLE1BQWdCLFFBQWhCO0FBQ0EsT0FBT0MsR0FBUCxNQUFnQixPQUFoQjs7SUFFcUJDLFU7Ozs7Ozs7Ozs7Ozs7NkJBa0JWO0FBQUEsd0JBQzRDLEtBQUtDLEtBRGpEO0FBQUEsVUFDQ0MsUUFERCxlQUNDQSxRQUREO0FBQUEsVUFDV0MsTUFEWCxlQUNXQSxNQURYO0FBQUEsVUFDbUJDLFVBRG5CLGVBQ21CQSxVQURuQjtBQUFBLFVBQ2tDSCxLQURsQzs7QUFFUCxhQUNFLG9CQUFDLEdBQUQ7QUFDRSxRQUFBLFVBQVUsRUFBRUcsVUFEZDtBQUVFLFFBQUEsTUFBTSxFQUFFRDtBQUZWLFNBR01ILFVBQVUsQ0FBQ0ssTUFIakIsRUFJTUosS0FKTjtBQUtFLFFBQUEsT0FBTyxFQUFDO0FBTFYsVUFPRSxvQkFBQyxHQUFEO0FBQUssUUFBQSxFQUFFLEVBQUMsTUFBUjtBQUFlLFFBQUEsSUFBSSxFQUFDO0FBQXBCLFNBQ0dDLFFBREgsQ0FQRixDQURGO0FBYUQ7Ozs7RUFqQ3FDTCxhOztBQUFuQkcsVTs7Z0JBQUFBLFUsaUNBRWRELEdBQUcsQ0FBQ08sUzs7Z0JBRlVOLFUsa0JBS0c7QUFDcEJHLEVBQUFBLE1BQU0sRUFBRTtBQURZLEM7O2dCQUxISCxVLFlBU0g7QUFDZE8sRUFBQUEsS0FBSyxFQUFFLE1BRE87QUFFZEMsRUFBQUEsUUFBUSxFQUFFLENBRkk7QUFHZEMsRUFBQUEsV0FBVyxFQUFFLENBSEM7QUFJZEMsRUFBQUEsT0FBTyxFQUFFLENBSks7QUFLZEMsRUFBQUEsWUFBWSxFQUFFLENBTEE7QUFNZEMsRUFBQUEsY0FBYyxFQUFFO0FBTkYsQzs7U0FUR1osVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgQm94IGZyb20gJ3VpLWJveCdcbmltcG9ydCBUYWIgZnJvbSAnLi9UYWInXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNpZGViYXJUYWIgZXh0ZW5kcyBQdXJlQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAuLi5UYWIucHJvcFR5cGVzXG4gIH1cblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIGhlaWdodDogMzJcbiAgfVxuXG4gIHN0YXRpYyBzdHlsZXMgPSB7XG4gICAgd2lkdGg6ICcxMDAlJyxcbiAgICBwYWRkaW5nWDogMCxcbiAgICBwYWRkaW5nTGVmdDogOCxcbiAgICBtYXJnaW5YOiAwLFxuICAgIG1hcmdpbkJvdHRvbTogNCxcbiAgICBqdXN0aWZ5Q29udGVudDogJ2F1dG8nXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBjaGlsZHJlbiwgaGVpZ2h0LCBpc1NlbGVjdGVkLCAuLi5wcm9wcyB9ID0gdGhpcy5wcm9wc1xuICAgIHJldHVybiAoXG4gICAgICA8VGFiXG4gICAgICAgIGlzU2VsZWN0ZWQ9e2lzU2VsZWN0ZWR9XG4gICAgICAgIGhlaWdodD17aGVpZ2h0fVxuICAgICAgICB7Li4uU2lkZWJhclRhYi5zdHlsZXN9XG4gICAgICAgIHsuLi5wcm9wc31cbiAgICAgICAgZGlzcGxheT1cImZsZXhcIlxuICAgICAgPlxuICAgICAgICA8Qm94IGlzPVwic3BhblwiIGZsZXg9XCIxXCI+XG4gICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICA8L0JveD5cbiAgICAgIDwvVGFiPlxuICAgIClcbiAgfVxufVxuIl19