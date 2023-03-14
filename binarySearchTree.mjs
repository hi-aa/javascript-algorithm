// 이진탐색트리
import { BinaryTree } from './binaryTree.mjs';

class BinarySearchTree {
  constructor(rootNode = null) {
    this.root = this.rootNode;
  }
  
  // 데이터 삽입
  // 중복된 데이터 없고 정렬이 된 상태의 이진트리라고 생각
  // 현재 노드를 기준으로 작은 값을 왼쪽, 큰 값을 오른쪽으로 두면서 data가 삽입될 위치를 찾음
  insert(data) {
    if(this.root == null) { // 최초 삽입시
      this.root = new BinaryTree(data);
      return;
    }
    
    let currentNode = this.root;
    let parentNode = null;

    while(currentNode != null) { // null의 위치가 data가 삽입될 위치임
      parentNode = currentNode;
      if(currentNode.getData() > data) {
        currentNode = currentNode.getLeftSubTree();
      } else if(currentNode.getData() < data) {
        currentNode = currentNode.getRightSubTree();
      } else { // 중복 허용하지 않음
        return;
      }
    }

    let newNode = new BinaryTree(data);
    if(parentNode.getData() > data) {
      parentNode.setLeftSubTree(newNode);
    } else {
      parentNode.setRightSubTree(newNode);
    }
  }

  // 특정값을 찾음
  search(targetData) {
    let currentNode = this.root;
    while(currentNode != null) {
      if(currentNode.getData() == targetData) {
        return currentNode;
      } else if(currentNode.getData() > targetData) {
        currentNode = currentNode.getLeftSubTree();
      } else {
        currentNode = currentNode.getRightSubTree();
      }
    }

    return null; // 결과 없음
  }

  // 노드를 제거
  // 1. 터미널 노드(자식이 없는 노드)를 제거하는 경우
  // 2. 자식이 하나 있는 노드를 제거하는 경우
  // 3. 자식이 둘 있는 노드를 제거하는 경우
  remove(targetData) {
    let fakeParentNode = new BinaryTree(0); // root의 부모가 없으므로 임의로 하나 지정함
    let parentNode = fakeParentNode;
    let currentNode = this.root;
    let deletingNode = null; // 제거할 노드

    fakeParentNode.setRightSubTree(this.root);
    while(currentNode != null && currentNode.getData() != targetData) { // 노드를 찾아 내려가면서 targetData 값을 가진 노드 위치를 구함
      parentNode = currentNode;
      if(currentNode.getData() > targetData) {
        currentNode = currentNode.getLeftSubTree();
      } else {
        currentNode = currentNode.getRightSubTree();
      }
    }

    if(currentNode == null) { // 제거할 노드가 없음
      return;
    }

    deletingNode = currentNode;
    // 1. 터미널 노드(자식이 없는 노드)를 제거하는 경우
    if(deletingNode.getLeftSubTree() == null && deletingNode.getRightSubTree() == null) {
      if(parentNode.getLeftSubTree() == deletingNode) {
        parentNode.removeLeftSubTree();
      } else {
        parentNode.removeRigntSubTree();
      }
    }
    // 2. 자식이 하나 있는 노드를 제거하는 경우
    else if(deletingNode.getLeftSubTree() == null || deletingNode.getRightSubTree() == null) {
      // deletingNode의 자식노드를 deletingNode의 부모와 연결
      let deletingNodeChild = deletingNode.getLeftSubTree() != null 
          ? deletingNode.getLeftSubTree() : deletingNode.getRightSubTree();

      if(parentNode.getLeftSubTree() == deletingNode) {
        parentNode.setLeftSubTree(deletingNodeChild);
      } else {
        parentNode.setRightSubTree(deletingNodeChild);
      }
    }
    // 3. 자식이 둘 있는 노드를 제거하는 경우
    else {
      // 자식 중 하나가 삭제된 노드를 대체해야 함
      // 삭제된 노드의 왼쪽 자식노드 중 가장 큰 값 (왼쪽 노드 중 맨 끝 오른쪽) 
      // or 오른쪽 자식노드 중 가장 작은 값을 선택 가능 (오른쪽 노드 중 맨 끝 왼쪽)

      // 왼쪽 자식노드의 가장 큰 노드를 교체
      let replacingNode = deletingNode.getLeftSubTree(); // 삭제할 노드의 위치로 교체될 노드
      let replacingNodeParent = deletingNode; // replacing의 자식을 가져갈 노드
      while(replacingNode.getRightSubTree() != null) {
        replacingNodeParent = replacingNode;
        replacingNode = replacingNode.getRightSubTree();
      }

      let deletingNodeData = deletingNode.getData(); // 삭제할 값을 임시 저장
      deletingNode.setData(replacingNode.getData()); // 값 교체
      // replacing이 기존에 가지고 있던 자식을 replacingParent에게 연결해줌
      if(replacingNodeParent.getLeftSubTree() == replacingNode) { // replacing이 오른쪽인지 왼쪽인지 판별
        replacingNodeParent.setLeftSubTree(replacingNode.getLeftSubTree()); // replacing은 삭제된 노드의 왼쪽 노드 중 가장 큰 값이니 오른쪽은 존재하지 않음
      } else {
        replacingNodeParent.setRightSubTree(replacingNode.getLeftSubTree());
      }

      deletingNode = replacingNode; // 기존에 있던 replacing 데이터는 deleting위치에 덮어 씌웠고
      deletingNode.setData(deletingNodeData); // deletingData를 설정하여 반환
    }

    if(fakeParentNode.getRightSubTree() != this.root) { // 루트노드가 변경된 경우
      this.root = fakeParentNode.getRightSubTree();
    }
    return deletingNode;
  }
}

let binarySearchTree = new BinarySearchTree();
binarySearchTree.insert(18);
binarySearchTree.insert(15);
binarySearchTree.insert(10);
binarySearchTree.insert(6);
binarySearchTree.insert(3);
binarySearchTree.insert(8);
binarySearchTree.insert(7);
binarySearchTree.insert(12);
binarySearchTree.insert(11);
binarySearchTree.insert(31);
binarySearchTree.insert(27);
binarySearchTree.insert(24);
binarySearchTree.insert(20);
binarySearchTree.insert(33);
binarySearchTree.insert(35);
binarySearchTree.insert(37);
binarySearchTree.root.inOrderTraversal(binarySearchTree.root); //중위순회로 출력

console.log("=========== Search ==========");
console.log("6>> ", binarySearchTree.search(6));
console.log("1>> ", binarySearchTree.search(1));

console.log("=========== Delete ==========");
binarySearchTree.remove(10);
binarySearchTree.root.inOrderTraversal(binarySearchTree.root); //중위순회로 출력