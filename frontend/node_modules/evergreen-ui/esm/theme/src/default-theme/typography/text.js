import fontFamilies from './fontFamilies';
/**
 * Text styles for single line text.
 * This is used in the Text component. The Text component is used by:
 * - Small
 * - Strong
 * - Code
 * - ListItem
 * - Label
 * - Link
 * @property {Object} 600 - Required property.
 * @property {Object} 500 - Required property.
 * @property {Object} 400 - Required property. Default.
 * @property {Object} 300 - Required property.
 */

export default {
  /**
   * It's useful to have 600 because `Link` uses the `Text` component.
   * A `Link` could be used as 600 in the context of a breadcrumb.
   */
  '600': {
    fontSize: '20px',
    fontWeight: 400,
    lineHeight: '24px',
    letterSpacing: '-0.07px',
    marginTop: 28,

    /**
     * Use font family display because the font-size is 20px.
     */
    fontFamily: fontFamilies.display
  },
  '500': {
    fontSize: '16px',
    fontWeight: 400,
    lineHeight: '20px',
    letterSpacing: '-0.05px',
    marginTop: 16
  },
  '400': {
    // Default
    fontSize: '14px',
    fontWeight: 400,
    lineHeight: '20px',
    letterSpacing: '-0.05px',
    marginTop: 12
  },
  '300': {
    fontSize: '12px',
    fontWeight: 400,
    lineHeight: '16px',
    letterSpacing: '0',
    marginTop: 12
  }
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy90aGVtZS9zcmMvZGVmYXVsdC10aGVtZS90eXBvZ3JhcGh5L3RleHQuanMiXSwibmFtZXMiOlsiZm9udEZhbWlsaWVzIiwiZm9udFNpemUiLCJmb250V2VpZ2h0IiwibGluZUhlaWdodCIsImxldHRlclNwYWNpbmciLCJtYXJnaW5Ub3AiLCJmb250RmFtaWx5IiwiZGlzcGxheSJdLCJtYXBwaW5ncyI6IkFBQUEsT0FBT0EsWUFBUCxNQUF5QixnQkFBekI7QUFFQTs7Ozs7Ozs7Ozs7Ozs7O0FBY0EsZUFBZTtBQUNiOzs7O0FBSUEsU0FBTztBQUNMQyxJQUFBQSxRQUFRLEVBQUUsTUFETDtBQUVMQyxJQUFBQSxVQUFVLEVBQUUsR0FGUDtBQUdMQyxJQUFBQSxVQUFVLEVBQUUsTUFIUDtBQUlMQyxJQUFBQSxhQUFhLEVBQUUsU0FKVjtBQUtMQyxJQUFBQSxTQUFTLEVBQUUsRUFMTjs7QUFNTDs7O0FBR0FDLElBQUFBLFVBQVUsRUFBRU4sWUFBWSxDQUFDTztBQVRwQixHQUxNO0FBZ0JiLFNBQU87QUFDTE4sSUFBQUEsUUFBUSxFQUFFLE1BREw7QUFFTEMsSUFBQUEsVUFBVSxFQUFFLEdBRlA7QUFHTEMsSUFBQUEsVUFBVSxFQUFFLE1BSFA7QUFJTEMsSUFBQUEsYUFBYSxFQUFFLFNBSlY7QUFLTEMsSUFBQUEsU0FBUyxFQUFFO0FBTE4sR0FoQk07QUF1QmIsU0FBTztBQUNMO0FBQ0FKLElBQUFBLFFBQVEsRUFBRSxNQUZMO0FBR0xDLElBQUFBLFVBQVUsRUFBRSxHQUhQO0FBSUxDLElBQUFBLFVBQVUsRUFBRSxNQUpQO0FBS0xDLElBQUFBLGFBQWEsRUFBRSxTQUxWO0FBTUxDLElBQUFBLFNBQVMsRUFBRTtBQU5OLEdBdkJNO0FBK0JiLFNBQU87QUFDTEosSUFBQUEsUUFBUSxFQUFFLE1BREw7QUFFTEMsSUFBQUEsVUFBVSxFQUFFLEdBRlA7QUFHTEMsSUFBQUEsVUFBVSxFQUFFLE1BSFA7QUFJTEMsSUFBQUEsYUFBYSxFQUFFLEdBSlY7QUFLTEMsSUFBQUEsU0FBUyxFQUFFO0FBTE47QUEvQk0sQ0FBZiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBmb250RmFtaWxpZXMgZnJvbSAnLi9mb250RmFtaWxpZXMnXG5cbi8qKlxuICogVGV4dCBzdHlsZXMgZm9yIHNpbmdsZSBsaW5lIHRleHQuXG4gKiBUaGlzIGlzIHVzZWQgaW4gdGhlIFRleHQgY29tcG9uZW50LiBUaGUgVGV4dCBjb21wb25lbnQgaXMgdXNlZCBieTpcbiAqIC0gU21hbGxcbiAqIC0gU3Ryb25nXG4gKiAtIENvZGVcbiAqIC0gTGlzdEl0ZW1cbiAqIC0gTGFiZWxcbiAqIC0gTGlua1xuICogQHByb3BlcnR5IHtPYmplY3R9IDYwMCAtIFJlcXVpcmVkIHByb3BlcnR5LlxuICogQHByb3BlcnR5IHtPYmplY3R9IDUwMCAtIFJlcXVpcmVkIHByb3BlcnR5LlxuICogQHByb3BlcnR5IHtPYmplY3R9IDQwMCAtIFJlcXVpcmVkIHByb3BlcnR5LiBEZWZhdWx0LlxuICogQHByb3BlcnR5IHtPYmplY3R9IDMwMCAtIFJlcXVpcmVkIHByb3BlcnR5LlxuICovXG5leHBvcnQgZGVmYXVsdCB7XG4gIC8qKlxuICAgKiBJdCdzIHVzZWZ1bCB0byBoYXZlIDYwMCBiZWNhdXNlIGBMaW5rYCB1c2VzIHRoZSBgVGV4dGAgY29tcG9uZW50LlxuICAgKiBBIGBMaW5rYCBjb3VsZCBiZSB1c2VkIGFzIDYwMCBpbiB0aGUgY29udGV4dCBvZiBhIGJyZWFkY3J1bWIuXG4gICAqL1xuICAnNjAwJzoge1xuICAgIGZvbnRTaXplOiAnMjBweCcsXG4gICAgZm9udFdlaWdodDogNDAwLFxuICAgIGxpbmVIZWlnaHQ6ICcyNHB4JyxcbiAgICBsZXR0ZXJTcGFjaW5nOiAnLTAuMDdweCcsXG4gICAgbWFyZ2luVG9wOiAyOCxcbiAgICAvKipcbiAgICAgKiBVc2UgZm9udCBmYW1pbHkgZGlzcGxheSBiZWNhdXNlIHRoZSBmb250LXNpemUgaXMgMjBweC5cbiAgICAgKi9cbiAgICBmb250RmFtaWx5OiBmb250RmFtaWxpZXMuZGlzcGxheVxuICB9LFxuICAnNTAwJzoge1xuICAgIGZvbnRTaXplOiAnMTZweCcsXG4gICAgZm9udFdlaWdodDogNDAwLFxuICAgIGxpbmVIZWlnaHQ6ICcyMHB4JyxcbiAgICBsZXR0ZXJTcGFjaW5nOiAnLTAuMDVweCcsXG4gICAgbWFyZ2luVG9wOiAxNlxuICB9LFxuICAnNDAwJzoge1xuICAgIC8vIERlZmF1bHRcbiAgICBmb250U2l6ZTogJzE0cHgnLFxuICAgIGZvbnRXZWlnaHQ6IDQwMCxcbiAgICBsaW5lSGVpZ2h0OiAnMjBweCcsXG4gICAgbGV0dGVyU3BhY2luZzogJy0wLjA1cHgnLFxuICAgIG1hcmdpblRvcDogMTJcbiAgfSxcbiAgJzMwMCc6IHtcbiAgICBmb250U2l6ZTogJzEycHgnLFxuICAgIGZvbnRXZWlnaHQ6IDQwMCxcbiAgICBsaW5lSGVpZ2h0OiAnMTZweCcsXG4gICAgbGV0dGVyU3BhY2luZzogJzAnLFxuICAgIG1hcmdpblRvcDogMTJcbiAgfVxufVxuIl19