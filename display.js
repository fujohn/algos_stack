class Node {
    constructor(data) {
        this.data = data;
        this.next = null;              
    }
}

class SLL {
    constructor() {
        this.head = null;
    }

    // Add Front
    addFront(value){
        let new_node = new Node(value);
        if (!this.head) {
            this.head = new_node;
        } else {
            new_node.next = this.head;
            this.head = new_node;
        }
        return this;
    }
    
    // Remove Front
    removeFront() {
        if (this.head) {
            this.head = this.head.next;
        }
        return this;
    }
    
    // Front
    front() {
        return this.head;
    }

    // Display
    display() {
        let runner = this.head
        let valList = ''
        while (runner !== null) {
            if (valList.length < 1) {
                valList = runner.data;
            } else {
                valList += ', ' + runner.data
            }
            runner = runner.next;
        }
        console.log(valList);
    }
}

SLL1 = new SLL()
console.log('-------------- Adding to Front --------------')
console.log(SLL1.addFront(76)) // => Node { data: 76, next: null }
console.log(SLL1.addFront(2)) // => Node { data: 2, next: Node { data: 76, next: null } }
console.log('-------------- Displaying --------------')
SLL1.display() // => "2, 76"
console.log('-------------- Adding to Front --------------')
console.log(SLL1.addFront(11.41)) // => Node { data: 11.41, next: Node { data: 2, next: Node { data: 76, next: null } } }
console.log('-------------- Displaying --------------')
SLL1.display() // => "11.41, 2, 76"