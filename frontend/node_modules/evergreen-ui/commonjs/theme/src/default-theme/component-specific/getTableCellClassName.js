"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _themer = require("../../../../themer");

var _memoizeClassName = _interopRequireDefault(require("../utils/memoizeClassName"));

var _scales = _interopRequireDefault(require("../foundational-styles/scales"));

var Appearances = {};
Appearances.default = _themer.Themer.createTableCellAppearance({
  focus: {
    outline: 'none',
    backgroundColor: _scales.default.blue.B2A,
    boxShadow: "inset 0 0 0 1px ".concat(_scales.default.blue.B7A)
  }
});
/**
 * Get the appearance of a `TableCell`.
 * @param {string} appearance
 * @return {string} the appearance object.
 */

var getAppearance = function getAppearance() {
  return Appearances.default;
};
/**
 * Get the className of a `Table.EditableCell`.
 * @param {string} appearance
 * @return {string} the appearance class name.
 */


var _default = (0, _memoizeClassName.default)(getAppearance);

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy90aGVtZS9zcmMvZGVmYXVsdC10aGVtZS9jb21wb25lbnQtc3BlY2lmaWMvZ2V0VGFibGVDZWxsQ2xhc3NOYW1lLmpzIl0sIm5hbWVzIjpbIkFwcGVhcmFuY2VzIiwiZGVmYXVsdCIsIlRoZW1lciIsImNyZWF0ZVRhYmxlQ2VsbEFwcGVhcmFuY2UiLCJmb2N1cyIsIm91dGxpbmUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJzY2FsZXMiLCJibHVlIiwiQjJBIiwiYm94U2hhZG93IiwiQjdBIiwiZ2V0QXBwZWFyYW5jZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBRUEsSUFBTUEsV0FBVyxHQUFHLEVBQXBCO0FBRUFBLFdBQVcsQ0FBQ0MsT0FBWixHQUFzQkMsZUFBT0MseUJBQVAsQ0FBaUM7QUFDckRDLEVBQUFBLEtBQUssRUFBRTtBQUNMQyxJQUFBQSxPQUFPLEVBQUUsTUFESjtBQUVMQyxJQUFBQSxlQUFlLEVBQUVDLGdCQUFPQyxJQUFQLENBQVlDLEdBRnhCO0FBR0xDLElBQUFBLFNBQVMsNEJBQXFCSCxnQkFBT0MsSUFBUCxDQUFZRyxHQUFqQztBQUhKO0FBRDhDLENBQWpDLENBQXRCO0FBUUE7Ozs7OztBQUtBLElBQU1DLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsR0FBTTtBQUMxQixTQUFPWixXQUFXLENBQUNDLE9BQW5CO0FBQ0QsQ0FGRDtBQUlBOzs7Ozs7O2VBS2UsK0JBQWlCVyxhQUFqQixDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVGhlbWVyIH0gZnJvbSAnLi4vLi4vLi4vLi4vdGhlbWVyJ1xuaW1wb3J0IG1lbW9pemVDbGFzc05hbWUgZnJvbSAnLi4vdXRpbHMvbWVtb2l6ZUNsYXNzTmFtZSdcbmltcG9ydCBzY2FsZXMgZnJvbSAnLi4vZm91bmRhdGlvbmFsLXN0eWxlcy9zY2FsZXMnXG5cbmNvbnN0IEFwcGVhcmFuY2VzID0ge31cblxuQXBwZWFyYW5jZXMuZGVmYXVsdCA9IFRoZW1lci5jcmVhdGVUYWJsZUNlbGxBcHBlYXJhbmNlKHtcbiAgZm9jdXM6IHtcbiAgICBvdXRsaW5lOiAnbm9uZScsXG4gICAgYmFja2dyb3VuZENvbG9yOiBzY2FsZXMuYmx1ZS5CMkEsXG4gICAgYm94U2hhZG93OiBgaW5zZXQgMCAwIDAgMXB4ICR7c2NhbGVzLmJsdWUuQjdBfWBcbiAgfVxufSlcblxuLyoqXG4gKiBHZXQgdGhlIGFwcGVhcmFuY2Ugb2YgYSBgVGFibGVDZWxsYC5cbiAqIEBwYXJhbSB7c3RyaW5nfSBhcHBlYXJhbmNlXG4gKiBAcmV0dXJuIHtzdHJpbmd9IHRoZSBhcHBlYXJhbmNlIG9iamVjdC5cbiAqL1xuY29uc3QgZ2V0QXBwZWFyYW5jZSA9ICgpID0+IHtcbiAgcmV0dXJuIEFwcGVhcmFuY2VzLmRlZmF1bHRcbn1cblxuLyoqXG4gKiBHZXQgdGhlIGNsYXNzTmFtZSBvZiBhIGBUYWJsZS5FZGl0YWJsZUNlbGxgLlxuICogQHBhcmFtIHtzdHJpbmd9IGFwcGVhcmFuY2VcbiAqIEByZXR1cm4ge3N0cmluZ30gdGhlIGFwcGVhcmFuY2UgY2xhc3MgbmFtZS5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgbWVtb2l6ZUNsYXNzTmFtZShnZXRBcHBlYXJhbmNlKVxuIl19