import { DoublyLinkedList } from './DoublyLinkedList.mjs';

class Queue { // FIFO
  constructor() {
    this.list = new DoublyLinkedList();
  }

  // 데이터 삽입
  enqueue(data) { // index 0
    this.list.insertAt(0, data);
  }

  // 데이터 삭제
  dequeue() { // index last
    try {
      return this.list.deleteLast();
      
    } catch (error) {
      return null;
    }
  }

  // 데이터 참조
  front() {
    return this.list.tail;
  }

  // 공백체크
  isEmpty() {
    return this.list.count == 0;
  }
}

export { Queue };