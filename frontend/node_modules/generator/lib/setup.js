/**
 * Loads the default templates for the current user.
 *
 * @package generator
 * @author Andrew Sliwinski <andrew@diy.org>
 */

/**
 * Dependencies
 */
var colors  = require('colors'),
    extra   = require('fs-extra'),
    fs      = require('fs');

/**
 * Export
 */
module.exports = function (callback) {
    var source = __dirname + '/../templates';
    var target = process.env.HOME + '/.generator';

    fs.exists(target, function (exists) {
        if (exists) console.log('Re-initalizing default templates...'.yellow);
        extra.copy(source, target, callback);
    });
};