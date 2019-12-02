/**
 * Walks the contents of a specified path and prompts for each variable found.
 *
 * @package generator
 * @author Andrew Sliwinski <andrew@diy.org>
 */

/**
 * Dependencies
 */
var async   = require('async'),
    findit  = require('findit'),
    fs      = require('fs'),
    prompt  = require('prompt');

/**
 * Export
 */
module.exports = function (directory, name, callback) {
    // Method defaults
    var regex           = /__(.*?)__/g;
    var files           = findit.sync(directory);
    var dict            = Object.create(null);
    var hits            = [];

    // Iterate over each file to find matches ("hits")
    async.forEach(files, function (file, callback) {
        fs.lstat(file, function (err, stat) {
            if (err) return callback(err);
            if (!stat.isFile()) return callback(null);

            fs.readFile(file, function (err, buffer) {
                if (err) return callback(err);
                var body = buffer.toString();

                // Check for match
                var match = body.match(regex);
                if (match === null) return callback(null);

                // Update dict & hits array
                hits.push(file);
                for (var i = 0; i < match.length; i++) {
                    if (match[i] === '__name__') continue;
                    if (match[i].toUpperCase() === match[i]) continue;
                    dict[match[i].replace(/__/g, '')] = null;
                }
                callback(null);
            });
        });
    }, function (err) {
        if (err) return callback(err);

        // Prompt for each non-null value
        prompt.message      = '';
        prompt.delimiter    = '';

        prompt.start();
        prompt.get(Object.keys(dict), function (err, result) {
            if (err) return callback(err);

            result.name = name;
            callback(null, {
                vars:   result,
                files:  hits
            });
        });
    });
};