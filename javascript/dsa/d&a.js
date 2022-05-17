//let abu = document.getElementById("koko");
//console.log(abu);

//abu.innerHTML = "WELCOME";
const body = document.body;
const div = document.createElement("div");
const h3 = document.createElement("h3");
h3.innerHTML = "welcome Algo";
div.append(h3);
//body.append(div);


//Data Structures And Algorithm

//Stack, push,pop,peek(for expanding the stack), length

//palindrome, a stack using an array
var letters = [];
var word = "racecar";
var rword = "";
//put letters of word into stack
for(var i=0; i< word.length; i++){
    letters.push(word[i]);
}for(var i=0; i< word.length; i++){
    rword += letters.pop();
};
if(rword == word){
    console.log(word + " " +"is a palindrome")
}else{
    console.log(word + " " + "is not palindrome");
};
//creating our functions for a stack

class stack {
    constructor() {
        this.count = 0;
        this.storage = {};
        // Adds a value onto the end of the stack7
        this.push = function (value) {
            this.storage[this.count] = value;
            this.count++;
        };

        // Removes and returns the value at the end of the stack
        this.pop = function () {
            if (this.count === 0) {
                return undefined;
            }

            this.count--;
            var result = this.storage[this.count];
            delete this.storage[this.count];
            return result;
        };

        this.size = function(){
            return this.count;
        };

        this.peek = function () {
            return this.storage[this.count-1]; // -1 to get the last number
        };
    }
}
var myStack = new stack();

myStack.push(1);
myStack.push(2);
console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.peek());
myStack.push("freeCodeCamp");
console.log(myStack.size());
console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.peek());


//SETS like Arrays except there are no duplicate items and the values are not in any organize manner is to check for
//the presence of element
class mySet {
    constructor() {
        var collection = [];
        // this method will check for the presence of an element and return true or false
        this.has = function (element) {
            return (collection.indexOf(element) !== -1);
        };
        // this method will return all the values in the set
        this.values = function(){
            return collection;
        };
        // this method will add an element to the set
        this.add =(element) =>{
            if(!this.has(element)){
                collection.push(element);
                return true;
            }
            return false;
        };
        // this method will remove an element to the set
        this.remove = (element) =>{ //in the es6, romove is called delete
            if(this.has(element)){
                index = collection.indexOf(element); //find out what the index is 
                collection.splice(index,1); // and remove it, take out one eemenet
                return true;// return true if the element is not in the collection
            };
            return false; // if the element is not in  the collection
        };

        this.size = () => collection.length; // size is not a method in es6, its just a property, so no ().

        // this method will return the union of two sets 
        // this methods are needed but are not in Es6

        this.union = (otherSet) => {
            var unionSet = new mySet();
            var firstSet = this.values();
            var secondSet = otherSet.values();
            firstSet.forEach((e) => {
                unionSet.add(e)
            });secondSet.forEach((e) => {
                unionSet.add(e);
            });
            return unionSet;
        };
        // this method will return the intersection of two sets as a new set
        this.intersection = (otherSet) => {
            var intersectionSet = new mySet(); //check and create a new set for all the value that are in both sets
            var firstSet = this.values(); //return all the value of the first set
            firstSet.forEach((e) => {
                if(otherSet.has(e)){
                    intersectionSet.add(e);
                }
            });
            return intersectionSet;
        };
        // this method will return the difference of two sets as a new set
        this.difference = (otherSet) => {
            var differenceSet = new mySet();
            var firstSet = this.values(); //bring the values of the first
            firstSet.forEach((e) => { //go through the value of the first set
                if(!otherSet.has(e)) { // to see if the value is not in the set
                    differenceSet.add(e); // then add it
                };
            });
            return differenceSet;
        };
        // this method will test if the set is a subset of a different set
        // to test if the firstset is completely contained in the second set
        this.subset = (otherSet) => {
            var firstSet = this.values();
            return firstSet.every((value) => otherSet.has(value)); // are all the element in thr first set in the otherset
        };
    };
};
var setA = new mySet();
var setB = new mySet();
setA.add("a");
setB.add("b");
setB.add("c");
setB.add("a");
setB.add("d");
console.log(setA.subset(setB));
console.log(setA.intersection(setB).values());
console.log(setB.difference(setA).values());


// using es6 methods
var setC = new Set();
var setD = new Set();
setC.add("a");
setD.add("b");
setD.add("c");
setD.add("a");
setD.add("d");
console.log(setD.values); // it doesnt display it on the console
setD.delete("a")
console.log(setD.has("a"))

// Queue 
// its a way to hold data, similar to a stack, while a stack is lifo-last in first out, queue is fifo, fast in first out
class Queue { 

    constructor (){ 
        var collection = [];
        this.print = () => console.log(collection);
        this.enqueue = (element) => collection.push(element);
        this.dequeue = () => collection.shift();
        this.front = () => collection[0];
        this.size = () => collection.length;
        this.isEmpty = () => (collection.length === 0);
    };
};

var q = new Queue();
q.enqueue("a");
q.enqueue("b");
q.enqueue("c");
q.print();
q.dequeue();
console.log(q.front());
q.print();

//another way is the priority queue
class PriorityQueue {
    constructor(){
        var collection = [];
        this.printCollecion = () => console.log(collection);
        this.enqueue = (element) => {
            if(this.isEmpty()){
                collection.push(element);
            }else{
                var added = false;
                for (var i=0; i<collection.length; i++){ // check each item in the array
                    if(element[1]< collection[i][1]){ // checking priorities, remember index 0 is where you want add element to
                    collection.splice(i,0,element); //then add to the array if its true
                    added = true;
                    break; }
                };
            };
            if(!added){
                collection.push(element);
            };
        };
        this.dequeue = () => {  
            var value = collection.shift();
            return value[0]
        };
        this.front = () => collection[0];
        this.size = () => collection.length;
        this.isEmpty = () => (collection.length === 0);

        
    }
}
var pq = new PriorityQueue();
pq.enqueue(["charles Abu", 2]);
pq.enqueue(["Quincy Larson", 3]);
pq.enqueue(["Helleluiah hosannah", 1])
pq.printCollecion();
pq.dequeue();
pq.front();
pq.printCollecion();


//Bianry Search Tree its a way to hold data, that when visualize, it wll look like a tree
// nodes with braches that lead to other nodes are called parent.
/* the tree data structure can have more than one branches. but a binary node has just two*/

/*class Node {
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
    find(data){
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
                node.right = removeNode(node,right,data);
                return node;
            }
        }
        this.root = removeNode(this.root, data);
    }



bst.add(4);
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
console.log(bst.isPresent(4));

isBalance(){
 return(this.findMinHeight() <= this.findMaxHeight() -1) //its gonna return true or false
}
findMinHeight(node = this.root){
    if(node ==null){
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
        var result = new Array();
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
bst.add(10);
console.log(bst.findMinHeight());
console.log(bst.findMaxHeight());
console.log(bst.isBalance());

console.log("inOrder: " + bst.inOrder());
console.log("preOrder: " + bst.preOrder());
console.log("postOrder: " + bst.postOrder());

console.log("levelOrder: " + bst.levelOrder());*/


//Binary Search Tree
//Traversal & Height, height represent the distance btw the root node and the least node




//hash Table

var hash = (string, max) => {
    var hash = 0;
    for (var i =0; i < string.length; i++){
        hash += string.charCodeAt(i); //add the char code of each character 
        //each string character has a numerical value associated with it
    }
    return hash % max // divide by the number of bucket and return the remainder
    //that is going to be the index we are placing into the array

};
class HashTable {
    constructor(){  

//let HashTable = () =>{
    let storage = [];
    const storageLimit = 6;
    this.print = () =>{
        console.log(storage)
    }
    this.add = (key, value) => {
        var index = hash(key,storageLimit);
        if(storage[index] === undefined){
            storage[index] = [
                [key,value]
            ];
        }else{
            var inserted  = false;
            for(var i = 0; i < storage[index].length; i++){ //go through each index to see if the key already exist
                if(storage[index][i][0] === key){  //if it exist then we will set the new value
                    storage[index][i][0] = value;
                    inserted = true;    
                }
            }
            if (inserted === false){
                storage[index].push([key, value]); // we add it to the bucket if it does not exist, thats where we will get multiple 
                //entries into the bucket
            }
        }
    }
    this.remove = (key) => { // to remove a key from an hash table
        var index = hash(key, storageLimit);
        //if the item in the bucket is also is also equal to the key that you passed in
        if(storage[index].length === 1 && storage[index][0][0] === key) {
            delete storage[index];
        } else {
            for (var i = 0; i < storage[index].length; i++) { // go tru each item in th bucket(index)
                if(storage[index][i][0] === key){ //the [0] index is the key, the [1] is the value
                    delete storage [index][i];

                }
            }               
        }
    }
this.lookup = function(key){
    var index = hash(key, storageLimit);
    if(storage[index] === undefined){
        return undefined; // the item is not in the hash tbl
    } else {
        for(var i = 0; i < storage[index].length; i++){
            if(storage[index][i][0] === key) {
                return storage[index][i][1];
            }
        }
    }
}
}
}
console.log(hash("charles", 10));

let ht = new HashTable();
ht.add("beau", "person");
ht.add("fido", "dog");
ht.add("rex", "dinosour");
ht.add("tux", "penguin");
console.log(ht.lookup("tux"));
ht.print();


class LinkedList {
    constructor(){
        var length = 0;
        var head = null;

        class Node {
            constructor (element){
                this.element = element; // the element you are passing in,
                this.next = null;
            }
        }
        /*var Node = (element) => {
            this.element = element; // the element you are passing in,
            this.next = null;
            }*/
        
        this.size = () => length;
        this.head = () => head;
        this.add = (element) => {
            var node = new Node(element); //bring the element
            if(head === null){
                head = node;
            } else {
               var currentNode = head;
                while(currentNode.next){ //while there is a next node, currentnode is equal to currentnode.next 
                    currentNode = currentNode.next; //one way to hop from node to node,

                }
                currentNode.next = node; // the end of the list is where we want to add the element that we are adding
                //so we add it, instead of null.
            }
            length++
        };
        this.remove = (element) => { // parse in the element you want to remove
            var currentNode = head;
            var previousNode;
            if(currentNode.element === element){
                head = currentNode.Next;
            } else {
                while(currentNode.element !== element){
                    previousNode = currentNode;
                    currentNode = currentNode.next;
                }
                previousNode.next = currentNode.next;
                
            }
            length --;
        };
        this.isEmpty = () => length === 0;
        this.indexOf = (element) => {
            var currentNode = head;
            var index = -1;
            while(currentNode){
                index ++;
                if(currentNode.element === element){
                    return index;
                }
                currentNode = currentNode.next;
            }
            return -1;
        };
        this.elementAt = (index) => {
            var currentNode = head;
            var count = 0;
            while(count < index){
                count++;
                currentNode = currentNode.next
            }
            return currentNode.element;
        };
        this.addAt = (index, element) => {
            var node = new Node(element); //create a new node with the element we bring in
            var currentNode = head;
            var previousNode;
            var currentIndex = 0;

            if(index > length){
                return false;
            }
            if(index === 0){
                node.next = currentNode; //shifting the previous head node
                head = node; // set head to the node we just parse in
            } else {
                while(currentIndex < index){ //if we dont wanna put it on the first node
                    currentIndex++; // we keep checking until we find the correct index
                    previousNode = currentNode;
                    currentNode = currentNode.next;
                }
                node.next = currentNode; //once we get the index we set our node to current node 
                previousNode.next = node; // previousNode.next is set to our node
            }
            length++;
        }

        this.removeAt = (index) => {
            var currentNode =  head;
            var previousNode;
            var currentIndex = 0;
            if(index < 0 || index >= length){
                return null
            }
            if(index === 0){
                head = currentNode.next;// remove the head by setting to currentNode.next
            }else {
                while(currentIndex < index){
                    currentIndex ++;
                    previousNode = currentNode;
                    currentNode = currentNode.next;
                }
                previousNode.next = currentNode.next; //take out the middle man, lol
            }
            length --;
            return currentNode.element; //returning the node we are removing
        }
        
    }
}
var conga = new LinkedList();
conga.add("kitten");
conga.add("puppy");
conga.add("Dog");
conga.add("cat");
conga.add("fish");
console.log(conga.size());
console.log(conga.removeAt(3));
console.log(conga.elementAt(3));
console.log(conga.indexOf("puppy"));
console.log(conga.size()); 


//Trie
class Node {
    constructor(){
        this.keys = new Map();
        this.end = false;
        this.setEnd = () => {
            this.end = true;
        };
        this.isEnd = () => {
            return this.end
        }
    }
}
class Trie {
    constructor(){
        this.root = new Node();

        this.add = (input, node = this.root) =>{ //if you parse in a node, it will use it, but if you dont it will use this.root
            if(input.length == 0) { //means if we are at the end of the word that we parse, we will return
                node.setEnd();
                return;
            } else if(!node.keys.has(input[0])){ //if it doesnt have the first letter of what we wanna add then we create one
                node.keys.set(input[0], new Node()); //create
                return this.add(input.substr(1), node.keys.get(input[0]));
            } else{
                return this.add(input.substr(1), node.keys.get(input[0]))
            }
        }
        this.isWord = (word) => {
            let node = this.root;
            while(word.length > 1) { //while there is more character in the word that we parse to search
                if(!node.keys.has(word[0])){ //if there is no key with the first character of the word we parse in 
                    return false //we quickly return false, no word
                } else{
                    node = node.keys.get(word[0]); //if its present, we set it as our root node,
                    word = word.substr(1); //now we look for the next node
                }
            }
            return (node.keys.has(word) && node.keys.get(word).isEnd()) ? //when we finally get all the characters & its the last letter 
            true: false; //we return true or false
        }

        this.print = () => {
            let words = new Array();
            let search = (node, string) =>{
                if(node.keys.size != 0){
                    for(let letter of node.keys.keys()) {
                        search(node.keys.get(letter), string.concat(letter)); // keep getting letters and cancating to the string
                    };
                    if(node.isEnd()){  // we get to the end of the letter
                        words.push(string); //we push the string into our word array
                    } else{ // if the node does equal zero, which is the last node on the trie,
                        string.length > 0 ? words.push(string) : undefined;// we push the word to the string or return undefine
                        return;
                    }
                }
                search(this.root, new String()); //where we call the function
                return words.length > 0 ? words : null; //if we have words in the array, we return it or we return null
            }
        }

    };
};

var myTrie = new Trie();
myTrie.add("ball");
myTrie.add("bat");
myTrie.add("doll");
myTrie.add("dork");
myTrie.add("do");
myTrie.add("dorm");
myTrie.add("send");
myTrie.add("sense");
console.log(myTrie.isWord("doll"));
console.log(myTrie.isWord("dor"));
console.log(myTrie.isWord("dorf"));
console.log(myTrie.print());

/*
//Heap
//left child: i * 2
//right child: i * 2 + 1
//parent: i / 2
class MinHeap {
    constructor(){

  
//let MinHeap = () =>{
        let heap = [null];

        this.insert = function(num){
            heap.push(num);
            let idx = heap.length - 1;
            while(heap[idx] < heap[Math.floor(idx/2)]){
                if(idx >= 1){
                    [heap[Math.floor(idx/2)], heap[idx]] = [heap[idx], heap[Math.floor(idx/2)]];// switching the node we just inserted with the parent node
                    if(Math.floor(idx/2) > 1){// if the parent node is not on index 1 where its supposed to be
                        idx = Math.floor(idx/2); // then the inputed node will be set as the parent node
                        // so we keep swapping to the parent node as long as it is smaller than the parent node
                    }else{
                        break;
                    }
                }
            }

        }
        this.remove = () => {
            let smallest = heap[1];
            if(heap.length > 2){
                heap[1] = heap[heap.length -1];
                heap.splice(heap.length -1);
                if(heap.length === 3){
                    if(heap[1] < heap[2]) {
                        [heap[1], heap[2]] = [heap[2], heap[1]];
                    };
                    return smallest;

                }
                let i = 1;
                let left = 2 * i;
                let right = 2 * i + 1;
                while(heap[i] >= heap[left] || heap[i] >= heap[right]) {
                    if(heap[left] < heap[right]) {
                        [heap[i], heap[left]] = [heap[left], heap[i]];
                        i = 2 * i;
                    } else {
                        [heap[i], heap[left]] = [heap[right], heap[i]];
                        i = 2 * i + 1;
                    };
                    left = 2 * i;
                    right = 2 * i + 1;
                    if( heap[left] == undefined || heap[right] == undefined){
                        break;
                    };
                }
                
            }else if(heap.length == 2){
                    heap.splice(1, 1);  
            }else {
                return null;
            };
            return smallest;     
        };
        this.sort = () => {
            let result = new Array();
            while(heap.length > 1) {
                result.push(this.remove());
            };
            return result;
        }
    };
};
var idk = new MinHeap;
idk.insert(20);
idk.insert(19);
idk.insert(17);
idk.insert(13);
idk.insert(15);
idk.insert(8);
idk.insert(5);
idk.insert(11);
idk.insert(9);
idk.insert(10);
idk.remove(13);
console.log(idk.sort());




// need to learn more on Heap, its application in real life
//Graphs: Breadth-First Search, depth first search
/* how to find the distance between two nodes in a graphs and it is called graph traversal, Traversal algorithm are used 
to visit nodes, the main type are breadth first search and depth first search, the point is to determine how close nodes are to 
a root node*/
// if it connected there is 1, if not 0 


    

var bfs = (graph, root) => { // will output a function of key,value pairs, values will be distance from the node,
        var nodesLen = {};
        for (var i = 0; i < graph.length; i++){
            nodesLen[i] = Infinity; //we will start all the distances from infinity 
        }
        nodesLen[root] = 0;// we set it to zero instead of infinity

        var queue = [root];
        var current; // created to keep track of the node we are traversing

        while (queue.length != 0){ // a while loop to keep traversing until there no more to traverse
            current = queue.shift();// we will start by popping up the root node to the current node 

            var curConnected = graph[current]
            var neighborIdx = [];// keep track of nodes connected to current node
            var idx = curConnected.indexOf(1);
            while(idx != -1){
                neighborIdx.push(idx);
                idx = curConnected.indexOf(1, idx + 1); // search for the next connected node
            };
            for (var j = 0; j < neighborIdx.length; j++){
                if(nodesLen[neighborIdx[j]] == Infinity) {
                    nodesLen[neighborIdx] = nodesLen[current] + 1;
                    queue.push(neighborIdx[j])
                }
            }
        }
        return nodesLen;

    };


var exBFSGraph = [
    [0,1,1,1,0],
    [0,0,1,0,0],
    [1,1,0,0,0],
    [0,0,0,1,0],
    [0,1,0,0,0]
];
console.log(bfs(exBFSGraph, 2)); 




    

