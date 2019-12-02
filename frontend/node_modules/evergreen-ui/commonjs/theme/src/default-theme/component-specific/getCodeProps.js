"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _scales = _interopRequireDefault(require("../foundational-styles/scales"));

/**
 * Get the themed properties for a `Code` text component.
 * @param {string} appearance - default, minimal.
 * @return {string} the themd properties.
 */
var getCodeProps = function getCodeProps(appearance) {
  switch (appearance) {
    case 'minimal':
      return {};

    case 'default':
    default:
      // Passing padding and border radius is non-ideal here.
      return {
        backgroundColor: _scales.default.blue.B2A,
        boxShadow: "inset 0 0 0 1px ".concat(_scales.default.blue.B4A),
        paddingLeft: 6,
        paddingRight: 6,
        paddingTop: 3,
        paddingBottom: 3,
        borderRadius: 2
      };
  }
};

var _default = getCodeProps;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy90aGVtZS9zcmMvZGVmYXVsdC10aGVtZS9jb21wb25lbnQtc3BlY2lmaWMvZ2V0Q29kZVByb3BzLmpzIl0sIm5hbWVzIjpbImdldENvZGVQcm9wcyIsImFwcGVhcmFuY2UiLCJiYWNrZ3JvdW5kQ29sb3IiLCJzY2FsZXMiLCJibHVlIiwiQjJBIiwiYm94U2hhZG93IiwiQjRBIiwicGFkZGluZ0xlZnQiLCJwYWRkaW5nUmlnaHQiLCJwYWRkaW5nVG9wIiwicGFkZGluZ0JvdHRvbSIsImJvcmRlclJhZGl1cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBRUE7Ozs7O0FBS0EsSUFBTUEsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQUMsVUFBVSxFQUFJO0FBQ2pDLFVBQVFBLFVBQVI7QUFDRSxTQUFLLFNBQUw7QUFDRSxhQUFPLEVBQVA7O0FBQ0YsU0FBSyxTQUFMO0FBQ0E7QUFDRTtBQUNBLGFBQU87QUFDTEMsUUFBQUEsZUFBZSxFQUFFQyxnQkFBT0MsSUFBUCxDQUFZQyxHQUR4QjtBQUVMQyxRQUFBQSxTQUFTLDRCQUFxQkgsZ0JBQU9DLElBQVAsQ0FBWUcsR0FBakMsQ0FGSjtBQUdMQyxRQUFBQSxXQUFXLEVBQUUsQ0FIUjtBQUlMQyxRQUFBQSxZQUFZLEVBQUUsQ0FKVDtBQUtMQyxRQUFBQSxVQUFVLEVBQUUsQ0FMUDtBQU1MQyxRQUFBQSxhQUFhLEVBQUUsQ0FOVjtBQU9MQyxRQUFBQSxZQUFZLEVBQUU7QUFQVCxPQUFQO0FBTko7QUFnQkQsQ0FqQkQ7O2VBbUJlWixZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHNjYWxlcyBmcm9tICcuLi9mb3VuZGF0aW9uYWwtc3R5bGVzL3NjYWxlcydcblxuLyoqXG4gKiBHZXQgdGhlIHRoZW1lZCBwcm9wZXJ0aWVzIGZvciBhIGBDb2RlYCB0ZXh0IGNvbXBvbmVudC5cbiAqIEBwYXJhbSB7c3RyaW5nfSBhcHBlYXJhbmNlIC0gZGVmYXVsdCwgbWluaW1hbC5cbiAqIEByZXR1cm4ge3N0cmluZ30gdGhlIHRoZW1kIHByb3BlcnRpZXMuXG4gKi9cbmNvbnN0IGdldENvZGVQcm9wcyA9IGFwcGVhcmFuY2UgPT4ge1xuICBzd2l0Y2ggKGFwcGVhcmFuY2UpIHtcbiAgICBjYXNlICdtaW5pbWFsJzpcbiAgICAgIHJldHVybiB7fVxuICAgIGNhc2UgJ2RlZmF1bHQnOlxuICAgIGRlZmF1bHQ6XG4gICAgICAvLyBQYXNzaW5nIHBhZGRpbmcgYW5kIGJvcmRlciByYWRpdXMgaXMgbm9uLWlkZWFsIGhlcmUuXG4gICAgICByZXR1cm4ge1xuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHNjYWxlcy5ibHVlLkIyQSxcbiAgICAgICAgYm94U2hhZG93OiBgaW5zZXQgMCAwIDAgMXB4ICR7c2NhbGVzLmJsdWUuQjRBfWAsXG4gICAgICAgIHBhZGRpbmdMZWZ0OiA2LFxuICAgICAgICBwYWRkaW5nUmlnaHQ6IDYsXG4gICAgICAgIHBhZGRpbmdUb3A6IDMsXG4gICAgICAgIHBhZGRpbmdCb3R0b206IDMsXG4gICAgICAgIGJvcmRlclJhZGl1czogMlxuICAgICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGdldENvZGVQcm9wc1xuIl19