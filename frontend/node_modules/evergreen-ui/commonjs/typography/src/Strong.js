"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _Text = _interopRequireDefault(require("./Text"));

var Strong =
/*#__PURE__*/
function (_PureComponent) {
  (0, _inherits2.default)(Strong, _PureComponent);

  function Strong() {
    (0, _classCallCheck2.default)(this, Strong);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Strong).apply(this, arguments));
  }

  (0, _createClass2.default)(Strong, [{
    key: "render",
    value: function render() {
      return _react.default.createElement(_Text.default, (0, _extends2.default)({
        is: "strong",
        fontWeight: 600
      }, this.props));
    }
  }]);
  return Strong;
}(_react.PureComponent);

exports.default = Strong;
Strong.displayName = "Strong";
(0, _defineProperty2.default)(Strong, "propTypes", (0, _objectSpread2.default)({}, _Text.default.propTypes));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90eXBvZ3JhcGh5L3NyYy9TdHJvbmcuanMiXSwibmFtZXMiOlsiU3Ryb25nIiwicHJvcHMiLCJQdXJlQ29tcG9uZW50IiwiVGV4dCIsInByb3BUeXBlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0lBRXFCQSxNOzs7Ozs7Ozs7Ozs7NkJBS1Y7QUFDUCxhQUFPLDZCQUFDLGFBQUQ7QUFBTSxRQUFBLEVBQUUsRUFBQyxRQUFUO0FBQWtCLFFBQUEsVUFBVSxFQUFFO0FBQTlCLFNBQXVDLEtBQUtDLEtBQTVDLEVBQVA7QUFDRDs7O0VBUGlDQyxvQjs7O0FBQWZGLE07OEJBQUFBLE0sK0NBRWRHLGNBQUtDLFMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFRleHQgZnJvbSAnLi9UZXh0J1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdHJvbmcgZXh0ZW5kcyBQdXJlQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAuLi5UZXh0LnByb3BUeXBlc1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiA8VGV4dCBpcz1cInN0cm9uZ1wiIGZvbnRXZWlnaHQ9ezYwMH0gey4uLnRoaXMucHJvcHN9IC8+XG4gIH1cbn1cbiJdfQ==