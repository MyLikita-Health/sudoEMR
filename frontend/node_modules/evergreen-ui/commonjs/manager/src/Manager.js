"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

/**
 * This component is a utility component to manage state in stories and examples.
 */
var Manager =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(Manager, _React$Component);

  function Manager(props) {
    var _this;

    (0, _classCallCheck2.default)(this, Manager);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Manager).call(this, props));
    _this.state = (0, _objectSpread2.default)({}, props);
    return _this;
  }

  (0, _createClass2.default)(Manager, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return this.props.children({
        setState: function setState() {
          _this2.setState.apply(_this2, arguments);
        },
        state: this.state
      });
    }
  }]);
  return Manager;
}(_react.default.Component);

exports.default = Manager;
Manager.displayName = "Manager";
(0, _defineProperty2.default)(Manager, "propTypes", {
  children: _propTypes.default.func
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tYW5hZ2VyL3NyYy9NYW5hZ2VyLmpzIl0sIm5hbWVzIjpbIk1hbmFnZXIiLCJwcm9wcyIsInN0YXRlIiwiY2hpbGRyZW4iLCJzZXRTdGF0ZSIsIlJlYWN0IiwiQ29tcG9uZW50IiwiUHJvcFR5cGVzIiwiZnVuYyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFFQTs7O0lBR3FCQSxPOzs7OztBQUtuQixtQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBO0FBQ2pCLDZHQUFNQSxLQUFOO0FBQ0EsVUFBS0MsS0FBTCxtQ0FDS0QsS0FETDtBQUZpQjtBQUtsQjs7Ozs2QkFFUTtBQUFBOztBQUNQLGFBQU8sS0FBS0EsS0FBTCxDQUFXRSxRQUFYLENBQW9CO0FBQ3pCQyxRQUFBQSxRQUFRLEVBQUUsb0JBQWE7QUFDckIsVUFBQSxNQUFJLENBQUNBLFFBQUwsT0FBQSxNQUFJLFlBQUo7QUFDRCxTQUh3QjtBQUl6QkYsUUFBQUEsS0FBSyxFQUFFLEtBQUtBO0FBSmEsT0FBcEIsQ0FBUDtBQU1EOzs7RUFuQmtDRyxlQUFNQyxTOzs7QUFBdEJOLE87OEJBQUFBLE8sZUFDQTtBQUNqQkcsRUFBQUEsUUFBUSxFQUFFSSxtQkFBVUM7QUFESCxDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuXG4vKipcbiAqIFRoaXMgY29tcG9uZW50IGlzIGEgdXRpbGl0eSBjb21wb25lbnQgdG8gbWFuYWdlIHN0YXRlIGluIHN0b3JpZXMgYW5kIGV4YW1wbGVzLlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYW5hZ2VyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBjaGlsZHJlbjogUHJvcFR5cGVzLmZ1bmNcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIC4uLnByb3BzXG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiB0aGlzLnByb3BzLmNoaWxkcmVuKHtcbiAgICAgIHNldFN0YXRlOiAoLi4uYXJncykgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKC4uLmFyZ3MpXG4gICAgICB9LFxuICAgICAgc3RhdGU6IHRoaXMuc3RhdGVcbiAgICB9KVxuICB9XG59XG4iXX0=