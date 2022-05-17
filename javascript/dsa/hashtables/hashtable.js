const hash =(string, max) => { // max is the number of bucket we are using to store strings
    let hash = 0
    for(let i =0; i<string.length; i++){
        hash += string.charCodeAt(i) //each string has a charcode attached to it, so we attach it to the hash
    }
    return hash % max; //divide the hash by the max and return the remender
}

class HashTable {
    constructor(){  

//let HashTable = (hash) =>{
    let storage = [];
    const storageLimit = 6;//amount of buckets
    
        this.print = () =>{
            console.log(storage)
        }
        this.add = (key, value) => {
            var index = hash(key,storageLimit); // get the index by passing it tru the hash fn
            if(storage[index] === undefined){ // case1 both key and value-none
                storage[index] = [
                    [key,value]
                ];
            }else{ 
                var inserted  = false;
                //case 2 key and no value
                for(var i = 0; i < storage[index].length; i++){ //go through each index to see if the key already exist
                    if(storage[index][i][0] === key){  //if it exist then we will set the new value
                        storage[index][i][1] = value; // then we insert it on the next position in the array
                        inserted = true;    
                    }
                }
                if (inserted === false){ // if not added
                    storage[index].push([key, value]); // we add it to the bucket if it does not exist, thats where we will get multiple 
                    //entries into the bucket
                }
            }
        }
        this.remove = (key) => { // to remove a key from an hash table
            var index = hash(key, storageLimit);
            //if the only item in the bucket is also equal to the key that you passed in
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
            if(storage[index] === undefined) return "not found"; // the item is not in the hash tbl
            for(var i = 0; i < storage[index].length; i++){
                if(storage[index][i][0] === key) { //if the find the key
                    return storage[index][i][1]; // we return the value, which is at index 1
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