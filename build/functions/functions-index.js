"use strict";
Object.defineProperty(exports, "__esModule", { value: true }); /**
 * Functions can be a type as well.
 */

// using type alias to create type for callback

function greeter(f, s) {
  f(s);
}
exports.greeter = greeter;

function calling(message) {
  let str = message
    .split("")
    .map((letters) => letters.toUpperCase());
  str.forEach((letters) => console.log(letters));
  return str;
}
exports.calling = calling;
