"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getTextColor = exports.getFontFamily = exports.getParagraphStyle = exports.getTextStyle = exports.getHeadingStyle = exports.getIconForIntent = exports.getIconColor = exports.getElevation = exports.getBackground = exports.getIconSizeForIconButton = exports.getIconSizeForSelect = exports.getIconSizeForInput = exports.getIconSizeForButton = exports.getTextSizeForControlHeight = exports.getBorderRadiusForControlHeight = void 0;

var _constants = require("../../../../constants");

var _themedProperty = _interopRequireDefault(require("../utils/themedProperty"));

var _foundationalStyles = require("../foundational-styles");

var _typography = require("../typography");

/**
 * Controls include:
 * - Button
 * - IconButton
 * - TextInput
 * @param {number} height
 * @return {number} border radius
 */
var getBorderRadiusForControlHeight = function getBorderRadiusForControlHeight(height) {
  if (height <= 40) return 3;
  return 4;
};
/**
 * Get the text size for a control with a certain height.
 * @param {number} height
 * @return {number} text size of the control height.
 */


exports.getBorderRadiusForControlHeight = getBorderRadiusForControlHeight;

var getTextSizeForControlHeight = function getTextSizeForControlHeight(height) {
  if (height <= 24) return 300;
  if (height <= 28) return 300;
  if (height <= 32) return 300;
  if (height <= 36) return 400;
  if (height <= 40) return 400;
  return 500;
};
/**
 * Get the size for a icon in a Button with a certain height.
 * @param {number} height
 * @return {number} icon size
 */


exports.getTextSizeForControlHeight = getTextSizeForControlHeight;

var getIconSizeForButton = function getIconSizeForButton(height) {
  if (height <= 28) return 12;
  if (height <= 32) return 12;
  if (height <= 40) return 16;
  if (height <= 48) return 18;
  return 20;
}; // Use the same for input components.


exports.getIconSizeForButton = getIconSizeForButton;
var getIconSizeForInput = getIconSizeForButton;
exports.getIconSizeForInput = getIconSizeForInput;
var getIconSizeForSelect = getIconSizeForButton;
/**
 * Get the size for a icon in a IconButton with a certain height.
 * @param {number} height
 * @return {number} icon size
 */

exports.getIconSizeForSelect = getIconSizeForSelect;

var getIconSizeForIconButton = function getIconSizeForIconButton(height) {
  if (height <= 28) return 12;
  if (height <= 32) return 14; // Slightly bigger than getIconSizeForButton

  if (height <= 40) return 16;
  if (height <= 48) return 18;
  return 20;
};
/**
 * Get background property.
 * @param {string} background
 * @return {string} background property.
 */


exports.getIconSizeForIconButton = getIconSizeForIconButton;

var getBackground = function getBackground(background) {
  /**
   * Return one of theme presets or the original value.
   */
  return (0, _themedProperty.default)(_foundationalStyles.colors.background, background);
};
/**
 * Get box-shadow (elevation).
 * @param {string} level — level of elevation.
 * @return {string} elevation box-shadow.
 */


exports.getBackground = getBackground;

var getElevation = function getElevation(level) {
  /**
   * There is no fallback, undefined will be returned.
   */
  return _foundationalStyles.elevations[level];
};
/**
 * Get the color for an icon.
 * @param {string} color
 * @return {string} color of the icon
 */


exports.getElevation = getElevation;

var getIconColor = function getIconColor(color) {
  /**
   * Check if there is a preset in the theme for the icon color.
   */
  return (0, _themedProperty.default)(_foundationalStyles.colors.icon, color);
};
/**
 * Get the properties for an icon based on the intent.
 * @param {Intent} intent
 * @return {Object} properties
 */


exports.getIconColor = getIconColor;

var getIconForIntent = function getIconForIntent(intent) {
  switch (intent) {
    case _constants.Intent.SUCCESS:
      return {
        icon: 'tick-circle',
        color: 'success'
      };

    case _constants.Intent.DANGER:
      return {
        icon: 'error',
        color: 'danger'
      };

    case _constants.Intent.WARNING:
      return {
        icon: 'warning-sign',
        color: 'warning'
      };

    case _constants.Intent.NONE:
    default:
      return {
        icon: 'info-sign',
        color: 'info'
      };
  }
};
/**
 * Heading styles.
 * @param {number} size - 100–900. 500 is default.
 * @return {Object} heading style.
 */


exports.getIconForIntent = getIconForIntent;

var getHeadingStyle = function getHeadingStyle(size) {
  return (0, _themedProperty.default)(_typography.headings, String(size));
};
/**
 * Text styles for single line text.
 * This is used in the Text component. The Text component is used by:
 * - Small
 * - Strong
 * - Code
 * - ListItem
 * - Label
 * @param {number} size - 300–500. 400 is default.
 * @return {Object} text style.
 */


exports.getHeadingStyle = getHeadingStyle;

var getTextStyle = function getTextStyle(size) {
  return (0, _themedProperty.default)(_typography.text, String(size));
};
/**
 * Text styles for paragraphs (multi line text).
 * This is used in the Paragraph.
 * @param {number} size - 300–500. 400 is default.
 * @return {Object} text style.
 */


exports.getTextStyle = getTextStyle;

var getParagraphStyle = function getParagraphStyle(size) {
  return (0, _themedProperty.default)(_typography.paragraph, String(size));
};
/**
 * Get the font family. This is used to override the font family.
 * @param {string} fontFamily
 * @return {string} font family
 */


exports.getParagraphStyle = getParagraphStyle;

var getFontFamily = function getFontFamily(fontFamily) {
  /**
   * Allow for passing in a custom fontFamily not in the theme.
   */
  return (0, _themedProperty.default)(_typography.fontFamilies, fontFamily);
};
/**
 * Get the text color. This is used to override the color.
 * @param {string} fontFamily
 * @return {string} font family
 */


exports.getFontFamily = getFontFamily;

var getTextColor = function getTextColor(color) {
  /**
   * Allow for passing in a custom text color not in the theme.
   */
  return (0, _themedProperty.default)(_foundationalStyles.colors.text, color);
};

exports.getTextColor = getTextColor;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy90aGVtZS9zcmMvZGVmYXVsdC10aGVtZS90aGVtZS1oZWxwZXJzL2luZGV4LmpzIl0sIm5hbWVzIjpbImdldEJvcmRlclJhZGl1c0ZvckNvbnRyb2xIZWlnaHQiLCJoZWlnaHQiLCJnZXRUZXh0U2l6ZUZvckNvbnRyb2xIZWlnaHQiLCJnZXRJY29uU2l6ZUZvckJ1dHRvbiIsImdldEljb25TaXplRm9ySW5wdXQiLCJnZXRJY29uU2l6ZUZvclNlbGVjdCIsImdldEljb25TaXplRm9ySWNvbkJ1dHRvbiIsImdldEJhY2tncm91bmQiLCJiYWNrZ3JvdW5kIiwiY29sb3JzIiwiZ2V0RWxldmF0aW9uIiwibGV2ZWwiLCJlbGV2YXRpb25zIiwiZ2V0SWNvbkNvbG9yIiwiY29sb3IiLCJpY29uIiwiZ2V0SWNvbkZvckludGVudCIsImludGVudCIsIkludGVudCIsIlNVQ0NFU1MiLCJEQU5HRVIiLCJXQVJOSU5HIiwiTk9ORSIsImdldEhlYWRpbmdTdHlsZSIsInNpemUiLCJoZWFkaW5ncyIsIlN0cmluZyIsImdldFRleHRTdHlsZSIsInRleHQiLCJnZXRQYXJhZ3JhcGhTdHlsZSIsInBhcmFncmFwaCIsImdldEZvbnRGYW1pbHkiLCJmb250RmFtaWx5IiwiZm9udEZhbWlsaWVzIiwiZ2V0VGV4dENvbG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQTs7Ozs7Ozs7QUFRQSxJQUFNQSwrQkFBK0IsR0FBRyxTQUFsQ0EsK0JBQWtDLENBQUFDLE1BQU0sRUFBSTtBQUNoRCxNQUFJQSxNQUFNLElBQUksRUFBZCxFQUFrQixPQUFPLENBQVA7QUFDbEIsU0FBTyxDQUFQO0FBQ0QsQ0FIRDtBQUtBOzs7Ozs7Ozs7QUFLQSxJQUFNQywyQkFBMkIsR0FBRyxTQUE5QkEsMkJBQThCLENBQUFELE1BQU0sRUFBSTtBQUM1QyxNQUFJQSxNQUFNLElBQUksRUFBZCxFQUFrQixPQUFPLEdBQVA7QUFDbEIs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QVdBLElBQU1HLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUFILElBQUksRUFBSTtBQUMzQixTQUFPLDZCQUFlSSxnQkFBZixFQUFxQkYsTUFBTSxDQUFDRixJQUFELENBQTNCLENBQVA7QUFDRCxDQUZEO0FBSUE7Ozs7Ozs7Ozs7QUFNQSxJQUFNSyxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CLENBQUFMLElBQUksRUFBSTtBQUNoQyxTQUFPLDZCQUFlTSxxQkFBZixFQUEwQkosTUFBTSxDQUFDRixJQUFELENBQWhDLENBQVA7QUFDRCxDQUZEO0FBSUE7Ozs7Ozs7OztBQUtBLElBQU1PLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsQ0FBQUMsVUFBVSxFQUFJO0FBQ2xDOzs7QUFHQSxTQUFPLDZCQUFlQyx3QkFBZixFQUE2QkQsVUFBN0IsQ0FBUDtBQUNELENBTEQ7QUFPQTs7Ozs7Ozs7O0FBS0EsSUFBTUUsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQXBCLEtBQUssRUFBSTtBQUM1Qjs7O0FBR0EsU0FBTyw2QkFBZUwsMkJBQU9tQixJQUF0QixFQUE0QmQsS0FBNUIsQ0FBUDtBQUNELENBTEQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbnRlbnQgfSBmcm9tICcuLi8uLi8uLi8uLi9jb25zdGFudHMnXG5pbXBvcnQgdGhlbWVkUHJvcGVydHkgZnJvbSAnLi4vdXRpbHMvdGhlbWVkUHJvcGVydHknXG5pbXBvcnQgeyBjb2xvcnMsIGVsZXZhdGlvbnMgfSBmcm9tICcuLi9mb3VuZGF0aW9uYWwtc3R5bGVzJ1xuaW1wb3J0IHsgZm9udEZhbWlsaWVzLCBoZWFkaW5ncywgcGFyYWdyYXBoLCB0ZXh0IH0gZnJvbSAnLi4vdHlwb2dyYXBoeSdcblxuLyoqXG4gKiBDb250cm9scyBpbmNsdWRlOlxuICogLSBCdXR0b25cbiAqIC0gSWNvbkJ1dHRvblxuICogLSBUZXh0SW5wdXRcbiAqIEBwYXJhbSB7bnVtYmVyfSBoZWlnaHRcbiAqIEByZXR1cm4ge251bWJlcn0gYm9yZGVyIHJhZGl1c1xuICovXG5jb25zdCBnZXRCb3JkZXJSYWRpdXNGb3JDb250cm9sSGVpZ2h0ID0gaGVpZ2h0ID0+IHtcbiAgaWYgKGhlaWdodCA8PSA0MCkgcmV0dXJuIDNcbiAgcmV0dXJuIDRcbn1cblxuLyoqXG4gKiBHZXQgdGhlIHRleHQgc2l6ZSBmb3IgYSBjb250cm9sIHdpdGggYSBjZXJ0YWluIGhlaWdodC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBoZWlnaHRcbiAqIEByZXR1cm4ge251bWJlcn0gdGV4dCBzaXplIG9mIHRoZSBjb250cm9sIGhlaWdodC5cbiAqL1xuY29uc3QgZ2V0VGV4dFNpemVGb3JDb250cm9sSGVpZ2h0ID0gaGVpZ2h0ID0+IHtcbiAgaWYgKGhlaWdodCA8PSAyNCkgcmV0dXJuIDMwMFxuICBpZiAoaGVpZ2h0IDw9IDI4KSByZXR1cm4gMzAwXG4gIGlmIChoZWlnaHQgPD0gMzIpIHJldHVybiAzMDBcbiAgaWYgKGhlaWdodCA8PSAzNikgcmV0dXJuIDQwMFxuICBpZiAoaGVpZ2h0IDw9IDQwKSByZXR1cm4gNDAwXG4gIHJldHVybiA1MDBcbn1cblxuLyoqXG4gKiBHZXQgdGhlIHNpemUgZm9yIGEgaWNvbiBpbiBhIEJ1dHRvbiB3aXRoIGEgY2VydGFpbiBoZWlnaHQuXG4gKiBAcGFyYW0ge251bWJlcn0gaGVpZ2h0XG4gKiBAcmV0dXJuIHtudW1iZXJ9IGljb24gc2l6ZVxuICovXG5jb25zdCBnZXRJY29uU2l6ZUZvckJ1dHRvbiA9IGhlaWdodCA9PiB7XG4gIGlmIChoZWlnaHQgPD0gMjgpIHJldHVybiAxMlxuICBpZiAoaGVpZ2h0IDw9IDMyKSByZXR1cm4gMTJcbiAgaWYgKGhlaWdodCA8PSA0MCkgcmV0dXJuIDE2XG4gIGlmIChoZWlnaHQgPD0gNDgpIHJldHVybiAxOFxuICByZXR1cm4gMjBcbn1cblxuLy8gVXNlIHRoZSBzYW1lIGZvciBpbnB1dCBjb21wb25lbnRzLlxuY29uc3QgZ2V0SWNvblNpemVGb3JJbnB1dCA9IGdldEljb25TaXplRm9yQnV0dG9uXG5jb25zdCBnZXRJY29uU2l6ZUZvclNlbGVjdCA9IGdldEljb25TaXplRm9yQnV0dG9uXG5cbi8qKlxuICogR2V0IHRoZSBzaXplIGZvciBhIGljb24gaW4gYSBJY29uQnV0dG9uIHdpdGggYSBjZXJ0YWluIGhlaWdodC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBoZWlnaHRcbiAqIEByZXR1cm4ge251bWJlcn0gaWNvbiBzaXplXG4gKi9cbmNvbnN0IGdldEljb25TaXplRm9ySWNvbkJ1dHRvbiA9IGhlaWdodCA9PiB7XG4gIGlmIChoZWlnaHQgPD0gMjgpIHJldHVybiAxMlxuICBpZiAoaGVpZ2h0IDw9IDMyKSByZXR1cm4gMTQgLy8gU2xpZ2h0bHkgYmlnZ2VyIHRoYW4gZ2V0SWNvblNpemVGb3JCdXR0b25cbiAgaWYgKGhlaWdodCA8PSA0MCkgcmV0dXJuIDE2XG4gIGlmIChoZWlnaHQgPD0gNDgpIHJldHVybiAxOFxuICByZXR1cm4gMjBcbn1cblxuLyoqXG4gKiBHZXQgYmFja2dyb3VuZCBwcm9wZXJ0eS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBiYWNrZ3JvdW5kXG4gKiBAcmV0dXJuIHtzdHJpbmd9IGJhY2tncm91bmQgcHJvcGVydHkuXG4gKi9cbmNvbnN0IGdldEJhY2tncm91bmQgPSBiYWNrZ3JvdW5kID0+IHtcbiAgLyoqXG4gICAqIFJldHVybiBvbmUgb2YgdGhlbWUgcHJlc2V0cyBvciB0aGUgb3JpZ2luYWwgdmFsdWUuXG4gICAqL1xuICByZXR1cm4gdGhlbWVkUHJvcGVydHkoY29sb3JzLmJhY2tncm91bmQsIGJhY2tncm91bmQpXG59XG5cbi8qKlxuICogR2V0IGJveC1zaGFkb3cgKGVsZXZhdGlvbikuXG4gKiBAcGFyYW0ge3N0cmluZ30gbGV2ZWwg4oCUIGxldmVsIG9mIGVsZXZhdGlvbi5cbiAqIEByZXR1cm4ge3N0cmluZ30gZWxldmF0aW9uIGJveC1zaGFkb3cuXG4gKi9cbmNvbnN0IGdldEVsZXZhdGlvbiA9IGxldmVsID0+IHtcbiAgLyoqXG4gICAqIFRoZXJlIGlzIG5vIGZhbGxiYWNrLCB1bmRlZmluZWQgd2lsbCBiZSByZXR1cm5lZC5cbiAgICovXG4gIHJldHVybiBlbGV2YXRpb25zW2xldmVsXVxufVxuXG4vKipcbiAqIEdldCB0aGUgY29sb3IgZm9yIGFuIGljb24uXG4gKiBAcGFyYW0ge3N0cmluZ30gY29sb3JcbiAqIEByZXR1cm4ge3N0cmluZ30gY29sb3Igb2YgdGhlIGljb25cbiAqL1xuY29uc3QgZ2V0SWNvbkNvbG9yID0gY29sb3IgPT4ge1xuICAvKipcbiAgICogQ2hlY2sgaWYgdGhlcmUgaXMgYSBwcmVzZXQgaW4gdGhlIHRoZW1lIGZvciB0aGUgaWNvbiBjb2xvci5cbiAgICovXG4gIHJldHVybiB0aGVtZWRQcm9wZXJ0eShjb2xvcnMuaWNvbiwgY29sb3IpXG59XG5cbi8qKlxuICogR2V0IHRoZSBwcm9wZXJ0aWVzIGZvciBhbiBpY29uIGJhc2VkIG9uIHRoZSBpbnRlbnQuXG4gKiBAcGFyYW0ge0ludGVudH0gaW50ZW50XG4gKiBAcmV0dXJuIHtPYmplY3R9IHByb3BlcnRpZXNcbiAqL1xuY29uc3QgZ2V0SWNvbkZvckludGVudCA9IGludGVudCA9PiB7XG4gIHN3aXRjaCAoaW50ZW50KSB7XG4gICAgY2FzZSBJbnRlbnQuU1VDQ0VTUzpcbiAgICAgIHJldHVybiB7IGljb246ICd0aWNrLWNpcmNsZScsIGNvbG9yOiAnc3VjY2VzcycgfVxuICAgIGNhc2UgSW50ZW50LkRBTkdFUjpcbiAgICAgIHJldHVybiB7IGljb246ICdlcnJvcicsIGNvbG9yOiAnZGFuZ2VyJyB9XG4gICAgY2FzZSBJbnRlbnQuV0FSTklORzpcbiAgICAgIHJldHVybiB7IGljb246ICd3YXJuaW5nLXNpZ24nLCBjb2xvcjogJ3dhcm5pbmcnIH1cbiAgICBjYXNlIEludGVudC5OT05FOlxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4geyBpY29uOiAnaW5mby1zaWduJywgY29sb3I6ICdpbmZvJyB9XG4gIH1cbn1cblxuLyoqXG4gKiBIZWFkaW5nIHN0eWxlcy5cbiAqIEBwYXJhbSB7bnVtYmVyfSBzaXplIC0gMTAw4oCTOTAwLiA1MDAgaXMgZGVmYXVsdC5cbiAqIEByZXR1cm4ge09iamVjdH0gaGVhZGluZyBzdHlsZS5cbiAqL1xuY29uc3QgZ2V0SGVhZGluZ1N0eWxlID0gc2l6ZSA9PiB7XG4gIHJldHVybiB0aGVtZWRQcm9wZXJ0eShoZWFkaW5ncywgU3RyaW5nKHNpemUpKVxufVxuXG4vKipcbiAqIFRleHQgc3R5bGVzIGZvciBzaW5nbGUgbGluZSB0ZXh0LlxuICogVGhpcyBpcyB1c2VkIGluIHRoZSBUZXh0IGNvbXBvbmVudC4gVGhlIFRleHQgY29tcG9uZW50IGlzIHVzZWQgYnk6XG4gKiAtIFNtYWxsXG4gKiAtIFN0cm9uZ1xuICogLSBDb2RlXG4gKiAtIExpc3RJdGVtXG4gKiAtIExhYmVsXG4gKiBAcGFyYW0ge251bWJlcn0gc2l6ZSAtIDMwMOKAkzUwMC4gNDAwIGlzIGRlZmF1bHQuXG4gKiBAcmV0dXJuIHtPYmplY3R9IHRleHQgc3R5bGUuXG4gKi9cbmNvbnN0IGdldFRleHRTdHlsZSA9IHNpemUgPT4ge1xuICByZXR1cm4gdGhlbWVkUHJvcGVydHkodGV4dCwgU3RyaW5nKHNpemUpKVxufVxuXG4vKipcbiAqIFRleHQgc3R5bGVzIGZvciBwYXJhZ3JhcGhzIChtdWx0aSBsaW5lIHRleHQpLlxuICogVGhpcyBpcyB1c2VkIGluIHRoZSBQYXJhZ3JhcGguXG4gKiBAcGFyYW0ge251bWJlcn0gc2l6ZSAtIDMwMOKAkzUwMC4gNDAwIGlzIGRlZmF1bHQuXG4gKiBAcmV0dXJuIHtPYmplY3R9IHRleHQgc3R5bGUuXG4gKi9cbmNvbnN0IGdldFBhcmFncmFwaFN0eWxlID0gc2l6ZSA9PiB7XG4gIHJldHVybiB0aGVtZWRQcm9wZXJ0eShwYXJhZ3JhcGgsIFN0cmluZyhzaXplKSlcbn1cblxuLyoqXG4gKiBHZXQgdGhlIGZvbnQgZmFtaWx5LiBUaGlzIGlzIHVzZWQgdG8gb3ZlcnJpZGUgdGhlIGZvbnQgZmFtaWx5LlxuICogQHBhcmFtIHtzdHJpbmd9IGZvbnRGYW1pbHlcbiAqIEByZXR1cm4ge3N0cmluZ30gZm9udCBmYW1pbHlcbiAqL1xuY29uc3QgZ2V0Rm9udEZhbWlseSA9IGZvbnRGYW1pbHkgPT4ge1xuICAvKipcbiAgICogQWxsb3cgZm9yIHBhc3NpbmcgaW4gYSBjdXN0b20gZm9udEZhbWlseSBub3QgaW4gdGhlIHRoZW1lLlxuICAgKi9cbiAgcmV0dXJuIHRoZW1lZFByb3BlcnR5KGZvbnRGYW1pbGllcywgZm9udEZhbWlseSlcbn1cblxuLyoqXG4gKiBHZXQgdGhlIHRleHQgY29sb3IuIFRoaXMgaXMgdXNlZCB0byBvdmVycmlkZSB0aGUgY29sb3IuXG4gKiBAcGFyYW0ge3N0cmluZ30gZm9udEZhbWlseVxuICogQHJldHVybiB7c3RyaW5nfSBmb250IGZhbWlseVxuICovXG5jb25zdCBnZXRUZXh0Q29sb3IgPSBjb2xvciA9PiB7XG4gIC8qKlxuICAgKiBBbGxvdyBmb3IgcGFzc2luZyBpbiBhIGN1c3RvbSB0ZXh0IGNvbG9yIG5vdCBpbiB0aGUgdGhlbWUuXG4gICAqL1xuICByZXR1cm4gdGhlbWVkUHJvcGVydHkoY29sb3JzLnRleHQsIGNvbG9yKVxufVxuXG5leHBvcnQge1xuICBnZXRCb3JkZXJSYWRpdXNGb3JDb250cm9sSGVpZ2h0LFxuICBnZXRUZXh0U2l6ZUZvckNvbnRyb2xIZWlnaHQsXG4gIGdldEljb25TaXplRm9yQnV0dG9uLFxuICBnZXRJY29uU2l6ZUZvcklucHV0LFxuICBnZXRJY29uU2l6ZUZvclNlbGVjdCxcbiAgZ2V0SWNvblNpemVGb3JJY29uQnV0dG9uLFxuICBnZXRCYWNrZ3JvdW5kLFxuICBnZXRFbGV2YXRpb24sXG4gIGdldEljb25Db2xvcixcbiAgZ2V0SWNvbkZvckludGVudCxcbiAgZ2V0SGVhZGluZ1N0eWxlLFxuICBnZXRUZXh0U3R5bGUsXG4gIGdldFBhcmFncmFwaFN0eWxlLFxuICBnZXRGb250RmFtaWx5LFxuICBnZXRUZXh0Q29sb3Jcbn1cbiJdfQ==