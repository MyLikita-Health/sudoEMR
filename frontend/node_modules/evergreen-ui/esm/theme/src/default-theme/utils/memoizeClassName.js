import { css } from 'glamor';
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

    memo[key] = css(fn.apply(void 0, args)).toString(); // Return the newly generated className.

    return memo[key];
  };
};

export default memoizeClassName;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy90aGVtZS9zcmMvZGVmYXVsdC10aGVtZS91dGlscy9tZW1vaXplQ2xhc3NOYW1lLmpzIl0sIm5hbWVzIjpbImNzcyIsIm1lbW9pemVDbGFzc05hbWUiLCJmbiIsIm1lbW8iLCJhcmdzIiwia2V5Iiwiam9pbiIsInRvU3RyaW5nIl0sIm1hcHBpbmdzIjoiQUFBQSxTQUFTQSxHQUFULFFBQW9CLFFBQXBCO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9CQSxJQUFNQyxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLENBQUFDLEVBQUUsRUFBSTtBQUM3QjtBQUNBLE1BQU1DLElBQUksR0FBRyxFQUFiLENBRjZCLENBSTdCOztBQUNBLFNBQU8sWUFBYTtBQUFBLHNDQUFUQyxJQUFTO0FBQVRBLE1BQUFBLElBQVM7QUFBQTs7QUFDbEI7QUFDQSxRQUFNQyxHQUFHLEdBQUdELElBQUksQ0FBQ0UsSUFBTCxDQUFVLEdBQVYsS0FBa0IsYUFBOUIsQ0FGa0IsQ0FJbEI7O0FBQ0EsUUFBSUgsSUFBSSxDQUFDRSxHQUFELENBQVIsRUFBZSxPQUFPRixJQUFJLENBQUNFLEdBQUQsQ0FBWCxDQUxHLENBT2xCOztBQUNBRixJQUFBQSxJQUFJLENBQUNFLEdBQUQsQ0FBSixHQUFZTCxHQUFHLENBQUNFLEVBQUUsTUFBRixTQUFNRSxJQUFOLENBQUQsQ0FBSCxDQUFpQkcsUUFBakIsRUFBWixDQVJrQixDQVVsQjs7QUFDQSxXQUFPSixJQUFJLENBQUNFLEdBQUQsQ0FBWDtBQUNELEdBWkQ7QUFhRCxDQWxCRDs7QUFvQkEsZUFBZUosZ0JBQWYiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjc3MgfSBmcm9tICdnbGFtb3InXG5cbi8qKlxuICogTWVtb2l6ZSBhIGZ1bmN0aW9uIHRoYXQgdGFrZXMgTiBudW1iZXIgb2Ygc3RyaW5ncyBhcyBhcmd1bWVudHMgYW5kIHJldHVybnNcbiAqIGEgQ1NTLWluLUpTIG9iamVjdC5cbiAqXG4gKiBUaGUga2V5IG9mIHRoZSBjYWNoZSB3aWxsIGJlIHRoZSBjb25jYXRlbmF0ZWQgc3RyaW5nIGFyZ3VtZW50cyxcbiAqIEZvciBleGFtcGxlOiBgcHJpbWFyeV9zdWNjZXNzYCBvciBgcmVndWxhcmBcbiAqXG4gKiBUaGUgQ1NTLWluLUpTIG9iamVjdCB3aWxsIGJlIHBhc3NlZCB0byBgZ2xhbW9yYCBhbmQgdGhlIGdlbmVyYXRlZCBjbGFzc05hbWVcbiAqIHdpbGwgYmUgdXNlZCBhcyB0aGUgdmFsdWUgaW4gdGhlIGNhY2hlLlxuICpcbiAqIFdoeT9cbiAqIEdsYW1vciwgb3IgYW55IENTUy1pbi1KUyBzb2x1dGlvbiB3aWwgaGF2ZSBhIGJ1aWxkLWluIGNhY2hlLlxuICogSG93ZXZlciwgdG8gZ2V0IHRoZSBoYXNoL2tleSBvZiB0aGlzIGJ1aWxkLWluIGNhY2hlIGEgcmVsYXRpdmVseSBleHBlbnNpdmVcbiAqIGhhc2hpbmcgZnVuY3Rpb24gbmVlZHMgdG8gcnVuIG9uIHRoZSBDU1MtaW4tSlMgb2JqZWN0LlxuICogVGhpcyBmdW5jdGlvbiByZW1vdmVzIHRoZSBuZWVkIGZvciB0aGUgYnVpbGQtaW4gY2FjaGUgYW5kIGFjdHMgYXMgbXVjaFxuICogZmFzdGVyIGFsdGVybmF0aXZlLlxuICpcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGZuIOKAlCBmdW5jdGlvbiB0aGF0IHJldHVybiBhbiBhcHBlYXJhbmNlIChvYmplY3QpLlxuICogQHJldHVybiB7c3RyaW5nfSBhIGNsYXNzIG5hbWUuXG4gKi9cbmNvbnN0IG1lbW9pemVDbGFzc05hbWUgPSBmbiA9PiB7XG4gIC8vIE1lbW8gd2lsbCBob2xkIGEgbGlzdCBvZiBzdHJpbmcga2V5cyB3aXRoIHN0cmluZyB2YWx1ZXMgKGNsYXNzTmFtZXMpLlxuICBjb25zdCBtZW1vID0ge31cblxuICAvLyBSZXR1cm4gdGhlIHdyYXBwZWQgZnVuY3Rpb24uXG4gIHJldHVybiAoLi4uYXJncykgPT4ge1xuICAgIC8vIENyZWF0ZSBhIGtleSBieSBqb2luaW5nIGFsbCBhcmdzLlxuICAgIGNvbnN0IGtleSA9IGFyZ3Muam9pbignXycpIHx8ICdfX25vX2FyZ3NfXydcblxuICAgIC8vIENoZWNrIGlmIGlzIGFscmVhZHkgbWVtb2l6ZWQsIGlmIHNvIHJldHVybiB0aGUgcmVzdWx0LlxuICAgIGlmIChtZW1vW2tleV0pIHJldHVybiBtZW1vW2tleV1cblxuICAgIC8vIENyZWF0ZSBhIG5ldyBlbnRyeSBpbiB0aGUgbWVtbyB3aXRoIHRoZSBnZW5lcmF0ZWQgY2xhc3NOYW1lLlxuICAgIG1lbW9ba2V5XSA9IGNzcyhmbiguLi5hcmdzKSkudG9TdHJpbmcoKVxuXG4gICAgLy8gUmV0dXJuIHRoZSBuZXdseSBnZW5lcmF0ZWQgY2xhc3NOYW1lLlxuICAgIHJldHVybiBtZW1vW2tleV1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBtZW1vaXplQ2xhc3NOYW1lXG4iXX0=