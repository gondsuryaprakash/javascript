class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

// Traversal
//Root L T
const preOrder=(node)=> {
    if(node==null) {
        return;
    }
    console.log(node.data);
    preOrder(node.left);
    preOrder(node.right);
};

//L Root R
const inOrder=(node)=> {
    if(node ==null) {
        return;
    }
    inOrder(node.left);
    console.log(node.data);
    inOrder(node.right);
};

// L R roots

const postOrder =(node)=> {
    if (node === null) {
        return; 
    }
    postOrder(node.left);
    postOrder(node.right);
    console.log(node.data);
};

const insertInTree =(tmp, key)=> {
    if(tmp === null) {
        tmp = new Node(key);
        return; 
    }
    const queue = [];
    queue.push(tmp); 
    while(queue.length) {
        tmp = queue[0];
        queue.shift();
        if(tmp.left === null) {
            tmp.left = new Node(key);
            break;
        }
        else {
            queue.push(tmp.left);
        }
        if (tmp.right === null) {
            tmp.right = new Node(key);
            break;
        }
        else {
            queue.push(tmp.right);
        }

    }
};


const traverSalNode =(node, deepestElement, key)=> {
    if(node === null) {
        return;
    }

    if(node.data === key ) {
        node.data = deepestElement;
        
    }
    traverSalNode(node.left, deepestElement, key);
    traverSalNode(node.right, deepestElement, key);
};


const tree = new Node(5);

tree.left = new Node(6);
tree.right = new Node(7);

tree.right.right = new Node(233);
tree.left.left = new Node(23333);
tree.left.right = new Node(2333321);
insertInTree(tree, 188333);

inOrder(tree);
console.log(tree);