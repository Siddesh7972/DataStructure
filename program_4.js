// Linked List Implementation for String Manipulation

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    // Add a node at the end
    append(data) {
        const newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
    }

    // Print the linked list as a string
    printList() {
        let current = this.head;
        let str = '';
        while (current) {
            str += current.data;
            current = current.next;
        }
        return str;
    }
}

function stringToLinkedList(str) {
    let linkedList = new LinkedList();
    for (let char of str) {
        linkedList.append(char);
    }
    return linkedList;
}

let myString3 = "LinkedListExample";
let linkedListString = stringToLinkedList(myString3);
console.log("Linked List as String:", linkedListString.printList()); // "LinkedListExample"
