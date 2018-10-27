class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  enqueue(value) {
    let newNode = new Node(value);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }

    return ++this.size;
  }

  dequeue() {
    if (!this.first) return null;

    let removed = this.first;

    if (this.size === 1) {
      this.first = null;
      this.last = null;
    } else {
      this.first = removed.next;
    }

    this.size--;
    return removed.value;
  }
}

let q = new Queue();
q.enqueue("ONE");
q.enqueue("TWO");
q.enqueue("THREE");

console.log(q.dequeue());
console.log(q.dequeue());
console.log(q.dequeue());
console.log(q.dequeue());
