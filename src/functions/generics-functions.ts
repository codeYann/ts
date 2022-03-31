/*
* Generics are used when we want to relate types from parameters and from output.
* Some cases we dont need use generics because we can just use primitive types
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

