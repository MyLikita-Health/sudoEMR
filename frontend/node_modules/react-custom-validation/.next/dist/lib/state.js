'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initialSubmitState = exports.initialResultsState = exports.initialFieldsState = undefined;
exports.initialState = initialState;

var _helpers = require('./helpers');

var initialFieldsState = exports.initialFieldsState = {
  change: {
    // fieldName: true if field was changed
  },
  blur: {},
  submit: {},
  isTyping: {
    // fieldName: timestamp in millis (until when)
  }
};

var initialResultsState = exports.initialResultsState = {};

var initialSubmitState = exports.initialSubmitState = {
  isSubmitting: false,
  onValid: null,
  onInvalid: null
};

function initialState(config) {
  var validationData = {};
  for (var name in config.validations) {
    validationData[name] = (0, _helpers.initValidation)();
  }
  return {
    fields: initialFieldsState,
    results: initialResultsState,
    submit: initialSubmitState,
    validationData: validationData,
    config: config,
    isMounted: true
  };
}