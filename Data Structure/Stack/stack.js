class Stack {
    constructor() {
        this.stack = [];
    }

    addInStack(data) {
        this.stack.push(data);
    }

    popInstack() {
        return this.stack.pop();
    }

    topOfStack() {
        return this.stack.length;
    }

    isEmpty() {
        return !!(this.stack.length);
    }

    printStack() {
        let output = '';
        this.stack.map(el=> {
            output += el; 
        });
        console.log(output);
    }
    
}


const stack = new Stack(); 


[1,2,3,4,5].map(el=> {stack.addInStack(el);});

stack.printStack();
