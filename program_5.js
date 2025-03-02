class HashTable {
    constructor(size = 10) {
      this.table = new Array(size);
      this.size = size;
    }
  
    // Simple hash function that computes an index from a string key
    hash(key) {
      let hashValue = 0;
      for (let i = 0; i < key.length; i++) {
        hashValue = (hashValue << 5) + hashValue + key.charCodeAt(i); // Bitwise hash calculation
      }
      return hashValue % this.size;
    }
  
    // Insert a key-value pair into the hash table (Chaining)
    set(key, value) {
      const index = this.hash(key);
      if (!this.table[index]) {
        this.table[index] = []; // Initialize an empty list if no entry exists at the index
      }
  
      // Check if key already exists, update value if it does
      for (let i = 0; i < this.table[index].length; i++) {
        if (this.table[index][i][0] === key) {
          this.table[index][i][1] = value;
          return;
        }
      }
  
      // Add new key-value pair
      this.table[index].push([key, value]);
    }
  
    // Retrieve a value by key (Chaining)
    get(key) {
      const index = this.hash(key);
      if (!this.table[index]) return undefined; // No entry at index
  
      // Search for the key in the list at the index
      for (let i = 0; i < this.table[index].length; i++) {
        if (this.table[index][i][0] === key) {
          return this.table[index][i][1];
        }
      }
      return undefined; // Key not found
    }
  
    // Remove a key-value pair by key (Chaining)
    delete(key) {
      const index = this.hash(key);
      if (!this.table[index]) return false; // No entry at index
  
      // Search for the key and remove it
      for (let i = 0; i < this.table[index].length; i++) {
        if (this.table[index][i][0] === key) {
          this.table[index].splice(i, 1); // Remove key-value pair from the list
          return true;
        }
      }
      return false; // Key not found
    }
  
    // Check if a key exists (Chaining)
    contains(key) {
      const index = this.hash(key);
      if (!this.table[index]) return false; // No entry at index
  
      // Search for the key in the list
      for (let i = 0; i < this.table[index].length; i++) {
        if (this.table[index][i][0] === key) {
          return true;
        }
      }
      return false; // Key not found
    }
  
    // Display the hash table
    print() {
      console.log(this.table);
    }
  }
  
  // Example usage
  const hashTable = new HashTable();
  
  // Inserting key-value pairs
  hashTable.set("apple", 1);
  hashTable.set("banana", 2);
  hashTable.set("orange", 3);
  hashTable.set("grape", 4);
  
  // Retrieve values by key
  console.log(hashTable.get("apple")); // Output: 1
  console.log(hashTable.get("banana")); // Output: 2
  console.log(hashTable.get("orange")); // Output: 3
  console.log(hashTable.get("grape")); // Output: 4
  
  // Remove key-value pair
  hashTable.delete("banana");
  console.log(hashTable.get("banana")); // Output: undefined
  
  // Check if key exists
  console.log(hashTable.contains("apple")); // Output: true
  console.log(hashTable.contains("banana")); // Output: false
  
  // Print the hash table
  hashTable.print();
  