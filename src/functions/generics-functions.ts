/*
* Generics são usados quando precisamos relacionar mais de um tipo para uma função
* Nas situações onde "Aqui poderia ser mais de um tipo"
* */

type defaultType = number[] | string[]; // using alias type

export function useState<T extends defaultType>() {
  let state: T;

  function getState(): T {
    return state;
  }

  function setState(newState: T): void {
    state = newState;
  }

  return { getState, setState };
}

// using combine <T | E> on function call
export function combined<T>(list: T[], array: T[]): T[] {
  return list.concat(array);
}
