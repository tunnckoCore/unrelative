'use strict'

/**
 * Module dependencies
 */

var utils = require('lazy-cache')(require)

/**
 * Temporarily re-assign `require` to trick browserify and
 * webpack into reconizing lazy dependencies.
 *
 * This tiny bit of ugliness has the huge dual advantage of
 * only loading modules that are actually called at some
 * point in the lifecycle of the application, whilst also
 * allowing browserify and webpack to find modules that
 * are depended on but never actually called.
 */

var fn = require
require = utils // eslint-disable-line no-undef, no-native-reassign

/**
 * Lazily required module dependencies
 */

require('is-absolute')
require('normalize-path')
require('path')
require('resolve-dir')

/**
 * Restore `require`
 */

require = fn // eslint-disable-line no-undef, no-native-reassign

utils.resolvePath = function resolvePath (fp) {
  return utils.isSpecialPath(fp) ? utils.resolveDir(fp) : fp
}

utils.isSpecialPath = function isSpecialPath (fp) {
  return fp.charCodeAt(0) === 64 || fp.charCodeAt(0) === 126
}

/**
 * Expose `utils` modules
 */

module.exports = utils

// utils.isAbsolutePath = function isAbsolutePath (fp) {
//   if (typeof fp !== 'string') return false
//   fp = utils.normalizePath(fp)
//   fp = fp.charCodeAt(0) === 33 ? fp.slice(1) : fp
//   fp = utils.isSpecial(fp) ? utils.resolveDir(fp) : fp
//   return utils.isAbsolute(fp)
// }
