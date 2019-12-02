import scales from '../foundational-styles/scales';
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
        backgroundColor: scales.blue.B2A,
        boxShadow: "inset 0 0 0 1px ".concat(scales.blue.B4A),
        paddingLeft: 6,
        paddingRight: 6,
        paddingTop: 3,
        paddingBottom: 3,
        borderRadius: 2
      };
  }
};

export default getCodeProps;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy90aGVtZS9zcmMvZGVmYXVsdC10aGVtZS9jb21wb25lbnQtc3BlY2lmaWMvZ2V0Q29kZVByb3BzLmpzIl0sIm5hbWVzIjpbInNjYWxlcyIsImdldENvZGVQcm9wcyIsImFwcGVhcmFuY2UiLCJiYWNrZ3JvdW5kQ29sb3IiLCJibHVlIiwiQjJBIiwiYm94U2hhZG93IiwiQjRBIiwicGFkZGluZ0xlZnQiLCJwYWRkaW5nUmlnaHQiLCJwYWRkaW5nVG9wIiwicGFkZGluZ0JvdHRvbSIsImJvcmRlclJhZGl1cyJdLCJtYXBwaW5ncyI6IkFBQUEsT0FBT0EsTUFBUCxNQUFtQiwrQkFBbkI7QUFFQTs7Ozs7O0FBS0EsSUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQUMsVUFBVSxFQUFJO0FBQ2pDLFVBQVFBLFVBQVI7QUFDRSxTQUFLLFNBQUw7QUFDRSxhQUFPLEVBQVA7O0FBQ0YsU0FBSyxTQUFMO0FBQ0E7QUFDRTtBQUNBLGFBQU87QUFDTEMsUUFBQUEsZUFBZSxFQUFFSCxNQUFNLENBQUNJLElBQVAsQ0FBWUMsR0FEeEI7QUFFTEMsUUFBQUEsU0FBUyw0QkFBcUJOLE1BQU0sQ0FBQ0ksSUFBUCxDQUFZRyxHQUFqQyxDQUZKO0FBR0xDLFFBQUFBLFdBQVcsRUFBRSxDQUhSO0FBSUxDLFFBQUFBLFlBQVksRUFBRSxDQUpUO0FBS0xDLFFBQUFBLFVBQVUsRUFBRSxDQUxQO0FBTUxDLFFBQUFBLGFBQWEsRUFBRSxDQU5WO0FBT0xDLFFBQUFBLFlBQVksRUFBRTtBQVBULE9BQVA7QUFOSjtBQWdCRCxDQWpCRDs7QUFtQkEsZUFBZVgsWUFBZiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzY2FsZXMgZnJvbSAnLi4vZm91bmRhdGlvbmFsLXN0eWxlcy9zY2FsZXMnXG5cbi8qKlxuICogR2V0IHRoZSB0aGVtZWQgcHJvcGVydGllcyBmb3IgYSBgQ29kZWAgdGV4dCBjb21wb25lbnQuXG4gKiBAcGFyYW0ge3N0cmluZ30gYXBwZWFyYW5jZSAtIGRlZmF1bHQsIG1pbmltYWwuXG4gKiBAcmV0dXJuIHtzdHJpbmd9IHRoZSB0aGVtZCBwcm9wZXJ0aWVzLlxuICovXG5jb25zdCBnZXRDb2RlUHJvcHMgPSBhcHBlYXJhbmNlID0+IHtcbiAgc3dpdGNoIChhcHBlYXJhbmNlKSB7XG4gICAgY2FzZSAnbWluaW1hbCc6XG4gICAgICByZXR1cm4ge31cbiAgICBjYXNlICdkZWZhdWx0JzpcbiAgICBkZWZhdWx0OlxuICAgICAgLy8gUGFzc2luZyBwYWRkaW5nIGFuZCBib3JkZXIgcmFkaXVzIGlzIG5vbi1pZGVhbCBoZXJlLlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBzY2FsZXMuYmx1ZS5CMkEsXG4gICAgICAgIGJveFNoYWRvdzogYGluc2V0IDAgMCAwIDFweCAke3NjYWxlcy5ibHVlLkI0QX1gLFxuICAgICAgICBwYWRkaW5nTGVmdDogNixcbiAgICAgICAgcGFkZGluZ1JpZ2h0OiA2LFxuICAgICAgICBwYWRkaW5nVG9wOiAzLFxuICAgICAgICBwYWRkaW5nQm90dG9tOiAzLFxuICAgICAgICBib3JkZXJSYWRpdXM6IDJcbiAgICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBnZXRDb2RlUHJvcHNcbiJdfQ==