"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _layers = require("../../layers");

var _TableBody = _interopRequireDefault(require("./TableBody"));

var _TableVirtualBody = _interopRequireDefault(require("./TableVirtualBody"));

var _TableCell = _interopRequireDefault(require("./TableCell"));

var _TableHead = _interopRequireDefault(require("./TableHead"));

var _TableHeaderCell = _interopRequireDefault(require("./TableHeaderCell"));

var _TableRow = _interopRequireDefault(require("./TableRow"));

var _TextTableCell = _interopRequireDefault(require("./TextTableCell"));

var _TextTableHeaderCell = _interopRequireDefault(require("./TextTableHeaderCell"));

var _SearchTableHeaderCell = _interopRequireDefault(require("./SearchTableHeaderCell"));

var _EditableCell = _interopRequireDefault(require("./EditableCell"));

var _SelectMenuCell = _interopRequireDefault(require("./SelectMenuCell"));

var Table =
/*#__PURE__*/
function (_PureComponent) {
  (0, _inherits2.default)(Table, _PureComponent);

  function Table() {
    (0, _classCallCheck2.default)(this, Table);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Table).apply(this, arguments));
  }

  (0, _createClass2.default)(Table, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          props = (0, _objectWithoutProperties2.default)(_this$props, ["children"]);
      return _react.default.createElement(_layers.Pane, props, children);
    }
  }]);
  return Table;
}(_react.PureComponent);

exports.default = Table;
Table.displayName = "Table";
(0, _defineProperty2.default)(Table, "Body", _TableBody.default);
(0, _defineProperty2.default)(Table, "VirtualBody", _TableVirtualBody.default);
(0, _defineProperty2.default)(Table, "Head", _TableHead.default);
(0, _defineProperty2.default)(Table, "HeaderCell", _TableHeaderCell.default);
(0, _defineProperty2.default)(Table, "TextHeaderCell", _TextTableHeaderCell.default);
(0, _defineProperty2.default)(Table, "SearchHeaderCell", _SearchTableHeaderCell.default);
(0, _defineProperty2.default)(Table, "Row", _TableRow.default);
(0, _defineProperty2.default)(Table, "Cell", _TableCell.default);
(0, _defineProperty2.default)(Table, "TextCell", _TextTableCell.default);
(0, _defineProperty2.default)(Table, "EditableCell", _EditableCell.default);
(0, _defineProperty2.default)(Table, "SelectMenuCell", _SelectMenuCell.default);
(0, _defineProperty2.default)(Table, "propTypes", (0, _objectSpread2.default)({}, _layers.Pane.propTypes));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90YWJsZS9zcmMvVGFibGUuanMiXSwibmFtZXMiOlsiVGFibGUiLCJwcm9wcyIsImNoaWxkcmVuIiwiUHVyZUNvbXBvbmVudCIsIlRhYmxlQm9keSIsIlRhYmxlVmlydHVhbEJvZHkiLCJUYWJsZUhlYWQiLCJUYWJsZUhlYWRlckNlbGwiLCJUZXh0VGFibGVIZWFkZXJDZWxsIiwiU2VhcmNoVGFibGVIZWFkZXJDZWxsIiwiVGFibGVSb3ciLCJUYWJsZUNlbGwiLCJUZXh0VGFibGVDZWxsIiwiRWRpdGFibGVDZWxsIiwiU2VsZWN0TWVudUNlbGwiLCJQYW5lIiwicHJvcFR5cGVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7SUFFcUJBLEs7Ozs7Ozs7Ozs7Ozs2QkE4QlY7QUFBQSx3QkFDd0IsS0FBS0MsS0FEN0I7QUFBQSxVQUNDQyxRQURELGVBQ0NBLFFBREQ7QUFBQSxVQUNjRCxLQURkO0FBRVAsYUFBTyw2QkFBQyxZQUFELEVBQVVBLEtBQVYsRUFBa0JDLFFBQWxCLENBQVA7QUFDRDs7O0VBakNnQ0Msb0I7OztBQUFkSCxLOzhCQUFBQSxLLFVBQ0xJLGtCOzhCQURLSixLLGlCQUdFSyx5Qjs4QkFIRkwsSyxVQUtMTSxrQjs4QkFMS04sSyxnQkFPQ08sd0I7OEJBUERQLEssb0JBU0tRLDRCOzhCQVRMUixLLHNCQVdPUyw4Qjs4QkFYUFQsSyxTQWFOVSxpQjs4QkFiTVYsSyxVQWVMVyxrQjs4QkFmS1gsSyxjQWlCRFksc0I7OEJBakJDWixLLGtCQW1CR2EscUI7OEJBbkJIYixLLG9CQXFCS2MsdUI7OEJBckJMZCxLLCtDQTJCZGUsYUFBS0MsUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBQYW5lIH0gZnJvbSAnLi4vLi4vbGF5ZXJzJ1xuaW1wb3J0IFRhYmxlQm9keSBmcm9tICcuL1RhYmxlQm9keSdcbmltcG9ydCBUYWJsZVZpcnR1YWxCb2R5IGZyb20gJy4vVGFibGVWaXJ0dWFsQm9keSdcbmltcG9ydCBUYWJsZUNlbGwgZnJvbSAnLi9UYWJsZUNlbGwnXG5pbXBvcnQgVGFibGVIZWFkIGZyb20gJy4vVGFibGVIZWFkJ1xuaW1wb3J0IFRhYmxlSGVhZGVyQ2VsbCBmcm9tICcuL1RhYmxlSGVhZGVyQ2VsbCdcbmltcG9ydCBUYWJsZVJvdyBmcm9tICcuL1RhYmxlUm93J1xuaW1wb3J0IFRleHRUYWJsZUNlbGwgZnJvbSAnLi9UZXh0VGFibGVDZWxsJ1xuaW1wb3J0IFRleHRUYWJsZUhlYWRlckNlbGwgZnJvbSAnLi9UZXh0VGFibGVIZWFkZXJDZWxsJ1xuaW1wb3J0IFNlYXJjaFRhYmxlSGVhZGVyQ2VsbCBmcm9tICcuL1NlYXJjaFRhYmxlSGVhZGVyQ2VsbCdcbmltcG9ydCBFZGl0YWJsZUNlbGwgZnJvbSAnLi9FZGl0YWJsZUNlbGwnXG5pbXBvcnQgU2VsZWN0TWVudUNlbGwgZnJvbSAnLi9TZWxlY3RNZW51Q2VsbCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFibGUgZXh0ZW5kcyBQdXJlQ29tcG9uZW50IHtcbiAgc3RhdGljIEJvZHkgPSBUYWJsZUJvZHlcblxuICBzdGF0aWMgVmlydHVhbEJvZHkgPSBUYWJsZVZpcnR1YWxCb2R5XG5cbiAgc3RhdGljIEhlYWQgPSBUYWJsZUhlYWRcblxuICBzdGF0aWMgSGVhZGVyQ2VsbCA9IFRhYmxlSGVhZGVyQ2VsbFxuXG4gIHN0YXRpYyBUZXh0SGVhZGVyQ2VsbCA9IFRleHRUYWJsZUhlYWRlckNlbGxcblxuICBzdGF0aWMgU2VhcmNoSGVhZGVyQ2VsbCA9IFNlYXJjaFRhYmxlSGVhZGVyQ2VsbFxuXG4gIHN0YXRpYyBSb3cgPSBUYWJsZVJvd1xuXG4gIHN0YXRpYyBDZWxsID0gVGFibGVDZWxsXG5cbiAgc3RhdGljIFRleHRDZWxsID0gVGV4dFRhYmxlQ2VsbFxuXG4gIHN0YXRpYyBFZGl0YWJsZUNlbGwgPSBFZGl0YWJsZUNlbGxcblxuICBzdGF0aWMgU2VsZWN0TWVudUNlbGwgPSBTZWxlY3RNZW51Q2VsbFxuXG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgLyoqXG4gICAgICogQ29tcG9zZXMgdGhlIFBhbmUgY29tcG9uZW50IGFzIHRoZSBiYXNlLlxuICAgICAqL1xuICAgIC4uLlBhbmUucHJvcFR5cGVzXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBjaGlsZHJlbiwgLi4ucHJvcHMgfSA9IHRoaXMucHJvcHNcbiAgICByZXR1cm4gPFBhbmUgey4uLnByb3BzfT57Y2hpbGRyZW59PC9QYW5lPlxuICB9XG59XG4iXX0=