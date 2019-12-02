import _objectSpread from "@babel/runtime/helpers/esm/objectSpread";
import _extends from "@babel/runtime/helpers/esm/extends";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import React, { PureComponent } from 'react';
import Text from './Text';

var Strong =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(Strong, _PureComponent);

  function Strong() {
    _classCallCheck(this, Strong);

    return _possibleConstructorReturn(this, _getPrototypeOf(Strong).apply(this, arguments));
  }

  _createClass(Strong, [{
    key: "render",
    value: function render() {
      return React.createElement(Text, _extends({
        is: "strong",
        fontWeight: 600
      }, this.props));
    }
  }]);

  return Strong;
}(PureComponent);

Strong.displayName = "Strong";

_defineProperty(Strong, "propTypes", _objectSpread({}, Text.propTypes));

export { Strong as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90eXBvZ3JhcGh5L3NyYy9TdHJvbmcuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJQdXJlQ29tcG9uZW50IiwiVGV4dCIsIlN0cm9uZyIsInByb3BzIiwicHJvcFR5cGVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLE9BQU9BLEtBQVAsSUFBZ0JDLGFBQWhCLFFBQXFDLE9BQXJDO0FBQ0EsT0FBT0MsSUFBUCxNQUFpQixRQUFqQjs7SUFFcUJDLE07Ozs7Ozs7Ozs7Ozs7NkJBS1Y7QUFDUCxhQUFPLG9CQUFDLElBQUQ7QUFBTSxRQUFBLEVBQUUsRUFBQyxRQUFUO0FBQWtCLFFBQUEsVUFBVSxFQUFFO0FBQTlCLFNBQXVDLEtBQUtDLEtBQTVDLEVBQVA7QUFDRDs7OztFQVBpQ0gsYTs7QUFBZkUsTTs7Z0JBQUFBLE0saUNBRWRELElBQUksQ0FBQ0csUzs7U0FGU0YsTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgVGV4dCBmcm9tICcuL1RleHQnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0cm9uZyBleHRlbmRzIFB1cmVDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIC4uLlRleHQucHJvcFR5cGVzXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIDxUZXh0IGlzPVwic3Ryb25nXCIgZm9udFdlaWdodD17NjAwfSB7Li4udGhpcy5wcm9wc30gLz5cbiAgfVxufVxuIl19