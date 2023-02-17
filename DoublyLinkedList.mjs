// 연결리스트 구현
class Node {
  constructor(data, next = null, prev = null) {
    this.data = data; 
    this.next = next;
    this.prev = prev;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null; // next node
    this.tail = null; // prev node
    this.count = 0;
  }

  // 모든 연결리스트 정보를 출력한다
  printAll() {
    let currentNode = this.head;
    let text = '[';
    while(currentNode != null) {
      text += currentNode.data;
      currentNode = currentNode.next;

      if(currentNode != null) text += ', ';
    }
    text += ']';
    console.log(text)
  }
  
  // 연결리스트 clear
  clear() {
    this.head = null;
    this.count = 0;
  }

  // 특정 인덱스에 값을 삽입한다
  insertAt(index, data) {
    if(index > this.count || index < 0) {
      throw new Error('범위를 벗어났습니다.');
    }

    let newNode = new Node(data);

    if(index === 0) { // head에 삽입하는 경우
      newNode.next = this.head;
      if(this.head != null) { // 최초삽입 아님
        this.head.prev = newNode;
      }
      this.head = newNode;

    } else if(index == this.count) { // tail에 삽입하는 경우
      newNode.head = null;
      newNode.prev = this.tail;
      this.tail.next = newNode;

    } else {
      let currentNode = this.head;
      for(let i = 0; i < index - 1; i++) { // 삽입하고자 하는 위치(index)의 이전 노드를 찾기
        currentNode = currentNode.next;
      }
      newNode.next = currentNode.next;
      newNode.prev = currentNode;
      currentNode.next = newNode;
      currentNode.next.prev = newNode;
    }

    if(newNode.next == null) { // 마지막 노드를 입력한 경우
      this.tail = newNode; // tail로 설정
    }

    this.count ++;

  }

  // 마지막 인덱스에 삽입한다
  insertLast(data) {
    this.insertAt(this.count, data);
  }

  // 특정 인덱스의 값을 제거한다.
  deleteAt(index) {
    if(index > this.count || index < 0) {
      throw new Error('범위를 벗어났습니다.');
    }

    let currentNode = this.head;

    if(index === 0) { // head를 삭제
      let deletedNode = this.head;
      if(this.head.next == null) {
        this.head = null;
        this.tail = null;
      } else {
        this.head = this.head.next;
        this.head.prev = null;
      }
      this.count --;
      return deletedNode;

    } else if(index == this.count - 1) { // tail을 삭제
      let deletedNode = this.tail;
      this.tail.prev.next = null;
      this.tail = this.tail.prev;
      this.count --;
      return deletedNode;

    } else {
      for(let i = 0; i < index - 1; i++) { 
        currentNode = currentNode.next; // 제거할 노드의 이전 노드
      }

      let deletedNode = currentNode.next;
      currentNode.next = currentNode.next.next;
      currentNode.next.prev = currentNode;
      this.count --;
      return deletedNode;
    }
  }

  // 마지막 노드를 삭제
  deleteLast() {
    return this.deleteAt(this.count - 1);
  }

  // 특정 인덱스의 값을 읽기
  getNodeAt(index) {
    if(index > this.count || index < 0) {
      throw new Error('범위를 벗어났습니다.');
    }

    let currentNode = this.head;
    for(let i = 0; i < index; i++) {
      currentNode = currentNode.next;
    }
    return currentNode;
  }
}

export { Node, DoublyLinkedList };