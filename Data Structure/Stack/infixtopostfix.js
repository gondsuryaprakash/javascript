class Stack {
    constructor() {
        this.stack = [];
    }

    orderOfOerand(c) {
     
        if(c==='^') {
            return 4;
        }
        else if(c === '*' || c==='/') {
            return 3;
        }
        else if(c ==='+' || c==='-') {
            return 2;
        }
        else {
            return 1;
        }
    }

    infixToPostFix(expression) {
        var result = '';
        for(var i=0; i< expression.length; i++) {
            let c = expression[i];
            if((c >= 'a' && c<='z') || (c >= 'A' && c<='Z') || (c >= '0' && c<='9') )  {
                result+= c;
            }
            else if(c==='(') {
                this.stack.push(c);
                
            }
            else if(c===')') {
                while (this.stack[this.stack.length-1]!=='(') {
                    result += this.stack[this.stack.length-1];
                    this.stack.pop();
                }
            }
            else {
                while(this.stack.length!=0 && this.orderOfOerand(c)<= this.orderOfOerand(this.stack[this.stack.length-1])) {
                    result += this.stack[this.stack.length-1];
                    this.stack.pop();
                }
            }
        }
        // remove remaining 
        while(this.stack.length !=0) {
            result+=this.stack[this.stack.length-1];
            this.stack.pop();
        } 
        return result;
    }
}

let exp = "a+b*(c^d-e)^(f+g*h)-i";

const stack = new Stack();

const result = stack.infixToPostFix(exp);
console.log(result);

