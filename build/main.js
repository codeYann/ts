"use strict";

var _typestest = require("./types/types-test");

var _functionsindex = require("./functions/functions-index");

_typestest.printId.call(void 0, 10);
_typestest.printId.call(void 0, [10, 15, 25, 30]);

console.log(_typestest.getId.call(void 0, 10));
console.log(_typestest.getId.call(void 0, [10, 15, 25, 30]));

const obj = _typestest.createInternalObject.call(
  void 0,
  10,
  true,
  "H2456JAKS$$S",
);
_typestest.showInternalObject.call(void 0, obj);

_functionsindex.greeter.call(
  void 0,
  _functionsindex.calling,
  "Yan Rodrigues da Silva",
);
