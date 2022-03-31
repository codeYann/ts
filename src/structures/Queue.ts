class qNode {
  public id: number;
  public status: boolean;
  public next: qNode | null;

  constructor(id: number, status: boolean) {
    this.id = id;
    this.status = status;
    this.next = null;
  }
}

class Queue {
  public head: qNode | null;
  public tail: qNode | null;
  public length: number;

  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
}

