import _objectSpread from "@babel/runtime/helpers/esm/objectSpread";
import _extends from "@babel/runtime/helpers/esm/extends";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import React, { PureComponent } from 'react';
import Button from './Button';

var BackButton =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(BackButton, _PureComponent);

  function BackButton() {
    _classCallCheck(this, BackButton);

    return _possibleConstructorReturn(this, _getPrototypeOf(BackButton).apply(this, arguments));
  }

  _createClass(BackButton, [{
    key: "render",
    value: function render() {
      return React.createElement(Button, _extends({
        iconBefore: "arrow-left"
      }, this.props));
    }
  }]);

  return BackButton;
}(PureComponent);

BackButton.displayName = "BackButton";

_defineProperty(BackButton, "propTypes", _objectSpread({}, Button.propTypes));

_defineProperty(BackButton, "defaultProps", _objectSpread({}, Button.defaultProps, {
  children: 'Back'
}));

export { BackButton as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9idXR0b25zL3NyYy9CYWNrQnV0dG9uLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiUHVyZUNvbXBvbmVudCIsIkJ1dHRvbiIsIkJhY2tCdXR0b24iLCJwcm9wcyIsInByb3BUeXBlcyIsImRlZmF1bHRQcm9wcyIsImNoaWxkcmVuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLE9BQU9BLEtBQVAsSUFBZ0JDLGFBQWhCLFFBQXFDLE9BQXJDO0FBQ0EsT0FBT0MsTUFBUCxNQUFtQixVQUFuQjs7SUFFcUJDLFU7Ozs7Ozs7Ozs7Ozs7NkJBaUJWO0FBQ1AsYUFBTyxvQkFBQyxNQUFEO0FBQVEsUUFBQSxVQUFVLEVBQUM7QUFBbkIsU0FBb0MsS0FBS0MsS0FBekMsRUFBUDtBQUNEOzs7O0VBbkJxQ0gsYTs7QUFBbkJFLFU7O2dCQUFBQSxVLGlDQUtkRCxNQUFNLENBQUNHLFM7O2dCQUxPRixVLG9DQVlkRCxNQUFNLENBQUNJLFk7QUFFVkMsRUFBQUEsUUFBUSxFQUFFOzs7U0FkT0osVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgQnV0dG9uIGZyb20gJy4vQnV0dG9uJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCYWNrQnV0dG9uIGV4dGVuZHMgUHVyZUNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgLyoqXG4gICAgICogQ29tcG9zZXMgdGhlIEJ1dHRvbiBjb21wb25lbnQgYXMgdGhlIGJhc2UuXG4gICAgICovXG4gICAgLi4uQnV0dG9uLnByb3BUeXBlc1xuICB9XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICAvKipcbiAgICAgKiBDb21wb3NlcyB0aGUgQnV0dG9uIGNvbXBvbmVudCBhcyB0aGUgYmFzZS5cbiAgICAgKi9cbiAgICAuLi5CdXR0b24uZGVmYXVsdFByb3BzLFxuXG4gICAgY2hpbGRyZW46ICdCYWNrJ1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiA8QnV0dG9uIGljb25CZWZvcmU9XCJhcnJvdy1sZWZ0XCIgey4uLnRoaXMucHJvcHN9IC8+XG4gIH1cbn1cbiJdfQ==