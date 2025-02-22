// Stack Implementation for String Reversal in data structures

class Stack {
    constructor() {
        this.stack = [];
    }

    // Add an element to the stack
    push(value) {
        this.stack.push(value);
    }

    // Remove the top element from the stack
    pop() {
        return this.stack.pop();
    }

    // Check if the stack is empty
    isEmpty() {
        return this.stack.length === 0;
    }
}

function reverseString(str) {
    let stack = new Stack();
    // Push all characters of the string to the stack
    for (let char of str) {
        stack.push(char);
    }

    let reversedStr = '';
    // Pop all characters from the stack and build the reversed string
    while (!stack.isEmpty()) {
        reversedStr += stack.pop();
    }

    return reversedStr;
}

let myString = "Hello, World!";
let reversed = reverseString(myString);
console.log("Reversed String:", reversed); // "!dlroW ,olleH"
