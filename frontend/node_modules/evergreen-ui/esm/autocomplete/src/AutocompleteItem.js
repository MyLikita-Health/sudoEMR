import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Option from '../../select-menu/src/Option';

var AutocompleteItem =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(AutocompleteItem, _PureComponent);

  function AutocompleteItem() {
    _classCallCheck(this, AutocompleteItem);

    return _possibleConstructorReturn(this, _getPrototypeOf(AutocompleteItem).apply(this, arguments));
  }

  _createClass(AutocompleteItem, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          isHighlighted = _this$props.isHighlighted,
          isSelected = _this$props.isSelected,
          style = _this$props.style,
          children = _this$props.children,
          props = _objectWithoutProperties(_this$props, ["isHighlighted", "isSelected", "style", "children"]);

      return React.createElement(Option, _extends({
        isHighlighted: isHighlighted,
        isSelected: isSelected,
        label: children,
        style: style
      }, props));
    }
  }]);

  return AutocompleteItem;
}(PureComponent);

AutocompleteItem.displayName = "AutocompleteItem";

_defineProperty(AutocompleteItem, "propTypes", {
  children: PropTypes.node,
  style: PropTypes.object,
  isSelected: PropTypes.bool,
  isHighlighted: PropTypes.bool
});

export { AutocompleteItem as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hdXRvY29tcGxldGUvc3JjL0F1dG9jb21wbGV0ZUl0ZW0uanMiXSwibmFtZXMiOlsiUmVhY3QiLCJQdXJlQ29tcG9uZW50IiwiUHJvcFR5cGVzIiwiT3B0aW9uIiwiQXV0b2NvbXBsZXRlSXRlbSIsInByb3BzIiwiaXNIaWdobGlnaHRlZCIsImlzU2VsZWN0ZWQiLCJzdHlsZSIsImNoaWxkcmVuIiwibm9kZSIsIm9iamVjdCIsImJvb2wiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsT0FBT0EsS0FBUCxJQUFnQkMsYUFBaEIsUUFBcUMsT0FBckM7QUFDQSxPQUFPQyxTQUFQLE1BQXNCLFlBQXRCO0FBQ0EsT0FBT0MsTUFBUCxNQUFtQiw4QkFBbkI7O0lBRXFCQyxnQjs7Ozs7Ozs7Ozs7Ozs2QkFRVjtBQUFBLHdCQUMwRCxLQUFLQyxLQUQvRDtBQUFBLFVBQ0NDLGFBREQsZUFDQ0EsYUFERDtBQUFBLFVBQ2dCQyxVQURoQixlQUNnQkEsVUFEaEI7QUFBQSxVQUM0QkMsS0FENUIsZUFDNEJBLEtBRDVCO0FBQUEsVUFDbUNDLFFBRG5DLGVBQ21DQSxRQURuQztBQUFBLFVBQ2dESixLQURoRDs7QUFHUCxhQUNFLG9CQUFDLE1BQUQ7QUFDRSxRQUFBLGFBQWEsRUFBRUMsYUFEakI7QUFFRSxRQUFBLFVBQVUsRUFBRUMsVUFGZDtBQUdFLFFBQUEsS0FBSyxFQUFFRSxRQUhUO0FBSUUsUUFBQSxLQUFLLEVBQUVEO0FBSlQsU0FLTUgsS0FMTixFQURGO0FBU0Q7Ozs7RUFwQjJDSixhOztBQUF6QkcsZ0I7O2dCQUFBQSxnQixlQUNBO0FBQ2pCSyxFQUFBQSxRQUFRLEVBQUVQLFNBQVMsQ0FBQ1EsSUFESDtBQUVqQkYsRUFBQUEsS0FBSyxFQUFFTixTQUFTLENBQUNTLE1BRkE7QUFHakJKLEVBQUFBLFVBQVUsRUFBRUwsU0FBUyxDQUFDVSxJQUhMO0FBSWpCTixFQUFBQSxhQUFhLEVBQUVKLFNBQVMsQ0FBQ1U7QUFKUixDOztTQURBUixnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgT3B0aW9uIGZyb20gJy4uLy4uL3NlbGVjdC1tZW51L3NyYy9PcHRpb24nXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEF1dG9jb21wbGV0ZUl0ZW0gZXh0ZW5kcyBQdXJlQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG4gICAgc3R5bGU6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgaXNTZWxlY3RlZDogUHJvcFR5cGVzLmJvb2wsXG4gICAgaXNIaWdobGlnaHRlZDogUHJvcFR5cGVzLmJvb2xcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGlzSGlnaGxpZ2h0ZWQsIGlzU2VsZWN0ZWQsIHN0eWxlLCBjaGlsZHJlbiwgLi4ucHJvcHMgfSA9IHRoaXMucHJvcHNcblxuICAgIHJldHVybiAoXG4gICAgICA8T3B0aW9uXG4gICAgICAgIGlzSGlnaGxpZ2h0ZWQ9e2lzSGlnaGxpZ2h0ZWR9XG4gICAgICAgIGlzU2VsZWN0ZWQ9e2lzU2VsZWN0ZWR9XG4gICAgICAgIGxhYmVsPXtjaGlsZHJlbn1cbiAgICAgICAgc3R5bGU9e3N0eWxlfVxuICAgICAgICB7Li4ucHJvcHN9XG4gICAgICAvPlxuICAgIClcbiAgfVxufVxuIl19