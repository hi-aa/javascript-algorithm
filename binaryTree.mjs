// 이진트리 구현
// 하나의 노드에 값을 넣고, 자식 노드는 2개씩 가짐

class BinaryTree {
  constructor(data, leftTree = null, rightTree = null) {
    this.data = data;
    this.leftSubTree = leftTree;
    this.rightSubTree = rightTree;
  }

  // 현재 노드의 데이터를 리턴
  getData() {
    return this.data;
  }
  setData(data) {
    this.data = data;
  }

  // 자식노드를 리턴
  getLeftSubTree() {
    return this.leftSubTree;
  }
  getRightSubTree() {
    return this.rightSubTree;
  }
  // 자식 노드를 설정
  setLeftSubTree(tree) {
    this.leftSubTree = tree;
  }
  setRightSubTree(tree) {
    this.rightSubTree = tree;
  }

  // 자식 노드를 제거
  removeLeftSubTree() {
    let deletingNode = this.getLeftSubTree();
    this.setLeftSubTree(null);
    return deletingNode;
  }
  removeRigntSubTree() {
    let deletingNode = this.getRightSubTree();
    this.setRightSubTree(null);
    return deletingNode;
  }

  // 트리의 모든 데이터를 출력하려 함
  // 전위순회(루트노드-왼쪽자식-오른쪽자식 순) 방식으로 재귀호출을 이용하여 출력함
  preOrderTraversal(tree) {
    if(tree == null) return;

    console.log(tree.data);
    this.preOrderTraversal(tree.getLeftSubTree());
    this.preOrderTraversal(tree.getRightSubTree());
  }
  // 중위순회(왼쪽자식-루트노드-오른쪽자식 순) // 루트노더가 중간에 오기 때문에 중위순회임
  inOrderTraversal(tree) {
    if(tree == null) return;

    this.inOrderTraversal(tree.getLeftSubTree());
    console.log(tree.data);
    this.inOrderTraversal(tree.getRightSubTree());
  }
  // 후위순회(왼쪽자식-오른쪽자식-루트노드)
  postOrderTraversal(tree) {
    if(tree == null) return;

    this.postOrderTraversal(tree.getLeftSubTree());
    this.postOrderTraversal(tree.getRightSubTree());
    console.log(tree.data);
  }
}

export { BinaryTree };