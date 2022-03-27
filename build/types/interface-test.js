'use strict';
Object.defineProperty(exports, '__esModule', { value: true }); /**
 * We can use interface to define an object type
 */

function createPerson(height, age, name) {
  return {
    height,
    age,
    name,
  };
}
exports.createPerson = createPerson;

function greetingPerson(person) {
  console.log(
    `What up dude. You're ${person.name}, ${person.age}, ${person.height}`,
  );
}
exports.greetingPerson = greetingPerson;
