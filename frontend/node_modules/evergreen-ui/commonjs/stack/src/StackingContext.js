"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _constants = require("../../constants");

/**
 * Context used to manage the layering of z-indexes of components.
 */
var StackingContext = _react.default.createContext(_constants.StackingOrder.STACKING_CONTEXT);

var _default = StackingContext;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zdGFjay9zcmMvU3RhY2tpbmdDb250ZXh0LmpzIl0sIm5hbWVzIjpbIlN0YWNraW5nQ29udGV4dCIsIlJlYWN0IiwiY3JlYXRlQ29udGV4dCIsIlN0YWNraW5nT3JkZXIiLCJTVEFDS0lOR19DT05URVhUIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFFQTs7O0FBR0EsSUFBTUEsZUFBZSxHQUFHQyxlQUFNQyxhQUFOLENBQW9CQyx5QkFBY0MsZ0JBQWxDLENBQXhCOztlQUNlSixlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgU3RhY2tpbmdPcmRlciB9IGZyb20gJy4uLy4uL2NvbnN0YW50cydcblxuLyoqXG4gKiBDb250ZXh0IHVzZWQgdG8gbWFuYWdlIHRoZSBsYXllcmluZyBvZiB6LWluZGV4ZXMgb2YgY29tcG9uZW50cy5cbiAqL1xuY29uc3QgU3RhY2tpbmdDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dChTdGFja2luZ09yZGVyLlNUQUNLSU5HX0NPTlRFWFQpXG5leHBvcnQgZGVmYXVsdCBTdGFja2luZ0NvbnRleHRcbiJdfQ==