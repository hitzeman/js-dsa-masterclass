class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    let newNode = new Node(value);

    if (!this.root) {
      this.root = newNode;
      return this;
    } else {
      var current = this.root;

      while (true) {
        if (value === current.value) return undefined;

        if (value < current.value) {
          if (current.left === null) {
            current.left = newNode;
            return this;
          } else {
            current = current.left;
          }
        } else if (value > current.value) {
          if (current.right === null) {
            current.right = newNode;
            return this;
          } else {
            current = current.right;
          }
        }
      }
    }
  }

  // contains(value) {
  //   if (!this.root) return false;

  //   let current = this.root;

  //   while(current) {
  //     if (value === current.value) {
  //       return true;
  //     } else if (value < current.value) {
  //       current = current.left;
  //     } else {
  //       current = current.right;
  //     }
  //   }

  //   return false;
  // }

  find(value) {
    if (!this.root) return false;

    let current = this.root;
    let found = false;
    while (current && !found) {
      if (value === current.value) {
        found = true;
      } else if (value < current.value) {
        current = current.left;
      } else {
        current = current.right;
      }
    }

    if (!found) return undefined;
    return current;
  }

  /* Breadth First Search
   *      10
   *   6     15
   * 3  8       20
   * 
   * bfs() --> [10, 6, 15, 3, 8, 20]
   */

  bfs() {
    let queue = [];
    let visited = [];
    let current = this.root;

    queue.push(current);

    while (queue.length) {
      current = queue.shift();
      visited.push(current.value);

      if (current.left) {
        queue.push(current.left);
      }

      if (current.right) {
        queue.push(current.right);
      }
    }

    return visited;
  }

  /* Depth First Search
 *      10
 *   6     15
 * 3  8       20
 */

  /* PreOrder
  * Create a var to store the values of nodes visited
  * Store the root of the BST in a var called current
  * Write a helper function which accepts a node
  ** Push the value of the node to the visited array
  ** If the node has a left, call the helper function with the left node
  ** If the node has a right, call the helper function with the right node
  * Invoke helper function with current var
  * Return visited array
  * dfs() --> [10,6,3,8,15,20]
  */

  dfsPreOrder() {
    let visited = [];
    let current = this.root;

    function traverse(node) {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      visited.push(node.value);
    }

    traverse(current);
    return visited;
  }

  /* Post Order */
dfsPostOrder() {
  let visited = [];
  let current = this.root;

  function traverse(node) {
    if (node.left) traverse(node.left);
    if(node.right) traverse(node.right);
    visited.push(node.value);
  }

  traverse(current);
  return visited;
}

  /* In Order */
  dfsInOrder() {
    let visited = [];
    let current = this.root;
  
    function traverse(node) {
      if (node.left) traverse(node.left);
      visited.push(node.value);
      if(node.right) traverse(node.right);
    }
  
    traverse(current);
    return visited;
  }



}

//      10
//   5      13
// 2  7   11  16

var bst = new BinarySearchTree();
bst.insert(10);
bst.insert(6);
bst.insert(15);
bst.insert(3);
bst.insert(8);
bst.insert(20);
bst.insert(1);
bst.insert(4);

console.log(bst.dfsInOrder());


