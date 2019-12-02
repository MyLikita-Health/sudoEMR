"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _text = _interopRequireDefault(require("./text"));

/**
 * Text styles for paragraphs (multi line text).
 * This is used in the Paragraph.
 * @property {Object} text.500 - Required property.
 * @property {Object} text.400 - Required property. Default.
 * @property {Object} text.300 - Required property.
 */
var _default = {
  '500': (0, _objectSpread2.default)({}, _text.default['500'], {
    lineHeight: '24px'
  }),
  '400': (0, _objectSpread2.default)({}, _text.default['400'], {
    lineHeight: '21px'
  }),
  '300': (0, _objectSpread2.default)({}, _text.default['300'], {
    lineHeight: '18px'
  })
};
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy90aGVtZS9zcmMvZGVmYXVsdC10aGVtZS90eXBvZ3JhcGh5L3BhcmFncmFwaC5qcyJdLCJuYW1lcyI6WyJ0ZXh0IiwibGluZUhlaWdodCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQTs7Ozs7OztlQU9lO0FBQ2IseUNBQ0tBLGNBQUssS0FBTCxDQURMO0FBRUVDLElBQUFBLFVBQVUsRUFBRTtBQUZkLElBRGE7QUFLYix5Q0FDS0QsY0FBSyxLQUFMLENBREw7QUFFRUMsSUFBQUEsVUFBVSxFQUFFO0FBRmQsSUFMYTtBQVNiLHlDQUNLRCxjQUFLLEtBQUwsQ0FETDtBQUVFQyxJQUFBQSxVQUFVLEVBQUU7QUFGZDtBQVRhLEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdGV4dCBmcm9tICcuL3RleHQnXG5cbi8qKlxuICogVGV4dCBzdHlsZXMgZm9yIHBhcmFncmFwaHMgKG11bHRpIGxpbmUgdGV4dCkuXG4gKiBUaGlzIGlzIHVzZWQgaW4gdGhlIFBhcmFncmFwaC5cbiAqIEBwcm9wZXJ0eSB7T2JqZWN0fSB0ZXh0LjUwMCAtIFJlcXVpcmVkIHByb3BlcnR5LlxuICogQHByb3BlcnR5IHtPYmplY3R9IHRleHQuNDAwIC0gUmVxdWlyZWQgcHJvcGVydHkuIERlZmF1bHQuXG4gKiBAcHJvcGVydHkge09iamVjdH0gdGV4dC4zMDAgLSBSZXF1aXJlZCBwcm9wZXJ0eS5cbiAqL1xuZXhwb3J0IGRlZmF1bHQge1xuICAnNTAwJzoge1xuICAgIC4uLnRleHRbJzUwMCddLFxuICAgIGxpbmVIZWlnaHQ6ICcyNHB4J1xuICB9LFxuICAnNDAwJzoge1xuICAgIC4uLnRleHRbJzQwMCddLFxuICAgIGxpbmVIZWlnaHQ6ICcyMXB4J1xuICB9LFxuICAnMzAwJzoge1xuICAgIC4uLnRleHRbJzMwMCddLFxuICAgIGxpbmVIZWlnaHQ6ICcxOHB4J1xuICB9XG59XG4iXX0=