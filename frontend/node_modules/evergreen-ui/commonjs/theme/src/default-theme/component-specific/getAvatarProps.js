"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _fills = _interopRequireDefault(require("../foundational-styles/fills"));

/**
 * @param {boolean} isSolid
 * @param {string} color — automatic or actual color
 * @param {number} hashValue
 * @return {Object} { color, backgroundColor }
 */
var getAvatarProps = function getAvatarProps(_ref) {
  var isSolid = _ref.isSolid,
      color = _ref.color,
      hashValue = _ref.hashValue;
  var appearances = _fills.default[isSolid ? 'solid' : 'subtle'];

  if (color === 'automatic') {
    var keys = Object.keys(appearances);
    var key = keys[hashValue % keys.length];
    return appearances[key];
  }

  return appearances[color];
};

var _default = getAvatarProps;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy90aGVtZS9zcmMvZGVmYXVsdC10aGVtZS9jb21wb25lbnQtc3BlY2lmaWMvZ2V0QXZhdGFyUHJvcHMuanMiXSwibmFtZXMiOlsiZ2V0QXZhdGFyUHJvcHMiLCJpc1NvbGlkIiwiY29sb3IiLCJoYXNoVmFsdWUiLCJhcHBlYXJhbmNlcyIsImZpbGxzIiwia2V5cyIsIk9iamVjdCIsImtleSIsImxlbmd0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBRUE7Ozs7OztBQU1BLElBQU1BLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsT0FBbUM7QUFBQSxNQUFoQ0MsT0FBZ0MsUUFBaENBLE9BQWdDO0FBQUEsTUFBdkJDLEtBQXVCLFFBQXZCQSxLQUF1QjtBQUFBLE1BQWhCQyxTQUFnQixRQUFoQkEsU0FBZ0I7QUFDeEQsTUFBTUMsV0FBVyxHQUFHQyxlQUFNSixPQUFPLEdBQUcsT0FBSCxHQUFhLFFBQTFCLENBQXBCOztBQUVBLE1BQUlDLEtBQUssS0FBSyxXQUFkLEVBQTJCO0FBQ3pCLFFBQU1JLElBQUksR0FBR0MsTUFBTSxDQUFDRCxJQUFQLENBQVlGLFdBQVosQ0FBYjtBQUNBLFFBQU1JLEdBQUcsR0FBR0YsSUFBSSxDQUFDSCxTQUFTLEdBQUdHLElBQUksQ0FBQ0csTUFBbEIsQ0FBaEI7QUFDQSxXQUFPTCxXQUFXLENBQUNJLEdBQUQsQ0FBbEI7QUFDRDs7QUFFRCxTQUFPSixXQUFXLENBQUNGLEtBQUQsQ0FBbEI7QUFDRCxDQVZEOztlQVllRixjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGZpbGxzIGZyb20gJy4uL2ZvdW5kYXRpb25hbC1zdHlsZXMvZmlsbHMnXG5cbi8qKlxuICogQHBhcmFtIHtib29sZWFufSBpc1NvbGlkXG4gKiBAcGFyYW0ge3N0cmluZ30gY29sb3Ig4oCUIGF1dG9tYXRpYyBvciBhY3R1YWwgY29sb3JcbiAqIEBwYXJhbSB7bnVtYmVyfSBoYXNoVmFsdWVcbiAqIEByZXR1cm4ge09iamVjdH0geyBjb2xvciwgYmFja2dyb3VuZENvbG9yIH1cbiAqL1xuY29uc3QgZ2V0QXZhdGFyUHJvcHMgPSAoeyBpc1NvbGlkLCBjb2xvciwgaGFzaFZhbHVlIH0pID0+IHtcbiAgY29uc3QgYXBwZWFyYW5jZXMgPSBmaWxsc1tpc1NvbGlkID8gJ3NvbGlkJyA6ICdzdWJ0bGUnXVxuXG4gIGlmIChjb2xvciA9PT0gJ2F1dG9tYXRpYycpIHtcbiAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMoYXBwZWFyYW5jZXMpXG4gICAgY29uc3Qga2V5ID0ga2V5c1toYXNoVmFsdWUgJSBrZXlzLmxlbmd0aF1cbiAgICByZXR1cm4gYXBwZWFyYW5jZXNba2V5XVxuICB9XG5cbiAgcmV0dXJuIGFwcGVhcmFuY2VzW2NvbG9yXVxufVxuXG5leHBvcnQgZGVmYXVsdCBnZXRBdmF0YXJQcm9wc1xuIl19