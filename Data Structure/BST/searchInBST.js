class BST {
    constructor(data) { 
        this.data = data;
        this.left = null;
        this.right = null;
    }
}


function search(root, key) {
    if (root == null) {
        root.data = key;
        return root;
    }
 
    // if data at left side
    if(root.data > key) {
        return search(root.left,key);
    }
    else {
        return search(root.right, key);
    }
}
function insertInBST(root,key) {
    if(root===null) {

        return new BST(key);
    }
    else {
        if(root.data === key) {
            return root;
        }
        else if(root.data< key) {
            root.right= insertInBST(root.right, key);
        }
        else {
            root.left = insertInBST(root.left,key);
        }
    }
}

function inorder(root) {
    if(root) {
        inorder(root.left);
        console.log(root.data);
        inorder(root.right);
    }
}


let r = new BST(5);
insertInBST(r,10);
insertInBST(r,2);
inorder(r);
console.log(r);