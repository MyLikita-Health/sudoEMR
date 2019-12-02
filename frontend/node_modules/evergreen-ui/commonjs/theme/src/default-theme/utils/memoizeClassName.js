"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _glamor = require("glamor");

/**
 * Memoize a function that takes N number of strings as arguments and returns
 * a CSS-in-JS object.
 *
 * The key of the cache will be the concatenated string arguments,
 * For example: `primary_success` or `regular`
 *
 * The CSS-in-JS object will be passed to `glamor` and the generated className
 * will be used as the value in the cache.
 *
 * Why?
 * Glamor, or any CSS-in-JS solution wil have a build-in cache.
 * However, to get the hash/key of this build-in cache a relatively expensive
 * hashing function needs to run on the CSS-in-JS object.
 * This function removes the need for the build-in cache and acts as much
 * faster alternative.
 *
 * @param {function} fn — function that return an appearance (object).
 * @return {string} a class name.
 */
var memoizeClassName = function memoizeClassName(fn) {
  // Memo will hold a list of string keys with string values (classNames).
  var memo = {}; // Return the wrapped function.

  return function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    // Create a key by joining all args.
    var key = args.join('_') || '__no_args__'; // Check if is already memoized, if so return the result.

    if (memo[key]) return memo[key]; // Create a new entry in the memo with the generated className.

    memo[key] = (0, _glamor.css)(fn.apply(void 0, args)).toString(); // Return the newly generated className.

    return memo[key];
  };
};

var _default = memoizeClassName;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy90aGVtZS9zcmMvZGVmYXVsdC10aGVtZS91dGlscy9tZW1vaXplQ2xhc3NOYW1lLmpzIl0sIm5hbWVzIjpbIm1lbW9pemVDbGFzc05hbWUiLCJmbiIsIm1lbW8iLCJhcmdzIiwia2V5Iiwiam9pbiIsInRvU3RyaW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBb0JBLElBQU1BLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsQ0FBQUMsRUFBRSxFQUFJO0FBQzdCO0FBQ0EsTUFBTUMsSUFBSSxHQUFHLEVBQWIsQ0FGNkIsQ0FJN0I7O0FBQ0EsU0FBTyxZQUFhO0FBQUEsc0NBQVRDLElBQVM7QUFBVEEsTUFBQUEsSUFBUztBQUFBOztBQUNsQjtBQUNBLFFBQU1DLEdBQUcsR0FBR0QsSUFBSSxDQUFDRSxJQUFMLENBQVUsR0FBVixLQUFrQixhQUE5QixDQUZrQixDQUlsQjs7QUFDQSxRQUFJSCxJQUFJLENBQUNFLEdBQUQsQ0FBUixFQUFlLE9BQU9GLElBQUksQ0FBQ0UsR0FBRCxDQUFYLENBTEcsQ0FPbEI7O0FBQ0FGLElBQUFBLElBQUksQ0FBQ0UsR0FBRCxDQUFKLEdBQVksaUJBQUlILEVBQUUsTUFBRixTQUFNRSxJQUFOLENBQUosRUFBaUJHLFFBQWpCLEVBQVosQ0FSa0IsQ0FVbEI7O0FBQ0EsV0FBT0osSUFBSSxDQUFDRSxHQUFELENBQVg7QUFDRCxHQVpEO0FBYUQsQ0FsQkQ7O2VBb0JlSixnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNzcyB9IGZyb20gJ2dsYW1vcidcblxuLyoqXG4gKiBNZW1vaXplIGEgZnVuY3Rpb24gdGhhdCB0YWtlcyBOIG51bWJlciBvZiBzdHJpbmdzIGFzIGFyZ3VtZW50cyBhbmQgcmV0dXJuc1xuICogYSBDU1MtaW4tSlMgb2JqZWN0LlxuICpcbiAqIFRoZSBrZXkgb2YgdGhlIGNhY2hlIHdpbGwgYmUgdGhlIGNvbmNhdGVuYXRlZCBzdHJpbmcgYXJndW1lbnRzLFxuICogRm9yIGV4YW1wbGU6IGBwcmltYXJ5X3N1Y2Nlc3NgIG9yIGByZWd1bGFyYFxuICpcbiAqIFRoZSBDU1MtaW4tSlMgb2JqZWN0IHdpbGwgYmUgcGFzc2VkIHRvIGBnbGFtb3JgIGFuZCB0aGUgZ2VuZXJhdGVkIGNsYXNzTmFtZVxuICogd2lsbCBiZSB1c2VkIGFzIHRoZSB2YWx1ZSBpbiB0aGUgY2FjaGUuXG4gKlxuICogV2h5P1xuICogR2xhbW9yLCBvciBhbnkgQ1NTLWluLUpTIHNvbHV0aW9uIHdpbCBoYXZlIGEgYnVpbGQtaW4gY2FjaGUuXG4gKiBIb3dldmVyLCB0byBnZXQgdGhlIGhhc2gva2V5IG9mIHRoaXMgYnVpbGQtaW4gY2FjaGUgYSByZWxhdGl2ZWx5IGV4cGVuc2l2ZVxuICogaGFzaGluZyBmdW5jdGlvbiBuZWVkcyB0byBydW4gb24gdGhlIENTUy1pbi1KUyBvYmplY3QuXG4gKiBUaGlzIGZ1bmN0aW9uIHJlbW92ZXMgdGhlIG5lZWQgZm9yIHRoZSBidWlsZC1pbiBjYWNoZSBhbmQgYWN0cyBhcyBtdWNoXG4gKiBmYXN0ZXIgYWx0ZXJuYXRpdmUuXG4gKlxuICogQHBhcmFtIHtmdW5jdGlvbn0gZm4g4oCUIGZ1bmN0aW9uIHRoYXQgcmV0dXJuIGFuIGFwcGVhcmFuY2UgKG9iamVjdCkuXG4gKiBAcmV0dXJuIHtzdHJpbmd9IGEgY2xhc3MgbmFtZS5cbiAqL1xuY29uc3QgbWVtb2l6ZUNsYXNzTmFtZSA9IGZuID0+IHtcbiAgLy8gTWVtbyB3aWxsIGhvbGQgYSBsaXN0IG9mIHN0cmluZyBrZXlzIHdpdGggc3RyaW5nIHZhbHVlcyAoY2xhc3NOYW1lcykuXG4gIGNvbnN0IG1lbW8gPSB7fVxuXG4gIC8vIFJldHVybiB0aGUgd3JhcHBlZCBmdW5jdGlvbi5cbiAgcmV0dXJuICguLi5hcmdzKSA9PiB7XG4gICAgLy8gQ3JlYXRlIGEga2V5IGJ5IGpvaW5pbmcgYWxsIGFyZ3MuXG4gICAgY29uc3Qga2V5ID0gYXJncy5qb2luKCdfJykgfHwgJ19fbm9fYXJnc19fJ1xuXG4gICAgLy8gQ2hlY2sgaWYgaXMgYWxyZWFkeSBtZW1vaXplZCwgaWYgc28gcmV0dXJuIHRoZSByZXN1bHQuXG4gICAgaWYgKG1lbW9ba2V5XSkgcmV0dXJuIG1lbW9ba2V5XVxuXG4gICAgLy8gQ3JlYXRlIGEgbmV3IGVudHJ5IGluIHRoZSBtZW1vIHdpdGggdGhlIGdlbmVyYXRlZCBjbGFzc05hbWUuXG4gICAgbWVtb1trZXldID0gY3NzKGZuKC4uLmFyZ3MpKS50b1N0cmluZygpXG5cbiAgICAvLyBSZXR1cm4gdGhlIG5ld2x5IGdlbmVyYXRlZCBjbGFzc05hbWUuXG4gICAgcmV0dXJuIG1lbW9ba2V5XVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IG1lbW9pemVDbGFzc05hbWVcbiJdfQ==