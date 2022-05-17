/* Template Literals allows us to use backticks(`..`) that helps us write cleaner codes for instance:*/
let word1 = "Abu";
let word2 = "Charles";

//const fullName = word1 + " " + word2; /* this can be written using template literals;
//const fullName = `${word1} ${word2}`;

const fullName = word1 + "\n" +word2; /* this can be written using template literals:
const fullName = `${word1}
${word2}`;*/
console.log(fullName);

//Destructuring Objects 
/*const personalInformation = {
    firstName: "Charles",
    lastName: "Abu",
    city: "Ikeja",
    state: "lagos",
    zipCode: "10110"
};
const {firstName: fn, lastName: ln} = personalInformation;
console.log(`${fn} ${ln}`);*/

//Destructuring Array
let [firstName, middleName, lastName] = ["Charles", "CharlieAlgo", "Abu"];
firstName = "poposki";
console.log(firstName);

//object literals, a way for us not to have to write duplicate codes
function addressMaker(city, state){
    const newAddress = {city, state}; //instead of {city: city, state: state};
    console.log(newAddress);

}
addressMaker("Ikeja", "Lagos");

// object literal challenge
/*function addressMaker(address){
    const newAddress = {
        city: address.city,
        state: address.state,
        country: "Nigeria"
    };
}
addressMaker({city: "Austin", state: "Texas"});*/

function addressMaker(address){
    const {city, state} = address; // destructurize the address so we dont have to use city: address.city
    const newAddress = {
        city,
        state,
        country: "Nigeria"
    };

console.log(`${newAddress.city}, ${newAddress.state}, ${newAddress.country}`);
}
addressMaker({city: "ikeja", state: "lagos"});


// for of loop it enables us to iterate through an entire variable
let fulleName = "Charles";

for(const ind of fulleName){
    console.log(ind);
}
//spread operator 3 dots ... to give same value, without altering, make a duplicate so you can work 
//on it seperately
let example = [1,2,3,4,5];
let example2 = [...example];
example2.push("good");
console.log(example2);

console.log(example);

//Rest Operator; to get our argument out of our function, when we dont know how many inputs are going to be used
function inputs(...num){
    console.log(num);
}
inputs(1,2,3,6,7,8);

// Arrow function great function to eliminate some of the boiler plate that come with function
function add(...num){
    let total = num.reduce(function (x,y){ // we can replace the word function with the arrow symbol =>.
        //let total = num.reduce((x,y)=> x + y);
        return x+y; // also we can eliminate the word return and also the semicolun
    
    });
    console.log(total);
}
add(1,2,3,6,7);

function multiply(...nums){
    let total = nums.reduce((x,y)=> x * y);
    console.log(total);
}
multiply(1,2,3,6,7);


//practice
/*let total = num.reduce((x,y) => x * y)
let total = num.reduce(function(x,y){
    return x+y;
})*/

//Default parameters;  this is gonna allow us to prevent alot of false error checking
// we have a solution in place to 
//function add(numArray){ will give typeError undefined function but we can set it to an empty array
function sum(numArray = []){
    let total = 2;
    numArray.forEach(element => {
     total += element;   
    });
    console.log(total);
}
sum();

//includes()   in the past if we want to check if an object has a value, we will use 'index of'
// so we use includes() which returns true or force, this helps us know if an element is contained within the array
//this method is not supported by internet explorer 
let sumArray = [1,2,3,4,5];
console.log(sumArray.includes(5));

// Let & Const  used to avoid variable hoisting
//let for variables that are re-assignable, const as the name implies, variables can be re assigned
// this gives Uncaught TypeError: Assignment to constant variable 
/*const answer = 10;
answer = 15
console.log(answer);*/

// but you can asign properties to it.
const assign = [];
assign.push({"firstName": "charles",
            "LastName": "Abu"});
console.log(assign);

// import and export data from different applications, this allows to make our code more module
/*export const data = [1,2,3,4];
// then we can import the data into another (file.js)
//import { data } from "./file.js";
//from here we can update our data
let updatedData = data.push(8);
//to add 8 to the elements inside our array*/

// padStart() & padEnd()
//js gives us more love for strings to add value to the start and end of the strings
let elie = "charles";
console.log(elie.padStart(12, "b")); // the integer is the allowed element that will display.
//b is not gonna be logged if charles is up to 12 alphabets. same applies for padEnd

//classes a way to take js in a more object oriented way
/*import { Animal } from "./animal.mjs";
let cat = new Animal("cat", 4);
cat.legs = 3;
cat.makeNoise("meow");
console.log(cat.legs);*/

// Async and Await
//doing Ajax call using fetch which returns a promise, then we use async alongside promise
// you promise to send me a data with fetch, when you do, i will do something with it, in the main time just keep running
//your code thats how Async and promisses work
 

//const apiUrl = "https://fcctop100.herokuapp.com/api/fccusers/top/alltime";

/*function getTop100Campers() {
    fetch(apiUrl)   //to get the data we are looking for, it is returning a promise of type return
    .then((r) => r.json) // json converts the promise into something that we can use, otherwise js wudnt kno what to do
    .then((json) => {
        console.log(json[0])
    })
    .catch((error) =>{
        console.log("failed");
    }) // for any reason we fail to fetch the date, instead of displaying error, we display a message
}
getTop100Campers()*/

/* now that we have done the Ajax call, Async and promisses, we can do all this with less code using
Async and Await, u dont just use Async and Await when you wanna fetch from a server, lets say you have a timer
and you wanna have something to delay it, you can use Async or promises.*/

//server call, instead of doing it with promises we gonna do it with Async and Await
// it helps to resolve things/ errors before logging the display, whiles if there was no await they will all run
//synchronously without resolving any possible issues

/*const apiUrl = "https://fcctop100.herokuapp.com/api/fccusers/top/alltime";
async function getTop100Campers() {
    const response = await fetch(apiUrl);
    const json = await response.json()
    
}
getTop100Campers();*/

//Async and Await challenge, resolving a promise to get that resolved set.
function resolveAfter3seconds(){
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("resolved");
        }, 3000);
        });
}
//resolveAfter3seconds().then((data) =>{
   // console.log(data)
//});

//using Async and await

async function getAsyncData(){
    const result = await resolveAfter3seconds();
    console.log(result);
}
getAsyncData();

//sets allows  us to create  a unique list, a set is iterable so you can use things like for each for of ...
const exampleSet = new Set([1,2,3,3,3,3,1,3]);
exampleSet.add(5)
exampleSet.delete(1)
//exampleSet.clear(); to clear all the element
console.log(exampleSet.has(20)); //returns boolean true or false.
