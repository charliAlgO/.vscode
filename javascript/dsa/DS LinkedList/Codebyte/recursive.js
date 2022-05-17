// singly linkedlist recursively
class Node{
    constructor(val){
        this.val = val
        this.next = null
    }
}

class linkedList{
    constructor(){
        this.head = null
    }
    
    print(){
        const output = this._print(this.head)
        console.log(output)
    }

    _print(curr){
        if(curr === null) return ""
        return curr.val + '->' + this._print(curr.next)
    }
            //main
    isContained(target){
        return this._isContained(target, this.head)
    }

    _isContained(target, curr){
        if(curr === null) return false
        if( curr.val === target) return true
        return this._isContained(target, curr.next)
    }
    
    /*print(){
        let curr = this.head
        let str = ""
        if(curr !==null){
         str += curr.value  
         return
        }
        console.log(str)
        this.print(curr)
        
    }*/
    append(val){
        if(this.head === null){
            this.head = new Node(val)
            return
        }
        this._append(val, this.head)
    }
    _append(val, curr){
       // let curr = this.head
        if(curr.next === null){
            curr.next = new Node(val)
            return
        }
        this._append(val, curr.next)
    }
}  //iteratively O(n) time complex  O(1) space complex, since no stacks,
/*const sumLists = (head)=>{
    let curr = head
    let sum = 0
    while(curr !== null){
        sum += curr.val
        curr = curr.next
    }
    return sum 
}*/

        //Recursively O(n) time complex   O(n) space complex, recursive stacks
const sumLists = (head)=>{
    if(head === null) return 0
    return head.val + sumLists(head.next)
}

const lists = new linkedList



/*lists.append("a")
lists.append("b")
lists.append("c")
lists.append("d")
lists.print()*/

console.log(lists.isContained("f"))
console.log(lists.isContained("b"))
console.log(lists.isContained("c"))
console.log(lists.isContained("k"))
console.log(lists.isContained("u"))

lists.append(2)
lists.append(6)
lists.append(7)
lists.append(9)

console.log(sumLists(lists.head))

