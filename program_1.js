// Static Array program
let staticArray = [1, 2, 3, 4, 5];

// Accessing elements in the array
console.log(staticArray[0]); // Output: 1
console.log(staticArray[4]); // Output: 5

// Modifying elements in the array
staticArray[2] = 10;
console.log(staticArray[2]); // Output: 10

// Array Length (fixed size in this case)
console.log(staticArray.length); // Output: 5


// Dynamic Array program
let dynamicArray = [];

// Adding elements to the dynamic array
dynamicArray.push(1); 
dynamicArray.push(2); 
dynamicArray.push(3); 

console.log(dynamicArray); // Output: [1, 2, 3]

// Removing elements from the array
dynamicArray.pop(); 
console.log(dynamicArray); // Output: [1, 2]

// Accessing elements in the dynamic array
console.log(dynamicArray[0]); // Output: 1

// Length of the dynamic array (can grow or shrink)
console.log(dynamicArray.length); // Output: 2
