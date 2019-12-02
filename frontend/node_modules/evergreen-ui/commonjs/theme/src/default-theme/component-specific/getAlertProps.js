"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _glamor = require("glamor");

var _scales = _interopRequireDefault(require("../foundational-styles/scales"));

var _colors = _interopRequireDefault(require("../foundational-styles/colors"));

var getTrimStyle = function getTrimStyle(intent) {
  return {
    '&:before': {
      content: '""',
      width: 3,
      height: '100%',
      position: 'absolute',
      top: 0,
      left: 0,
      backgroundColor: _colors.default.intent[intent]
    }
  };
};
/**
 * Get the themed props for the Alert component.
 * @param {Object} props
 * @param {string} props.appearance - default theme supports `default` and `card`.
 * @param {Intent} props.intent - intent of the alert. May be `none`.
 * @param {boolean} props.hasTrim - when true, the alert has a trim.
 * @return {Object} { className, ...themedProps }
 */


var getAlertProps = function getAlertProps(_ref) {
  var appearance = _ref.appearance,
      intent = _ref.intent,
      hasTrim = _ref.hasTrim;
  var trimClassName = hasTrim ? (0, _glamor.css)(getTrimStyle(intent)).toString() : '';

  switch (appearance) {
    case 'card':
      return {
        elevation: 1,
        borderRadius: 3,
        className: trimClassName
      };

    case 'default':
    default:
      return {
        boxShadow: "inset 0 0 0 1px ".concat(_scales.default.neutral.N4A),
        className: trimClassName
      };
  }
};

var _default = getAlertProps;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy90aGVtZS9zcmMvZGVmYXVsdC10aGVtZS9jb21wb25lbnQtc3BlY2lmaWMvZ2V0QWxlcnRQcm9wcy5qcyJdLCJuYW1lcyI6WyJnZXRUcmltU3R5bGUiLCJpbnRlbnQiLCJjb250ZW50Iiwid2lkdGgiLCJoZWlnaHQiLCJwb3NpdGlvbiIsInRvcCIsImxlZnQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJjb2xvcnMiLCJnZXRBbGVydFByb3BzIiwiYXBwZWFyYW5jZSIsImhhc1RyaW0iLCJ0cmltQ2xhc3NOYW1lIiwidG9TdHJpbmciLCJlbGV2YXRpb24iLCJib3JkZXJSYWRpdXMiLCJjbGFzc05hbWUiLCJib3hTaGFkb3ciLCJzY2FsZXMiLCJuZXV0cmFsIiwiTjRBIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFFQSxJQUFNQSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFBQyxNQUFNO0FBQUEsU0FBSztBQUM5QixnQkFBWTtBQUNWQyxNQUFBQSxPQUFPLEVBQUUsSUFEQztBQUVWQyxNQUFBQSxLQUFLLEVBQUUsQ0FGRztBQUdWQyxNQUFBQSxNQUFNLEVBQUUsTUFIRTtBQUlWQyxNQUFBQSxRQUFRLEVBQUUsVUFKQTtBQUtWQyxNQUFBQSxHQUFHLEVBQUUsQ0FMSztBQU1WQyxNQUFBQSxJQUFJLEVBQUUsQ0FOSTtBQU9WQyxNQUFBQSxlQUFlLEVBQUVDLGdCQUFPUixNQUFQLENBQWNBLE1BQWQ7QUFQUDtBQURrQixHQUFMO0FBQUEsQ0FBM0I7QUFZQTs7Ozs7Ozs7OztBQVFBLElBQU1TLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsT0FBcUM7QUFBQSxNQUFsQ0MsVUFBa0MsUUFBbENBLFVBQWtDO0FBQUEsTUFBdEJWLE1BQXNCLFFBQXRCQSxNQUFzQjtBQUFBLE1BQWRXLE9BQWMsUUFBZEEsT0FBYztBQUN6RCxNQUFNQyxhQUFhLEdBQUdELE9BQU8sR0FBRyxpQkFBSVosWUFBWSxDQUFDQyxNQUFELENBQWhCLEVBQTBCYSxRQUExQixFQUFILEdBQTBDLEVBQXZFOztBQUVBLFVBQVFILFVBQVI7QUFDRSxTQUFLLE1BQUw7QUFDRSxhQUFPO0FBQUVJLFFBQUFBLFNBQVMsRUFBRSxDQUFiO0FBQWdCQyxRQUFBQSxZQUFZLEVBQUUsQ0FBOUI7QUFBaUNDLFFBQUFBLFNBQVMsRUFBRUo7QUFBNUMsT0FBUDs7QUFDRixTQUFLLFNBQUw7QUFDQTtBQUNFLGFBQU87QUFDTEssUUFBQUEsU0FBUyw0QkFBcUJDLGdCQUFPQyxPQUFQLENBQWVDLEdBQXBDLENBREo7QUFFTEosUUFBQUEsU0FBUyxFQUFFSjtBQUZOLE9BQVA7QUFMSjtBQVVELENBYkQ7O2VBZWVILGEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjc3MgfSBmcm9tICdnbGFtb3InXG5pbXBvcnQgc2NhbGVzIGZyb20gJy4uL2ZvdW5kYXRpb25hbC1zdHlsZXMvc2NhbGVzJ1xuaW1wb3J0IGNvbG9ycyBmcm9tICcuLi9mb3VuZGF0aW9uYWwtc3R5bGVzL2NvbG9ycydcblxuY29uc3QgZ2V0VHJpbVN0eWxlID0gaW50ZW50ID0+ICh7XG4gICcmOmJlZm9yZSc6IHtcbiAgICBjb250ZW50OiAnXCJcIicsXG4gICAgd2lkdGg6IDMsXG4gICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgdG9wOiAwLFxuICAgIGxlZnQ6IDAsXG4gICAgYmFja2dyb3VuZENvbG9yOiBjb2xvcnMuaW50ZW50W2ludGVudF1cbiAgfVxufSlcblxuLyoqXG4gKiBHZXQgdGhlIHRoZW1lZCBwcm9wcyBmb3IgdGhlIEFsZXJ0IGNvbXBvbmVudC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBwcm9wc1xuICogQHBhcmFtIHtzdHJpbmd9IHByb3BzLmFwcGVhcmFuY2UgLSBkZWZhdWx0IHRoZW1lIHN1cHBvcnRzIGBkZWZhdWx0YCBhbmQgYGNhcmRgLlxuICogQHBhcmFtIHtJbnRlbnR9IHByb3BzLmludGVudCAtIGludGVudCBvZiB0aGUgYWxlcnQuIE1heSBiZSBgbm9uZWAuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IHByb3BzLmhhc1RyaW0gLSB3aGVuIHRydWUsIHRoZSBhbGVydCBoYXMgYSB0cmltLlxuICogQHJldHVybiB7T2JqZWN0fSB7IGNsYXNzTmFtZSwgLi4udGhlbWVkUHJvcHMgfVxuICovXG5jb25zdCBnZXRBbGVydFByb3BzID0gKHsgYXBwZWFyYW5jZSwgaW50ZW50LCBoYXNUcmltIH0pID0+IHtcbiAgY29uc3QgdHJpbUNsYXNzTmFtZSA9IGhhc1RyaW0gPyBjc3MoZ2V0VHJpbVN0eWxlKGludGVudCkpLnRvU3RyaW5nKCkgOiAnJ1xuXG4gIHN3aXRjaCAoYXBwZWFyYW5jZSkge1xuICAgIGNhc2UgJ2NhcmQnOlxuICAgICAgcmV0dXJuIHsgZWxldmF0aW9uOiAxLCBib3JkZXJSYWRpdXM6IDMsIGNsYXNzTmFtZTogdHJpbUNsYXNzTmFtZSB9XG4gICAgY2FzZSAnZGVmYXVsdCc6XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGJveFNoYWRvdzogYGluc2V0IDAgMCAwIDFweCAke3NjYWxlcy5uZXV0cmFsLk40QX1gLFxuICAgICAgICBjbGFzc05hbWU6IHRyaW1DbGFzc05hbWVcbiAgICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBnZXRBbGVydFByb3BzXG4iXX0=