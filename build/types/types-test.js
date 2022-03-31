"use strict";
Object.defineProperty(exports, "__esModule", { value: true }); /**
 * We can combine types in functions arguments and also in return types.
 */

function printId(id) {
  if (typeof (id) == "number") {
    console.log(`Your id is ${id}`);
    return;
  }
  id.forEach((item) => console.log(`All id's: ${item}`));
}
exports.printId = printId;

const getId = (id) => id;
exports.getId = getId;

const createInternalObject = (
  id,
  status,
  hash,
) => {
  return {
    id,
    status,
    hash,
  };
};
exports.createInternalObject = createInternalObject;

const showInternalObject = (object) => {
  for (const k in object) {
    if (Object.prototype.hasOwnProperty.call(object, k)) {
      console.log(k);
    }
  }
};
exports.showInternalObject = showInternalObject;
