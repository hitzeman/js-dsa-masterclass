class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  /* Push pseudocode
  * Create a new node with val
  * If no items, set head and tail to newNode
  * Otherwise, set newNode prev to current tail
  * Set current tail's next property to new node
  * Set current tail to newNode
  */
  push(val) {
    let newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length++;
    return this;
  }

  /* Pop psuedocode
  * If empty, return null
  * Store tail in temp var
  * If one item, set head and tail to null and return temp 
  * Set tail prev to null
  * Return temp
  * Decrement by 1
  */

  pop() {
    if (!this.head) return undefined;

    let popped = this.tail;

    if (!this.tail.prev) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = popped.prev;
      this.tail.next = null;
      popped.prev = null;
    }

    this.length--;
    return popped;
  }

  /* Shift psuedocode
  * If empty return undefined
  * If one item
  * * Store prev head and set next ot null
  * * Set head and tail to null
  * If more than one item
  * * Store prev head and set next to null
  * * Set head to prev.next
  * * Set head.prev to null
  * Decrement count
  * Return prev
  */

  shift() {
    if (!this.head) return undefined;

    let shifted = this.head;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
      this.head.prev = null;
      shifted.next = null;
    }

    this.length--;
    return shifted;
  }

  /* Unsift psuedocode
    * Create a new node with value
    * If no nodes, set head and tail to new node
    * Otherwise
    * * set new node's next property to current head
    * * set current head's prev property to new node
    * * set head to be the new node
    * Increment length by 1
    * Return list
    */

  unshift(val) {
    let newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }

    this.length++;
    return this;
  }

  /* Get pseudocode
  * Write a function that takes an index
  * If index < 0 or index >= length, return null
  * Store head in variable
  * Store count in variable
  * Iterate over each node until index === count and return node
  */

  get(index) {
    if (index < 0 || index >= this.length) return undefined;

    let current;
    let count;
    let middle = Math.floor(this.length / 2);

    if (index <= middle) {
      current = this.head;
      count = 0;

      while (count < index) {
        current = current.next;
        count++;
      }
    } else {
      current = this.tail;
      count = this.length - 1;

      while (count > index) {
        current = current.prev;
        count--;
      }
    }

    return current;
  }

  set(index, value) {
    let node = this.get(index);

    if (!node) {
      return false;
    } else {
      node.val = value;
      return true;
    }
  }

  insert(index, value) {
    if (index < 0 || index > this.length) return false;

    let newNode = new Node(value);
    let afterNode = this.get(index);
    let prev = afterNode.prev;

    if (index === 0) return this.unshift(value);
    else if (index === this.length) return this.push(value);
    prev.next = newNode;
    newNode.prev = prev;
    newNode.next = afterNode;
    afterNode.prev = newNode;
    this.length++;
    return true;
  }

  remove(index) {
    if (index < 0 || index >= this.length) return null;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();

    let remove = this.get(index);
    let before = this.get(index - 1);
    let after = this.get(index + 1);
    
    remove.prev = null;
    remove.next = null;
    before.next = after;
    after.prev = before;

    this.length--;
    return remove;
  }

  reverse() {
    if (!this.length) return null;
    if (this.length === 1) return this;

    let reversed = new DoublyLinkedList();
    let current = this.head;
    while (current) {
      reversed.unshift(current.val);
      current = current.next;
    }
    return reversed;
  }
}



let list = new DoublyLinkedList();
list.push(1);
list.push(2);
list.push(3);
list.push(4);
let a = list.reverse();
// let b = list.shift();
// let c = list.shift();

//console.log(a);
// console.log(b);
// console.log(c);
//console.log(list);