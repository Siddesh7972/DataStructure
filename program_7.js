// The program covers the insert, delete, and balance operations, and includes left and right rotations to maintain the AVL property (balance factor of -1, 0, or 1).

class Node {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
      this.height = 1; // Every new node starts with a height of 1
    }
  }
  
  class AVLTree {
    constructor() {
      this.root = null;
    }
  
    // Get the height of a node
    getHeight(node) {
      return node ? node.height : 0;
    }
  
    // Get the balance factor of a node
    getBalanceFactor(node) {
      return node ? this.getHeight(node.left) - this.getHeight(node.right) : 0;
    }
  
    // Right Rotation (for balancing)
    rightRotate(y) {
      let x = y.left;
      let T2 = x.right;
  
      // Perform rotation
      x.right = y;
      y.left = T2;
  
      // Update heights
      y.height = Math.max(this.getHeight(y.left), this.getHeight(y.right)) + 1;
      x.height = Math.max(this.getHeight(x.left), this.getHeight(x.right)) + 1;
  
      return x; // New root after rotation
    }
  
    // Left Rotation (for balancing)
    leftRotate(x) {
      let y = x.right;
      let T2 = y.left;
  
      // Perform rotation
      y.left = x;
      x.right = T2;
  
      // Update heights
      x.height = Math.max(this.getHeight(x.left), this.getHeight(x.right)) + 1;
      y.height = Math.max(this.getHeight(y.left), this.getHeight(y.right)) + 1;
  
      return y; // New root after rotation
    }
  
    // Insert a node and balance the tree
    insert(root, value) {
      // 1. Perform the normal BST insert
      if (root === null) {
        return new Node(value);
      }
  
      if (value < root.value) {
        root.left = this.insert(root.left, value);
      } else if (value > root.value) {
        root.right = this.insert(root.right, value);
      } else {
        return root; // Duplicates are not allowed in this implementation
      }
  
      // 2. Update the height of this ancestor node
      root.height = Math.max(this.getHeight(root.left), this.getHeight(root.right)) + 1;
  
      // 3. Get the balance factor of this node (to check if it became unbalanced)
      let balance = this.getBalanceFactor(root);
  
      // 4. If the node becomes unbalanced, then there are 4 cases to consider:
  
      // Left-Left Case
      if (balance > 1 && value < root.left.value) {
        return this.rightRotate(root);
      }
  
      // Right-Right Case
      if (balance < -1 && value > root.right.value) {
        return this.leftRotate(root);
      }
  
      // Left-Right Case
      if (balance > 1 && value > root.left.value) {
        root.left = this.leftRotate(root.left);
        return this.rightRotate(root);
      }
  
      // Right-Left Case
      if (balance < -1 && value < root.right.value) {
        root.right = this.rightRotate(root.right);
        return this.leftRotate(root);
      }
  
      // Return the (unchanged) node pointer
      return root;
    }
  
    // Delete a node and balance the tree
    delete(root, value) {
      // 1. Perform standard BST delete
      if (root === null) {
        return root;
      }
  
      if (value < root.value) {
        root.left = this.delete(root.left, value);
      } else if (value > root.value) {
        root.right = this.delete(root.right, value);
      } else {
        // This is the node to be deleted
  
        // Node with only one child or no child
        if (root.left === null || root.right === null) {
          let temp = root.left ? root.left : root.right;
          if (temp === null) {
            temp = root;
            root = null;
          } else {
            root = temp;
          }
        } else {
          // Node with two children, get the inorder successor (smallest in the right subtree)
          let temp = this.getMinValueNode(root.right);
  
          // Copy the inorder successor's content to this node
          root.value = temp.value;
  
          // Delete the inorder successor
          root.right = this.delete(root.right, temp.value);
        }
      }
  
      // If the tree has only one node, return it
      if (root === null) {
        return root;
      }
  
      // 2. Update height of the current node
      root.height = Math.max(this.getHeight(root.left), this.getHeight(root.right)) + 1;
  
      // 3. Get the balance factor of this node to check whether it became unbalanced
      let balance = this.getBalanceFactor(root);
  
      // 4. If the node becomes unbalanced, then there are 4 cases to consider:
  
      // Left-Left Case
      if (balance > 1 && this.getBalanceFactor(root.left) >= 0) {
        return this.rightRotate(root);
      }
  
      // Right-Right Case
      if (balance < -1 && this.getBalanceFactor(root.right) <= 0) {
        return this.leftRotate(root);
      }
  
      // Left-Right Case
      if (balance > 1 && this.getBalanceFactor(root.left) < 0) {
        root.left = this.leftRotate(root.left);
        return this.rightRotate(root);
      }
  
      // Right-Left Case
      if (balance < -1 && this.getBalanceFactor(root.right) > 0) {
        root.right = this.rightRotate(root.right);
        return this.leftRotate(root);
      }
  
      // Return the (unchanged) node pointer
      return root;
    }
  
    // Utility function to find the node with the smallest value greater than a given node
    getMinValueNode(root) {
      let current = root;
      while (current.left !== null) {
        current = current.left;
      }
      return current;
    }
  
    // Preorder traversal (for testing)
    preorder(root) {
      if (root !== null) {
        console.log(root.value);
        this.preorder(root.left);
        this.preorder(root.right);
      }
    }
  
    // Public method to insert a value
    insertValue(value) {
      this.root = this.insert(this.root, value);
    }
  
    // Public method to delete a value
    deleteValue(value) {
      this.root = this.delete(this.root, value);
    }
  
    // Public method to traverse the tree (preorder)
    preorderTraversal() {
      this.preorder(this.root);
    }
  }
  
  // Example Usage:
  const avlTree = new AVLTree();
  avlTree.insertValue(10);
  avlTree.insertValue(20);
  avlTree.insertValue(30);
  avlTree.insertValue(25);
  avlTree.insertValue(15);
  
  console.log("Preorder Traversal of AVL Tree:");
  avlTree.preorderTraversal(); // Output: 20 10 15 25 30
  
  avlTree.deleteValue(25); // Deleting a node
  
  console.log("Preorder Traversal After Deletion:");
  avlTree.preorderTraversal(); // Output: 20 10 15 30
  