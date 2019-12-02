"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _tinycolor = _interopRequireDefault(require("tinycolor2"));

var _themer = require("../../../../themer");

var _memoizeClassName = _interopRequireDefault(require("../utils/memoizeClassName"));

var _palette = _interopRequireDefault(require("../foundational-styles/palette"));

/**
 * The link appearance unlike the Button is based on the color property.
 * Currently the Link does not support the Intent or the appearance interface.
 * @param {string} color
 * @return {Object} appearance of the link.
 */
var getLinkAppearance = function getLinkAppearance(color) {
  switch (color) {
    case 'neutral':
      return _themer.Themer.createLinkAppearance({
        base: {
          color: _palette.default.neutral.base
        },
        hover: {
          color: (0, _tinycolor.default)(_palette.default.neutral.base).lighten(10).toString()
        },
        active: {
          color: (0, _tinycolor.default)(_palette.default.neutral.base).darken(10).toString()
        },
        focus: {
          boxShadow: "0 0 0 2px ".concat((0, _tinycolor.default)(_palette.default.neutral.base).setAlpha(0.4).toString())
        }
      });

    case 'green':
      return _themer.Themer.createLinkAppearance({
        base: {
          color: _palette.default.green.base
        },
        hover: {
          color: (0, _tinycolor.default)(_palette.default.green.base).lighten(10).toString()
        },
        active: {
          color: (0, _tinycolor.default)(_palette.default.green.base).darken(10).toString()
        },
        focus: {
          boxShadow: "0 0 0 2px ".concat((0, _tinycolor.default)(_palette.default.green.base).setAlpha(0.4).toString())
        }
      });

    case 'default':
    case 'blue':
    default:
      return _themer.Themer.createLinkAppearance({
        base: {
          color: _palette.default.blue.base
        },
        hover: {
          color: (0, _tinycolor.default)(_palette.default.blue.base).lighten(10).toString()
        },
        active: {
          color: (0, _tinycolor.default)(_palette.default.blue.base).darken(10).toString()
        },
        focus: {
          boxShadow: "0 0 0 2px ".concat((0, _tinycolor.default)(_palette.default.blue.base).setAlpha(0.4).toString())
        }
      });
  }
};
/**
 * Get the className of a `Link` component.
 * @param {string} color
 * @return {string} the appearance class name.
 */


var _default = (0, _memoizeClassName.default)(getLinkAppearance);

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy90aGVtZS9zcmMvZGVmYXVsdC10aGVtZS9jb21wb25lbnQtc3BlY2lmaWMvZ2V0TGlua0NsYXNzTmFtZS5qcyJdLCJuYW1lcyI6WyJnZXRMaW5rQXBwZWFyYW5jZSIsImNvbG9yIiwiVGhlbWVyIiwiY3JlYXRlTGlua0FwcGVhcmFuY2UiLCJiYXNlIiwicGFsZXR0ZSIsIm5ldXRyYWwiLCJob3ZlciIsImxpZ2h0ZW4iLCJ0b1N0cmluZyIsImFjdGl2ZSIsImRhcmtlbiIsImZvY3VzIiwiYm94U2hhZG93Iiwic2V0QWxwaGEiLCJncmVlbiIsImJsdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUVBOzs7Ozs7QUFNQSxJQUFNQSxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CLENBQUFDLEtBQUssRUFBSTtBQUNqQyxVQUFRQSxLQUFSO0FBQ0UsU0FBSyxTQUFMO0FBQ0UsYUFBT0MsZUFBT0Msb0JBQVAsQ0FBNEI7QUFDakNDLFFBQUFBLElBQUksRUFBRTtBQUNKSCxVQUFBQSxLQUFLLEVBQUVJLGlCQUFRQyxPQUFSLENBQWdCRjtBQURuQixTQUQyQjtBQUlqQ0csUUFBQUEsS0FBSyxFQUFFO0FBQ0xOLFVBQUFBLEtBQUssRUFBRSx3QkFBVUksaUJBQVFDLE9BQVIsQ0FBZ0JGLElBQTFCLEVBQ0pJLE9BREksQ0FDSSxFQURKLEVBRUpDLFFBRkk7QUFERixTQUowQjtBQVNqQ0MsUUFBQUEsTUFBTSxFQUFFO0FBQ05ULFVBQUFBLEtBQUssRUFBRSx3QkFBVUksaUJBQVFDLE9BQVIsQ0FBZ0JGLElBQTFCLEVBQ0pPLE1BREksQ0FDRyxFQURILEVBRUpGLFFBRkk7QUFERCxTQVR5QjtBQWNqQ0csUUFBQUEsS0FBSyxFQUFFO0FBQ0xDLFVBQUFBLFNBQVMsc0JBQWUsd0JBQVVSLGlCQUFRQyxPQUFSLENBQWdCRixJQUExQixFQUNyQlUsUUFEcUIsQ0FDWixHQURZLEVBRXJCTCxRQUZxQixFQUFmO0FBREo7QUFkMEIsT0FBNUIsQ0FBUDs7QUFvQkYsU0FBSyxPQUFMO0FBQ0UsYUFBT1AsZUFBT0Msb0JBQVAsQ0FBNEI7QUFDakNDLFFBQUFBLElBQUksRUFBRTtBQUNKSCxVQUFBQSxLQUFLLEVBQUVJLGlCQUFRVSxLQUFSLENBQWNYO0FBRGpCLFNBRDJCO0FBSWpDRyxRQUFBQSxLQUFLLEVBQUU7QUFDTE4sVUFBQUEsS0FBSyxFQUFFLHdCQUFVSSxpQkFBUVUsS0FBUixDQUFjWCxJQUF4QixFQUNKSSxPQURJLENBQ0ksRUFESixFQUVKQyxRQUZJO0FBREYsU0FKMEI7QUFTakNDLFFBQUFBLE1BQU0sRUFBRTtBQUNOVCxVQUFBQSxLQUFLLEVBQUUsd0JBQVVJLGlCQUFRVSxLQUFSLENBQWNYLElBQXhCLEVBQ0pPLE1BREksQ0FDRyxFQURILEVBRUpGLFFBRkk7QUFERCxTQVR5QjtBQWNqQ0csUUFBQUEsS0FBSyxFQUFFO0FBQ0xDLFVBQUFBLFNBQVMsc0JBQWUsd0JBQVVSLGlCQUFRVSxLQUFSLENBQWNYLElBQXhCLEVBQ3JCVSxRQURxQixDQUNaLEdBRFksRUFFckJMLFFBRnFCLEVBQWY7QUFESjtBQWQwQixPQUE1QixDQUFQOztBQW9CRixTQUFLLFNBQUw7QUFDQSxTQUFLLE1BQUw7QUFDQTtBQUNFLGFBQU9QLGVBQU9DLG9CQUFQLENBQTRCO0FBQ2pDQyxRQUFBQSxJQUFJLEVBQUU7QUFDSkgsVUFBQUEsS0FBSyxFQUFFSSxpQkFBUVcsSUFBUixDQUFhWjtBQURoQixTQUQyQjtBQUlqQ0csUUFBQUEsS0FBSyxFQUFFO0FBQ0xOLFVBQUFBLEtBQUssRUFBRSx3QkFBVUksaUJBQVFXLElBQVIsQ0FBYVosSUFBdkIsRUFDSkksT0FESSxDQUNJLEVBREosRUFFSkMsUUFGSTtBQURGLFNBSjBCO0FBU2pDQyxRQUFBQSxNQUFNLEVBQUU7QUFDTlQsVUFBQUEsS0FBSyxFQUFFLHdCQUFVSSxpQkFBUVcsSUFBUixDQUFhWixJQUF2QixFQUNKTyxNQURJLENBQ0csRUFESCxFQUVKRixRQUZJO0FBREQsU0FUeUI7QUFjakNHLFFBQUFBLEtBQUssRUFBRTtBQUNMQyxVQUFBQSxTQUFTLHNCQUFlLHdCQUFVUixpQkFBUVcsSUFBUixDQUFhWixJQUF2QixFQUNyQlUsUUFEcUIsQ0FDWixHQURZLEVBRXJCTCxRQUZxQixFQUFmO0FBREo7QUFkMEIsT0FBNUIsQ0FBUDtBQTlDSjtBQW1FRCxDQXBFRDtBQXNFQTs7Ozs7OztlQUtlLCtCQUFpQlQsaUJBQWpCLEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdGlueWNvbG9yIGZyb20gJ3Rpbnljb2xvcjInXG5pbXBvcnQgeyBUaGVtZXIgfSBmcm9tICcuLi8uLi8uLi8uLi90aGVtZXInXG5pbXBvcnQgbWVtb2l6ZUNsYXNzTmFtZSBmcm9tICcuLi91dGlscy9tZW1vaXplQ2xhc3NOYW1lJ1xuaW1wb3J0IHBhbGV0dGUgZnJvbSAnLi4vZm91bmRhdGlvbmFsLXN0eWxlcy9wYWxldHRlJ1xuXG4vKipcbiAqIFRoZSBsaW5rIGFwcGVhcmFuY2UgdW5saWtlIHRoZSBCdXR0b24gaXMgYmFzZWQgb24gdGhlIGNvbG9yIHByb3BlcnR5LlxuICogQ3VycmVudGx5IHRoZSBMaW5rIGRvZXMgbm90IHN1cHBvcnQgdGhlIEludGVudCBvciB0aGUgYXBwZWFyYW5jZSBpbnRlcmZhY2UuXG4gKiBAcGFyYW0ge3N0cmluZ30gY29sb3JcbiAqIEByZXR1cm4ge09iamVjdH0gYXBwZWFyYW5jZSBvZiB0aGUgbGluay5cbiAqL1xuY29uc3QgZ2V0TGlua0FwcGVhcmFuY2UgPSBjb2xvciA9PiB7XG4gIHN3aXRjaCAoY29sb3IpIHtcbiAgICBjYXNlICduZXV0cmFsJzpcbiAgICAgIHJldHVybiBUaGVtZXIuY3JlYXRlTGlua0FwcGVhcmFuY2Uoe1xuICAgICAgICBiYXNlOiB7XG4gICAgICAgICAgY29sb3I6IHBhbGV0dGUubmV1dHJhbC5iYXNlXG4gICAgICAgIH0sXG4gICAgICAgIGhvdmVyOiB7XG4gICAgICAgICAgY29sb3I6IHRpbnljb2xvcihwYWxldHRlLm5ldXRyYWwuYmFzZSlcbiAgICAgICAgICAgIC5saWdodGVuKDEwKVxuICAgICAgICAgICAgLnRvU3RyaW5nKClcbiAgICAgICAgfSxcbiAgICAgICAgYWN0aXZlOiB7XG4gICAgICAgICAgY29sb3I6IHRpbnljb2xvcihwYWxldHRlLm5ldXRyYWwuYmFzZSlcbiAgICAgICAgICAgIC5kYXJrZW4oMTApXG4gICAgICAgICAgICAudG9TdHJpbmcoKVxuICAgICAgICB9LFxuICAgICAgICBmb2N1czoge1xuICAgICAgICAgIGJveFNoYWRvdzogYDAgMCAwIDJweCAke3Rpbnljb2xvcihwYWxldHRlLm5ldXRyYWwuYmFzZSlcbiAgICAgICAgICAgIC5zZXRBbHBoYSgwLjQpXG4gICAgICAgICAgICAudG9TdHJpbmcoKX1gXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgY2FzZSAnZ3JlZW4nOlxuICAgICAgcmV0dXJuIFRoZW1lci5jcmVhdGVMaW5rQXBwZWFyYW5jZSh7XG4gICAgICAgIGJhc2U6IHtcbiAgICAgICAgICBjb2xvcjogcGFsZXR0ZS5ncmVlbi5iYXNlXG4gICAgICAgIH0sXG4gICAgICAgIGhvdmVyOiB7XG4gICAgICAgICAgY29sb3I6IHRpbnljb2xvcihwYWxldHRlLmdyZWVuLmJhc2UpXG4gICAgICAgICAgICAubGlnaHRlbigxMClcbiAgICAgICAgICAgIC50b1N0cmluZygpXG4gICAgICAgIH0sXG4gICAgICAgIGFjdGl2ZToge1xuICAgICAgICAgIGNvbG9yOiB0aW55Y29sb3IocGFsZXR0ZS5ncmVlbi5iYXNlKVxuICAgICAgICAgICAgLmRhcmtlbigxMClcbiAgICAgICAgICAgIC50b1N0cmluZygpXG4gICAgICAgIH0sXG4gICAgICAgIGZvY3VzOiB7XG4gICAgICAgICAgYm94U2hhZG93OiBgMCAwIDAgMnB4ICR7dGlueWNvbG9yKHBhbGV0dGUuZ3JlZW4uYmFzZSlcbiAgICAgICAgICAgIC5zZXRBbHBoYSgwLjQpXG4gICAgICAgICAgICAudG9TdHJpbmcoKX1gXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgY2FzZSAnZGVmYXVsdCc6XG4gICAgY2FzZSAnYmx1ZSc6XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBUaGVtZXIuY3JlYXRlTGlua0FwcGVhcmFuY2Uoe1xuICAgICAgICBiYXNlOiB7XG4gICAgICAgICAgY29sb3I6IHBhbGV0dGUuYmx1ZS5iYXNlXG4gICAgICAgIH0sXG4gICAgICAgIGhvdmVyOiB7XG4gICAgICAgICAgY29sb3I6IHRpbnljb2xvcihwYWxldHRlLmJsdWUuYmFzZSlcbiAgICAgICAgICAgIC5saWdodGVuKDEwKVxuICAgICAgICAgICAgLnRvU3RyaW5nKClcbiAgICAgICAgfSxcbiAgICAgICAgYWN0aXZlOiB7XG4gICAgICAgICAgY29sb3I6IHRpbnljb2xvcihwYWxldHRlLmJsdWUuYmFzZSlcbiAgICAgICAgICAgIC5kYXJrZW4oMTApXG4gICAgICAgICAgICAudG9TdHJpbmcoKVxuICAgICAgICB9LFxuICAgICAgICBmb2N1czoge1xuICAgICAgICAgIGJveFNoYWRvdzogYDAgMCAwIDJweCAke3Rpbnljb2xvcihwYWxldHRlLmJsdWUuYmFzZSlcbiAgICAgICAgICAgIC5zZXRBbHBoYSgwLjQpXG4gICAgICAgICAgICAudG9TdHJpbmcoKX1gXG4gICAgICAgIH1cbiAgICAgIH0pXG4gIH1cbn1cblxuLyoqXG4gKiBHZXQgdGhlIGNsYXNzTmFtZSBvZiBhIGBMaW5rYCBjb21wb25lbnQuXG4gKiBAcGFyYW0ge3N0cmluZ30gY29sb3JcbiAqIEByZXR1cm4ge3N0cmluZ30gdGhlIGFwcGVhcmFuY2UgY2xhc3MgbmFtZS5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgbWVtb2l6ZUNsYXNzTmFtZShnZXRMaW5rQXBwZWFyYW5jZSlcbiJdfQ==