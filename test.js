/*!
 * unrelative <https://github.com/tunnckoCore/unrelative>
 *
 * Copyright (c) 2015-2016 Charlike Mike Reagent <@tunnckoCore> (http://www.tunnckocore.tk)
 * Released under the MIT license.
 */

'use strict'

var test = require('assertit')
var unrelative = require('./index')
// var endsWith = require('ends-with')

test('unrelative:', function (done) {
  console.log(unrelative('data/foo/bar/baz'))
  console.log(unrelative('!data/foo/bar/baz'))

  console.log(unrelative('@data/foo/bar/baz')) // ????? should we force use slash to be able to expand?
  console.log(unrelative('~data/foo/bar/baz')) // ????? should we force use slash to be able to expand?

  console.log(unrelative('@/data/foo/bar/baz'))
  console.log(unrelative('~/data/foo/bar/baz'))

  console.log(unrelative('/data/foo/bar/baz')) // should be the same
  console.log(unrelative('!/data/foo/bar/baz')) // should be the same

  console.log(unrelative('data/foo/../baz')) // should be normalized
  console.log(unrelative('!data/foo/../baz')) // should be normalized
  console.log(unrelative('/data/foo/../baz')) // should be normalized
  console.log(unrelative('!/data/foo/../baz')) // should be normalized
  console.log(unrelative('@/data/foo/../baz')) // should be normalized
  console.log(unrelative('!@/data/foo/../baz')) // should be normalized
  console.log(unrelative('~/data/foo/../baz')) // should be normalized
  console.log(unrelative('!~/data/foo/../baz')) // should be normalized

  console.log(unrelative('@data/foo/../baz')) // ?????
  console.log(unrelative('~data/foo/../baz')) // ?????

  console.log(unrelative('../data/foo/../baz'))
  console.log(unrelative('!../data/foo/../baz')) // ?????
  console.log(unrelative('@../data/foo/../baz')) // ?????
  console.log(unrelative('~../data/foo/../baz')) // ?????
  console.log(unrelative('!@../data/foo/../baz')) // ?????
  console.log(unrelative('!~../data/foo/../baz')) // ?????
  console.log(unrelative('!/../data/foo/../baz'))
  console.log(unrelative('~/../data/foo/../baz'))

  console.log(unrelative('..'))
  console.log(unrelative('!..'))
  console.log(unrelative('/..')) // should be `/`
  console.log(unrelative('!/..')) // should be `!/`

  console.log(unrelative('~..')) // should be `/`
  console.log(unrelative('!~..')) // should be `!/`

  console.log(unrelative('~/..')) // should be `/`
  console.log(unrelative('!~/..'), 'bugged') // should be `/`

  console.log(unrelative('@..')) // ????? should we force use slash to be able to expand?
  console.log(unrelative('!@..')) // ????? should we force use slash to be able to expand?

  console.log(unrelative('@/..'))
  console.log(unrelative('!@/..'))

  done()
})
