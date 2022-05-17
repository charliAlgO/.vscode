class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

class linkedList{
    constructor(){
        this.head = null // to track the very first node
    }
    append(value){
        if(this.head === null){ //handling the edge cases
            this.head = new Node(value)
            return
        }
        let curr = this.head
        while(curr.next !== null){
            curr = curr.next
        }
        curr.next = new Node(value)
    }
    /*print(head){
        if(head === null) return
        console.log(head.value)
        print(head.next)
    }*/
    print(){
        let str = ''
        let curr = this.head
        while(curr !== null){
            str += curr.value + "->"
            curr = curr.next
        }
        console.log(str)

    }
    isContained(target){
        let curr = this.head
       // if(curr === null) return
        while(curr !== null){
            if(curr.value === target){
                return true
            }
        curr = curr.next
        }
        return false
    }
}
const list = new linkedList()

list.append('a') // to always add a new node to the tail
list.append('b')
list.append('c')
list.append('d')
list.print()
console.log(list.isContained("f"))
console.log(list.isContained("b"))
console.log(list.isContained("e"))