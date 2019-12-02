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
import PropTypes from 'prop-types';
import { Card } from '../../layers';

var PopoverStateless =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(PopoverStateless, _PureComponent);

  function PopoverStateless() {
    _classCallCheck(this, PopoverStateless);

    return _possibleConstructorReturn(this, _getPrototypeOf(PopoverStateless).apply(this, arguments));
  }

  _createClass(PopoverStateless, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          props = _objectWithoutProperties(_this$props, ["children"]);

      return React.createElement(Card, _extends({
        role: "dialog",
        elevation: 3,
        overflow: "hidden",
        minWidth: 200,
        backgroundColor: "white"
      }, props), children);
    }
  }]);

  return PopoverStateless;
}(PureComponent);

PopoverStateless.displayName = "PopoverStateless";

_defineProperty(PopoverStateless, "propTypes", _objectSpread({}, Card.propTypes, {
  /**
   * The content of the Popover.
   */
  children: PropTypes.node
}));

export { PopoverStateless as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wb3BvdmVyL3NyYy9Qb3BvdmVyU3RhdGVsZXNzLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiUHVyZUNvbXBvbmVudCIsIlByb3BUeXBlcyIsIkNhcmQiLCJQb3BvdmVyU3RhdGVsZXNzIiwicHJvcHMiLCJjaGlsZHJlbiIsInByb3BUeXBlcyIsIm5vZGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLE9BQU9BLEtBQVAsSUFBZ0JDLGFBQWhCLFFBQXFDLE9BQXJDO0FBQ0EsT0FBT0MsU0FBUCxNQUFzQixZQUF0QjtBQUNBLFNBQVNDLElBQVQsUUFBcUIsY0FBckI7O0lBRXFCQyxnQjs7Ozs7Ozs7Ozs7Ozs2QkFhVjtBQUFBLHdCQUN3QixLQUFLQyxLQUQ3QjtBQUFBLFVBQ0NDLFFBREQsZUFDQ0EsUUFERDtBQUFBLFVBQ2NELEtBRGQ7O0FBR1AsYUFDRSxvQkFBQyxJQUFEO0FBQ0UsUUFBQSxJQUFJLEVBQUMsUUFEUDtBQUVFLFFBQUEsU0FBUyxFQUFFLENBRmI7QUFHRSxRQUFBLFFBQVEsRUFBQyxRQUhYO0FBSUUsUUFBQSxRQUFRLEVBQUUsR0FKWjtBQUtFLFFBQUEsZUFBZSxFQUFDO0FBTGxCLFNBTU1BLEtBTk4sR0FRR0MsUUFSSCxDQURGO0FBWUQ7Ozs7RUE1QjJDTCxhOztBQUF6QkcsZ0I7O2dCQUFBQSxnQixpQ0FLZEQsSUFBSSxDQUFDSSxTO0FBRVI7OztBQUdBRCxFQUFBQSxRQUFRLEVBQUVKLFNBQVMsQ0FBQ007OztTQVZISixnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgeyBDYXJkIH0gZnJvbSAnLi4vLi4vbGF5ZXJzJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQb3BvdmVyU3RhdGVsZXNzIGV4dGVuZHMgUHVyZUNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgLyoqXG4gICAgICogQ29tcG9zZXMgdGhlIENhcmQgYXMgdGhlIGJhc2UuXG4gICAgICovXG4gICAgLi4uQ2FyZC5wcm9wVHlwZXMsXG5cbiAgICAvKipcbiAgICAgKiBUaGUgY29udGVudCBvZiB0aGUgUG9wb3Zlci5cbiAgICAgKi9cbiAgICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGVcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGNoaWxkcmVuLCAuLi5wcm9wcyB9ID0gdGhpcy5wcm9wc1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxDYXJkXG4gICAgICAgIHJvbGU9XCJkaWFsb2dcIlxuICAgICAgICBlbGV2YXRpb249ezN9XG4gICAgICAgIG92ZXJmbG93PVwiaGlkZGVuXCJcbiAgICAgICAgbWluV2lkdGg9ezIwMH1cbiAgICAgICAgYmFja2dyb3VuZENvbG9yPVwid2hpdGVcIlxuICAgICAgICB7Li4ucHJvcHN9XG4gICAgICA+XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgIDwvQ2FyZD5cbiAgICApXG4gIH1cbn1cbiJdfQ==