#!/usr/bin/env node

/**
 * Command line interface for generator.
 *
 * @package generator
 * @author Andrew Sliwinski <andrew@diy.org>
 */

/**
 * Dependencies
 */
var colors      = require('colors'),
    optimist    = require('optimist')
        .usage('Usage: $0 -t npm -n myModule')
        .alias('h', 'help')
        .alias('t', 'template')
        .alias('n', 'name')
        .alias('s', 'setup')
        .describe('t', 'Template name (from ~/.generator)')
        .describe('n', 'Name of project to be generated')
        .describe('s', 'Initializes the included modules at ~/.generator');

var argv        = optimist.argv,
    copy        = require('../lib/copy'),
    make        = require('../lib/make'),
    render      = require('../lib/render'),
    setup       = require('../lib/setup'),
    walk        = require('../lib/walk');

/**
 * Error handler
 */
function stderr (err) {
    console.log('Error: '.red + err.red);
    process.exit(1);
}

/**
 * Execute
 */
if (argv.help) return optimist.showHelp();
if (argv.setup) {
    setup(function (err) {
        if (err) return stderr(err);
        console.log('Done.'.green);
    });
} else {
    // Check requirements
    if (typeof argv.template === 'undefined' || argv.name === 'undefined') {
        return stderr('Template (-t) and project name (-n) must be specified. See --help');
    }

    // Replicate the template
    copy(argv.template, argv.name, function (err, path) {
        if (err) return stderr(err);

        // Walk and gather variables
        walk(path, argv.name, function (err, result) {
            if (err) return stderr(err);

            // Render the results of the walk
            render(result, function (err) {
                if (err) return stderr(err);
                
                // Post-processing (make)
                make(path, function (err) {
                    if (err) return stderr(err);
                    console.log('Done.'.green);
                });
            });
        });
    });
}