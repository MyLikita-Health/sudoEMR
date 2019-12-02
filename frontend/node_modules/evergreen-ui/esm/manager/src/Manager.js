import _objectSpread from "@babel/runtime/helpers/esm/objectSpread";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import React from 'react';
import PropTypes from 'prop-types';
/**
 * This component is a utility component to manage state in stories and examples.
 */

var Manager =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Manager, _React$Component);

  function Manager(props) {
    var _this;

    _classCallCheck(this, Manager);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Manager).call(this, props));
    _this.state = _objectSpread({}, props);
    return _this;
  }

  _createClass(Manager, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return this.props.children({
        setState: function setState() {
          _this2.setState.apply(_this2, arguments);
        },
        state: this.state
      });
    }
  }]);

  return Manager;
}(React.Component);

Manager.displayName = "Manager";

_defineProperty(Manager, "propTypes", {
  children: PropTypes.func
});

export { Manager as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tYW5hZ2VyL3NyYy9NYW5hZ2VyLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiUHJvcFR5cGVzIiwiTWFuYWdlciIsInByb3BzIiwic3RhdGUiLCJjaGlsZHJlbiIsInNldFN0YXRlIiwiQ29tcG9uZW50IiwiZnVuYyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBLE9BQU9BLEtBQVAsTUFBa0IsT0FBbEI7QUFDQSxPQUFPQyxTQUFQLE1BQXNCLFlBQXRCO0FBRUE7Ozs7SUFHcUJDLE87Ozs7O0FBS25CLG1CQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2pCLGlGQUFNQSxLQUFOO0FBQ0EsVUFBS0MsS0FBTCxxQkFDS0QsS0FETDtBQUZpQjtBQUtsQjs7Ozs2QkFFUTtBQUFBOztBQUNQLGFBQU8sS0FBS0EsS0FBTCxDQUFXRSxRQUFYLENBQW9CO0FBQ3pCQyxRQUFBQSxRQUFRLEVBQUUsb0JBQWE7QUFDckIsVUFBQSxNQUFJLENBQUNBLFFBQUwsT0FBQSxNQUFJLFlBQUo7QUFDRCxTQUh3QjtBQUl6QkYsUUFBQUEsS0FBSyxFQUFFLEtBQUtBO0FBSmEsT0FBcEIsQ0FBUDtBQU1EOzs7O0VBbkJrQ0osS0FBSyxDQUFDTyxTOztBQUF0QkwsTzs7Z0JBQUFBLE8sZUFDQTtBQUNqQkcsRUFBQUEsUUFBUSxFQUFFSixTQUFTLENBQUNPO0FBREgsQzs7U0FEQU4sTyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcblxuLyoqXG4gKiBUaGlzIGNvbXBvbmVudCBpcyBhIHV0aWxpdHkgY29tcG9uZW50IHRvIG1hbmFnZSBzdGF0ZSBpbiBzdG9yaWVzIGFuZCBleGFtcGxlcy5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFuYWdlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgY2hpbGRyZW46IFByb3BUeXBlcy5mdW5jXG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAuLi5wcm9wc1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9wcy5jaGlsZHJlbih7XG4gICAgICBzZXRTdGF0ZTogKC4uLmFyZ3MpID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSguLi5hcmdzKVxuICAgICAgfSxcbiAgICAgIHN0YXRlOiB0aGlzLnN0YXRlXG4gICAgfSlcbiAgfVxufVxuIl19