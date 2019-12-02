"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _typography = require("../../typography");

var FormFieldHint =
/*#__PURE__*/
function (_PureComponent) {
  (0, _inherits2.default)(FormFieldHint, _PureComponent);

  function FormFieldHint() {
    (0, _classCallCheck2.default)(this, FormFieldHint);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(FormFieldHint).apply(this, arguments));
  }

  (0, _createClass2.default)(FormFieldHint, [{
    key: "render",
    value: function render() {
      return _react.default.createElement(_typography.Paragraph, (0, _extends2.default)({
        marginTop: 0,
        size: 300,
        color: "muted"
      }, this.props));
    }
  }]);
  return FormFieldHint;
}(_react.PureComponent);

exports.default = FormFieldHint;
FormFieldHint.displayName = "FormFieldHint";
(0, _defineProperty2.default)(FormFieldHint, "propTypes", (0, _objectSpread2.default)({}, _typography.Paragraph.propTypes));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9mb3JtLWZpZWxkL3NyYy9Gb3JtRmllbGRIaW50LmpzIl0sIm5hbWVzIjpbIkZvcm1GaWVsZEhpbnQiLCJwcm9wcyIsIlB1cmVDb21wb25lbnQiLCJQYXJhZ3JhcGgiLCJwcm9wVHlwZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOztJQUVxQkEsYTs7Ozs7Ozs7Ozs7OzZCQVFWO0FBQ1AsYUFBTyw2QkFBQyxxQkFBRDtBQUFXLFFBQUEsU0FBUyxFQUFFLENBQXRCO0FBQXlCLFFBQUEsSUFBSSxFQUFFLEdBQS9CO0FBQW9DLFFBQUEsS0FBSyxFQUFDO0FBQTFDLFNBQXNELEtBQUtDLEtBQTNELEVBQVA7QUFDRDs7O0VBVndDQyxvQjs7O0FBQXRCRixhOzhCQUFBQSxhLCtDQUtkRyxzQkFBVUMsUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBQYXJhZ3JhcGggfSBmcm9tICcuLi8uLi90eXBvZ3JhcGh5J1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGb3JtRmllbGRIaW50IGV4dGVuZHMgUHVyZUNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgLyoqXG4gICAgICogQ29tcG9zZXMgdGhlIFBhcmFncmFwaCBjb21wb25lbnQgYXMgdGhlIGJhc2UuXG4gICAgICovXG4gICAgLi4uUGFyYWdyYXBoLnByb3BUeXBlc1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiA8UGFyYWdyYXBoIG1hcmdpblRvcD17MH0gc2l6ZT17MzAwfSBjb2xvcj1cIm11dGVkXCIgey4uLnRoaXMucHJvcHN9IC8+XG4gIH1cbn1cbiJdfQ==