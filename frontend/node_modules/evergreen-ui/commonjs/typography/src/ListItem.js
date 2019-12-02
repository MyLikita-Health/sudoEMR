"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _icon = require("../../icon");

var _Text = _interopRequireDefault(require("./Text"));

var ListItem =
/*#__PURE__*/
function (_PureComponent) {
  (0, _inherits2.default)(ListItem, _PureComponent);

  function ListItem() {
    (0, _classCallCheck2.default)(this, ListItem);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(ListItem).apply(this, arguments));
  }

  (0, _createClass2.default)(ListItem, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          size = _this$props.size,
          icon = _this$props.icon,
          iconColor = _this$props.iconColor,
          props = (0, _objectWithoutProperties2.default)(_this$props, ["children", "size", "icon", "iconColor"]);
      var paddingLeft;
      if (size === 300) paddingLeft = 4;
      if (size === 400) paddingLeft = 8;
      if (size === 500) paddingLeft = 8;
      if (size === 600) paddingLeft = 12;
      var iconTop;
      if (size === 300) iconTop = 1;
      if (size === 400) iconTop = 3;
      if (size === 500) iconTop = 3;
      if (size === 600) iconTop = 4;
      var iconSize;
      if (size === 300) iconSize = 12;
      if (size === 400) iconSize = 14;
      if (size === 500) iconSize = 14;
      if (size === 600) iconSize = 16;
      var iconLeft = -iconSize - 4;
      if (size === 600) iconLeft = -iconSize;
      return _react.default.createElement(_Text.default, (0, _extends2.default)({
        is: "li",
        position: "relative",
        marginY: "0.5em",
        size: size,
        listStyleType: icon ? 'none' : null,
        paddingLeft: icon ? paddingLeft : null
      }, props), icon && _react.default.createElement(_icon.Icon, {
        icon: icon,
        color: iconColor,
        position: "absolute",
        size: iconSize,
        left: iconLeft,
        top: iconTop
      }), children);
    }
  }]);
  return ListItem;
}(_react.PureComponent);

exports.default = ListItem;
ListItem.displayName = "ListItem";
(0, _defineProperty2.default)(ListItem, "propTypes", (0, _objectSpread2.default)({}, _Text.default.propTypes, {
  /**
   * When passed, adds a icon before the list item.
   * See Evergreen `Icon` for documentation.
   */
  icon: _propTypes.default.string,

  /**
   * The color of the icon.
   */
  iconColor: _propTypes.default.string
}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90eXBvZ3JhcGh5L3NyYy9MaXN0SXRlbS5qcyJdLCJuYW1lcyI6WyJMaXN0SXRlbSIsInByb3BzIiwiY2hpbGRyZW4iLCJzaXplIiwiaWNvbiIsImljb25Db2xvciIsInBhZGRpbmdMZWZ0IiwiaWNvblRvcCIsImljb25TaXplIiwiaWNvbkxlZnQiLCJQdXJlQ29tcG9uZW50IiwiVGV4dCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsInN0cmluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7SUFFcUJBLFE7Ozs7Ozs7Ozs7Ozs2QkFnQlY7QUFBQSx3QkFDK0MsS0FBS0MsS0FEcEQ7QUFBQSxVQUNDQyxRQURELGVBQ0NBLFFBREQ7QUFBQSxVQUNXQyxJQURYLGVBQ1dBLElBRFg7QUFBQSxVQUNpQkMsSUFEakIsZUFDaUJBLElBRGpCO0FBQUEsVUFDdUJDLFNBRHZCLGVBQ3VCQSxTQUR2QjtBQUFBLFVBQ3FDSixLQURyQztBQUdQLFVBQUlLLFdBQUo7QUFDQSxVQUFJSCxJQUFJLEtBQUssR0FBYixFQUFrQkcsV0FBVyxHQUFHLENBQWQ7QUFDbEIsVUFBSUgsSUFBSSxLQUFLLEdBQWIsRUFBa0JHLFdBQVcsR0FBRyxDQUFkO0FBQ2xCLFVBQUlILElBQUksS0FBSyxHQUFiLEVBQWtCRyxXQUFXLEdBQUcsQ0FBZDtBQUNsQixVQUFJSCxJQUFJLEtBQUssR0FBYixFQUFrQkcsV0FBVyxHQUFHLEVBQWQ7QUFFbEIsVUFBSUMsT0FBSjtBQUNBLFVBQUlKLElBQUksS0FBSyxHQUFiLEVBQWtCSSxPQUFPLEdBQUcsQ0FBVjtBQUNsQixVQUFJSixJQUFJLEtBQUssR0FBYixFQUFrQkksT0FBTyxHQUFHLENBQVY7QUFDbEIsVUFBSUosSUFBSSxLQUFLLEdBQWIsRUFBa0JJLE9BQU8sR0FBRyxDQUFWO0FBQ2xCLFVBQUlKLElBQUksS0FBSyxHQUFiLEVBQWtCSSxPQUFPLEdBQUcsQ0FBVjtBQUVsQixVQUFJQyxRQUFKO0FBQ0EsVUFBSUwsSUFBSSxLQUFLLEdBQWIsRUFBa0JLLFFBQVEsR0FBRyxFQUFYO0FBQ2xCLFVBQUlMLElBQUksS0FBSyxHQUFiLEVBQWtCSyxRQUFRLEdBQUcsRUFBWDtBQUNsQixVQUFJTCxJQUFJLEtBQUssR0FBYixFQUFrQkssUUFBUSxHQUFHLEVBQVg7QUFDbEIsVUFBSUwsSUFBSSxLQUFLLEdBQWIsRUFBa0JLLFFBQVEsR0FBRyxFQUFYO0FBRWxCLFVBQUlDLFFBQVEsR0FBRyxDQUFDRCxRQUFELEdBQVksQ0FBM0I7QUFDQSxVQUFJTCxJQUFJLEtBQUssR0FBYixFQUFrQk0sUUFBUSxHQUFHLENBQUNELFFBQVo7QUFFbEIsYUFDRSw2QkFBQyxhQUFEO0FBQ0UsUUFBQSxFQUFFLEVBQUMsSUFETDtBQUVFLFFBQUEsUUFBUSxFQUFDLFVBRlg7QUFHRSxRQUFBLE9BQU8sRUFBQyxPQUhWO0FBSUUsUUFBQSxJQUFJLEVBQUVMLElBSlI7QUFLRSxRQUFBLGFBQWEsRUFBRUMsSUFBSSxHQUFHLE1BQUgsR0FBWSxJQUxqQztBQU1FLFFBQUEsV0FBVyxFQUFFQSxJQUFJLEdBQUdFLFdBQUgsR0FBaUI7QUFOcEMsU0FPTUwsS0FQTixHQVNHRyxJQUFJLElBQ0gsNkJBQUMsVUFBRDtBQUNFLFFBQUEsSUFBSSxFQUFFQSxJQURSO0FBRUUsUUFBQSxLQUFLLEVBQUVDLFNBRlQ7QUFHRSxRQUFBLFFBQVEsRUFBQyxVQUhYO0FBSUUsUUFBQSxJQUFJLEVBQUVHLFFBSlI7QUFLRSxRQUFBLElBQUksRUFBRUMsUUFMUjtBQU1FLFFBQUEsR0FBRyxFQUFFRjtBQU5QLFFBVkosRUFtQkdMLFFBbkJILENBREY7QUF1QkQ7OztFQS9EbUNRLG9COzs7QUFBakJWLFE7OEJBQUFBLFEsK0NBRWRXLGNBQUtDLFM7QUFFUjs7OztBQUlBUixFQUFBQSxJQUFJLEVBQUVTLG1CQUFVQyxNOztBQUVoQjs7O0FBR0FULEVBQUFBLFNBQVMsRUFBRVEsbUJBQVVDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCB7IEljb24gfSBmcm9tICcuLi8uLi9pY29uJ1xuaW1wb3J0IFRleHQgZnJvbSAnLi9UZXh0J1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMaXN0SXRlbSBleHRlbmRzIFB1cmVDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIC4uLlRleHQucHJvcFR5cGVzLFxuXG4gICAgLyoqXG4gICAgICogV2hlbiBwYXNzZWQsIGFkZHMgYSBpY29uIGJlZm9yZSB0aGUgbGlzdCBpdGVtLlxuICAgICAqIFNlZSBFdmVyZ3JlZW4gYEljb25gIGZvciBkb2N1bWVudGF0aW9uLlxuICAgICAqL1xuICAgIGljb246IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgICAvKipcbiAgICAgKiBUaGUgY29sb3Igb2YgdGhlIGljb24uXG4gICAgICovXG4gICAgaWNvbkNvbG9yOiBQcm9wVHlwZXMuc3RyaW5nXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBjaGlsZHJlbiwgc2l6ZSwgaWNvbiwgaWNvbkNvbG9yLCAuLi5wcm9wcyB9ID0gdGhpcy5wcm9wc1xuXG4gICAgbGV0IHBhZGRpbmdMZWZ0XG4gICAgaWYgKHNpemUgPT09IDMwMCkgcGFkZGluZ0xlZnQgPSA0XG4gICAgaWYgKHNpemUgPT09IDQwMCkgcGFkZGluZ0xlZnQgPSA4XG4gICAgaWYgKHNpemUgPT09IDUwMCkgcGFkZGluZ0xlZnQgPSA4XG4gICAgaWYgKHNpemUgPT09IDYwMCkgcGFkZGluZ0xlZnQgPSAxMlxuXG4gICAgbGV0IGljb25Ub3BcbiAgICBpZiAoc2l6ZSA9PT0gMzAwKSBpY29uVG9wID0gMVxuICAgIGlmIChzaXplID09PSA0MDApIGljb25Ub3AgPSAzXG4gICAgaWYgKHNpemUgPT09IDUwMCkgaWNvblRvcCA9IDNcbiAgICBpZiAoc2l6ZSA9PT0gNjAwKSBpY29uVG9wID0gNFxuXG4gICAgbGV0IGljb25TaXplXG4gICAgaWYgKHNpemUgPT09IDMwMCkgaWNvblNpemUgPSAxMlxuICAgIGlmIChzaXplID09PSA0MDApIGljb25TaXplID0gMTRcbiAgICBpZiAoc2l6ZSA9PT0gNTAwKSBpY29uU2l6ZSA9IDE0XG4gICAgaWYgKHNpemUgPT09IDYwMCkgaWNvblNpemUgPSAxNlxuXG4gICAgbGV0IGljb25MZWZ0ID0gLWljb25TaXplIC0gNFxuICAgIGlmIChzaXplID09PSA2MDApIGljb25MZWZ0ID0gLWljb25TaXplXG5cbiAgICByZXR1cm4gKFxuICAgICAgPFRleHRcbiAgICAgICAgaXM9XCJsaVwiXG4gICAgICAgIHBvc2l0aW9uPVwicmVsYXRpdmVcIlxuICAgICAgICBtYXJnaW5ZPVwiMC41ZW1cIlxuICAgICAgICBzaXplPXtzaXplfVxuICAgICAgICBsaXN0U3R5bGVUeXBlPXtpY29uID8gJ25vbmUnIDogbnVsbH1cbiAgICAgICAgcGFkZGluZ0xlZnQ9e2ljb24gPyBwYWRkaW5nTGVmdCA6IG51bGx9XG4gICAgICAgIHsuLi5wcm9wc31cbiAgICAgID5cbiAgICAgICAge2ljb24gJiYgKFxuICAgICAgICAgIDxJY29uXG4gICAgICAgICAgICBpY29uPXtpY29ufVxuICAgICAgICAgICAgY29sb3I9e2ljb25Db2xvcn1cbiAgICAgICAgICAgIHBvc2l0aW9uPVwiYWJzb2x1dGVcIlxuICAgICAgICAgICAgc2l6ZT17aWNvblNpemV9XG4gICAgICAgICAgICBsZWZ0PXtpY29uTGVmdH1cbiAgICAgICAgICAgIHRvcD17aWNvblRvcH1cbiAgICAgICAgICAvPlxuICAgICAgICApfVxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICA8L1RleHQ+XG4gICAgKVxuICB9XG59XG4iXX0=