var dicss = require('../dicss.js'),
    assert = require('assert');

describe('DICSS', function() {
    'use strict';

    it('should be pulled', function() {
        assert.equal(!window.DICSS, false);
    });
});

