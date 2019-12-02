import _objectSpread from "@babel/runtime/helpers/esm/objectSpread";
import _extends from "@babel/runtime/helpers/esm/extends";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Box from 'ui-box';

var Image =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(Image, _PureComponent);

  function Image() {
    _classCallCheck(this, Image);

    return _possibleConstructorReturn(this, _getPrototypeOf(Image).apply(this, arguments));
  }

  _createClass(Image, [{
    key: "render",
    value: function render() {
      return React.createElement(Box, _extends({
        is: "img"
      }, this.props));
    }
  }]);

  return Image;
}(PureComponent);

Image.displayName = "Image";

_defineProperty(Image, "propTypes", _objectSpread({}, Box.propTypes, {
  src: PropTypes.string
}));

export { Image as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9pbWFnZS9zcmMvSW1hZ2UuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJQdXJlQ29tcG9uZW50IiwiUHJvcFR5cGVzIiwiQm94IiwiSW1hZ2UiLCJwcm9wcyIsInByb3BUeXBlcyIsInNyYyIsInN0cmluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSxPQUFPQSxLQUFQLElBQWdCQyxhQUFoQixRQUFxQyxPQUFyQztBQUNBLE9BQU9DLFNBQVAsTUFBc0IsWUFBdEI7QUFDQSxPQUFPQyxHQUFQLE1BQWdCLFFBQWhCOztJQUVxQkMsSzs7Ozs7Ozs7Ozs7Ozs2QkFNVjtBQUNQLGFBQU8sb0JBQUMsR0FBRDtBQUFLLFFBQUEsRUFBRSxFQUFDO0FBQVIsU0FBa0IsS0FBS0MsS0FBdkIsRUFBUDtBQUNEOzs7O0VBUmdDSixhOztBQUFkRyxLOztnQkFBQUEsSyxpQ0FFZEQsR0FBRyxDQUFDRyxTO0FBQ1BDLEVBQUFBLEdBQUcsRUFBRUwsU0FBUyxDQUFDTTs7O1NBSEVKLEsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IEJveCBmcm9tICd1aS1ib3gnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEltYWdlIGV4dGVuZHMgUHVyZUNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgLi4uQm94LnByb3BUeXBlcyxcbiAgICBzcmM6IFByb3BUeXBlcy5zdHJpbmdcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gPEJveCBpcz1cImltZ1wiIHsuLi50aGlzLnByb3BzfSAvPlxuICB9XG59XG4iXX0=