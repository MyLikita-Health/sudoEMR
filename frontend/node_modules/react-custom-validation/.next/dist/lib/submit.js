'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.resetSubmit = resetSubmit;
exports.updateSubmit = updateSubmit;
exports.submit = submit;

var _immutabilityHelper = require('immutability-helper');

var _immutabilityHelper2 = _interopRequireDefault(_immutabilityHelper);

var _helpers = require('./helpers');

var _state = require('./state');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _isFormValid(config, validationData) {
  if (config.formValid != null) {
    return config.formValid;
  } else {
    return (0, _helpers.isFormValid)(validationData);
  }
}

function resetSubmit(state) {
  return (0, _immutabilityHelper2.default)(state, { submit: { $set: _state.initialSubmitState } });
}

function updateSubmit(state) {
  var _state$submit = state.submit,
      isSubmitting = _state$submit.isSubmitting,
      onValid = _state$submit.onValid,
      onInvalid = _state$submit.onInvalid,
      config = state.config,
      validationData = state.validationData;

  if (!isSubmitting) {
    return state;
  }
  var valid = _isFormValid(config, validationData);
  if (valid != null) {
    if (valid === true && onValid != null) {
      onValid();
    } else if (onInvalid != null) {
      onInvalid();
    }
    return resetSubmit(state);
  }
  return state;
}

function submit(state, onValid, onInvalid) {
  var result = (0, _immutabilityHelper2.default)(state, { submit: { $set: { isSubmitting: true, onValid: onValid, onInvalid: onInvalid } } });
  return updateSubmit(result);
}