import { DoublyLinkedList } from './DoublyLinkedList.mjs';

class HashData {
  constructor(key, value) {
    this.key = key;
    this.value = value;
  }
}

// HashTable은 hashFunction를 통한 계산으로 데이터의 인덱스를 다시 지정해서 저장함 O(1)
// 여러개의 value가 동일한 인덱스에 들어가게 되면 연결리스트로 저장. 해당 인덱스 내에서 O(n)
// 따라서 hashFunction의 성능에 따라 HashTable의 성능이 달라질 수 있음
class HashTable {
  constructor() {
    this.arr = [];
    for(let i = 0; i< 10; i++) {
      this.arr[i] = new DoublyLinkedList(); // 반 공간으로 생성, 초기화
    }
  }

  // number의 인덱스를 반환받음
  hashFunction(number) {
    return number % 10;
  }

  set(key, value) {
    // array의 인덱스는 hashFunction을 통해 얻음
    // 해당 위치에 HashData를 data로 추가함
    this.arr[this.hashFunction(key)].insertAt(0, new HashData(key, value));
  }

  get(key) {
    // key를 이용해 해당 인덱스의 DoubleyLinkedList를 찾음
    let currentNode = this.arr[this.hashFunction(key)].head;
    
    while(currentNode != null) { // 연결리스트의 데이터를 순회하며
      // 일치하는 key를 찾기
      if(currentNode.data.key == key) {
        return currentNode.data.value;
      }
      currentNode = currentNode.next;
    }

    return null;
  }

  remove(key) {
    let list = this.arr[this.hashFunction(key)];
    let currentNode = list.head;
    let deletedIndex = 0;

    while(currentNode != null) { // index위치의 연결리스트를 순회하며 일치하는 key 찾기
      if(currentNode.data.key == key) {
        return list.deleteAt(deletedIndex);
      }
      currentNode = currentNode.next;
      deletedIndex ++;
    }

    return null;
  }
}

export {HashTable}