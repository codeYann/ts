/**
 * We can combine types in functions arguments and also in return types.
 */

type credential = number | number[]; // we can use type alias to define new type
export type internalObject = { id: number; hash: string; status: boolean };

export function printId(id: credential): void {
  if (typeof (id) == 'number') {
    console.log(`Your id is ${id}`);
    return;
  }
  id.forEach((item) => console.log(`All id's: ${item}`));
}

export const getId = (id: credential): credential => id;

export const createInternalObject = (
  id: number,
  status: boolean,
  hash: string,
): internalObject => {
  return {
    id,
    status,
    hash,
  };
};

export const showInternalObject = (object: internalObject): void => {
  for (const k in object) {
    if (Object.prototype.hasOwnProperty.call(object, k)) {
      console.log(k);
    }
  }
};

