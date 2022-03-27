'use strict';

function createNode(id, status) {
  const newNode = {
    id,
    status,
    next: null,
  };
  return newNode;
}

function createQueue() {
  const newQueue = {
    head: null,
    tail: null,
    length: 0,
  };
  return newQueue;
}

function Append(id, status) {
  let node = createNode(id, status);
}
