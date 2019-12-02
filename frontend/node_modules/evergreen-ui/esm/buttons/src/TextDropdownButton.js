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
import { dimensions, spacing, position, layout } from 'ui-box';
import { Text } from '../../typography';
import { Icon } from '../../icon';
import { Spinner } from '../../spinner';
import { withTheme } from '../../theme';

var TextDropdownButton =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(TextDropdownButton, _PureComponent);

  function TextDropdownButton() {
    _classCallCheck(this, TextDropdownButton);

    return _possibleConstructorReturn(this, _getPrototypeOf(TextDropdownButton).apply(this, arguments));
  }

  _createClass(TextDropdownButton, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          theme = _this$props.theme,
          className = _this$props.className,
          intent = _this$props.intent,
          height = _this$props.height,
          isActive = _this$props.isActive,
          children = _this$props.children,
          disabled = _this$props.disabled,
          appearance = _this$props.appearance,
          isLoading = _this$props.isLoading,
          paddingRight = _this$props.paddingRight,
          paddingLeft = _this$props.paddingLeft,
          paddingTop = _this$props.paddingTop,
          paddingBottom = _this$props.paddingBottom,
          icon = _this$props.icon,
          props = _objectWithoutProperties(_this$props, ["theme", "className", "intent", "height", "isActive", "children", "disabled", "appearance", "isLoading", "paddingRight", "paddingLeft", "paddingTop", "paddingBottom", "icon"]);

      var themedClassName = theme.getTextDropdownButtonClassName();
      return React.createElement(Text, _extends({
        is: "button",
        className: themedClassName,
        paddingX: 4,
        marginX: -4,
        paddingY: 2,
        marginY: -2,
        size: 300,
        "data-active": isActive
      }, TextDropdownButton.styles, props, {
        disabled: disabled
      }), isLoading && React.createElement(Spinner, {
        marginLeft: -Math.round(height / 8),
        marginRight: Math.round(height / 4),
        size: Math.round(height / 2)
      }), children, React.createElement(Icon, {
        color: "default",
        icon: icon,
        size: 12,
        marginLeft: 2
      }));
    }
  }]);

  return TextDropdownButton;
}(PureComponent);

TextDropdownButton.displayName = "TextDropdownButton";

_defineProperty(TextDropdownButton, "propTypes", _objectSpread({}, dimensions.propTypes, spacing.propTypes, position.propTypes, layout.propTypes, {
  /**
   * Forcefully set the active state of a button.
   * Useful in conjuction with a Popover.
   */
  isActive: PropTypes.bool,

  /**
   * When true, the button is disabled.
   * isLoading also sets the button to disabled.
   */
  disabled: PropTypes.bool,

  /**
   * Name of a Blueprint UI icon, or an icon element, to render.
   * This prop is required because it determines the content of the component, but it can
   * be explicitly set to falsy values to render nothing.
   *
   * - If `null` or `undefined` or `false`, this component will render nothing.
   * - If given an `IconName` (a string literal union of all icon names),
   *   that icon will be rendered as an `<svg>` with `<path>` tags.
   * - If given a `JSX.Element`, that element will be rendered and _all other props on this component are ignored._
   *   This type is supported to simplify usage of this component in other Blueprint components.
   *   As a consumer, you should never use `<Icon icon={<element />}` directly; simply render `<element />` instead.
   */
  icon: PropTypes.string.isRequired,

  /**
   * Theme provided by ThemeProvider.
   */
  theme: PropTypes.object.isRequired,

  /**
   * Class name passed to the button.
   * Only use if you know what you are doing.
   */
  className: PropTypes.string
}));

_defineProperty(TextDropdownButton, "defaultProps", {
  isActive: false,
  icon: 'caret-down'
});

_defineProperty(TextDropdownButton, "styles", {
  position: 'relative',
  fontFamily: 'ui',
  fontWeight: 500,
  display: 'inline-flex',
  alignItems: 'center',
  flexWrap: 'nowrap'
});

export default withTheme(TextDropdownButton);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9idXR0b25zL3NyYy9UZXh0RHJvcGRvd25CdXR0b24uanMiXSwibmFtZXMiOlsiUmVhY3QiLCJQdXJlQ29tcG9uZW50IiwiUHJvcFR5cGVzIiwiZGltZW5zaW9ucyIsInNwYWNpbmciLCJwb3NpdGlvbiIsImxheW91dCIsIlRleHQiLCJJY29uIiwiU3Bpbm5lciIsIndpdGhUaGVtZSIsIlRleHREcm9wZG93bkJ1dHRvbiIsInByb3BzIiwidGhlbWUiLCJjbGFzc05hbWUiLCJpbnRlbnQiLCJoZWlnaHQiLCJpc0FjdGl2ZSIsImNoaWxkcmVuIiwiZGlzYWJsZWQiLCJhcHBlYXJhbmNlIiwiaXNMb2FkaW5nIiwicGFkZGluZ1JpZ2h0IiwicGFkZGluZ0xlZnQiLCJwYWRkaW5nVG9wIiwicGFkZGluZ0JvdHRvbSIsImljb24iLCJ0aGVtZWRDbGFzc05hbWUiLCJnZXRUZXh0RHJvcGRvd25CdXR0b25DbGFzc05hbWUiLCJzdHlsZXMiLCJNYXRoIiwicm91bmQiLCJwcm9wVHlwZXMiLCJib29sIiwic3RyaW5nIiwiaXNSZXF1aXJlZCIsIm9iamVjdCIsImZvbnRGYW1pbHkiLCJmb250V2VpZ2h0IiwiZGlzcGxheSIsImFsaWduSXRlbXMiLCJmbGV4V3JhcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsT0FBT0EsS0FBUCxJQUFnQkMsYUFBaEIsUUFBcUMsT0FBckM7QUFDQSxPQUFPQyxTQUFQLE1BQXNCLFlBQXRCO0FBQ0EsU0FBU0MsVUFBVCxFQUFxQkMsT0FBckIsRUFBOEJDLFFBQTlCLEVBQXdDQyxNQUF4QyxRQUFzRCxRQUF0RDtBQUNBLFNBQVNDLElBQVQsUUFBcUIsa0JBQXJCO0FBQ0EsU0FBU0MsSUFBVCxRQUFxQixZQUFyQjtBQUNBLFNBQVNDLE9BQVQsUUFBd0IsZUFBeEI7QUFDQSxTQUFTQyxTQUFULFFBQTBCLGFBQTFCOztJQUVNQyxrQjs7Ozs7Ozs7Ozs7Ozs2QkEwRUs7QUFBQSx3QkF1QkgsS0FBS0MsS0F2QkY7QUFB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a0JBQUQsQ0FBeEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IHsgZGltZW5zaW9ucywgc3BhY2luZywgcG9zaXRpb24sIGxheW91dCB9IGZyb20gJ3VpLWJveCdcbmltcG9ydCB7IFRleHQgfSBmcm9tICcuLi8uLi90eXBvZ3JhcGh5J1xuaW1wb3J0IHsgSWNvbiB9IGZyb20gJy4uLy4uL2ljb24nXG5pbXBvcnQgeyBTcGlubmVyIH0gZnJvbSAnLi4vLi4vc3Bpbm5lcidcbmltcG9ydCB7IHdpdGhUaGVtZSB9IGZyb20gJy4uLy4uL3RoZW1lJ1xuXG5jbGFzcyBUZXh0RHJvcGRvd25CdXR0b24gZXh0ZW5kcyBQdXJlQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAvKipcbiAgICAgKiBDb21wb3NlcyB0aGUgZGltZW5zaW9ucyBzcGVjIGZyb20gdGhlIEJveCBwcmltaXRpdmllLlxuICAgICAqL1xuICAgIC4uLmRpbWVuc2lvbnMucHJvcFR5cGVzLFxuXG4gICAgLyoqXG4gICAgICogQ29tcG9zZXMgdGhlIHNwYWNpbmcgc3BlYyBmcm9tIHRoZSBCb3ggcHJpbWl0aXZpZS5cbiAgICAgKi9cbiAgICAuLi5zcGFjaW5nLnByb3BUeXBlcyxcblxuICAgIC8qKlxuICAgICAqIENvbXBvc2VzIHRoZSBwb3NpdGlvbiBzcGVjIGZyb20gdGhlIEJveCBwcmltaXRpdmllLlxuICAgICAqL1xuICAgIC4uLnBvc2l0aW9uLnByb3BUeXBlcyxcblxuICAgIC8qKlxuICAgICAqIENvbXBvc2VzIHRoZSBsYXlvdXQgc3BlYyBmcm9tIHRoZSBCb3ggcHJpbWl0aXZpZS5cbiAgICAgKi9cbiAgICAuLi5sYXlvdXQucHJvcFR5cGVzLFxuXG4gICAgLyoqXG4gICAgICogRm9yY2VmdWxseSBzZXQgdGhlIGFjdGl2ZSBzdGF0ZSBvZiBhIGJ1dHRvbi5cbiAgICAgKiBVc2VmdWwgaW4gY29uanVjdGlvbiB3aXRoIGEgUG9wb3Zlci5cbiAgICAgKi9cbiAgICBpc0FjdGl2ZTogUHJvcFR5cGVzLmJvb2wsXG5cbiAgICAvKipcbiAgICAgKiBXaGVuIHRydWUsIHRoZSBidXR0b24gaXMgZGlzYWJsZWQuXG4gICAgICogaXNMb2FkaW5nIGFsc28gc2V0cyB0aGUgYnV0dG9uIHRvIGRpc2FibGVkLlxuICAgICAqL1xuICAgIGRpc2FibGVkOiBQcm9wVHlwZXMuYm9vbCxcblxuICAgIC8qKlxuICAgICAqIE5hbWUgb2YgYSBCbHVlcHJpbnQgVUkgaWNvbiwgb3IgYW4gaWNvbiBlbGVtZW50LCB0byByZW5kZXIuXG4gICAgICogVGhpcyBwcm9wIGlzIHJlcXVpcmVkIGJlY2F1c2UgaXQgZGV0ZXJtaW5lcyB0aGUgY29udGVudCBvZiB0aGUgY29tcG9uZW50LCBidXQgaXQgY2FuXG4gICAgICogYmUgZXhwbGljaXRseSBzZXQgdG8gZmFsc3kgdmFsdWVzIHRvIHJlbmRlciBub3RoaW5nLlxuICAgICAqXG4gICAgICogLSBJZiBgbnVsbGAgb3IgYHVuZGVmaW5lZGAgb3IgYGZhbHNlYCwgdGhpcyBjb21wb25lbnQgd2lsbCByZW5kZXIgbm90aGluZy5cbiAgICAgKiAtIElmIGdpdmVuIGFuIGBJY29uTmFtZWAgKGEgc3RyaW5nIGxpdGVyYWwgdW5pb24gb2YgYWxsIGljb24gbmFtZXMpLFxuICAgICAqICAgdGhhdCBpY29uIHdpbGwgYmUgcmVuZGVyZWQgYXMgYW4gYDxzdmc+YCB3aXRoIGA8cGF0aD5gIHRhZ3MuXG4gICAgICogLSBJZiBnaXZlbiBhIGBKU1guRWxlbWVudGAsIHRoYXQgZWxlbWVudCB3aWxsIGJlIHJlbmRlcmVkIGFuZCBfYWxsIG90aGVyIHByb3BzIG9uIHRoaXMgY29tcG9uZW50IGFyZSBpZ25vcmVkLl9cbiAgICAgKiAgIFRoaXMgdHlwZSBpcyBzdXBwb3J0ZWQgdG8gc2ltcGxpZnkgdXNhZ2Ugb2YgdGhpcyBjb21wb25lbnQgaW4gb3RoZXIgQmx1ZXByaW50IGNvbXBvbmVudHMuXG4gICAgICogICBBcyBhIGNvbnN1bWVyLCB5b3Ugc2hvdWxkIG5ldmVyIHVzZSBgPEljb24gaWNvbj17PGVsZW1lbnQgLz59YCBkaXJlY3RseTsgc2ltcGx5IHJlbmRlciBgPGVsZW1lbnQgLz5gIGluc3RlYWQuXG4gICAgICovXG4gICAgaWNvbjogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuXG4gICAgLyoqXG4gICAgICogVGhlbWUgcHJvdmlkZWQgYnkgVGhlbWVQcm92aWRlci5cbiAgICAgKi9cbiAgICB0aGVtZTogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuXG4gICAgLyoqXG4gICAgICogQ2xhc3MgbmFtZSBwYXNzZWQgdG8gdGhlIGJ1dHRvbi5cbiAgICAgKiBPbmx5IHVzZSBpZiB5b3Uga25vdyB3aGF0IHlvdSBhcmUgZG9pbmcuXG4gICAgICovXG4gICAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nXG4gIH1cblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIGlzQWN0aXZlOiBmYWxzZSxcbiAgICBpY29uOiAnY2FyZXQtZG93bidcbiAgfVxuXG4gIHN0YXRpYyBzdHlsZXMgPSB7XG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgZm9udEZhbWlseTogJ3VpJyxcbiAgICBmb250V2VpZ2h0OiA1MDAsXG4gICAgZGlzcGxheTogJ2lubGluZS1mbGV4JyxcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICBmbGV4V3JhcDogJ25vd3JhcCdcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICB0aGVtZSxcbiAgICAgIGNsYXNzTmFtZSxcblxuICAgICAgaW50ZW50LFxuICAgICAgaGVpZ2h0LFxuICAgICAgaXNBY3RpdmUsXG4gICAgICBjaGlsZHJlbixcbiAgICAgIGRpc2FibGVkLFxuICAgICAgYXBwZWFyYW5jZSxcbiAgICAgIGlzTG9hZGluZyxcblxuICAgICAgLy8gUGFkZGluZ3NcbiAgICAgIHBhZGRpbmdSaWdodCxcbiAgICAgIHBhZGRpbmdMZWZ0LFxuICAgICAgcGFkZGluZ1RvcCxcbiAgICAgIHBhZGRpbmdCb3R0b20sXG5cbiAgICAgIC8vIEljb25zXG4gICAgICBpY29uLFxuXG4gICAgICAuLi5wcm9wc1xuICAgIH0gPSB0aGlzLnByb3BzXG5cbiAgICBjb25zdCB0aGVtZWRDbGFzc05hbWUgPSB0aGVtZS5nZXRUZXh0RHJvcGRvd25CdXR0b25DbGFzc05hbWUoKVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxUZXh0XG4gICAgICAgIGlzPVwiYnV0dG9uXCJcbiAgICAgICAgY2xhc3NOYW1lPXt0aGVtZWRDbGFzc05hbWV9XG4gICAgICAgIHBhZGRpbmdYPXs0fVxuICAgICAgICBtYXJnaW5YPXstNH1cbiAgICAgICAgcGFkZGluZ1k9ezJ9XG4gICAgICAgIG1hcmdpblk9ey0yfVxuICAgICAgICBzaXplPXszMDB9XG4gICAgICAgIGRhdGEtYWN0aXZlPXtpc0FjdGl2ZX1cbiAgICAgICAgey4uLlRleHREcm9wZG93bkJ1dHRvbi5zdHlsZXN9XG4gICAgICAgIHsuLi5wcm9wc31cbiAgICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVkfVxuICAgICAgPlxuICAgICAgICB7aXNMb2FkaW5nICYmIChcbiAgICAgICAgICA8U3Bpbm5lclxuICAgICAgICAgICAgbWFyZ2luTGVmdD17LU1hdGgucm91bmQoaGVpZ2h0IC8gOCl9XG4gICAgICAgICAgICBtYXJnaW5SaWdodD17TWF0aC5yb3VuZChoZWlnaHQgLyA0KX1cbiAgICAgICAgICAgIHNpemU9e01hdGgucm91bmQoaGVpZ2h0IC8gMil9XG4gICAgICAgICAgLz5cbiAgICAgICAgKX1cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgICA8SWNvbiBjb2xvcj1cImRlZmF1bHRcIiBpY29uPXtpY29ufSBzaXplPXsxMn0gbWFyZ2luTGVmdD17Mn0gLz5cbiAgICAgIDwvVGV4dD5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFRoZW1lKFRleHREcm9wZG93bkJ1dHRvbilcbiJdfQ==