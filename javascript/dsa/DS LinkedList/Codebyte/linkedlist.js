class Node{
    constructor(value){
        this.value = value
        this.next = null
        this.previous = null
    }

}
const a = new Node("a")
const b = new Node("b")
const c = new Node("c")
const d = new Node("d")

a.next = b
b.next = c
c.next = d

const print = (head) =>{
    if(head === null) return
    console.log(head.value)
    print(head.next)
} 

print(a)
console.log("...")
//recursively
/*const reverseLink =(curr, previous = null) => {
    if(curr === null){ 
        return previous
    } 
    const next = curr.next
    curr.next = previous

    return reverseLink(next, curr)
    
}
const newHead = reverseLink(a)

print(newHead)*/





const reverse_link =(head)=>{
    let cur = head
    let previous = null
    while(cur !== null){
        const next = cur.next //here next is just the arrow pointer,
        cur.next = previous

        previous = cur //moving through each node. using sliding window
        cur = next
    }
    return previous
}
const newHead =  reverse_link(a)
print(newHead)
