"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * Stacking order contains z-index values that are used through.
 * Note that the Stack component might increase the z-index for certain components.
 */
var _default = {
  /**
   * Used for focused buttons and controls.
   */
  FOCUSED: 2,

  /**
   * Used as the default for the StackingContext.
   */
  STACKING_CONTEXT: 5,

  /**
   * Used as the default for the Positioner.
   */
  POSITIONER: 10,

  /**
   * Used for the Overlay and everything that's inside such as Dialog + SideSheet.
   */
  OVERLAY: 20,

  /**
   * Used for the toasts in the toaster. Appears on top of everything else.
   */
  TOASTER: 30
};
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb25zdGFudHMvc3JjL1N0YWNraW5nT3JkZXIuanMiXSwibmFtZXMiOlsiRk9DVVNFRCIsIlNUQUNLSU5HX0NPTlRFWFQiLCJQT1NJVElPTkVSIiwiT1ZFUkxBWSIsIlRPQVNURVIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7OztlQUllO0FBQ2I7OztBQUdBQSxFQUFBQSxPQUFPLEVBQUUsQ0FKSTs7QUFNYjs7O0FBR0FDLEVBQUFBLGdCQUFnQixFQUFFLENBVEw7O0FBV2I7OztBQUdBQyxFQUFBQSxVQUFVLEVBQUUsRUFkQzs7QUFnQmI7OztBQUdBQyxFQUFBQSxPQUFPLEVBQUUsRUFuQkk7O0FBcUJiOzs7QUFHQUMsRUFBQUEsT0FBTyxFQUFFO0FBeEJJLEMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFN0YWNraW5nIG9yZGVyIGNvbnRhaW5zIHotaW5kZXggdmFsdWVzIHRoYXQgYXJlIHVzZWQgdGhyb3VnaC5cbiAqIE5vdGUgdGhhdCB0aGUgU3RhY2sgY29tcG9uZW50IG1pZ2h0IGluY3JlYXNlIHRoZSB6LWluZGV4IGZvciBjZXJ0YWluIGNvbXBvbmVudHMuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IHtcbiAgLyoqXG4gICAqIFVzZWQgZm9yIGZvY3VzZWQgYnV0dG9ucyBhbmQgY29udHJvbHMuXG4gICAqL1xuICBGT0NVU0VEOiAyLFxuXG4gIC8qKlxuICAgKiBVc2VkIGFzIHRoZSBkZWZhdWx0IGZvciB0aGUgU3RhY2tpbmdDb250ZXh0LlxuICAgKi9cbiAgU1RBQ0tJTkdfQ09OVEVYVDogNSxcblxuICAvKipcbiAgICogVXNlZCBhcyB0aGUgZGVmYXVsdCBmb3IgdGhlIFBvc2l0aW9uZXIuXG4gICAqL1xuICBQT1NJVElPTkVSOiAxMCxcblxuICAvKipcbiAgICogVXNlZCBmb3IgdGhlIE92ZXJsYXkgYW5kIGV2ZXJ5dGhpbmcgdGhhdCdzIGluc2lkZSBzdWNoIGFzIERpYWxvZyArIFNpZGVTaGVldC5cbiAgICovXG4gIE9WRVJMQVk6IDIwLFxuXG4gIC8qKlxuICAgKiBVc2VkIGZvciB0aGUgdG9hc3RzIGluIHRoZSB0b2FzdGVyLiBBcHBlYXJzIG9uIHRvcCBvZiBldmVyeXRoaW5nIGVsc2UuXG4gICAqL1xuICBUT0FTVEVSOiAzMFxufVxuIl19