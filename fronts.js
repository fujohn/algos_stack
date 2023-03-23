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

}




console.log('---------------- Add Front ----------------')
SLL1 = new SLL()
console.log(SLL1.addFront(18)) // => Node { data: 18, next: null }
console.log(SLL1.addFront(5)) // => Node { data: 5, next: Node { data: 18, next: null } }
console.log(SLL1.addFront(73)) // => Node { data: 73, next: Node { data: 5, next: Node { data: 18, next: null } } }


console.log('---------------- Remove Front ----------------')
console.log(SLL1.removeFront()) // => Node { data: 5, next: Node { data: 18, next: null } }
console.log(SLL1.removeFront()) // => Node { data: 18, next: null }


console.log('---------------- Front ----------------')
console.log(SLL1.front()) // => 18
console.log(SLL1.removeFront()) // => null
console.log(SLL1.front()) // => null
