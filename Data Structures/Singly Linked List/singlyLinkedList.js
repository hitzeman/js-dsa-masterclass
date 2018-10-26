class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  /* Push pseudocode
   * Function should accept a value
   * Create a new node using the value passed to the function
   * If there is no head, set head and tail to be newly created node
   * Else, if there is a head, set the next proeprty on tail to be new node and set the tail property on the list to be the newly created node
   * Increment length and return linkedList
  */

  push(val) {
    let newNode = new Node(val);

    if (this.head === null) {
      this.head = newNode;
    } else {
      this.tail.next = newNode;
    }

    this.tail = newNode;
    this.length++;

    return this;
  }

  /* Pop pseudocode
 * If there are no nodes in the list, return undefined
 * Loop through entire list until you reach the tail
 * Keep trak of previous node
 * Set the next property of 2nd to last node to be null
 * Set the tail to be the 2nd to last node
 * Decrment 1
 * return the value of removed node
*/

  pop() {
    if (!this.head) {
      return undefined;
    }

    let current = this.head;
    let prev = current;

    while (current.next) {
      prev = current;
      current = current.next;
    }

    if (!prev) {
      this.head = null;
      this.tail = null;
    } else {
      prev.next = null;
      this.tail = prev;
    }

    this.length--;

    return current.val;
  }

  /* Shift pseudocode
  * If there are no nodes in the list, return undefined
  * Store current head property in var
  * Set the head property to be the current head's next property
  * Decrement by 1
  * Return the value of removed node
  */

  shift() {
    if (!this.head) return undefined;

    var current = this.head;

    if (!current.next) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = current.next;
    }

    this.length--;
    return current.val;
  }

  /* Unshift pseudocode
* Function should accept a value
* Create new node using the value passed to the function
* If no head, set the head and tail to be newly created node
* Otherwise set the newly created node's next property to be the current head on the list
* Set the head on the list to be newly created node
* Increment
* Return linked list
*/

  unshift(val) {
    let newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length++;
    return this;
  }

  /* Get pseudocode
  * Function should accept an index
  * If index is < 0 or greater than or equal to the length of the list, return null
  * Loop through the list until you reach index and return the node at the specific index
  */
  // a --> b --> c
  get(index) {
    if (index < 0 || index >= this.length) return null;

    let counter = 0;
    let current = this.head;

    while (counter < index) {
      counter++;
      current = current.next;
    }

    return current;
  }

  /* Set pseudocode
  * Function should accept an index and a value
  * Use get function to find specific node
  * If node is not found, return false
  * If node is found, set the value of that node to be the value passed and and return true
  */

  set(index, value) {
    let node = this.get(index);

    if (!node) {
      return false;
    } else {
      node.val = value;
      return true;
    }
  }

  /* Insert pseudocode
* Function should accept an index and a value
* If index < 0 or greater than length, return false
* If index is same as length, push new node to the end of the list
* if index is 0, unshift a new node to the start of the list
* Otherwise, using get method, access the node at index - 1 to get node before
* Create new prev node and connect pathway from prev to new 
* Increment length
* return true
*/
  // a --> c --> d
  //      ^ b
  insert(index, value) {
    if (index < 0 || index > this.length) {
      return false;
    }

    if (index === this.length) {
      return !!this.push(value);
    }

    if (index === 0) {
      return !!this.unshift(value);
    }
    let previous = this.get(index - 1);
    let newNode = new Node(value);

    newNode.next = previous.next;
    previous.next = newNode;
    this.length++;
    return true;
  }

  /* Remove pseudocode
* Function should accept an index
* If index < 0 or greater than length, return undefined
* Decrement length
* return removed node
*/
// a --> b --> c
  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();

    let prev = this.get(index - 1);
    let removed = prev.next;

    prev.next = removed.next;
    this.length--;
    return removed;
  }

  /* Reverse
  * 
  */ 
 // 1 --> 2 --> 3 --> 4
 // 4 --> 3 --> 2 --> 1

 // 4 --> 2 --> 3 --> 1
  reverse() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;
    let prev = null;
    let next = null;
    for (var i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next
    }
    return this;
  }
}



var list = new SinglyLinkedList();

list.push(13);
list.push(27);
list.push(32);
list.push(71);
list.reverse();

console.log(list);

