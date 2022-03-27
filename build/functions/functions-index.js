'use strict';
Object.defineProperty(exports, '__esModule', { value: true }); /**
 * Functions can be a type as well.
 */

function greeter(f, s) {
  f(s);
}
exports.greeter = greeter;

function calling(message) {
  let str = message
    .split('')
    .map((letters) => letters.toUpperCase())
    .forEach((letters) => console.log(letters));
}
exports.calling = calling;
