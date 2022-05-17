class Node {
    constructor(value, left=null, right=null){
        this.value = value
        this.left = left
        this.right = right
    }
}
/*const a = new Node("a")
const b = new Node("b")
const c = new Node ("c")
const d = new Node ("d")
const e = new Node ("e")
const f = new Node ("f")*/

/*a.left = b
a.right = c
b.left = d
b.right = e
c.right = f*/

/*const dfs = (root)=>{
    const stack = [ root ]
    while(stack.length > 0){
        const curr = stack.pop()
        console.log(curr.value)

        if(curr.right !== null){
            stack.push(curr.right)
        }
        
        if(curr.left !== null){
            stack.push(curr.left)
        }
    } 
    
}
(dfs(a))*/
// o(n) time, n is the number of node, where we are gonna pop from the stack, every node enters the stack ones
// and leaves once, o(n) space because we create a stack at most, it may contain n-nodes of the tree

//solving recursively, start with the base case - a very small, non problem, a value, condition
/*const dfs = (root)=>{
    if(root === null) return
    console.log(root.value)
    dfs(root.left);
    dfs(root.right)
}
dfs(a)


//PreOrder- you print out before checking its children, same as the normal traversal
console.log("PreOder_Traversal")
const PreOrder= (root)=>{
    if(root === null) return
    console.log(root.value)
    PreOrder(root.left);
    PreOrder(root.right)
}
//         a
//        / \
//       b   c
//      / \   \
//     d   e   f

PreOrder(a) //abdecf

console.log("PostOrderTraversal")
//PostOrder left,right,self, print when node has no left n rigtht node again
const PostOrder= (root)=>{
    if(root === null) return
    PostOrder(root.left);
    PostOrder(root.right)
    console.log(root.value)
}
//         a
//        / \
//       b   c
//      / \   \
//     d   e   f
PostOrder(a)// debfca

//InOrder left,self,right, print when there is no more left, for each of the nodes
console.log("InOder_Traversal")
const InOrder= (root)=>{
    if(root === null) return
    InOrder(root.left);
    console.log(root.value)
    InOrder(root.right)
}
InOrder(a)// dbeacf*/

//write a function, sumTree(root), that takes in the root of a binary tree as an argument

// The function should return the total sum of all values in the tree. you can assume that the tree only contains
//number values
const a = new Node(1)
const b = new Node(2)
const c = new Node (3)
const d = new Node (4)
const e = new Node (5)
const f = new Node (-2)

a.left = b
a.right = c
b.left = d
b.right = e
c.right = f

// Recursive method

/*const sumTree = (root) =>{
    if(root === null) return 0 //is the root node null if not, traverse recursively
    return  sumTree(root.left) + root.value + sumTree(root.right)
}
console.log(sumTree(a))*/

//reiterative method

 const sumTree = (root) => {
    let sum = 0
    let stack = [root]

    while(stack.length > 0){
        const curr = stack.pop()
        sum += curr.value

        if(curr.right !== null){
            stack.push(curr.right)
        }
        
        if(curr.left !== null){
            stack.push(curr.left)
        }
    }
    return sum
}
console.log(sumTree(a))
