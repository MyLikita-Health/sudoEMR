/**
 * Applies values to the specified file paths.
 *
 * @package generator
 * @author Andrew Sliwinski <andrew@diy.org>
 */

/**
 * Dependencies
 */
var async       = require('async'),
    fs          = require('fs'),
    replace     = require('replace');

/**
 * Export
 */
module.exports = function (result, callback) {
    // Split input (readability)
    var vars    = result.vars;
    var files   = result.files;

    // Regex escape
    function escapeRegExp (str) {
        return str.replace(/[\-\[\]\/\{\}\(\)\*\+\\\^\$\|]/g, "\\$&");
    }

    // Iterate over each variable and replace
    // @note This is inefficient. Requires writing a custom find/replace module or
    // finding a way to iterate only across the paths and applying all key/vals
    // once per file.
    try {
        for (var item in vars) {
            replace({
                regex:          '__' + escapeRegExp(item) + '__',
                replacement:    escapeRegExp(vars[item]),
                paths:          files,
                silent:         true
            });
        }

        callback(null);
    } catch (err) {
        callback(err);
    }
};