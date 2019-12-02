import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import React from 'react';
import PropTypes from 'prop-types';
import { Pane } from '../../layers';
import { Heading } from '../../typography';

var MenuGroup =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(MenuGroup, _React$PureComponent);

  function MenuGroup() {
    _classCallCheck(this, MenuGroup);

    return _possibleConstructorReturn(this, _getPrototypeOf(MenuGroup).apply(this, arguments));
  }

  _createClass(MenuGroup, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          title = _this$props.title,
          children = _this$props.children;
      return React.createElement(Pane, {
        paddingY: 8
      }, title && React.createElement(Heading, {
        size: 100,
        marginX: 16,
        marginY: 8
      }, title), children);
    }
  }]);

  return MenuGroup;
}(React.PureComponent);

MenuGroup.displayName = "MenuGroup";

_defineProperty(MenuGroup, "propTypes", {
  /**
   * Title of the menu group.
   */
  title: PropTypes.node,

  /**
   * The children of the menu group.
   */
  children: PropTypes.node
});

export { MenuGroup as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tZW51L3NyYy9NZW51R3JvdXAuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJQcm9wVHlwZXMiLCJQYW5lIiwiSGVhZGluZyIsIk1lbnVHcm91cCIsInByb3BzIiwidGl0bGUiLCJjaGlsZHJlbiIsIlB1cmVDb21wb25lbnQiLCJub2RlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxPQUFPQSxLQUFQLE1BQWtCLE9BQWxCO0FBQ0EsT0FBT0MsU0FBUCxNQUFzQixZQUF0QjtBQUNBLFNBQVNDLElBQVQsUUFBcUIsY0FBckI7QUFDQSxTQUFTQyxPQUFULFFBQXdCLGtCQUF4Qjs7SUFFcUJDLFM7Ozs7Ozs7Ozs7Ozs7NkJBYVY7QUFBQSx3QkFDcUIsS0FBS0MsS0FEMUI7QUFBQSxVQUNDQyxLQURELGVBQ0NBLEtBREQ7QUFBQSxVQUNRQyxRQURSLGVBQ1FBLFFBRFI7QUFFUCxhQUNFLG9CQUFDLElBQUQ7QUFBTSxRQUFBLFFBQVEsRUFBRTtBQUFoQixTQUNHRCxLQUFLLElBQ0osb0JBQUMsT0FBRDtBQUFTLFFBQUEsSUFBSSxFQUFFLEdBQWY7QUFBb0IsUUFBQSxPQUFPLEVBQUUsRUFBN0I7QUFBaUMsUUFBQSxPQUFPLEVBQUU7QUFBMUMsU0FDR0EsS0FESCxDQUZKLEVBTUdDLFFBTkgsQ0FERjtBQVVEOzs7O0VBekJvQ1AsS0FBSyxDQUFDUSxhOztBQUF4QkosUzs7Z0JBQUFBLFMsZUFDQTtBQUNqQjs7O0FBR0FFLEVBQUFBLEtBQUssRUFBRUwsU0FBUyxDQUFDUSxJQUpBOztBQU1qQjs7O0FBR0FGLEVBQUFBLFFBQVEsRUFBRU4sU0FBUyxDQUFDUTtBQVRILEM7O1NBREFMLFMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgeyBQYW5lIH0gZnJvbSAnLi4vLi4vbGF5ZXJzJ1xuaW1wb3J0IHsgSGVhZGluZyB9IGZyb20gJy4uLy4uL3R5cG9ncmFwaHknXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1lbnVHcm91cCBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIC8qKlxuICAgICAqIFRpdGxlIG9mIHRoZSBtZW51IGdyb3VwLlxuICAgICAqL1xuICAgIHRpdGxlOiBQcm9wVHlwZXMubm9kZSxcblxuICAgIC8qKlxuICAgICAqIFRoZSBjaGlsZHJlbiBvZiB0aGUgbWVudSBncm91cC5cbiAgICAgKi9cbiAgICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGVcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHRpdGxlLCBjaGlsZHJlbiB9ID0gdGhpcy5wcm9wc1xuICAgIHJldHVybiAoXG4gICAgICA8UGFuZSBwYWRkaW5nWT17OH0+XG4gICAgICAgIHt0aXRsZSAmJiAoXG4gICAgICAgICAgPEhlYWRpbmcgc2l6ZT17MTAwfSBtYXJnaW5YPXsxNn0gbWFyZ2luWT17OH0+XG4gICAgICAgICAgICB7dGl0bGV9XG4gICAgICAgICAgPC9IZWFkaW5nPlxuICAgICAgICApfVxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICA8L1BhbmU+XG4gICAgKVxuICB9XG59XG4iXX0=