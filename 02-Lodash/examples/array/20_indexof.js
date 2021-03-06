/**
 * indexOf example
 */

'use strict';
var _ = require('../../node_modules/lodash');

console.log(_.indexOf([1, 2, 1, 2], 2));
// => 1

// Search from the `fromIndex`.
console.log(_.indexOf([1, 2, 1, 2], 2, 2));
// => 3