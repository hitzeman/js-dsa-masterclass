class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  insert(value) {
    this.values.push(value);
    this.bubbleUp();
  }

  bubbleUp() {
    let index = this.values.length - 1;
    const element = this.values[index];

    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      let parent = this.values[parentIndex];
      if (element <= parent) break;
      // swap
      this.values[parentIndex] = element;
      this.values[index] = parent;
      index = parentIndex;
    }
  }

  extractMax() {
    const max = this.values[0];
    const end = this.values.pop();

    if (this.values.length > 0){
      this.values[0] = end;
      this.sinkDown();
    }

    return max;
  }

  sinkDown() {
    let index = 0;
    const length = this.values.length;
    const element = this.values[0];

    while (true) {
      let leftChildIndex = 2 * index + 1;
      let rightChildIndex = 2 * index + 2;
      let leftChild, rightChild;
      let swap = null;

      if (leftChildIndex < length) {
        leftChild = this.values[leftChildIndex];
        if (leftChild > element) {
          swap = leftChildIndex;
        } 
      }
      
      if (rightChildIndex < length) {
        rightChild = this.values[rightChildIndex];
        if ((swap === null && rightChild > element) || (swap !== null && rightChild > leftChild)) {
          swap = rightChildIndex;
        }
      }
      
      if (swap === null) break;
      this.values[index] = this.values[swap];
      this.values[swap] = element;
      index = swap;
    }
  }

  extractMaxInitial() {
    this.swap(this.values, 0, this.values.length - 1);
    let extracted = this.values.pop();

    let parentIndex = 0;

    while (parentIndex !== this.values.length - 1) {
      let leftIndex = 2 * parentIndex + 1;
      let rightIndex = 2 * parentIndex + 2;

      if (!leftIndex || !rightIndex) break;

      let parent = this.values[parentIndex];
      let left = this.values[leftIndex];
      let right = this.values[rightIndex];

      if (parent > left && parent > right) break;

      if (left > parent && right > parent) {
        let largest = Math.max(left, right);
        let largestIndex = largest === left ? leftIndex : rightIndex
        this.swap(this.values, parentIndex, largestIndex);
        parentIndex = largestIndex;
      } else if (left > parent) {
        this.swap(this.values, parentIndex, leftIndex);
        parentIndex = leftIndex;
      } else if (right > parent) {
        this.swap(this.value, parentIndex, rightIndex);
        parentIndex = rightIndex;
      }
    }

    return extracted;
  }

  swap(arr, index1, index2) {
    var temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
  }
}



let heap = new MaxBinaryHeap();
heap.insert(41);
heap.insert(39);
heap.insert(33);
heap.insert(18);
heap.insert(27);
heap.insert(12);
heap.extractMax();
console.log(heap.values)

// [41,39,33,18,27,12]
//  0  1  2  3  4  5  

// [12,39,33,18,27]
//  0  1  2  3  4 
// parentIndex = 0;
// parent = 12
// left = 39
// right = 33

// if parent > left && parent > right break;
// if (left > parent && right > parent) 
/// swap parent with larger value
/// else if (left > parent) swap parent and left
/// else swap parent and right
/// update parentIndex = swappedIndex

// [12,39,33,18,27]
//  0  1  2  3  4 

// [39,12,33,18,27]
//  0  1  2  3  4 