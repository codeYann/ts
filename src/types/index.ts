/**
 * We can combine types in functions arguments and also in return types.
 *
*/

export function printId(id: number | number[]): void {
  if (typeof(id) == 'number') {
    console.log(`Your id is ${id}`);
    return;
  }
  id.forEach((item) => console.log(`All id's: ${item}`));
}

export const getId = (id: number | number[]): (number | number[]) => id;
