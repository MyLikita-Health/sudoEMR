"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _isDev = _interopRequireDefault(require("./isDev"));

var _hasOwnProperty = _interopRequireDefault(require("./hasOwnProperty"));

function missingStateWarning(_ref) {
  var items = _ref.items,
      props = _ref.props,
      cb = _ref.cb;
  if (!_isDev.default) return;
  props.forEach(function (prop) {
    if (!(0, _hasOwnProperty.default)(items, prop)) {
      cb(prop);
    }
  });
}

var _default = missingStateWarning;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90aGVtZXIvc3JjL21pc3NpbmdTdGF0ZVdhcm5pbmcuanMiXSwibmFtZXMiOlsibWlzc2luZ1N0YXRlV2FybmluZyIsIml0ZW1zIiwicHJvcHMiLCJjYiIsImlzRGV2IiwiZm9yRWFjaCIsInByb3AiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUVBLFNBQVNBLG1CQUFULE9BQW1EO0FBQUEsTUFBcEJDLEtBQW9CLFFBQXBCQSxLQUFvQjtBQUFBLE1BQWJDLEtBQWEsUUFBYkEsS0FBYTtBQUFBLE1BQU5DLEVBQU0sUUFBTkEsRUFBTTtBQUNqRCxNQUFJLENBQUNDLGNBQUwsRUFBWTtBQUNaRixFQUFBQSxLQUFLLENBQUNHLE9BQU4sQ0FBYyxVQUFBQyxJQUFJLEVBQUk7QUFDcEIsUUFBSSxDQUFDLDZCQUFlTCxLQUFmLEVBQXNCSyxJQUF0QixDQUFMLEVBQWtDO0FBQ2hDSCxNQUFBQSxFQUFFLENBQUNHLElBQUQsQ0FBRjtBQUNEO0FBQ0YsR0FKRDtBQUtEOztlQUVjTixtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBpc0RldiBmcm9tICcuL2lzRGV2J1xuaW1wb3J0IGhhc093blByb3BlcnR5IGZyb20gJy4vaGFzT3duUHJvcGVydHknXG5cbmZ1bmN0aW9uIG1pc3NpbmdTdGF0ZVdhcm5pbmcoeyBpdGVtcywgcHJvcHMsIGNiIH0pIHtcbiAgaWYgKCFpc0RldikgcmV0dXJuXG4gIHByb3BzLmZvckVhY2gocHJvcCA9PiB7XG4gICAgaWYgKCFoYXNPd25Qcm9wZXJ0eShpdGVtcywgcHJvcCkpIHtcbiAgICAgIGNiKHByb3ApXG4gICAgfVxuICB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBtaXNzaW5nU3RhdGVXYXJuaW5nXG4iXX0=