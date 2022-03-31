"use strict";
Object.defineProperty(exports, "__esModule", { value: true }); /*
* Generics are used when we want to relate types from parameters and from output.
* Some cases we dont need use generics because we can just use primitive types
* */

// using alias type

function useState() {
  let state;

  function getState() {
    return state;
  }

  function setState(newState) {
    state = newState;
  }

  return { getState, setState };
}
exports.useState = useState;
