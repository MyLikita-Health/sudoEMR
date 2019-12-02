import { Intent } from '../../../../constants';
import themedProperty from '../utils/themedProperty';
import { colors, elevations } from '../foundational-styles';
import { fontFamilies, headings, paragraph, text } from '../typography';
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


var getIconSizeForButton = function getIconSizeForButton(height) {
  if (height <= 28) return 12;
  if (height <= 32) return 12;
  if (height <= 40) return 16;
  if (height <= 48) return 18;
  return 20;
}; // Use the same for input components.


var getIconSizeForInput = getIconSizeForButton;
var getIconSizeForSelect = getIconSizeForButton;
/**
 * Get the size for a icon in a IconButton with a certain height.
 * @param {number} height
 * @return {number} icon size
 */

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


var getBackground = function getBackground(background) {
  /**
   * Return one of theme presets or the original value.
   */
  return themedProperty(colors.background, background);
};
/**
 * Get box-shadow (elevation).
 * @param {string} level — level of elevation.
 * @return {string} elevation box-shadow.
 */


var getElevation = function getElevation(level) {
  /**
   * There is no fallback, undefined will be returned.
   */
  return elevations[level];
};
/**
 * Get the color for an icon.
 * @param {string} color
 * @return {string} color of the icon
 */


var getIconColor = function getIconColor(color) {
  /**
   * Check if there is a preset in the theme for the icon color.
   */
  return themedProperty(colors.icon, color);
};
/**
 * Get the properties for an icon based on the intent.
 * @param {Intent} intent
 * @return {Object} properties
 */


var getIconForIntent = function getIconForIntent(intent) {
  switch (intent) {
    case Intent.SUCCESS:
      return {
        icon: 'tick-circle',
        color: 'success'
      };

    case Intent.DANGER:
      return {
        icon: 'error',
        color: 'danger'
      };

    case Intent.WARNING:
      return {
        icon: 'warning-sign',
        color: 'warning'
      };

    case Intent.NONE:
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


var getHeadingStyle = function getHeadingStyle(size) {
  return themedProperty(headings, String(size));
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


var getTextStyle = function getTextStyle(size) {
  return themedProperty(text, String(size));
};
/**
 * Text styles for paragraphs (multi line text).
 * This is used in the Paragraph.
 * @param {number} size - 300–500. 400 is default.
 * @return {Object} text style.
 */


var getParagraphStyle = function getParagraphStyle(size) {
  return themedProperty(paragraph, String(size));
};
/**
 * Get the font family. This is used to override the font family.
 * @param {string} fontFamily
 * @return {string} font family
 */


var getFontFamily = function getFontFamily(fontFamily) {
  /**
   * Allow for passing in a custom fontFamily not in the theme.
   */
  return themedProperty(fontFamilies, fontFamily);
};
/**
 * Get the text color. This is used to override the color.
 * @param {string} fontFamily
 * @return {string} font family
 */


var getTextColor = function getTextColor(color) {
  /**
   * Allow for passing in a custom text color not in the theme.
   */
  return themedProperty(colors.text, color);
};

export { getBorderRadiusForControlHeight, getTextSizeForControlHeight, getIconSizeForButton, getIconSizeForInput, getIconSizeForSelect, getIconSizeForIconButton, getBackground, getElevation, getIconColor, getIconForIntent, getHeadingStyle, getTextStyle, getParagraphStyle, getFontFamily, getTextColor };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy90aGVtZS9zcmMvZGVmYXVsdC10aGVtZS90aGVtZS1oZWxwZXJzL2luZGV4LmpzIl0sIm5hbWVzIjpbIkludGVudCIsInRoZW1lZFByb3BlcnR5IiwiY29sb3JzIiwiZWxldmF0aW9ucyIsImZvbnRGYW1pbGllcyIsImhlYWRpbmdzIiwicGFyYWdyYXBoIiwidGV4dCIsImdldEJvcmRlclJhZGl1c0ZvckNvbnRyb2xIZWlnaHQiLCJoZWlnaHQiLCJnZXRUZXh0U2l6ZUZvckNvbnRyb2xIZWlnaHQiLCJnZXRJY29uU2l6ZUZvckJ1dHRvbiIsImdldEljb25TaXplRm9ySW5wdXQiLCJnZXRJY29uU2l6ZUZvclNlbGVjdCIsImdldEljb25TaXplRm9ySWNvbkJ1dHRvbiIsImdldEJhY2tncm91bmQiLCJiYWNrZ3JvdW5kIiwiZ2V0RWxldmF0aW9uIiwibGV2ZWwiLCJnZXRJY29uQ29sb3IiLCJjb2xvciIsImljb24iLCJnZXRJY29uRm9ySW50ZW50IiwiaW50ZW50IiwiU1VDQ0VTUyIsIkRBTkdFUiIsIldBUk5JTkciLCJOT05FIiwiZ2V0SGVhZGluZ1N0eWxlIiwic2l6ZSIsIlN0cmluZyIsImdldFRleHRTdHlsZSIsImdldFBhcmFncmFwaFN0eWxlIiwiZ2V0Rm9udEZhbWlseSIsImZvbnRGYW1pbHkiLCJnZXRUZXh0Q29sb3IiXSwibWFwcGluZ3MiOiJBQUFBLFNBQVNBLE1BQVQsUUFBdUIsdUJBQXZCO0FBQ0EsT0FBT0MsY0FBUCxNQUEyQix5QkFBM0I7QUFDQSxTQUFTQyxNQUFULEVBQWlCQyxVQUFqQixRQUFtQyx3QkFBbkM7QUFDQSxTQUFTQyxZQUFULEVBQXVCQyxRQUF2QixFQUFpQ0MsU0FBakMsRUFBNENDLElBQTVDLFFBQXdELGVBQXhEO0FBRUE7Ozs7Ozs7OztBQVFBLElBQU1DLCtCQUErQixHQUFHLFNBQWxDQSwrQkFBa0MsQ0FBQUMsTUFBTSxFQUFJO0FBQ2hELE1BQUlBLE1BQU0sSUFBSSxFQUFkLEVBQWtC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ImltcG9ydCB7IEludGVudCB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbnN0YW50cydcbmltcG9ydCB0aGVtZWRQcm9wZXJ0eSBmcm9tICcuLi91dGlscy90aGVtZWRQcm9wZXJ0eSdcbmltcG9ydCB7IGNvbG9ycywgZWxldmF0aW9ucyB9IGZyb20gJy4uL2ZvdW5kYXRpb25hbC1zdHlsZXMnXG5pbXBvcnQgeyBmb250RmFtaWxpZXMsIGhlYWRpbmdzLCBwYXJhZ3JhcGgsIHRleHQgfSBmcm9tICcuLi90eXBvZ3JhcGh5J1xuXG4vKipcbiAqIENvbnRyb2xzIGluY2x1ZGU6XG4gKiAtIEJ1dHRvblxuICogLSBJY29uQnV0dG9uXG4gKiAtIFRleHRJbnB1dFxuICogQHBhcmFtIHtudW1iZXJ9IGhlaWdodFxuICogQHJldHVybiB7bnVtYmVyfSBib3JkZXIgcmFkaXVzXG4gKi9cbmNvbnN0IGdldEJvcmRlclJhZGl1c0ZvckNvbnRyb2xIZWlnaHQgPSBoZWlnaHQgPT4ge1xuICBpZiAoaGVpZ2h0IDw9IDQwKSByZXR1cm4gM1xuICByZXR1cm4gNFxufVxuXG4vKipcbiAqIEdldCB0aGUgdGV4dCBzaXplIGZvciBhIGNvbnRyb2wgd2l0aCBhIGNlcnRhaW4gaGVpZ2h0LlxuICogQHBhcmFtIHtudW1iZXJ9IGhlaWdodFxuICogQHJldHVybiB7bnVtYmVyfSB0ZXh0IHNpemUgb2YgdGhlIGNvbnRyb2wgaGVpZ2h0LlxuICovXG5jb25zdCBnZXRUZXh0U2l6ZUZvckNvbnRyb2xIZWlnaHQgPSBoZWlnaHQgPT4ge1xuICBpZiAoaGVpZ2h0IDw9IDI0KSByZXR1cm4gMzAwXG4gIGlmIChoZWlnaHQgPD0gMjgpIHJldHVybiAzMDBcbiAgaWYgKGhlaWdodCA8PSAzMikgcmV0dXJuIDMwMFxuICBpZiAoaGVpZ2h0IDw9IDM2KSByZXR1cm4gNDAwXG4gIGlmIChoZWlnaHQgPD0gNDApIHJldHVybiA0MDBcbiAgcmV0dXJuIDUwMFxufVxuXG4vKipcbiAqIEdldCB0aGUgc2l6ZSBmb3IgYSBpY29uIGluIGEgQnV0dG9uIHdpdGggYSBjZXJ0YWluIGhlaWdodC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBoZWlnaHRcbiAqIEByZXR1cm4ge251bWJlcn0gaWNvbiBzaXplXG4gKi9cbmNvbnN0IGdldEljb25TaXplRm9yQnV0dG9uID0gaGVpZ2h0ID0+IHtcbiAgaWYgKGhlaWdodCA8PSAyOCkgcmV0dXJuIDEyXG4gIGlmIChoZWlnaHQgPD0gMzIpIHJldHVybiAxMlxuICBpZiAoaGVpZ2h0IDw9IDQwKSByZXR1cm4gMTZcbiAgaWYgKGhlaWdodCA8PSA0OCkgcmV0dXJuIDE4XG4gIHJldHVybiAyMFxufVxuXG4vLyBVc2UgdGhlIHNhbWUgZm9yIGlucHV0IGNvbXBvbmVudHMuXG5jb25zdCBnZXRJY29uU2l6ZUZvcklucHV0ID0gZ2V0SWNvblNpemVGb3JCdXR0b25cbmNvbnN0IGdldEljb25TaXplRm9yU2VsZWN0ID0gZ2V0SWNvblNpemVGb3JCdXR0b25cblxuLyoqXG4gKiBHZXQgdGhlIHNpemUgZm9yIGEgaWNvbiBpbiBhIEljb25CdXR0b24gd2l0aCBhIGNlcnRhaW4gaGVpZ2h0LlxuICogQHBhcmFtIHtudW1iZXJ9IGhlaWdodFxuICogQHJldHVybiB7bnVtYmVyfSBpY29uIHNpemVcbiAqL1xuY29uc3QgZ2V0SWNvblNpemVGb3JJY29uQnV0dG9uID0gaGVpZ2h0ID0+IHtcbiAgaWYgKGhlaWdodCA8PSAyOCkgcmV0dXJuIDEyXG4gIGlmIChoZWlnaHQgPD0gMzIpIHJldHVybiAxNCAvLyBTbGlnaHRseSBiaWdnZXIgdGhhbiBnZXRJY29uU2l6ZUZvckJ1dHRvblxuICBpZiAoaGVpZ2h0IDw9IDQwKSByZXR1cm4gMTZcbiAgaWYgKGhlaWdodCA8PSA0OCkgcmV0dXJuIDE4XG4gIHJldHVybiAyMFxufVxuXG4vKipcbiAqIEdldCBiYWNrZ3JvdW5kIHByb3BlcnR5LlxuICogQHBhcmFtIHtzdHJpbmd9IGJhY2tncm91bmRcbiAqIEByZXR1cm4ge3N0cmluZ30gYmFja2dyb3VuZCBwcm9wZXJ0eS5cbiAqL1xuY29uc3QgZ2V0QmFja2dyb3VuZCA9IGJhY2tncm91bmQgPT4ge1xuICAvKipcbiAgICogUmV0dXJuIG9uZSBvZiB0aGVtZSBwcmVzZXRzIG9yIHRoZSBvcmlnaW5hbCB2YWx1ZS5cbiAgICovXG4gIHJldHVybiB0aGVtZWRQcm9wZXJ0eShjb2xvcnMuYmFja2dyb3VuZCwgYmFja2dyb3VuZClcbn1cblxuLyoqXG4gKiBHZXQgYm94LXNoYWRvdyAoZWxldmF0aW9uKS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBsZXZlbCDigJQgbGV2ZWwgb2YgZWxldmF0aW9uLlxuICogQHJldHVybiB7c3RyaW5nfSBlbGV2YXRpb24gYm94LXNoYWRvdy5cbiAqL1xuY29uc3QgZ2V0RWxldmF0aW9uID0gbGV2ZWwgPT4ge1xuICAvKipcbiAgICogVGhlcmUgaXMgbm8gZmFsbGJhY2ssIHVuZGVmaW5lZCB3aWxsIGJlIHJldHVybmVkLlxuICAgKi9cbiAgcmV0dXJuIGVsZXZhdGlvbnNbbGV2ZWxdXG59XG5cbi8qKlxuICogR2V0IHRoZSBjb2xvciBmb3IgYW4gaWNvbi5cbiAqIEBwYXJhbSB7c3RyaW5nfSBjb2xvclxuICogQHJldHVybiB7c3RyaW5nfSBjb2xvciBvZiB0aGUgaWNvblxuICovXG5jb25zdCBnZXRJY29uQ29sb3IgPSBjb2xvciA9PiB7XG4gIC8qKlxuICAgKiBDaGVjayBpZiB0aGVyZSBpcyBhIHByZXNldCBpbiB0aGUgdGhlbWUgZm9yIHRoZSBpY29uIGNvbG9yLlxuICAgKi9cbiAgcmV0dXJuIHRoZW1lZFByb3BlcnR5KGNvbG9ycy5pY29uLCBjb2xvcilcbn1cblxuLyoqXG4gKiBHZXQgdGhlIHByb3BlcnRpZXMgZm9yIGFuIGljb24gYmFzZWQgb24gdGhlIGludGVudC5cbiAqIEBwYXJhbSB7SW50ZW50fSBpbnRlbnRcbiAqIEByZXR1cm4ge09iamVjdH0gcHJvcGVydGllc1xuICovXG5jb25zdCBnZXRJY29uRm9ySW50ZW50ID0gaW50ZW50ID0+IHtcbiAgc3dpdGNoIChpbnRlbnQpIHtcbiAgICBjYXNlIEludGVudC5TVUNDRVNTOlxuICAgICAgcmV0dXJuIHsgaWNvbjogJ3RpY2stY2lyY2xlJywgY29sb3I6ICdzdWNjZXNzJyB9XG4gICAgY2FzZSBJbnRlbnQuREFOR0VSOlxuICAgICAgcmV0dXJuIHsgaWNvbjogJ2Vycm9yJywgY29sb3I6ICdkYW5nZXInIH1cbiAgICBjYXNlIEludGVudC5XQVJOSU5HOlxuICAgICAgcmV0dXJuIHsgaWNvbjogJ3dhcm5pbmctc2lnbicsIGNvbG9yOiAnd2FybmluZycgfVxuICAgIGNhc2UgSW50ZW50Lk5PTkU6XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiB7IGljb246ICdpbmZvLXNpZ24nLCBjb2xvcjogJ2luZm8nIH1cbiAgfVxufVxuXG4vKipcbiAqIEhlYWRpbmcgc3R5bGVzLlxuICogQHBhcmFtIHtudW1iZXJ9IHNpemUgLSAxMDDigJM5MDAuIDUwMCBpcyBkZWZhdWx0LlxuICogQHJldHVybiB7T2JqZWN0fSBoZWFkaW5nIHN0eWxlLlxuICovXG5jb25zdCBnZXRIZWFkaW5nU3R5bGUgPSBzaXplID0+IHtcbiAgcmV0dXJuIHRoZW1lZFByb3BlcnR5KGhlYWRpbmdzLCBTdHJpbmcoc2l6ZSkpXG59XG5cbi8qKlxuICogVGV4dCBzdHlsZXMgZm9yIHNpbmdsZSBsaW5lIHRleHQuXG4gKiBUaGlzIGlzIHVzZWQgaW4gdGhlIFRleHQgY29tcG9uZW50LiBUaGUgVGV4dCBjb21wb25lbnQgaXMgdXNlZCBieTpcbiAqIC0gU21hbGxcbiAqIC0gU3Ryb25nXG4gKiAtIENvZGVcbiAqIC0gTGlzdEl0ZW1cbiAqIC0gTGFiZWxcbiAqIEBwYXJhbSB7bnVtYmVyfSBzaXplIC0gMzAw4oCTNTAwLiA0MDAgaXMgZGVmYXVsdC5cbiAqIEByZXR1cm4ge09iamVjdH0gdGV4dCBzdHlsZS5cbiAqL1xuY29uc3QgZ2V0VGV4dFN0eWxlID0gc2l6ZSA9PiB7XG4gIHJldHVybiB0aGVtZWRQcm9wZXJ0eSh0ZXh0LCBTdHJpbmcoc2l6ZSkpXG59XG5cbi8qKlxuICogVGV4dCBzdHlsZXMgZm9yIHBhcmFncmFwaHMgKG11bHRpIGxpbmUgdGV4dCkuXG4gKiBUaGlzIGlzIHVzZWQgaW4gdGhlIFBhcmFncmFwaC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBzaXplIC0gMzAw4oCTNTAwLiA0MDAgaXMgZGVmYXVsdC5cbiAqIEByZXR1cm4ge09iamVjdH0gdGV4dCBzdHlsZS5cbiAqL1xuY29uc3QgZ2V0UGFyYWdyYXBoU3R5bGUgPSBzaXplID0+IHtcbiAgcmV0dXJuIHRoZW1lZFByb3BlcnR5KHBhcmFncmFwaCwgU3RyaW5nKHNpemUpKVxufVxuXG4vKipcbiAqIEdldCB0aGUgZm9udCBmYW1pbHkuIFRoaXMgaXMgdXNlZCB0byBvdmVycmlkZSB0aGUgZm9udCBmYW1pbHkuXG4gKiBAcGFyYW0ge3N0cmluZ30gZm9udEZhbWlseVxuICogQHJldHVybiB7c3RyaW5nfSBmb250IGZhbWlseVxuICovXG5jb25zdCBnZXRGb250RmFtaWx5ID0gZm9udEZhbWlseSA9PiB7XG4gIC8qKlxuICAgKiBBbGxvdyBmb3IgcGFzc2luZyBpbiBhIGN1c3RvbSBmb250RmFtaWx5IG5vdCBpbiB0aGUgdGhlbWUuXG4gICAqL1xuICByZXR1cm4gdGhlbWVkUHJvcGVydHkoZm9udEZhbWlsaWVzLCBmb250RmFtaWx5KVxufVxuXG4vKipcbiAqIEdldCB0aGUgdGV4dCBjb2xvci4gVGhpcyBpcyB1c2VkIHRvIG92ZXJyaWRlIHRoZSBjb2xvci5cbiAqIEBwYXJhbSB7c3RyaW5nfSBmb250RmFtaWx5XG4gKiBAcmV0dXJuIHtzdHJpbmd9IGZvbnQgZmFtaWx5XG4gKi9cbmNvbnN0IGdldFRleHRDb2xvciA9IGNvbG9yID0+IHtcbiAgLyoqXG4gICAqIEFsbG93IGZvciBwYXNzaW5nIGluIGEgY3VzdG9tIHRleHQgY29sb3Igbm90IGluIHRoZSB0aGVtZS5cbiAgICovXG4gIHJldHVybiB0aGVtZWRQcm9wZXJ0eShjb2xvcnMudGV4dCwgY29sb3IpXG59XG5cbmV4cG9ydCB7XG4gIGdldEJvcmRlclJhZGl1c0ZvckNvbnRyb2xIZWlnaHQsXG4gIGdldFRleHRTaXplRm9yQ29udHJvbEhlaWdodCxcbiAgZ2V0SWNvblNpemVGb3JCdXR0b24sXG4gIGdldEljb25TaXplRm9ySW5wdXQsXG4gIGdldEljb25TaXplRm9yU2VsZWN0LFxuICBnZXRJY29uU2l6ZUZvckljb25CdXR0b24sXG4gIGdldEJhY2tncm91bmQsXG4gIGdldEVsZXZhdGlvbixcbiAgZ2V0SWNvbkNvbG9yLFxuICBnZXRJY29uRm9ySW50ZW50LFxuICBnZXRIZWFkaW5nU3R5bGUsXG4gIGdldFRleHRTdHlsZSxcbiAgZ2V0UGFyYWdyYXBoU3R5bGUsXG4gIGdldEZvbnRGYW1pbHksXG4gIGdldFRleHRDb2xvclxufVxuIl19