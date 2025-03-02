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
  
    // Insert a value into the tree
    insert(value) {
      const newNode = new Node(value);
      if (this.root === null) {
        this.root = newNode;
      } else {
        this._insertNode(this.root, newNode);
      }
    }
  
    // Helper method for insertion
    _insertNode(node, newNode) {
      if (newNode.value < node.value) {
        if (node.left === null) {
          node.left = newNode;
        } else {
          this._insertNode(node.left, newNode);
        }
      } else {
        if (node.right === null) {
          node.right = newNode;
        } else {
          this._insertNode(node.right, newNode);
        }
      }
    }
  
    // Preorder Traversal: Root, Left, Right
    preorder(node = this.root) {
      if (node !== null) {
        console.log(node.value);
        this.preorder(node.left);
        this.preorder(node.right);
      }
    }
  
    // Inorder Traversal: Left, Root, Right
    inorder(node = this.root) {
      if (node !== null) {
        this.inorder(node.left);
        console.log(node.value);
        this.inorder(node.right);
      }
    }
  
    // Postorder Traversal: Left, Right, Root
    postorder(node = this.root) {
      if (node !== null) {
        this.postorder(node.left);
        this.postorder(node.right);
        console.log(node.value);
      }
    }
  
    // Level Order Traversal: Breadth-first search
    levelOrder() {
      if (this.root === null) {
        return;
      }
      const queue = [];
      queue.push(this.root);
  
      while (queue.length > 0) {
        const node = queue.shift();
        console.log(node.value);
        
        if (node.left !== null) {
          queue.push(node.left);
        }
        
        if (node.right !== null) {
          queue.push(node.right);
        }
      }
    }
  
    // Search for a value in the tree
    search(value) {
      return this._searchNode(this.root, value);
    }
  
    // Helper method for search
    _searchNode(node, value) {
      if (node === null) {
        return false;
      }
  
      if (value < node.value) {
        return this._searchNode(node.left, value);
      } else if (value > node.value) {
        return this._searchNode(node.right, value);
      }
      return true;
    }
  
    // Find the minimum value (leftmost node)
    findMin() {
      let current = this.root;
      while (current && current.left !== null) {
        current = current.left;
      }
      return current ? current.value : null;
    }
  
    // Find the maximum value (rightmost node)
    findMax() {
      let current = this.root;
      while (current && current.right !== null) {
        current = current.right;
      }
      return current ? current.value : null;
    }
  }
  
  // Example Usage:
  const bst = new BinarySearchTree();
  bst.insert(50);
  bst.insert(30);
  bst.insert(20);
  bst.insert(40);
  bst.insert(70);
  bst.insert(60);
  bst.insert(80);
  
  // Preorder Traversal (Root, Left, Right)
  console.log("Preorder Traversal:");
  bst.preorder();  // Output: 50, 30, 20, 40, 70, 60, 80
  
  // Inorder Traversal (Left, Root, Right)
  console.log("\nInorder Traversal:");
  bst.inorder();  // Output: 20, 30, 40, 50, 60, 70, 80
  
  // Postorder Traversal (Left, Right, Root)
  console.log("\nPostorder Traversal:");
  bst.postorder();  // Output: 20, 40, 30, 60, 80, 70, 50
  
  // Level Order Traversal (Breadth-first search)
  console.log("\nLevel Order Traversal:");
  bst.levelOrder();  // Output: 50, 30, 70, 20, 40, 60, 80
  
  // Search for a value
  console.log("\nSearch for 40:");
  console.log(bst.search(40));  // Output: true
  
  console.log("\nSearch for 90:");
  console.log(bst.search(90));  // Output: false
  
  // Find Min and Max
  console.log("\nMinimum value:", bst.findMin());  // Output: 20
  console.log("Maximum value:", bst.findMax());  // Output: 80
  