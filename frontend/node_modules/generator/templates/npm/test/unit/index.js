var test = require('tap').test,
    __name__ = require(__dirname + '/../../lib/index.js');

__name__(function (err) {
    test('unit', function (t) {
        t.equal(err, null, 'error object is null');
        t.end();
    });
});