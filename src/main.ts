import {
  createInternalObject,
  getId,
  internalObject,
  printId,
  showInternalObject,
} from './types/types-test';

import {calling, greeter} from './functions/functions-index';
import {useState} from './functions/generics-functions';

printId(10);
printId([10, 15, 25, 30]);

console.log(getId(10));
console.log(getId([10, 15, 25, 30]));

const obj: internalObject = createInternalObject(10, true, 'H2456JAKS$$S');
showInternalObject(obj);
greeter(calling, 'Yan Rodrigues da Silva');

let privateState = useState();
privateState.setState([10, 15]);

console.log(privateState.getState());

privateState.setState(['a', 'b']);

console.log(privateState.getState());

