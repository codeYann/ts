import {
  printId,
  getId,
  createInternalObject,
  internalObject,
  showInternalObject,
} from './types/types-test';

import {greeter, calling} from './functions/functions-index';


printId(10);
printId([10, 15, 25, 30]);

console.log(getId(10));
console.log(getId([10, 15, 25, 30]));

const obj: internalObject = createInternalObject(10, true, 'H2456JAKS$$S');
showInternalObject(obj);

greeter(calling, 'Yan Rodrigues da Silva');