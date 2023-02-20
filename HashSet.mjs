// 순서가 없고 중복이 없는 데이터의 집합
// HashTable을 이용해서 구현. value가 key가 됨
import { HashTable } from './HashTable.mjs';

class HashSet {
  constructor() {
    this.hashTable = new HashTable();
  }

  add(data) {
    if(this.hashTable.get(data) == null) {
      this.hashTable.set(data, -1);
    }
  }

  // 해당 값이 있는지 체크
  isContain(data) {
    return this.hashTable.get(data) != null; 
  }

  remove(data) {
    this.hashTable.remove(data);
  }

  // set을 비움
  clear() {
    for(let i = 0; i< this.hashTable.arr.length; i++) {
      this.hashTable.arr[i].clear();
    }
  }

  isEmpty() {
    let empty = true;
    for(let i = 0; i < this.hashTable.arr.length; i++) {
      if(this.hashTable.arr[i].count > 0) {
        empty = false;
        break
      }
    }

    return empty;
  }

  printAll() {
    for(let i = 0; i < this.hashTable.arr.length; i++) {
      let currentNode = this.hashTable.arr[i].head;
      while(currentNode != null) {
        console.log(currentNode.data.key);
        currentNode = currentNode.next;
      }
    }
  }
}

export { HashSet }