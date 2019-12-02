"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

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

var _Option = _interopRequireDefault(require("../../select-menu/src/Option"));

var AutocompleteItem =
/*#__PURE__*/
function (_PureComponent) {
  (0, _inherits2.default)(AutocompleteItem, _PureComponent);

  function AutocompleteItem() {
    (0, _classCallCheck2.default)(this, AutocompleteItem);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(AutocompleteItem).apply(this, arguments));
  }

  (0, _createClass2.default)(AutocompleteItem, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          isHighlighted = _this$props.isHighlighted,
          isSelected = _this$props.isSelected,
          style = _this$props.style,
          children = _this$props.children,
          props = (0, _objectWithoutProperties2.default)(_this$props, ["isHighlighted", "isSelected", "style", "children"]);
      return _react.default.createElement(_Option.default, (0, _extends2.default)({
        isHighlighted: isHighlighted,
        isSelected: isSelected,
        label: children,
        style: style
      }, props));
    }
  }]);
  return AutocompleteItem;
}(_react.PureComponent);

exports.default = AutocompleteItem;
AutocompleteItem.displayName = "AutocompleteItem";
(0, _defineProperty2.default)(AutocompleteItem, "propTypes", {
  children: _propTypes.default.node,
  style: _propTypes.default.object,
  isSelected: _propTypes.default.bool,
  isHighlighted: _propTypes.default.bool
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hdXRvY29tcGxldGUvc3JjL0F1dG9jb21wbGV0ZUl0ZW0uanMiXSwibmFtZXMiOlsiQXV0b2NvbXBsZXRlSXRlbSIsInByb3BzIiwiaXNIaWdobGlnaHRlZCIsImlzU2VsZWN0ZWQiLCJzdHlsZSIsImNoaWxkcmVuIiwiUHVyZUNvbXBvbmVudCIsIlByb3BUeXBlcyIsIm5vZGUiLCJvYmplY3QiLCJib29sIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7SUFFcUJBLGdCOzs7Ozs7Ozs7Ozs7NkJBUVY7QUFBQSx3QkFDMEQsS0FBS0MsS0FEL0Q7QUFBQSxVQUNDQyxhQURELGVBQ0NBLGFBREQ7QUFBQSxVQUNnQkMsVUFEaEIsZUFDZ0JBLFVBRGhCO0FBQUEsVUFDNEJDLEtBRDVCLGVBQzRCQSxLQUQ1QjtBQUFBLFVBQ21DQyxRQURuQyxlQUNtQ0EsUUFEbkM7QUFBQSxVQUNnREosS0FEaEQ7QUFHUCxhQUNFLDZCQUFDLGVBQUQ7QUFDRSxRQUFBLGFBQWEsRUFBRUMsYUFEakI7QUFFRSxRQUFBLFVBQVUsRUFBRUMsVUFGZDtBQUdFLFFBQUEsS0FBSyxFQUFFRSxRQUhUO0FBSUUsUUFBQSxLQUFLLEVBQUVEO0FBSlQsU0FLTUgsS0FMTixFQURGO0FBU0Q7OztFQXBCMkNLLG9COzs7QUFBekJOLGdCOzhCQUFBQSxnQixlQUNBO0FBQ2pCSyxFQUFBQSxRQUFRLEVBQUVFLG1CQUFVQyxJQURIO0FBRWpCSixFQUFBQSxLQUFLLEVBQUVHLG1CQUFVRSxNQUZBO0FBR2pCTixFQUFBQSxVQUFVLEVBQUVJLG1CQUFVRyxJQUhMO0FBSWpCUixFQUFBQSxhQUFhLEVBQUVLLG1CQUFVRztBQUpSLEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IE9wdGlvbiBmcm9tICcuLi8uLi9zZWxlY3QtbWVudS9zcmMvT3B0aW9uJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBdXRvY29tcGxldGVJdGVtIGV4dGVuZHMgUHVyZUNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxuICAgIHN0eWxlOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgIGlzU2VsZWN0ZWQ6IFByb3BUeXBlcy5ib29sLFxuICAgIGlzSGlnaGxpZ2h0ZWQ6IFByb3BUeXBlcy5ib29sXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBpc0hpZ2hsaWdodGVkLCBpc1NlbGVjdGVkLCBzdHlsZSwgY2hpbGRyZW4sIC4uLnByb3BzIH0gPSB0aGlzLnByb3BzXG5cbiAgICByZXR1cm4gKFxuICAgICAgPE9wdGlvblxuICAgICAgICBpc0hpZ2hsaWdodGVkPXtpc0hpZ2hsaWdodGVkfVxuICAgICAgICBpc1NlbGVjdGVkPXtpc1NlbGVjdGVkfVxuICAgICAgICBsYWJlbD17Y2hpbGRyZW59XG4gICAgICAgIHN0eWxlPXtzdHlsZX1cbiAgICAgICAgey4uLnByb3BzfVxuICAgICAgLz5cbiAgICApXG4gIH1cbn1cbiJdfQ==