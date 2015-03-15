/**
 * unrelative <https://github.com/tunnckoCore/unrelative>
 *
 * Copyright (c) 2015 Charlike Mike Reagent, contributors.
 * Released under the MIT license.
 */

'use strict';

var assert = require('assert');
var endsWith = require('ends-with');
var unrelative = require('./index');

describe('unrelative:', function() {
  it('should throw TypeError when no arguments', function(done) {
    function fixture() {
      unrelative();
    }
    assert.throws(fixture, TypeError);
    done();
  });
  it('should throw TypeError when one argument given', function(done) {
    function fixture() {
      unrelative({one: 'two'});
    }
    assert.throws(fixture, TypeError);
    done();
  });
  it('should throw TypeError when no string given to the arguments', function(done) {
    function fixture() {
      unrelative({one: 'two'}, [3,4,5]);
    }
    assert.throws(fixture, TypeError);
    done();
  });
  it('should transform relative positive glob pattern to absolute', function(done) {
    var fixture = 'a/b/c/**/*.js';
    var actual = unrelative(process.cwd(), fixture);

    assert.strictEqual(actual.charAt(0), '/');
    assert.strictEqual(endsWith(actual, fixture), true);
    done();
  });
  it('should transform negative glob pattern to absolute', function(done) {
    var fixture = '!a/b/c/**/*.js';
    var actual = unrelative(process.cwd(), fixture);

    assert.strictEqual(actual.charAt(0), '!');
    assert.strictEqual(actual.charAt(1), '/');
    assert.strictEqual(endsWith(actual, fixture.slice(1)), true);
    done();
  });
  it('should return same absolute path', function(done) {
    var fixture = '/a/b/c/d.js';
    var actual = unrelative(process.cwd(), fixture);

    assert.strictEqual(actual, fixture);

    // absolute negative glob path
    var fixture = '!/a/b/c/d.js';
    var actual = unrelative(process.cwd(), fixture);

    assert.strictEqual(actual, fixture);
    done();
  });
});
