'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.updateResults = updateResults;

var _immutabilityHelper = require('immutability-helper');

var _immutabilityHelper2 = _interopRequireDefault(_immutabilityHelper);

var _lodash = require('lodash');

var _state = require('./state');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function isResultValid(result) {
  return result === true || result == null || result === [] || result === {};
}

function isPromise(obj) {
  return obj != null && typeof obj.then === 'function';
}

//TODO why works this not? (bug in next?)
//async function asyncAnd(rules) {
//  for (let {name, pResult} of rules) {
//    let result = await pResult
//    if (!isResultValid(result)) {
//      return {isValid: false, error: {reason: result, rule: name}}
//    }
//  }
//  return {isValid: true, error: {}}
//}

function asyncAnd(rules) {
  if (rules.length === 0) {
    return { isValid: true, error: {} };
  }
  var _rules$ = rules[0],
      name = _rules$.name,
      pResult = _rules$.result;

  return pResult.then(function (result) {
    if (!isResultValid(result)) {
      return { isValid: false, error: { reason: result, rule: name } };
    } else {
      return asyncAnd(rules.slice(1));
    }
  });
}

function and(rules) {
  var asyncRules = [];
  var wasPromise = false;
  // resolve sync rules first to prevent server load, save async rules to array
  // to deal with later
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = rules[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var rule = _step.value;

      var name = rule[0];
      var fn = rule[1];
      var args = rule.slice(2);
      var result = fn.apply(null, args);
      if (wasPromise || isPromise(result)) {
        wasPromise = true;
        asyncRules.push({ name: name, result: Promise.resolve(result) });
      } else if (!isResultValid(result)) {
        return { isValid: false, error: { reason: result, rule: name } };
      }
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

  if (asyncRules.length === 0) {
    return { isValid: true, error: {} };
  }
  return asyncAnd(asyncRules);
}

function setLastAsyncFnStart(state, name, when) {
  return (0, _immutabilityHelper2.default)(state, { results: _defineProperty({}, name, { lastAsyncFnStart: { $set: when } }) });
}

function setResult(state, name, result) {
  return (0, _immutabilityHelper2.default)(state, { results: _defineProperty({}, name, { result: { $set: result } }) });
}

function runFn(state, name, dispatchUpdate) {
  var lastFn = state.results[name].lastFn;

  var r = lastFn();
  if (!isPromise(r)) {
    return setResult(state, name, r);
  } else {
    var s = setLastAsyncFnStart(state, name, new Date().getTime());
    r.then(function (rr) {
      dispatchUpdate(function (laterState) {
        var laterLastFn = laterState.results[name].lastFn;

        if (lastFn === laterLastFn) {
          return setResult(laterState, name, rr);
        } else {
          return laterState;
        }
      });
    });
    return s;
  }
}

function runLater(name, fn, timeout, dispatchUpdate) {
  setTimeout(function () {
    dispatchUpdate(function (state) {
      var lastFn = state.results[name].lastFn;

      if (fn !== lastFn) {
        return state;
      } else {
        return runFn(state, name, dispatchUpdate);
      }
    });
  }, timeout);
}

// Update results according to new config
function updateResults(dispatchUpdate) {
  dispatchUpdate(function (state) {
    var config = state.config;

    var oldResults = state.results;
    var newState = (0, _immutabilityHelper2.default)(state, { results: { $set: _state.initialResultsState } });

    var _loop = function _loop(name) {
      var _config$validations$n = config.validations[name],
          rules = _config$validations$n.rules,
          debounce = _config$validations$n.debounce;


      if (name in oldResults && (0, _lodash.isEqual)(rules, oldResults[name].rules)) {
        // rules have not changed => no need to recalculate the result
        newState = (0, _immutabilityHelper2.default)(newState, { results: _defineProperty({}, name, { $set: _extends({}, oldResults[name], { debounce: debounce }) }) });
      } else {
        var lastFn = function lastFn() {
          return and(rules);
        };

        var _ref = oldResults[name] || {},
            _ref$lastAsyncFnStart = _ref.lastAsyncFnStart,
            lastAsyncFnStart = _ref$lastAsyncFnStart === undefined ? 0 : _ref$lastAsyncFnStart;

        var result = { isValid: null, error: {} };

        newState = (0, _immutabilityHelper2.default)(newState, { results: _defineProperty({}, name, { $set: { rules: rules, debounce: debounce, lastFn: lastFn, lastAsyncFnStart: lastAsyncFnStart, result: result } }) });

        var nextRunIn = lastAsyncFnStart + debounce - new Date().getTime();

        if (nextRunIn > 0) {
          runLater(name, lastFn, nextRunIn, dispatchUpdate);
        } else {
          newState = runFn(newState, name, dispatchUpdate);
        }
      }
    };

    for (var name in config.validations) {
      _loop(name);
    }
    return newState;
  });
}

// TODO add this check in some form
// for (let ruleName in rules) {
//   // Unequality of rule functions could easily happen by providing a lambda function.
//   // This would lead to an infinite loop, so we do not allow it.
//   if (this.rules[ruleName] != null && this.rules[ruleName][0] !== rules[ruleName][0]) {
//     throw new Error(
//       'Changing the rule function (first argument) is not allowed. Note that \'() => {...}\' creates a ' +
//       `different function anytime it is evaluated. Check the rule ${this.name}/${ruleName}.`)
//   }
// }