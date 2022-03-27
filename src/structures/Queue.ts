type queueNode = {
  id: number,
  status: boolean,
  next: queueNode | null,
};

type Queue = {
  head: queueNode | null,
  tail: queueNode | null,
  length: number,
};

function createNode(id: number, status: boolean): queueNode {
  const newNode: queueNode = {
    id,
    status,
    next: null,
  };
  return newNode;
};

function createQueue(): Queue {
  const newQueue: Queue = {
    head: null,
    tail: null,
    length: 0,
  };
  return newQueue;
};

function Append(id: number, status: boolean) {
  let node = createNode(id, status); 
}

