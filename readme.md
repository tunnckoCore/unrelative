## [![npm][npmjs-img]][npmjs-url] [![mit license][license-img]][license-url] [![build status][travis-img]][travis-url] [![coverage status][coveralls-img]][coveralls-url] [![deps status][daviddm-img]][daviddm-url]

> Transform relative path or glob pattern to absolute

## Install
```
npm i --save unrelative
npm test
```


## Usage
> For more use-cases see the [tests](./test.js)

```js
var unrelative = require('unrelative');


unrelative(process.cwd(), 'a/b/c/**/*.js');
//=> '/home/user/dev/a/b/c/**/*.js'

unrelative(process.cwd(), '!a/b/c/**/*.js');
//=> '!/home/user/dev/a/b/c/**/*.js'

unrelative(process.cwd(), 'a/b/c/d.js');
//=> '/home/user/dev/a/b/c/d.js'

unrelative(process.cwd(), '!a/b/c/d.js');
//=> '!/home/user/dev/a/b/c/d.js'
```


## Author
**Charlike Mike Reagent**
+ [gratipay/tunnckoCore][author-gratipay]
+ [twitter/tunnckoCore][author-twitter]
+ [github/tunnckoCore][author-github]
+ [npmjs/tunnckoCore][author-npmjs]
+ [more ...][contrib-more]


## License [![MIT license][license-img]][license-url]
Copyright (c) 2015 [Charlike Mike Reagent][contrib-more], [contributors][contrib-graf].  
Released under the [`MIT`][license-url] license.


[npmjs-url]: http://npm.im/unrelative
[npmjs-img]: https://img.shields.io/npm/v/unrelative.svg?style=flat&label=unrelative

[coveralls-url]: https://coveralls.io/r/tunnckoCore/unrelative?branch=master
[coveralls-img]: https://img.shields.io/coveralls/tunnckoCore/unrelative.svg?style=flat

[license-url]: https://github.com/tunnckoCore/unrelative/blob/master/license.md
[license-img]: https://img.shields.io/badge/license-MIT-blue.svg?style=flat

[travis-url]: https://travis-ci.org/tunnckoCore/unrelative
[travis-img]: https://img.shields.io/travis/tunnckoCore/unrelative.svg?style=flat

[daviddm-url]: https://david-dm.org/tunnckoCore/unrelative
[daviddm-img]: https://img.shields.io/david/tunnckoCore/unrelative.svg?style=flat

[author-gratipay]: https://gratipay.com/tunnckoCore
[author-twitter]: https://twitter.com/tunnckoCore
[author-github]: https://github.com/tunnckoCore
[author-npmjs]: https://npmjs.org/~tunnckocore

[contrib-more]: http://j.mp/1stW47C
[contrib-graf]: https://github.com/tunnckoCore/unrelative/graphs/contributors

***

_Powered and automated by [kdf](https://github.com/tunnckoCore), March 15, 2015_