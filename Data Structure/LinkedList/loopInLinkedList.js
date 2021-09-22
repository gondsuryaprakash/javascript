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

    addNode(data) {
        const node = new Node(data);

        let curr = this.head;
        if(this.head == null) {
            this.head = node;
        }
        else {
            while (curr.next) {
                curr = curr.next; 
            }
            curr.next = node;
        }

    }

    detectLoop() {
        let slow= this.head;
        let fast = this.head;
        while (slow && fast && fast.next) {
            slow = slow.next;
            fast = slow.next.next;
            if(slow === fast ) {
                return "Loop is present"
            }
        }
    }
    
}

const ll = new LinkedList();
ll.addNode(5);

console.log(ll);