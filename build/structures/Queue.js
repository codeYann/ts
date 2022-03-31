"use strict";
class qNode {
  constructor(id, status) {
    this.id = id;
    this.status = status;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
}
