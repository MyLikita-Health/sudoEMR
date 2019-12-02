"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _scales = _interopRequireDefault(require("./scales"));

var borderShadowColor = _scales.default.neutral.N5A; // Used to be colors.neutral['80A'] in v3 and down.

var blurryShadowColor = _scales.default.neutral.N6A; // Used to be colors.neutral['50A'] in v3 and down.

/**
 * Elevation styles are applied as box shadows.
 * Available levels: 0, 1, 2, 3, 4.
 */

var _default = ["0 0 1px ".concat(borderShadowColor), "0 0 1px ".concat(borderShadowColor, ", 0 2px 4px -2px ").concat(blurryShadowColor), "0 0 1px ".concat(borderShadowColor, ", 0 5px 8px -4px ").concat(blurryShadowColor), "0 0 1px ".concat(borderShadowColor, ", 0 8px 10px -4px ").concat(blurryShadowColor), "0 0 1px ".concat(borderShadowColor, ", 0 16px 24px -8px ").concat(blurryShadowColor)];
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy90aGVtZS9zcmMvZGVmYXVsdC10aGVtZS9mb3VuZGF0aW9uYWwtc3R5bGVzL2VsZXZhdGlvbnMuanMiXSwibmFtZXMiOlsiYm9yZGVyU2hhZG93Q29sb3IiLCJzY2FsZXMiLCJuZXV0cmFsIiwiTjVBIiwiYmx1cnJ5U2hhZG93Q29sb3IiLCJONkEiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUVBLElBQU1BLGlCQUFpQixHQUFHQyxnQkFBT0MsT0FBUCxDQUFlQyxHQUF6QyxDLENBQTZDOztBQUM3QyxJQUFNQyxpQkFBaUIsR0FBR0gsZ0JBQU9DLE9BQVAsQ0FBZUcsR0FBekMsQyxDQUE2Qzs7QUFFN0M7Ozs7O2VBSWUsbUJBQ0ZMLGlCQURFLHFCQUVGQSxpQkFGRSw4QkFFbUNJLGlCQUZuQyxxQkFHRkosaUJBSEUsOEJBR21DSSxpQkFIbkMscUJBSUZKLGlCQUpFLCtCQUlvQ0ksaUJBSnBDLHFCQUtGSixpQkFMRSxnQ0FLcUNJLGlCQUxyQyxFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHNjYWxlcyBmcm9tICcuL3NjYWxlcydcblxuY29uc3QgYm9yZGVyU2hhZG93Q29sb3IgPSBzY2FsZXMubmV1dHJhbC5ONUEgLy8gVXNlZCB0byBiZSBjb2xvcnMubmV1dHJhbFsnODBBJ10gaW4gdjMgYW5kIGRvd24uXG5jb25zdCBibHVycnlTaGFkb3dDb2xvciA9IHNjYWxlcy5uZXV0cmFsLk42QSAvLyBVc2VkIHRvIGJlIGNvbG9ycy5uZXV0cmFsWyc1MEEnXSBpbiB2MyBhbmQgZG93bi5cblxuLyoqXG4gKiBFbGV2YXRpb24gc3R5bGVzIGFyZSBhcHBsaWVkIGFzIGJveCBzaGFkb3dzLlxuICogQXZhaWxhYmxlIGxldmVsczogMCwgMSwgMiwgMywgNC5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgW1xuICBgMCAwIDFweCAke2JvcmRlclNoYWRvd0NvbG9yfWAsXG4gIGAwIDAgMXB4ICR7Ym9yZGVyU2hhZG93Q29sb3J9LCAwIDJweCA0cHggLTJweCAke2JsdXJyeVNoYWRvd0NvbG9yfWAsXG4gIGAwIDAgMXB4ICR7Ym9yZGVyU2hhZG93Q29sb3J9LCAwIDVweCA4cHggLTRweCAke2JsdXJyeVNoYWRvd0NvbG9yfWAsXG4gIGAwIDAgMXB4ICR7Ym9yZGVyU2hhZG93Q29sb3J9LCAwIDhweCAxMHB4IC00cHggJHtibHVycnlTaGFkb3dDb2xvcn1gLFxuICBgMCAwIDFweCAke2JvcmRlclNoYWRvd0NvbG9yfSwgMCAxNnB4IDI0cHggLThweCAke2JsdXJyeVNoYWRvd0NvbG9yfWBcbl1cbiJdfQ==