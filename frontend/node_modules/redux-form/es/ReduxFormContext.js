import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/objectWithoutPropertiesLoose";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import * as React from 'react';
export var ReduxFormContext = React.createContext(null);
export var withReduxForm = function withReduxForm(Component) {
  var Hoc =
  /*#__PURE__*/
  function (_React$Component) {
    _inheritsLoose(Hoc, _React$Component);

    function Hoc() {
      return _React$Component.apply(this, arguments) || this;
    }

    var _proto = Hoc.prototype;

    _proto.render = function render() {
      var _this$props = this.props,
          forwardedRef = _this$props.forwardedRef,
          rest = _objectWithoutPropertiesLoose(_this$props, ["forwardedRef"]);

      return React.createElement(ReduxFormContext.Consumer, {
        children: function children(_reduxForm) {
          return React.createElement(Component, _extends({
            _reduxForm: _reduxForm,
            ref: forwardedRef
          }, rest));
        }
      });
    };

    return Hoc;
  }(React.Component);

  var ref = React.forwardRef(function (props, ref) {
    return React.createElement(Hoc, _extends({}, props, {
      forwardedRef: ref
    }));
  });
  ref.displayName = Component.displayName || Component.name || 'Component';
  return ref;
};