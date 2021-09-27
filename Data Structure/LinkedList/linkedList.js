class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }
    add(data) {
        const node = new Node(data);
        let current = this.head;
        if (current == null) {
            this.head = node;
        }
        else {
            while (current.next) {
                current = current.next;
            }
            current.next = node;
        }
        this.size++;

    }
    printNode() {
        let current = this.head; 
        if (current == null) {
            console.log('Linked List is Empty');
        } 
        else {
            while (current) {
                console.log(current.data);
                current = current.next; 
            }
        }   
    }
    insertNode(index, data) {
        const node = new Node(data); 
        let indexOf = 0;
        let prev; 
        if(index <0 || index> this.size) {
            console.log('Please Enter the valid index');
        }
        else {
            let curr = this.head; 
            if(index==0) {
                node.next = this.head; 
                this.head = node; 
            }
            else {
                while(indexOf < index) {
                    prev = curr;
                    curr = curr.next; 
                    indexOf++;
                }
                prev.next = node;
                node.next = curr;
            }
        }
        this.size++;
    }
    removeFromIndex(index) {

        let curr = this.head; 
        let indexOf = 0;
        let prev;
        if(curr == null) {
            console.log('Empty LinkedList');
        }
        else {
            if(index==0) {
                this.head= curr.next;
            }
            else {
                while(indexOf < index) {
                    indexOf++;
                    prev = curr;
                    curr = curr.next;
                }
                console.log(curr);
                console.log(prev);
                prev.next = curr.next;
            }
            this.size--; 
        }
        return curr;
    }

    findMiddleInLinkedList() {
        let node = this.head;
        let slow = node;
        let fast = node; 
        while(fast!=null && fast.next!=null) {
            slow = slow.next;
            fast = fast.next.next;
        }
        return slow.data;
    }

    removeByData(data) {
        let curr = this.head; 
        let prev;
        if(curr == null) {
            console.log('Element is not find');
        } 
        else {
            while(curr) {
                if(curr.data === data) {
                    if (prev === null) {
                        this.head = curr.next;
                    } 
                    else {
                        prev.next = curr.next;    
                    }
                }
                prev = curr;
                curr = curr.next;
            }
           
        }
    }


}


const ll = new LinkedList();
ll.add(10);
ll.add(20);
ll.add(234);
ll.add(22233);
ll.add(2345);
//ll.removeFromIndex(2);
ll.printNode();
//ll.removeFromIndex(2);
ll.removeByData(234);
console.log('++++');
ll.printNode();
//console.log(ll);
