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
import { Paragraph } from '../../typography';
import { withTheme } from '../../theme';
import { Icon } from '../../icon';
import { Pane } from '../../layers';

var FormFieldValidationMessage =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(FormFieldValidationMessage, _PureComponent);

  function FormFieldValidationMessage() {
    _classCallCheck(this, FormFieldValidationMessage);

    return _possibleConstructorReturn(this, _getPrototypeOf(FormFieldValidationMessage).apply(this, arguments));
  }

  _createClass(FormFieldValidationMessage, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          theme = _this$props.theme,
          children = _this$props.children,
          props = _objectWithoutProperties(_this$props, ["theme", "children"]);

      return React.createElement(Pane, _extends({
        display: "flex"
      }, props), React.createElement(Icon, {
        icon: "error",
        color: "danger",
        marginTop: 1,
        size: 14,
        marginRight: 8
      }), React.createElement(Paragraph, {
        marginTop: 0,
        size: 300,
        color: "danger",
        role: "alert"
      }, children));
    }
  }]);

  return FormFieldValidationMessage;
}(PureComponent);

FormFieldValidationMessage.displayName = "FormFieldValidationMessage";

_defineProperty(FormFieldValidationMessage, "propTypes", _objectSpread({}, Pane.propTypes, {
  /**
   * The contents of the validation message.
   * This is wrapped in a paragraph, use a string.
   */
  children: PropTypes.node,

  /**
   * Theme provided by ThemeProvider.
   */
  theme: PropTypes.object.isRequired
}));

export default withTheme(FormFieldValidationMessage);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9mb3JtLWZpZWxkL3NyYy9Gb3JtRmllbGRWYWxpZGF0aW9uTWVzc2FnZS5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIlB1cmVDb21wb25lbnQiLCJQcm9wVHlwZXMiLCJQYXJhZ3JhcGgiLCJ3aXRoVGhlbWUiLCJJY29uIiwiUGFuZSIsIkZvcm1GaWVsZFZhbGlkYXRpb25NZXNzYWdlIiwicHJvcHMiLCJ0aGVtZSIsImNoaWxkcmVuIiwicHJvcFR5cGVzIiwibm9kZSIsIm9iamVjdCIsImlzUmVxdWlyZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLE9BQU9BLEtBQVAsSUFBZ0JDLGFBQWhCLFFBQXFDLE9BQXJDO0FBQ0EsT0FBT0MsU0FBUCxNQUFzQixZQUF0QjtBQUNBLFNBQVNDLFNBQVQsUUFBMEIsa0JBQTFCO0FBQ0EsU0FBU0MsU0FBVCxRQUEwQixhQUExQjtBQUNBLFNBQVNDLElBQVQsUUFBcUIsWUFBckI7QUFDQSxTQUFTQyxJQUFULFFBQXFCLGNBQXJCOztJQUVNQywwQjs7Ozs7Ozs7Ozs7Ozs2QkFtQks7QUFBQSx3QkFDK0IsS0FBS0MsS0FEcEM7QUFBQSxVQUNDQyxLQURELGVBQ0NBLEtBREQ7QUFBQSxVQUNRQyxRQURSLGVBQ1FBLFFBRFI7QUFBQSxVQUNxQkYsS0FEckI7O0FBRVAsYUFDRSxvQkFBQyxJQUFEO0FBQU0sUUFBQSxPQUFPLEVBQUM7QUFBZCxTQUF5QkEsS0FBekIsR0FDRSxvQkFBQyxJQUFEO0FBQ0UsUUFBQSxJQUFJLEVBQUMsT0FEUDtBQUVFLFFBQUEsS0FBSyxFQUFDLFFBRlI7QUFHRSxRQUFBLFNBQVMsRUFBRSxDQUhiO0FBSUUsUUFBQSxJQUFJLEVBQUUsRUFKUjtBQUtFLFFBQUEsV0FBVyxFQUFFO0FBTGYsUUFERixFQVFFLG9CQUFDLFNBQUQ7QUFBVyxRQUFBLFNBQVMsRUFBRSxDQUF0QjtBQUF5QixRQUFBLElBQUksRUFBRSxHQUEvQjtBQUFvQyxRQUFBLEtBQUssRUFBQyxRQUExQztBQUFtRCxRQUFBLElBQUksRUFBQztBQUF4RCxTQUNHRSxRQURILENBUkYsQ0FERjtBQWNEOzs7O0VBbkNzQ1QsYTs7QUFBbkNNLDBCOztnQkFBQUEsMEIsaUNBS0NELElBQUksQ0FBQ0ssUztBQUVSOzs7O0FBSUFELEVBQUFBLFFBQVEsRUFBRVIsU0FBUyxDQUFDVSxJOztBQUVwQjs7O0FBR0FILEVBQUFBLEtBQUssRUFBRVAsU0FBUyxDQUFDVyxNQUFWLENBQWlCQzs7O0FBc0I1QixlQUFlVixTQUFTLENBQUNHLDBCQUFELENBQXhCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCB7IFBhcmFncmFwaCB9IGZyb20gJy4uLy4uL3R5cG9ncmFwaHknXG5pbXBvcnQgeyB3aXRoVGhlbWUgfSBmcm9tICcuLi8uLi90aGVtZSdcbmltcG9ydCB7IEljb24gfSBmcm9tICcuLi8uLi9pY29uJ1xuaW1wb3J0IHsgUGFuZSB9IGZyb20gJy4uLy4uL2xheWVycydcblxuY2xhc3MgRm9ybUZpZWxkVmFsaWRhdGlvbk1lc3NhZ2UgZXh0ZW5kcyBQdXJlQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAvKipcbiAgICAgKiBDb21wb3NlcyB0aGUgUGFuZSBjb21wb25lbnQgYXMgdGhlIGJhc2UuXG4gICAgICovXG4gICAgLi4uUGFuZS5wcm9wVHlwZXMsXG5cbiAgICAvKipcbiAgICAgKiBUaGUgY29udGVudHMgb2YgdGhlIHZhbGlkYXRpb24gbWVzc2FnZS5cbiAgICAgKiBUaGlzIGlzIHdyYXBwZWQgaW4gYSBwYXJhZ3JhcGgsIHVzZSBhIHN0cmluZy5cbiAgICAgKi9cbiAgICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG5cbiAgICAvKipcbiAgICAgKiBUaGVtZSBwcm92aWRlZCBieSBUaGVtZVByb3ZpZGVyLlxuICAgICAqL1xuICAgIHRoZW1lOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWRcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHRoZW1lLCBjaGlsZHJlbiwgLi4ucHJvcHMgfSA9IHRoaXMucHJvcHNcbiAgICByZXR1cm4gKFxuICAgICAgPFBhbmUgZGlzcGxheT1cImZsZXhcIiB7Li4ucHJvcHN9PlxuICAgICAgICA8SWNvblxuICAgICAgICAgIGljb249XCJlcnJvclwiXG4gICAgICAgICAgY29sb3I9XCJkYW5nZXJcIlxuICAgICAgICAgIG1hcmdpblRvcD17MX1cbiAgICAgICAgICBzaXplPXsxNH1cbiAgICAgICAgICBtYXJnaW5SaWdodD17OH1cbiAgICAgICAgLz5cbiAgICAgICAgPFBhcmFncmFwaCBtYXJnaW5Ub3A9ezB9IHNpemU9ezMwMH0gY29sb3I9XCJkYW5nZXJcIiByb2xlPVwiYWxlcnRcIj5cbiAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgIDwvUGFyYWdyYXBoPlxuICAgICAgPC9QYW5lPlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoVGhlbWUoRm9ybUZpZWxkVmFsaWRhdGlvbk1lc3NhZ2UpXG4iXX0=