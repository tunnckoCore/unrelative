/*!
 * unrelative <https://github.com/tunnckoCore/unrelative>
 *
 * Copyright (c) 2015-2016 Charlike Mike Reagent <@tunnckoCore> (http://www.tunnckocore.tk)
 * Released under the MIT license.
 */

'use strict'

var utils = require('./utils')

module.exports = function unrelative (fp) {
  if (fp && typeof fp !== 'string') {
    throw new TypeError('unrelative: expect `fp` be string')
  }
  var isNegate = fp.charCodeAt(0) === 33

  fp = utils.normalizePath(fp)
  fp = isNegate ? fp.slice(1) : fp
  fp = utils.resolvePath(fp)
  fp = utils.isAbsolute(fp) ? fp : utils.path.resolve(fp)
  return isNegate ? ('!' + fp) : fp
}
