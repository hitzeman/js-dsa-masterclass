class HashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }

  hash(key) {
    let total = 0;
    let WEIRD_PRIME = 31;

    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total * WEIRD_PRIME + value) % this.keyMap.length;
    }
    return Math.abs(total);
  }

  get(key) {
    let index = this.hash(key);

    // if keyMap has no value at hashedKey, return undefined
    if (this.keyMap[index]) {
      for (let kvp of this.keyMap[index]) {
        if (key === kvp[0]) {
          return kvp[1];
        }
      }
    }
    return undefined;
  }

  set(key, value) {
    let index = this.hash(key);
    if (!this.keyMap[index]) {
      this.keyMap[index] = [];
    }
    this.keyMap[index].push([key, value]);
  }

  keys() {
    let keys = [];

    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          if (!keys.includes(this.keyMap[i][j][0])) {
            keys.push(this.keyMap[i][j][0]);
          }
        }
      }
    }
    return keys;
  }

  values() {
    let values = [];

    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          if (!values.includes(this.keyMap[i][j][1])) {
            values.push(this.keyMap[i][j][1]);
          }
        }
      }
    }
    return values;
  }
}

/* Naive implementation
  function hash(key, arrayLen) {
    let total = 0;
    for (let char of key) {
      let value = char.charCodeAt(0) - 96;
      total+=value;
    }
    return total % arrayLen;
}
*/

let hashTable = new HashTable(13);
hashTable.set('aaa', 'a');
hashTable.set('e', 'e');
hashTable.set('x', 'xxxx');
hashTable.set('x', 'xxxx');

console.log(hashTable.keys());
console.log(hashTable.values());
