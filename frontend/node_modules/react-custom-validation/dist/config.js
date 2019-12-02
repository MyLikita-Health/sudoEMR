'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.normalizeConfig = normalizeConfig;

var _lodash = require('lodash');

var _helpers = require('./helpers');

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function normalizeFields(validationName, fields) {
  var result = fields;
  if (result == null) {
    result = [validationName];
  }
  if (typeof result === 'string') {
    result = [result];
  }
  if ((0, _lodash.isArray)(result) && (result.length === 0 || typeof result[0] === 'string')) {
    result = [result, result];
  }
  var wellFormed = (0, _lodash.isArray)(result) && result.length === 2 && result.every(function (i) {
    return (0, _lodash.isArray)(i);
  }) && result[0].every(function (i) {
    return typeof i === 'string';
  }) && result[1].every(function (i) {
    return typeof i === 'string';
  });
  (0, _helpers.assertSpec)(wellFormed, 'Invalid validation config! Malformed fields for validation ' + validationName + '.', fields, 'Array<Array<string>> of length 2 or Array<string> or string or null');
  // result has form [dependsOn, needTouch]
  //   dependsOn: Array<string>, field names that hide the validation result if
  //   the user is changing any of them (typing)
  //   needTouch: Array<string>, field names that need to be touched
  //   (changed/blurred/submitted) before the validation result is shown
  return result;
}

function normalizeRules(validationName, rules) {
  (0, _helpers.assertSpec)((0, _lodash.isArray)(rules) && rules.every(function (r) {
    return (0, _lodash.isArray)(r);
  }), 'Invalid validation config! Malformed rules for validation ' + validationName + '.', rules, 'Array of Arrays');

  var result = [];
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = rules[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var r = _step.value;

      var rr = r;
      if (rr.length > 0 && typeof rr[0] === 'function') {
        rr = [r[0].name].concat(_toConsumableArray(r));
      }
      (0, _helpers.assertSpec)(rr.length >= 2 && typeof rr[0] === 'string' && typeof rr[1] === 'function', 'Invalid validation config! Malformed rule for validation ' + validationName + '.', r, '[string, function, ...arguments] or [function, ...arguments]');
      result.push(rr);
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return result;
}

function normalizeAllFields(fields) {
  (0, _helpers.assertSpec)((0, _lodash.isArray)(fields) && fields.every(function (f) {
    return typeof f === 'string';
  }), 'Invalid validation config! Malformed fields.', fields, 'Array<string>');
  return fields;
}

function normalizeTypingDebounce(typingDebounce) {
  var result = typingDebounce;
  if (result == null) {
    result = [2500, 1000];
  }
  if (typeof result === 'number') {
    result = [result, result];
  }
  (0, _helpers.assertSpec)((0, _lodash.isArray)(result) && result.length === 2 && result.every(function (r) {
    return typeof r === 'number';
  }), 'Invalid validation config! Malformed option typingDebounce.', typingDebounce, 'Array<number> of length 2 or number or null');
  return result;
}

function normalizeConfig(config) {
  var validations = config.validations,
      fields = config.fields,
      _config$onValidation = config.onValidation,
      onValidation = _config$onValidation === undefined ? function () {} : _config$onValidation,
      _config$options = config.options;
  _config$options = _config$options === undefined ? {} : _config$options;
  var _config$options$async = _config$options.asyncThrottle,
      asyncThrottle = _config$options$async === undefined ? 500 : _config$options$async,
      typingDebounce = _config$options.typingDebounce;


  (0, _helpers.assertSpec)(typeof asyncThrottle === 'number', 'Invalid validation config! Malformed option asyncThrottle.', asyncThrottle, 'number');
  typingDebounce = normalizeTypingDebounce(typingDebounce);

  var resultValidations = {};

  for (var name in validations) {
    var v = validations[name];
    if ((0, _lodash.isArray)(v)) {
      // only rules were provided, expand the config to its full form
      v = { rules: v, fields: null };
    }

    resultValidations[name] = {
      rules: normalizeRules(name, v.rules),
      fields: normalizeFields(name, v.fields),
      debounce: asyncThrottle
    };
  }

  return {
    validations: resultValidations,
    fields: normalizeAllFields(fields),
    typingDebounce: { before: typingDebounce[0], after: typingDebounce[1] },
    onValidation: onValidation
  };
}