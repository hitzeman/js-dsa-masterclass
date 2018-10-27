class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null
    this.last = null;
    this.size = 0;
  }

  push(value) {
    let newNode = new Node(value);

    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      newNode.next = this.first;
      this.first = newNode;
    }

    this.size++;
    return this.size;
  }

  pop() {
    if (!this.first) return null;

    let popped = this.first;

    if (this.size === 1) {
      this.first = null;
      this.last = null;
    } else {
      this.first = popped.next;
    }

    this.size--;
    return popped.value;
  }
}

let stack = new Stack();
stack.push(1);
stack.push(2);
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack);