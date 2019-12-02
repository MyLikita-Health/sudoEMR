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
import cx from 'classnames';
import { withTheme } from '../../theme';
import Text from './Text';

var Link =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(Link, _PureComponent);

  function Link() {
    _classCallCheck(this, Link);

    return _possibleConstructorReturn(this, _getPrototypeOf(Link).apply(this, arguments));
  }

  _createClass(Link, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          theme = _this$props.theme,
          className = _this$props.className,
          color = _this$props.color,
          props = _objectWithoutProperties(_this$props, ["theme", "className", "color"]);

      var themedClassName = theme.getLinkClassName(color);
      return React.createElement(Text, _extends({
        is: "a",
        className: cx(className, themedClassName),
        textDecoration: "underline",
        color: null
      }, props));
    }
  }]);

  return Link;
}(PureComponent);

Link.displayName = "Link";

_defineProperty(Link, "propTypes", _objectSpread({}, Text.propTypes, {
  /**
   * This attribute names a relationship of the linked document to the current document.
   * Common use case is: rel="noopener noreferrer".
   */
  rel: PropTypes.string,

  /**
   * Specifies the URL of the linked resource. A URL might be absolute or relative.
   */
  href: PropTypes.string,

  /**
   * Target atrribute, common use case is target="_blank."
   */
  target: PropTypes.string,

  /**
   * The color (and styling) of the Link. Can be default, blue, green or neutral.
   */
  color: PropTypes.string.isRequired,

  /**
   * Theme provided by ThemeProvider.
   */
  theme: PropTypes.object.isRequired,

  /**
   * Class name passed to the link.
   * Only use if you know what you are doing.
   */
  className: PropTypes.string
}));

_defineProperty(Link, "defaultProps", {
  color: 'default'
});

export default withTheme(Link);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90eXBvZ3JhcGh5L3NyYy9MaW5rLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiUHVyZUNvbXBvbmVudCIsIlByb3BUeXBlcyIsImN4Iiwid2l0aFRoZW1lIiwiVGV4dCIsIkxpbmsiLCJwcm9wcyIsInRoZW1lIiwiY2xhc3NOYW1lIiwiY29sb3IiLCJ0aGVtZWRDbGFzc05hbWUiLCJnZXRMaW5rQ2xhc3NOYW1lIiwicHJvcFR5cGVzIiwicmVsIiwic3RyaW5nIiwiaHJlZiIsInRhcmdldCIsImlzUmVxdWlyZWQiLCJvYmplY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLE9BQU9BLEtBQVAsSUFBZ0JDLGFBQWhCLFFBQXFDLE9BQXJDO0FBQ0EsT0FBT0MsU0FBUCxNQUFzQixZQUF0QjtBQUNBLE9BQU9DLEVBQVAsTUFBZSxZQUFmO0FBQ0EsU0FBU0MsU0FBVCxRQUEwQixhQUExQjtBQUNBLE9BQU9DLElBQVAsTUFBaUIsUUFBakI7O0lBRU1DLEk7Ozs7Ozs7Ozs7Ozs7NkJBeUNLO0FBQUEsd0JBQ3VDLEtBQUtDLEtBRDVDO0FBQUEsVUFDQ0MsS0FERCxlQUNDQSxLQUREO0FBQUEsVUFDUUMsU0FEUixlQUNRQSxTQURSO0FBQUEsVUFDbUJDLEtBRG5CLGVBQ21CQSxLQURuQjtBQUFBLFVBQzZCSCxLQUQ3Qjs7QUFHUCxVQUFNSSxlQUFlLEdBQUdILEtBQUssQ0FBQ0ksZ0JBQU4sQ0FBdUJGLEtBQXZCLENBQXhCO0FBRUEsYUFDRSxvQkFBQyxJQUFEO0FBQ0UsUUFBQSxFQUFFLEVBQUMsR0FETDtBQUVFLFFBQUEsU0FBUyxFQUFFUCxFQUFFLENBQUNNLFNBQUQsRUFBWUUsZUFBWixDQUZmO0FBR0UsUUFBQSxjQUFjLEVBQUMsV0FIakI7QUFJRSxRQUFBLEtBQUssRUFBRTtBQUpULFNBS01KLEtBTE4sRUFERjtBQVNEOzs7O0VBdkRnQk4sYTs7QUFBYkssSTs7Z0JBQUFBLEksaUNBRUNELElBQUksQ0FBQ1EsUztBQUVSOzs7O0FBSUFDLEVBQUFBLEdBQUcsRUFBRVosU0FBUyxDQUFDYSxNOztBQUVmOzs7QUFHQUMsRUFBQUEsSUFBSSxFQUFFZCxTQUFTLENBQUNhLE07O0FBRWhCOzs7QUFHQUUsRUFBQUEsTUFBTSxFQUFFZixTQUFTLENBQUNhLE07O0FBRWxCOzs7QUFHQUwsRUFBQUEsS0FBSyxFQUFFUixTQUFTLENBQUNhLE1BQVYsQ0FBaUJHLFU7O0FBRXhCOzs7QUFHQVYsRUFBQUEsS0FBSyxFQUFFTixTQUFTLENBQUNpQixNQUFWLENBQWlCRCxVOztBQUV4Qjs7OztBQUlBVCxFQUFBQSxTQUFTLEVBQUVQLFNBQVMsQ0FBQ2E7OztnQkFsQ25CVCxJLGtCQXFDa0I7QUFDcEJJLEVBQUFBLEtBQUssRUFBRTtBQURhLEM7O0FBcUJ4QixlQUFlTixTQUFTLENBQUNFLElBQUQsQ0FBeEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IGN4IGZyb20gJ2NsYXNzbmFtZXMnXG5pbXBvcnQgeyB3aXRoVGhlbWUgfSBmcm9tICcuLi8uLi90aGVtZSdcbmltcG9ydCBUZXh0IGZyb20gJy4vVGV4dCdcblxuY2xhc3MgTGluayBleHRlbmRzIFB1cmVDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIC4uLlRleHQucHJvcFR5cGVzLFxuXG4gICAgLyoqXG4gICAgICogVGhpcyBhdHRyaWJ1dGUgbmFtZXMgYSByZWxhdGlvbnNoaXAgb2YgdGhlIGxpbmtlZCBkb2N1bWVudCB0byB0aGUgY3VycmVudCBkb2N1bWVudC5cbiAgICAgKiBDb21tb24gdXNlIGNhc2UgaXM6IHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIi5cbiAgICAgKi9cbiAgICByZWw6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgICAvKipcbiAgICAgKiBTcGVjaWZpZXMgdGhlIFVSTCBvZiB0aGUgbGlua2VkIHJlc291cmNlLiBBIFVSTCBtaWdodCBiZSBhYnNvbHV0ZSBvciByZWxhdGl2ZS5cbiAgICAgKi9cbiAgICBocmVmOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gICAgLyoqXG4gICAgICogVGFyZ2V0IGF0cnJpYnV0ZSwgY29tbW9uIHVzZSBjYXNlIGlzIHRhcmdldD1cIl9ibGFuay5cIlxuICAgICAqL1xuICAgIHRhcmdldDogUHJvcFR5cGVzLnN0cmluZyxcblxuICAgIC8qKlxuICAgICAqIFRoZSBjb2xvciAoYW5kIHN0eWxpbmcpIG9mIHRoZSBMaW5rLiBDYW4gYmUgZGVmYXVsdCwgYmx1ZSwgZ3JlZW4gb3IgbmV1dHJhbC5cbiAgICAgKi9cbiAgICBjb2xvcjogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuXG4gICAgLyoqXG4gICAgICogVGhlbWUgcHJvdmlkZWQgYnkgVGhlbWVQcm92aWRlci5cbiAgICAgKi9cbiAgICB0aGVtZTogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuXG4gICAgLyoqXG4gICAgICogQ2xhc3MgbmFtZSBwYXNzZWQgdG8gdGhlIGxpbmsuXG4gICAgICogT25seSB1c2UgaWYgeW91IGtub3cgd2hhdCB5b3UgYXJlIGRvaW5nLlxuICAgICAqL1xuICAgIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZ1xuICB9XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBjb2xvcjogJ2RlZmF1bHQnXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyB0aGVtZSwgY2xhc3NOYW1lLCBjb2xvciwgLi4ucHJvcHMgfSA9IHRoaXMucHJvcHNcblxuICAgIGNvbnN0IHRoZW1lZENsYXNzTmFtZSA9IHRoZW1lLmdldExpbmtDbGFzc05hbWUoY29sb3IpXG5cbiAgICByZXR1cm4gKFxuICAgICAgPFRleHRcbiAgICAgICAgaXM9XCJhXCJcbiAgICAgICAgY2xhc3NOYW1lPXtjeChjbGFzc05hbWUsIHRoZW1lZENsYXNzTmFtZSl9XG4gICAgICAgIHRleHREZWNvcmF0aW9uPVwidW5kZXJsaW5lXCJcbiAgICAgICAgY29sb3I9e251bGx9XG4gICAgICAgIHsuLi5wcm9wc31cbiAgICAgIC8+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhUaGVtZShMaW5rKVxuIl19