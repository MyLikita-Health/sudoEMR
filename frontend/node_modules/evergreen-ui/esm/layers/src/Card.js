import _objectSpread from "@babel/runtime/helpers/esm/objectSpread";
import _extends from "@babel/runtime/helpers/esm/extends";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import React, { PureComponent } from 'react';
import Pane from './Pane';

var Card =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(Card, _PureComponent);

  function Card() {
    _classCallCheck(this, Card);

    return _possibleConstructorReturn(this, _getPrototypeOf(Card).apply(this, arguments));
  }

  _createClass(Card, [{
    key: "render",
    value: function render() {
      return React.createElement(Pane, _extends({
        borderRadius: 5
      }, this.props));
    }
  }]);

  return Card;
}(PureComponent);

Card.displayName = "Card";

_defineProperty(Card, "propTypes", _objectSpread({}, Pane.propTypes));

export { Card as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9sYXllcnMvc3JjL0NhcmQuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJQdXJlQ29tcG9uZW50IiwiUGFuZSIsIkNhcmQiLCJwcm9wcyIsInByb3BUeXBlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSxPQUFPQSxLQUFQLElBQWdCQyxhQUFoQixRQUFxQyxPQUFyQztBQUNBLE9BQU9DLElBQVAsTUFBaUIsUUFBakI7O0lBRXFCQyxJOzs7Ozs7Ozs7Ozs7OzZCQUtWO0FBQ1AsYUFBTyxvQkFBQyxJQUFEO0FBQU0sUUFBQSxZQUFZLEVBQUU7QUFBcEIsU0FBMkIsS0FBS0MsS0FBaEMsRUFBUDtBQUNEOzs7O0VBUCtCSCxhOztBQUFiRSxJOztnQkFBQUEsSSxpQ0FFZEQsSUFBSSxDQUFDRyxTOztTQUZTRixJIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBQYW5lIGZyb20gJy4vUGFuZSdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FyZCBleHRlbmRzIFB1cmVDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIC4uLlBhbmUucHJvcFR5cGVzXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIDxQYW5lIGJvcmRlclJhZGl1cz17NX0gey4uLnRoaXMucHJvcHN9IC8+XG4gIH1cbn1cbiJdfQ==