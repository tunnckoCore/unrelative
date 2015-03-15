/**
 * unrelative <https://github.com/tunnckoCore/unrelative>
 *
 * Copyright (c) 2015 Charlike Mike Reagent, contributors.
 * Released under the MIT license.
 */

'use strict';

var path = require('path');
var isAbsolute = require('is-absolute');

module.exports = function unrelative(cwd, str) {
  if (typeof cwd !== 'string' && typeof str !== 'string') {
    throw new TypeError('[unrelative] expect two string arguments');
  }

  var negate = '';
  var ch = str.charCodeAt(0);

  if (ch === 33 /* '!' */) {
    negate = '!';
    str = str.slice(1);
  }
  if (isAbsolute(str)) {
    return negate + str;
  }

  return negate + path.resolve(cwd, str);
};
