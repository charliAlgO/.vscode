class Node{
    constructor(value, left = null, right = null){
        this.value = value
        this.left = left
        this.right = right

    }
}


/*const a = new Node("a")
const b = new Node("b")
const c = new Node("c")
const d = new Node("d")
const e = new Node("e")
const f = new Node("f")

a.left = b
a.right = c
b.left = d
b.right = e
c.right = f*/

/*const bfs = (root) => {
    const queue = [root]
    while(queue.length > 0){
        const curr = queue.shift() //that thing you removed is now being explored
        console.log(curr.value)
        if(curr.left !== null){ // we wanna print the children only if they exists
            queue.push(curr.left)
        }
        if(curr.right !== null){
            queue.push(curr.right)
        }
    }
}
bfs(a)*/


/*write a function, bfs(root, target), that takes in the root of a binary tree and a target value as arguments

The function should return a boolean indicating whether or not the tree contains the target value. */




/*const confirm = (root, target) => { 
    const queue = [root]

    if(this.root === null){
        return null
    }

    while(queue.length > 0){
        const cur = queue.shift()
        if(cur.value === target){
            return true
        }
        if(cur.left !== null){
            queue.push(cur.left)
        }
        if(cur.right !== null){
            queue.push(cur.right)
        }
    }
    return false

}
console.log(confirm(a, 'f'))*/

/* Write a function, sumTree(root), that takes in the root of a binary tree as an argument

the function should retain the total sum of all values in the tree. you can assume that the tree only contains
number values*/

const a = new Node(1)
const b = new Node(2)
const c = new Node(7)
const d = new Node(4)
const e = new Node(-2)
const f = new Node(5)

a.left = b
a.right = c
b.left = d
b.right = e
c.right = f

const sumTree = (root) => { 
    const queue = [root]
    let sum = 0
    if(this.root === null){
        return null
    }

    while(queue.length > 0){
        const cur = queue.shift()
        sum += cur.value // the value will adding to ur sum
        
        if(cur.left !== null){
            queue.push(cur.left)
        }
        if(cur.right !== null){
            queue.push(cur.right)
        }
    }
    return sum

}
console.log(sumTree(a))

/* Depth First Traversal, we keep traversing down, untill we find a leaf node and the we traverse laterally*/

