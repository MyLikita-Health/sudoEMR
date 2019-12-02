'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.validated = validated;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _immutabilityHelper = require('immutability-helper');

var _immutabilityHelper2 = _interopRequireDefault(_immutabilityHelper);

var _lodash = require('lodash');

var _config = require('./config');

var _fields = require('./fields');

var _results = require('./results');

var _submit = require('./submit');

var _state = require('./state');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function updateValidationData(state) {
  var results = state.results,
      fields = state.fields,
      validations = state.config.validations;

  var validationData = {};
  for (var name in validations) {
    validationData[name] = (0, _lodash.cloneDeep)(results[name].result);
    validationData[name].show = (0, _fields.shouldShowValidation)(validations[name].fields, fields);
  }
  return (0, _immutabilityHelper2.default)(state, { validationData: { $set: validationData } });
}

function validated(getConfig) {
  return function (Component) {
    var _class, _temp2;

    return _temp2 = _class = function (_React$Component) {
      _inherits(_class, _React$Component);

      function _class() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, _class);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = _class.__proto__ || Object.getPrototypeOf(_class)).call.apply(_ref, [this].concat(args))), _this), _this.fieldEvent = function (type, field, debounce) {
          // Cancel submitting if user is still changing data in the form or if the
          // form was reset
          if (type === 'change' || type === 'reset') {
            _this.registry = (0, _submit.resetSubmit)(_this.registry);
          }

          var dispatchUpdate = function dispatchUpdate(fn) {
            var oldRegistry = _this.registry;
            if (!_this.registry.isMounted) {
              return;
            }
            _this.registry = fn(_this.registry);
            _this.registry = updateValidationData(_this.registry);
            _this.forceUpdateIfNeeded(oldRegistry, _this.registry);
          };
          (0, _fields.handleFieldEvent)(dispatchUpdate, field, type, debounce);
        }, _this.field = function (field, handleChange, handleBlur, debounce) {
          return {
            onChange: function onChange(e) {
              (handleChange || function () {})(e);
              _this.fieldEvent('change', field, debounce);
            },
            onBlur: function onBlur(e) {
              (handleBlur || function () {})(e);
              _this.fieldEvent('blur', field, false);
            }
          };
        }, _temp), _possibleConstructorReturn(_this, _ret);
      }

      _createClass(_class, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
          this.shouldForceUpdate = false;
          this.registry = (0, _state.initialState)((0, _config.normalizeConfig)(getConfig(this.props)));
          this.componentWillReceiveProps(this.props);
        }
      }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
          // forceUpdate should be called only on the client (it should not be called
          // on the server during server-side rendering). We use componentDidMount
          // (which is called only on the client) to distinguish client from server
          this.shouldForceUpdate = true;
        }
      }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
          var _this2 = this;

          var config = (0, _config.normalizeConfig)(getConfig(nextProps));

          // Cancel submitting if user is still changing data in the form
          if (!(0, _lodash.isEqual)(this.registry.config.validations, config.validations)) {
            this.registry = (0, _submit.resetSubmit)(this.registry);
          }

          this.registry = (0, _immutabilityHelper2.default)(this.registry, { config: { $set: config } });

          var dispatchUpdate = function dispatchUpdate(fn) {
            var oldRegistry = _this2.registry;
            if (!_this2.registry.isMounted) {
              return;
            }
            _this2.registry = fn(_this2.registry);
            _this2.registry = updateValidationData(_this2.registry);
            _this2.registry = (0, _submit.updateSubmit)(_this2.registry);
            _this2.forceUpdateIfNeeded(oldRegistry, _this2.registry);
          };
          (0, _results.updateResults)(dispatchUpdate);
        }
      }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
          this.registry = (0, _immutabilityHelper2.default)(this.registry, { isMounted: { $set: false } });
        }
      }, {
        key: 'forceUpdateIfNeeded',
        value: function forceUpdateIfNeeded(oldRegistry, newRegistry) {
          // ensure that the decorated component gets new props
          if (!(0, _lodash.isEqual)(oldRegistry.validationData, newRegistry.validationData)) {
            this.shouldForceUpdate && this.forceUpdate();
          }
          // ensure that onValidation handler is called
          var _newRegistry$config = newRegistry.config,
              onValidation = _newRegistry$config.onValidation,
              validations = _newRegistry$config.validations;

          for (var name in validations) {
            if (!(0, _lodash.isEqual)(oldRegistry.validationData[name], newRegistry.validationData[name])) {
              onValidation(name, newRegistry.validationData[name]);
            }
          }
        }
      }, {
        key: 'render',
        value: function render() {
          var _this3 = this;

          var validationProps = {
            $validation: this.registry.validationData,
            $fieldEvent: this.fieldEvent,
            $field: this.field,
            $submit: function $submit(onValid, onInvalid) {
              var fieldEvent = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

              if (fieldEvent) {
                _this3.fieldEvent('submit');
              }
              _this3.registry = (0, _submit.submit)(_this3.registry, onValid, onInvalid);
            }
          };
          for (var p in validationProps) {
            if (p in this.props) {
              var message = 'Naming collision: validated component ' + (Component.name || Component.displayName) + ' ' + ('cannot receive prop ' + p + ', as this prop name is reserved by the validation library.');
              throw new Error(message);
            }
          }
          return _react2.default.createElement(Component, _extends({}, this.props, validationProps));
        }
      }]);

      return _class;
    }(_react2.default.Component), _class.displayName = 'Validated-' + (Component.name || Component.displayName), _temp2;
  };
}