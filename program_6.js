// example for binary search tree

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
      const newNode = new Node(value);
      if (this.root === null) {
        this.root = newNode;
      } else {
        this.insertNode(this.root, newNode);
      }
    }
  
    insertNode(node, newNode) {
      if (newNode.value < node.value) {
        if (node.left === null) {
          node.left = newNode;
        } else {
          this.insertNode(node.left, newNode);
        }
      } else {
        if (node.right === null) {
          node.right = newNode;
        } else {
          this.insertNode(node.right, newNode);
        }
      }
    }
  
    search(value) {
      return this.searchNode(this.root, value);
    }
  
    searchNode(node, value) {
      if (node === null) return false;
      if (value < node.value) return this.searchNode(node.left, value);
      if (value > node.value) return this.searchNode(node.right, value);
      return true; // Value is found
    }
  }
  
  // Example usage
  const bst = new BinarySearchTree();
  bst.insert(10);
  bst.insert(5);
  bst.insert(15);
  bst.insert(3);
  bst.insert(7);
  
  console.log(bst.search(7));  // true
  console.log(bst.search(20)); // false
  