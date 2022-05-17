const factorial = (n) => {
    if(n===1)return 1
    return n * factorial(n-1)
}

console.log(factorial(5))
console.log(factorial(10))
//O(n) time because of the number of recursive function we will carry out
//O(n) space because of the number of stacks in each recursive function

// Combinations  2^n 
//below is an easy to explain implimentation in an interview
//time 0(2^n)
//space 0(n^2) these are quite high

const combinations =(elements) => {
    if(elements.length === 0) return [[]]
    const first = elements[0]
    const rest = elements.slice(1)
    const combswithFirst = []
    const combsWithoutFirst = combinations(rest)
    combsWithoutFirst.forEach(comb =>{
        const combwithFirst = [...comb, first]
        combswithFirst.push(combwithFirst)
    })
    return [...combsWithoutFirst, ...combswithFirst] //cancatenating two arrays
}
console.log(combinations(["A","B","C","D"]))
//Permutations
//different arrangement
//every permutation must contain all element

const Permutations = (elements) => {
    if(elements.length === 0) return [[]]
    const first = elements[0]
    const rest = elements.slice(1)
    const allpermutations = []
    permutationsWithoutFirst = Permutations(rest)

    permutationsWithoutFirst.forEach(perm =>{//iterate tru all possible insertion posistion
        for(let i =0; i <= perm.length; i++ ){// checking all the indeces, if we have two elements
            // then we can have 3 positions
            //perm.slice(0,i) gives elements only from zero up to element i
            //perm.slice(i) gives elements that comes after i including i
            const permutationWithFirst = [...perm.slice(0,i), first, ...perm.slice(i)]
            allpermutations.push(permutationWithFirst)
        }
    })
    return allpermutations
}
console.log(Permutations(["a","b","c"]))
console.log(Permutations(["a","b"]))
// Time O(n!) which is the worse, bcos we expect to generate n! of different arrangements
//space O(n^2) bcos of 1, the empty stack we have and also the slice function also returns a stacks
// each of the permutation has all 3 elements
//every permutation must contain every element, we are just varying the order
// [
//   [c,b,a],
//   [b,c,a],
//   [b,a,c],
//   [c,a,b],
//   [a,c,b],
//   [a,b,c]
//]

const sum = (array) => {
    if(array.length === 0) return 0
    let first = array[0]
    const rest = array.slice(1)
    return first + sum(rest)
}
console.log(sum([1,5,7,-2]))
//time O(n^2)
//space o(n)
// quite time consuming, another implementation

const sum1 = (array) =>{
 return _sum(array, 0)
}
//helper function
const _sum = (array, idx) => { //index of 0, increase it until it gets to array.length
    if(idx === array.length) return 0
    return array[idx] + _sum(array, idx + 1)
}
console.log(sum1([1,5,7,-2]))

// now time = O(n)
//space = O(n)


// a little time complexity experiment
/*const slowSum = (array) => {
    if(array.length === 0) return 0
    const rest = array.slice(1)
    return array[0] + slowSum(rest)
}

const fastSum = (array) => {
    return _fastSum(array, 0)
}

const _fastSum = (array, start) => {
    if(start === array.length) return 0
    return array[start] + _fastSum(array, (start + 1)) 
}



const input = new Array(9000).fill(1)// an array of 9000 elements of 1s

const slowStart = Date.now()
console.log(slowSum(input))
const slowEnd = Date.now();
console.log(`n^2 finished in ${slowEnd - slowStart}ms`)

const fastStart = Date.now()
console.log(fastSum(input))
const fastEnd = Date.now()
console.log(`n finished in ${fastEnd - fastStart}ms`)*/



//Fibonacci

/*Write a function `fib` that takes in a number, n and returns the n-th number in the fibonacci sequence
The first two numbers of the fibonacci sequence are 1 and 1. the next number of the sequence can be calculated
by taking the sum of the previous two */

/*fib(1) //1
fib(2) //1
fib(3) //2
fib(4) //3
fib(5) //5
fib(6) //8
fib(7) 13*/

const fib = (n) => {
    if(n===1 || n===2) return 1
    return fib(n-1) + fib(n-2)
}
console.log(fib(5))
console.log(fib(6))

//time O(2^n) because of the two recursive calls, everycall to the fibonacci, we make two more fib calls