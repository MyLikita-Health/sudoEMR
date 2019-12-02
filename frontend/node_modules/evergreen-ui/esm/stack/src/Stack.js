import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { StackingOrder } from '../../constants';
import StackingContext from './StackingContext';

var Stack =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(Stack, _PureComponent);

  function Stack() {
    _classCallCheck(this, Stack);

    return _possibleConstructorReturn(this, _getPrototypeOf(Stack).apply(this, arguments));
  }

  _createClass(Stack, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          value = _this$props.value;
      return React.createElement(StackingContext.Consumer, null, function (previousValue) {
        var currentValue = Math.max(value, previousValue);
        var nextValue = currentValue + 1;
        return React.createElement(StackingContext.Provider, {
          value: nextValue
        }, children(currentValue));
      });
    }
  }]);

  return Stack;
}(PureComponent);

Stack.displayName = "Stack";

_defineProperty(Stack, "propTypes", {
  /**
   * Function that takes the current z-index and returns a React Node.
   * (zIndex) => ReactNode.
   */
  children: PropTypes.func.isRequired,

  /**
   * Set the value of the stack. This will increment for children.
   */
  value: PropTypes.number
});

_defineProperty(Stack, "defaultProps", {
  value: StackingOrder.STACKING_CONTEXT
});

export { Stack as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zdGFjay9zcmMvU3RhY2suanMiXSwibmFtZXMiOlsiUmVhY3QiLCJQdXJlQ29tcG9uZW50IiwiUHJvcFR5cGVzIiwiU3RhY2tpbmdPcmRlciIsIlN0YWNraW5nQ29udGV4dCIsIlN0YWNrIiwicHJvcHMiLCJjaGlsZHJlbiIsInZhbHVlIiwicHJldmlvdXNWYWx1ZSIsImN1cnJlbnRWYWx1ZSIsIk1hdGgiLCJtYXgiLCJuZXh0VmFsdWUiLCJmdW5jIiwiaXNSZXF1aXJlZCIsIm51bWJlciIsIlNUQUNLSU5HX0NPTlRFWFQiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU9BLEtBQVAsSUFBZ0JDLGFBQWhCLFFBQXFDLE9BQXJDO0FBQ0EsT0FBT0MsU0FBUCxNQUFzQixZQUF0QjtBQUNBLFNBQVNDLGFBQVQsUUFBOEIsaUJBQTlCO0FBQ0EsT0FBT0MsZUFBUCxNQUE0QixtQkFBNUI7O0lBRXFCQyxLOzs7Ozs7Ozs7Ozs7OzZCQWtCVjtBQUFBLHdCQUNxQixLQUFLQyxLQUQxQjtBQUFBLFVBQ0NDLFFBREQsZUFDQ0EsUUFERDtBQUFBLFVBQ1dDLEtBRFgsZUFDV0EsS0FEWDtBQUVQLGFBQ0Usb0JBQUMsZUFBRCxDQUFpQixRQUFqQixRQUNHLFVBQUFDLGFBQWEsRUFBSTtBQUNoQixZQUFNQyxZQUFZLEdBQUdDLElBQUksQ0FBQ0MsR0FBTCxDQUFTSixLQUFULEVBQWdCQyxhQUFoQixDQUFyQjtBQUNBLFlBQU1JLFNBQVMsR0FBR0gsWUFBWSxHQUFHLENBQWpDO0FBQ0EsZUFDRSxvQkFBQyxlQUFELENBQWlCLFFBQWpCO0FBQTBCLFVBQUEsS0FBSyxFQUFFRztBQUFqQyxXQUNHTixRQUFRLENBQUNHLFlBQUQsQ0FEWCxDQURGO0FBS0QsT0FUSCxDQURGO0FBYUQ7Ozs7RUFqQ2dDVCxhOztBQUFkSSxLOztnQkFBQUEsSyxlQUNBO0FBQ2pCOzs7O0FBSUFFLEVBQUFBLFFBQVEsRUFBRUwsU0FBUyxDQUFDWSxJQUFWLENBQWVDLFVBTFI7O0FBT2pCOzs7QUFHQVAsRUFBQUEsS0FBSyxFQUFFTixTQUFTLENBQUNjO0FBVkEsQzs7Z0JBREFYLEssa0JBY0c7QUFDcEJHLEVBQUFBLEtBQUssRUFBRUwsYUFBYSxDQUFDYztBQURELEM7O1NBZEhaLEsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IHsgU3RhY2tpbmdPcmRlciB9IGZyb20gJy4uLy4uL2NvbnN0YW50cydcbmltcG9ydCBTdGFja2luZ0NvbnRleHQgZnJvbSAnLi9TdGFja2luZ0NvbnRleHQnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0YWNrIGV4dGVuZHMgUHVyZUNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgLyoqXG4gICAgICogRnVuY3Rpb24gdGhhdCB0YWtlcyB0aGUgY3VycmVudCB6LWluZGV4IGFuZCByZXR1cm5zIGEgUmVhY3QgTm9kZS5cbiAgICAgKiAoekluZGV4KSA9PiBSZWFjdE5vZGUuXG4gICAgICovXG4gICAgY2hpbGRyZW46IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG5cbiAgICAvKipcbiAgICAgKiBTZXQgdGhlIHZhbHVlIG9mIHRoZSBzdGFjay4gVGhpcyB3aWxsIGluY3JlbWVudCBmb3IgY2hpbGRyZW4uXG4gICAgICovXG4gICAgdmFsdWU6IFByb3BUeXBlcy5udW1iZXJcbiAgfVxuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgdmFsdWU6IFN0YWNraW5nT3JkZXIuU1RBQ0tJTkdfQ09OVEVYVFxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgY2hpbGRyZW4sIHZhbHVlIH0gPSB0aGlzLnByb3BzXG4gICAgcmV0dXJuIChcbiAgICAgIDxTdGFja2luZ0NvbnRleHQuQ29uc3VtZXI+XG4gICAgICAgIHtwcmV2aW91c1ZhbHVlID0+IHtcbiAgICAgICAgICBjb25zdCBjdXJyZW50VmFsdWUgPSBNYXRoLm1heCh2YWx1ZSwgcHJldmlvdXNWYWx1ZSlcbiAgICAgICAgICBjb25zdCBuZXh0VmFsdWUgPSBjdXJyZW50VmFsdWUgKyAxXG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxTdGFja2luZ0NvbnRleHQuUHJvdmlkZXIgdmFsdWU9e25leHRWYWx1ZX0+XG4gICAgICAgICAgICAgIHtjaGlsZHJlbihjdXJyZW50VmFsdWUpfVxuICAgICAgICAgICAgPC9TdGFja2luZ0NvbnRleHQuUHJvdmlkZXI+XG4gICAgICAgICAgKVxuICAgICAgICB9fVxuICAgICAgPC9TdGFja2luZ0NvbnRleHQuQ29uc3VtZXI+XG4gICAgKVxuICB9XG59XG4iXX0=