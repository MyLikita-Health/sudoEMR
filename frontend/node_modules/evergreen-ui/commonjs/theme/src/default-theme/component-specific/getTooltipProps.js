"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _tinycolor = _interopRequireDefault(require("tinycolor2"));

var _palette = _interopRequireDefault(require("../foundational-styles/palette"));

var getTooltipProps = function getTooltipProps(appearance) {
  switch (appearance) {
    case 'card':
      return {
        backgroundColor: 'white',
        elevation: 3
      };

    case 'default':
    default:
      return {
        color: 'white',
        backgroundColor: (0, _tinycolor.default)(_palette.default.neutral.base).setAlpha(0.95).toString()
      };
  }
};

var _default = getTooltipProps;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy90aGVtZS9zcmMvZGVmYXVsdC10aGVtZS9jb21wb25lbnQtc3BlY2lmaWMvZ2V0VG9vbHRpcFByb3BzLmpzIl0sIm5hbWVzIjpbImdldFRvb2x0aXBQcm9wcyIsImFwcGVhcmFuY2UiLCJiYWNrZ3JvdW5kQ29sb3IiLCJlbGV2YXRpb24iLCJjb2xvciIsInBhbGV0dGUiLCJuZXV0cmFsIiwiYmFzZSIsInNldEFscGhhIiwidG9TdHJpbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUVBLElBQU1BLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsQ0FBQUMsVUFBVSxFQUFJO0FBQ3BDLFVBQVFBLFVBQVI7QUFDRSxTQUFLLE1BQUw7QUFDRSxhQUFPO0FBQ0xDLFFBQUFBLGVBQWUsRUFBRSxPQURaO0FBRUxDLFFBQUFBLFNBQVMsRUFBRTtBQUZOLE9BQVA7O0FBSUYsU0FBSyxTQUFMO0FBQ0E7QUFDRSxhQUFPO0FBQ0xDLFFBQUFBLEtBQUssRUFBRSxPQURGO0FBRUxGLFFBQUFBLGVBQWUsRUFBRSx3QkFBVUcsaUJBQVFDLE9BQVIsQ0FBZ0JDLElBQTFCLEVBQ2RDLFFBRGMsQ0FDTCxJQURLLEVBRWRDLFFBRmM7QUFGWixPQUFQO0FBUko7QUFlRCxDQWhCRDs7ZUFrQmVULGUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdGlueWNvbG9yIGZyb20gJ3Rpbnljb2xvcjInXG5pbXBvcnQgcGFsZXR0ZSBmcm9tICcuLi9mb3VuZGF0aW9uYWwtc3R5bGVzL3BhbGV0dGUnXG5cbmNvbnN0IGdldFRvb2x0aXBQcm9wcyA9IGFwcGVhcmFuY2UgPT4ge1xuICBzd2l0Y2ggKGFwcGVhcmFuY2UpIHtcbiAgICBjYXNlICdjYXJkJzpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyxcbiAgICAgICAgZWxldmF0aW9uOiAzXG4gICAgICB9XG4gICAgY2FzZSAnZGVmYXVsdCc6XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGNvbG9yOiAnd2hpdGUnLFxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRpbnljb2xvcihwYWxldHRlLm5ldXRyYWwuYmFzZSlcbiAgICAgICAgICAuc2V0QWxwaGEoMC45NSlcbiAgICAgICAgICAudG9TdHJpbmcoKVxuICAgICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGdldFRvb2x0aXBQcm9wc1xuIl19