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

var _Badge = _interopRequireDefault(require("./Badge"));

var Pill =
/*#__PURE__*/
function (_PureComponent) {
  (0, _inherits2.default)(Pill, _PureComponent);

  function Pill() {
    (0, _classCallCheck2.default)(this, Pill);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Pill).apply(this, arguments));
  }

  (0, _createClass2.default)(Pill, [{
    key: "render",
    value: function render() {
      return _react.default.createElement(_Badge.default, (0, _extends2.default)({
        borderRadius: 999
      }, this.props));
    }
  }]);
  return Pill;
}(_react.PureComponent);

exports.default = Pill;
Pill.displayName = "Pill";
(0, _defineProperty2.default)(Pill, "propTypes", (0, _objectSpread2.default)({}, _Badge.default.propTypes));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9iYWRnZXMvc3JjL1BpbGwuanMiXSwibmFtZXMiOlsiUGlsbCIsInByb3BzIiwiUHVyZUNvbXBvbmVudCIsIkJhZGdlIiwicHJvcFR5cGVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7SUFFcUJBLEk7Ozs7Ozs7Ozs7Ozs2QkFLVjtBQUNQLGFBQU8sNkJBQUMsY0FBRDtBQUFPLFFBQUEsWUFBWSxFQUFFO0FBQXJCLFNBQThCLEtBQUtDLEtBQW5DLEVBQVA7QUFDRDs7O0VBUCtCQyxvQjs7O0FBQWJGLEk7OEJBQUFBLEksK0NBRWRHLGVBQU1DLFMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEJhZGdlIGZyb20gJy4vQmFkZ2UnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBpbGwgZXh0ZW5kcyBQdXJlQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAuLi5CYWRnZS5wcm9wVHlwZXNcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gPEJhZGdlIGJvcmRlclJhZGl1cz17OTk5fSB7Li4udGhpcy5wcm9wc30gLz5cbiAgfVxufVxuIl19