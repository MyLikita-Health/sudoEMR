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

var _layers = require("../../layers");

var PopoverStateless =
/*#__PURE__*/
function (_PureComponent) {
  (0, _inherits2.default)(PopoverStateless, _PureComponent);

  function PopoverStateless() {
    (0, _classCallCheck2.default)(this, PopoverStateless);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(PopoverStateless).apply(this, arguments));
  }

  (0, _createClass2.default)(PopoverStateless, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          props = (0, _objectWithoutProperties2.default)(_this$props, ["children"]);
      return _react.default.createElement(_layers.Card, (0, _extends2.default)({
        role: "dialog",
        elevation: 3,
        overflow: "hidden",
        minWidth: 200,
        backgroundColor: "white"
      }, props), children);
    }
  }]);
  return PopoverStateless;
}(_react.PureComponent);

exports.default = PopoverStateless;
PopoverStateless.displayName = "PopoverStateless";
(0, _defineProperty2.default)(PopoverStateless, "propTypes", (0, _objectSpread2.default)({}, _layers.Card.propTypes, {
  /**
   * The content of the Popover.
   */
  children: _propTypes.default.node
}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wb3BvdmVyL3NyYy9Qb3BvdmVyU3RhdGVsZXNzLmpzIl0sIm5hbWVzIjpbIlBvcG92ZXJTdGF0ZWxlc3MiLCJwcm9wcyIsImNoaWxkcmVuIiwiUHVyZUNvbXBvbmVudCIsIkNhcmQiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJub2RlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztJQUVxQkEsZ0I7Ozs7Ozs7Ozs7Ozs2QkFhVjtBQUFBLHdCQUN3QixLQUFLQyxLQUQ3QjtBQUFBLFVBQ0NDLFFBREQsZUFDQ0EsUUFERDtBQUFBLFVBQ2NELEtBRGQ7QUFHUCxhQUNFLDZCQUFDLFlBQUQ7QUFDRSxRQUFBLElBQUksRUFBQyxRQURQO0FBRUUsUUFBQSxTQUFTLEVBQUUsQ0FGYjtBQUdFLFFBQUEsUUFBUSxFQUFDLFFBSFg7QUFJRSxRQUFBLFFBQVEsRUFBRSxHQUpaO0FBS0UsUUFBQSxlQUFlLEVBQUM7QUFMbEIsU0FNTUEsS0FOTixHQVFHQyxRQVJILENBREY7QUFZRDs7O0VBNUIyQ0Msb0I7OztBQUF6QkgsZ0I7OEJBQUFBLGdCLCtDQUtkSSxhQUFLQyxTO0FBRVI7OztBQUdBSCxFQUFBQSxRQUFRLEVBQUVJLG1CQUFVQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgeyBDYXJkIH0gZnJvbSAnLi4vLi4vbGF5ZXJzJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQb3BvdmVyU3RhdGVsZXNzIGV4dGVuZHMgUHVyZUNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgLyoqXG4gICAgICogQ29tcG9zZXMgdGhlIENhcmQgYXMgdGhlIGJhc2UuXG4gICAgICovXG4gICAgLi4uQ2FyZC5wcm9wVHlwZXMsXG5cbiAgICAvKipcbiAgICAgKiBUaGUgY29udGVudCBvZiB0aGUgUG9wb3Zlci5cbiAgICAgKi9cbiAgICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGVcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGNoaWxkcmVuLCAuLi5wcm9wcyB9ID0gdGhpcy5wcm9wc1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxDYXJkXG4gICAgICAgIHJvbGU9XCJkaWFsb2dcIlxuICAgICAgICBlbGV2YXRpb249ezN9XG4gICAgICAgIG92ZXJmbG93PVwiaGlkZGVuXCJcbiAgICAgICAgbWluV2lkdGg9ezIwMH1cbiAgICAgICAgYmFja2dyb3VuZENvbG9yPVwid2hpdGVcIlxuICAgICAgICB7Li4ucHJvcHN9XG4gICAgICA+XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgIDwvQ2FyZD5cbiAgICApXG4gIH1cbn1cbiJdfQ==