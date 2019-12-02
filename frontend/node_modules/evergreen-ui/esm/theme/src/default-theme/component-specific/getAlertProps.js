import { css } from 'glamor';
import scales from '../foundational-styles/scales';
import colors from '../foundational-styles/colors';

var getTrimStyle = function getTrimStyle(intent) {
  return {
    '&:before': {
      content: '""',
      width: 3,
      height: '100%',
      position: 'absolute',
      top: 0,
      left: 0,
      backgroundColor: colors.intent[intent]
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
  var trimClassName = hasTrim ? css(getTrimStyle(intent)).toString() : '';

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
        boxShadow: "inset 0 0 0 1px ".concat(scales.neutral.N4A),
        className: trimClassName
      };
  }
};

export default getAlertProps;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy90aGVtZS9zcmMvZGVmYXVsdC10aGVtZS9jb21wb25lbnQtc3BlY2lmaWMvZ2V0QWxlcnRQcm9wcy5qcyJdLCJuYW1lcyI6WyJjc3MiLCJzY2FsZXMiLCJjb2xvcnMiLCJnZXRUcmltU3R5bGUiLCJpbnRlbnQiLCJjb250ZW50Iiwid2lkdGgiLCJoZWlnaHQiLCJwb3NpdGlvbiIsInRvcCIsImxlZnQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJnZXRBbGVydFByb3BzIiwiYXBwZWFyYW5jZSIsImhhc1RyaW0iLCJ0cmltQ2xhc3NOYW1lIiwidG9TdHJpbmciLCJlbGV2YXRpb24iLCJib3JkZXJSYWRpdXMiLCJjbGFzc05hbWUiLCJib3hTaGFkb3ciLCJuZXV0cmFsIiwiTjRBIl0sIm1hcHBpbmdzIjoiQUFBQSxTQUFTQSxHQUFULFFBQW9CLFFBQXBCO0FBQ0EsT0FBT0MsTUFBUCxNQUFtQiwrQkFBbkI7QUFDQSxPQUFPQyxNQUFQLE1BQW1CLCtCQUFuQjs7QUFFQSxJQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFBQyxNQUFNO0FBQUEsU0FBSztBQUM5QixnQkFBWTtBQUNWQyxNQUFBQSxPQUFPLEVBQUUsSUFEQztBQUVWQyxNQUFBQSxLQUFLLEVBQUUsQ0FGRztBQUdWQyxNQUFBQSxNQUFNLEVBQUUsTUFIRTtBQUlWQyxNQUFBQSxRQUFRLEVBQUUsVUFKQTtBQUtWQyxNQUFBQSxHQUFHLEVBQUUsQ0FMSztBQU1WQyxNQUFBQSxJQUFJLEVBQUUsQ0FOSTtBQU9WQyxNQUFBQSxlQUFlLEVBQUVULE1BQU0sQ0FBQ0UsTUFBUCxDQUFjQSxNQUFkO0FBUFA7QUFEa0IsR0FBTDtBQUFBLENBQTNCO0FBWUE7Ozs7Ozs7Ozs7QUFRQSxJQUFNUSxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLE9BQXFDO0FBQUEsTUFBbENDLFVBQWtDLFFBQWxDQSxVQUFrQztBQUFBLE1BQXRCVCxNQUFzQixRQUF0QkEsTUFBc0I7QUFBQSxNQUFkVSxPQUFjLFFBQWRBLE9BQWM7QUFDekQsTUFBTUMsYUFBYSxHQUFHRCxPQUFPLEdBQUdkLEdBQUcsQ0FBQ0csWUFBWSxDQUFDQyxNQUFELENBQWIsQ0FBSCxDQUEwQlksUUFBMUIsRUFBSCxHQUEwQyxFQUF2RTs7QUFFQSxVQUFRSCxVQUFSO0FBQ0UsU0FBSyxNQUFMO0FBQ0UsYUFBTztBQUFFSSxRQUFBQSxTQUFTLEVBQUUsQ0FBYjtBQUFnQkMsUUFBQUEsWUFBWSxFQUFFLENBQTlCO0FBQWlDQyxRQUFBQSxTQUFTLEVBQUVKO0FBQTVDLE9BQVA7O0FBQ0YsU0FBSyxTQUFMO0FBQ0E7QUFDRSxhQUFPO0FBQ0xLLFFBQUFBLFNBQVMsNEJBQXFCbkIsTUFBTSxDQUFDb0IsT0FBUCxDQUFlQyxHQUFwQyxDQURKO0FBRUxILFFBQUFBLFNBQVMsRUFBRUo7QUFGTixPQUFQO0FBTEo7QUFVRCxDQWJEOztBQWVBLGVBQWVILGFBQWYiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjc3MgfSBmcm9tICdnbGFtb3InXG5pbXBvcnQgc2NhbGVzIGZyb20gJy4uL2ZvdW5kYXRpb25hbC1zdHlsZXMvc2NhbGVzJ1xuaW1wb3J0IGNvbG9ycyBmcm9tICcuLi9mb3VuZGF0aW9uYWwtc3R5bGVzL2NvbG9ycydcblxuY29uc3QgZ2V0VHJpbVN0eWxlID0gaW50ZW50ID0+ICh7XG4gICcmOmJlZm9yZSc6IHtcbiAgICBjb250ZW50OiAnXCJcIicsXG4gICAgd2lkdGg6IDMsXG4gICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgdG9wOiAwLFxuICAgIGxlZnQ6IDAsXG4gICAgYmFja2dyb3VuZENvbG9yOiBjb2xvcnMuaW50ZW50W2ludGVudF1cbiAgfVxufSlcblxuLyoqXG4gKiBHZXQgdGhlIHRoZW1lZCBwcm9wcyBmb3IgdGhlIEFsZXJ0IGNvbXBvbmVudC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBwcm9wc1xuICogQHBhcmFtIHtzdHJpbmd9IHByb3BzLmFwcGVhcmFuY2UgLSBkZWZhdWx0IHRoZW1lIHN1cHBvcnRzIGBkZWZhdWx0YCBhbmQgYGNhcmRgLlxuICogQHBhcmFtIHtJbnRlbnR9IHByb3BzLmludGVudCAtIGludGVudCBvZiB0aGUgYWxlcnQuIE1heSBiZSBgbm9uZWAuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IHByb3BzLmhhc1RyaW0gLSB3aGVuIHRydWUsIHRoZSBhbGVydCBoYXMgYSB0cmltLlxuICogQHJldHVybiB7T2JqZWN0fSB7IGNsYXNzTmFtZSwgLi4udGhlbWVkUHJvcHMgfVxuICovXG5jb25zdCBnZXRBbGVydFByb3BzID0gKHsgYXBwZWFyYW5jZSwgaW50ZW50LCBoYXNUcmltIH0pID0+IHtcbiAgY29uc3QgdHJpbUNsYXNzTmFtZSA9IGhhc1RyaW0gPyBjc3MoZ2V0VHJpbVN0eWxlKGludGVudCkpLnRvU3RyaW5nKCkgOiAnJ1xuXG4gIHN3aXRjaCAoYXBwZWFyYW5jZSkge1xuICAgIGNhc2UgJ2NhcmQnOlxuICAgICAgcmV0dXJuIHsgZWxldmF0aW9uOiAxLCBib3JkZXJSYWRpdXM6IDMsIGNsYXNzTmFtZTogdHJpbUNsYXNzTmFtZSB9XG4gICAgY2FzZSAnZGVmYXVsdCc6XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGJveFNoYWRvdzogYGluc2V0IDAgMCAwIDFweCAke3NjYWxlcy5uZXV0cmFsLk40QX1gLFxuICAgICAgICBjbGFzc05hbWU6IHRyaW1DbGFzc05hbWVcbiAgICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBnZXRBbGVydFByb3BzXG4iXX0=