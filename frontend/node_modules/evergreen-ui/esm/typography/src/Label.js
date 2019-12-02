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

var Label =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(Label, _PureComponent);

  function Label() {
    _classCallCheck(this, Label);

    return _possibleConstructorReturn(this, _getPrototypeOf(Label).apply(this, arguments));
  }

  _createClass(Label, [{
    key: "render",
    value: function render() {
      return React.createElement(Text, _extends({
        is: "label",
        fontWeight: 500
      }, this.props));
    }
  }]);

  return Label;
}(PureComponent);

Label.displayName = "Label";

_defineProperty(Label, "propTypes", _objectSpread({}, Text.propTypes));

export { Label as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90eXBvZ3JhcGh5L3NyYy9MYWJlbC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIlB1cmVDb21wb25lbnQiLCJUZXh0IiwiTGFiZWwiLCJwcm9wcyIsInByb3BUeXBlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSxPQUFPQSxLQUFQLElBQWdCQyxhQUFoQixRQUFxQyxPQUFyQztBQUNBLE9BQU9DLElBQVAsTUFBaUIsUUFBakI7O0lBRXFCQyxLOzs7Ozs7Ozs7Ozs7OzZCQUtWO0FBQ1AsYUFBTyxvQkFBQyxJQUFEO0FBQU0sUUFBQSxFQUFFLEVBQUMsT0FBVDtBQUFpQixRQUFBLFVBQVUsRUFBRTtBQUE3QixTQUFzQyxLQUFLQyxLQUEzQyxFQUFQO0FBQ0Q7Ozs7RUFQZ0NILGE7O0FBQWRFLEs7O2dCQUFBQSxLLGlDQUVkRCxJQUFJLENBQUNHLFM7O1NBRlNGLEsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFRleHQgZnJvbSAnLi9UZXh0J1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMYWJlbCBleHRlbmRzIFB1cmVDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIC4uLlRleHQucHJvcFR5cGVzXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIDxUZXh0IGlzPVwibGFiZWxcIiBmb250V2VpZ2h0PXs1MDB9IHsuLi50aGlzLnByb3BzfSAvPlxuICB9XG59XG4iXX0=