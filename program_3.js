// Queue Implementation for Removing Duplicate Characters

class Queue {
    constructor() {
        this.queue = [];
    }

    // Add an element to the queue
    enqueue(value) {
        this.queue.push(value);
    }

    // Remove the front element from the queue
    dequeue() {
        return this.queue.shift();
    }

    // Check if the queue is empty
    isEmpty() {
        return this.queue.length === 0;
    }
}

function removeDuplicates(str) {
    let queue = new Queue();
    let seen = new Set();
    let result = '';

    for (let char of str) {
        if (!seen.has(char)) {
            seen.add(char);
            queue.enqueue(char);
        }
    }

    // Reconstruct the string by dequeuing the elements
    while (!queue.isEmpty()) {
        result += queue.dequeue();
    }

    return result;
}

let myString2 = "aaabbbcccabc";
let noDuplicates = removeDuplicates(myString2);
console.log("String with Duplicates Removed:", noDuplicates); // "abc"
