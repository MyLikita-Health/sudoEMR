"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireWildcard(require("react"));

var _uiBox = _interopRequireDefault(require("ui-box"));

/**
 * Small can only be used inside of Text or Paragraph.
 */
var Small =
/*#__PURE__*/
function (_PureComponent) {
  (0, _inherits2.default)(Small, _PureComponent);

  function Small() {
    (0, _classCallCheck2.default)(this, Small);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Small).apply(this, arguments));
  }

  (0, _createClass2.default)(Small, [{
    key: "render",
    value: function render() {
      return _react.default.createElement(_uiBox.default, (0, _extends2.default)({
        is: "small",
        fontSize: "85%"
      }, this.props));
    }
  }]);
  return Small;
}(_react.PureComponent);

exports.default = Small;
Small.displayName = "Small";
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90eXBvZ3JhcGh5L3NyYy9TbWFsbC5qcyJdLCJuYW1lcyI6WyJTbWFsbCIsInByb3BzIiwiUHVyZUNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFFQTs7O0lBR3FCQSxLOzs7Ozs7Ozs7Ozs7NkJBQ1Y7QUFDUCxhQUFPLDZCQUFDLGNBQUQ7QUFBSyxRQUFBLEVBQUUsRUFBQyxPQUFSO0FBQWdCLFFBQUEsUUFBUSxFQUFDO0FBQXpCLFNBQW1DLEtBQUtDLEtBQXhDLEVBQVA7QUFDRDs7O0VBSGdDQyxvQjs7O0FBQWRGLEsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEJveCBmcm9tICd1aS1ib3gnXG5cbi8qKlxuICogU21hbGwgY2FuIG9ubHkgYmUgdXNlZCBpbnNpZGUgb2YgVGV4dCBvciBQYXJhZ3JhcGguXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNtYWxsIGV4dGVuZHMgUHVyZUNvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gPEJveCBpcz1cInNtYWxsXCIgZm9udFNpemU9XCI4NSVcIiB7Li4udGhpcy5wcm9wc30gLz5cbiAgfVxufVxuIl19