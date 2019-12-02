"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getInitials;

function getInitials(name) {
  var fallback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '?';
  if (!name || typeof name !== 'string') return fallback;
  return name.replace(/\s+/, ' ').split(' ') // Repeated spaces results in empty strings
  .slice(0, 2).map(function (v) {
    return v && v[0].toUpperCase();
  }) // Watch out for empty strings
  .join('');
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hdmF0YXIvc3JjL3V0aWxzL2dldEluaXRpYWxzLmpzIl0sIm5hbWVzIjpbImdldEluaXRpYWxzIiwibmFtZSIsImZhbGxiYWNrIiwicmVwbGFjZSIsInNwbGl0Iiwic2xpY2UiLCJtYXAiLCJ2IiwidG9VcHBlckNhc2UiLCJqb2luIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQWUsU0FBU0EsV0FBVCxDQUFxQkMsSUFBckIsRUFBMkM7QUFBQSxNQUFoQkMsUUFBZ0IsdUVBQUwsR0FBSztBQUN4RCxNQUFJLENBQUNELElBQUQsSUFBUyxPQUFPQSxJQUFQLEtBQWdCLFFBQTdCLEVBQXVDLE9BQU9DLFFBQVA7QUFDdkMsU0FBT0QsSUFBSSxDQUNSRSxPQURJLENBQ0ksS0FESixFQUNXLEdBRFgsRUFFSkMsS0FGSSxDQUVFLEdBRkYsRUFFTztBQUZQLEdBR0pDLEtBSEksQ0FHRSxDQUhGLEVBR0ssQ0FITCxFQUlKQyxHQUpJLENBSUEsVUFBQUMsQ0FBQztBQUFBLFdBQUlBLENBQUMsSUFBSUEsQ0FBQyxDQUFDLENBQUQsQ0FBRCxDQUFLQyxXQUFMLEVBQVQ7QUFBQSxHQUpELEVBSThCO0FBSjlCLEdBS0pDLElBTEksQ0FLQyxFQUxELENBQVA7QUFNRCIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldEluaXRpYWxzKG5hbWUsIGZhbGxiYWNrID0gJz8nKSB7XG4gIGlmICghbmFtZSB8fCB0eXBlb2YgbmFtZSAhPT0gJ3N0cmluZycpIHJldHVybiBmYWxsYmFja1xuICByZXR1cm4gbmFtZVxuICAgIC5yZXBsYWNlKC9cXHMrLywgJyAnKVxuICAgIC5zcGxpdCgnICcpIC8vIFJlcGVhdGVkIHNwYWNlcyByZXN1bHRzIGluIGVtcHR5IHN0cmluZ3NcbiAgICAuc2xpY2UoMCwgMilcbiAgICAubWFwKHYgPT4gdiAmJiB2WzBdLnRvVXBwZXJDYXNlKCkpIC8vIFdhdGNoIG91dCBmb3IgZW1wdHkgc3RyaW5nc1xuICAgIC5qb2luKCcnKVxufVxuIl19