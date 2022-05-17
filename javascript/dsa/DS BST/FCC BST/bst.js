//Bianry Search Tree its a way to hold data, that when visualize, it wll look like a tree
// nodes with braches that lead to other nodes are called parent.
/* the tree data structure can have more than one branches. but a binary node has just two*/

class Node {
    constructor(data, left = null, right = null) {
        this.data = data; //data we trying to store
        this.left = left; //left node
        this.right = right; 
    }
}
class BST { //binary storage tree
    constructor(){
        this.root = null; // top of the tree which will start as null
    }
    add(data) {
        const node = this.root;
        if(node === null) {
            //creating a node base on the new data
            this.root = new Node(data); //put the data we just brought in if it was empty
            return;
        } 
        else {  
            // if its not the first then we will create this recursive fn
            const searchTree = (node) => {
                if( data < node.data){
                  if(node.left === null) { // node on the left side of the tree
                    node.left = new Node(data);
                    return;
                  } 
                  else if(node.left !== null){
                    return searchTree(node.left); //recursive function, searching for where to put the data on a left node
                  }
                } 
                else if (data > node.data){
                  if (node.right === null){
                    node.right = new Node(data);
                    return;
                  } 
                  else if (node.right !== null){
                    return searchTree(node.right);
                  }
                } 
                else {
                  return null; // if node.data = data then we are not gonna add to the tree
                }
            }
        
            return searchTree(node);
        }
            
    }       

    findMin(){
        let current = this.root;   // we keep checking the next left node and we return the current data if its null
        while(current.left !== null){
            current = current.left;
        }
        return current.data
        
    }
    findMax(){
        let current = this.root;     // we keep checking the next right node and we return the current data if its null
        while (current.right !== null){
            current = current.right;
        }
        return current.data;
    }
    find(data){ // points you to direction to look for your data
        let current = this.root;
        while (current.right !== data){
            if(data < current.data) {
                current = current.left;
            } else {
                current = current.right;
            }
            if(current === null) {
                return null
            }
        }
        return current;
    }
    isPresent(data){
        let current = this.root;
        while( current){
            if(data === current.data) {
                return true;

            }
          
            if(data < current.data){
                current = current.left;
            } else{
                current = current.right;
            }
        }
        return false;
    }
    remove(data){
        const removeNode = function(node, data){
            if(node == null){
                return null;
            }
            if(data == node.data) {
                //node has no children
                if(node.left == null && node.right == null){
                    return null;
                }
                //node has no left child
                if(node.left == null){
                    return node.right;
                }
                if(node.right == null){ // if node has no left child
                    return node.left;
                }
                //node has two children
                var tempNode = node.right;
                while(tempNode.left !== null){
                    tempNode = tempNode.left;
                }
                node.data = tempNode.data;
                node.right = removeNode(node.right, tempNode.data);
                return node;

            }
            else if(data < node.data){
                node.left = removeNode(node.left, data);
                return node;
            }
            else{
                node.right = removeNode(node.right, data);
                return node;
            }
        }
        this.root = removeNode(this.root, data);
    }



/*bst.add(4);
bst.add(2);
bst.add(6);
bst.add(1);
bst.add(3);
bst.add(5);
bst.add(7);
bst.remove(4);
console.log(bst.findMin());
console.log(bst.findMax());
console.log(bst.findMax());
console.log(bst.isPresent(4));*/

    isBalance(){
    return(this.findMinHeight() == this.findMaxHeight() -1) //its gonna return true or false
    }
    findMinHeight(node = this.root){
        if(node == null){
            return -1
        };
        let left = this.findMinHeight(node.left);
        let right = this.findMinHeight(node.right);
        if(left < right) {
            return left + 1;
        } else {
            return right + 1;
        };
    }
    findMaxHeight(node = this.root){
        if (node == null){
            return  -1
        }
        let left = this.findMaxHeight(node.left);
        let right = this.findMaxHeight(node.right);
        if( left > right){
            return left + 1;
        }
        else{
            return right + 1
        };
    };
    inOrder(){
        if(this.root == null) {
            return null;
        } else{
            var result = new Array;
            function traverseInOrder(node){
                node.left && traverseInOrder(node.left);
                result.push(node.data);
                node.right && traverseInOrder(node.right);
            }
            traverseInOrder(this.root);
            return result;
        }
    }
    preOrder(){ // push first then call the function on node.left and node.right
        if(this.root == null) {
            return null;
        } else {
            var result = new Array();
            function traversePreOrder(node){
                result.push(node.data);
                node.left && traversePreOrder(node.left); //if the first is true its going to run the trans.. in node left
                node.right && traversePreOrder(node.right)
            }
            traversePreOrder(this.root); //call that function and parse in the root node
            return result; // after thr function is being run then we return the result
        }
    }
    postOrder(){ // push first then call the function on node.left and node.right
        if(this.root == null) {
            return null;
        } else {
            var result = new Array;
            function traversePostOrder(node){
                node.left && traversePostOrder(node.left); //if the first is true its going to run the trans.. in node left
                node.right && traversePostOrder(node.right);
                result.push(node.data);
            }
            traversePostOrder(this.root); //call that function and parse in the root node
            return result;
        } // after thr function is being run then we return the result
    }
    levelOrder(){
        let result = [];
            let Q = [];
            if(this.root != null){
                Q.push(this.root);
                while(Q.length > 0) {
                    let node = Q.shift();
                    result.push(node.data);
                    if(node.left != null){
                        Q.push(node.left);
                    };
                    if(node.right != null){
                        Q.push(node.right);
                    };

                };
                return result;
            }
            else{
                return null;
            }
        
    }

}
const bst = new BST();
bst.add(9);
bst.add(4);
bst.add(17);
bst.add(3);
bst.add(6);
bst.add(22);
bst.add(7);
bst.add(20);
bst.add(5);


console.log(bst.findMinHeight());
console.log(bst.findMaxHeight());
console.log(bst.isBalance());
console.log(bst.isPresent(10))
bst.add(10);
console.log(bst.findMinHeight());
console.log(bst.findMaxHeight());
console.log(bst.isBalance());

console.log("inOrder: " + bst.inOrder());
console.log("preOrder: " + bst.preOrder());
console.log("postOrder: " + bst.postOrder());

console.log("levelOrder: " + bst.levelOrder());


//Binary Search Tree
//Traversal & Height, height represent the distance btw the root node and the least node
