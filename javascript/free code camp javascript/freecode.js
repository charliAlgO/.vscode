var myStr = " i am a\"double quoted\" string inside a\"double quotes"
console.log(myStr)
document.write(myStr)
myStr = "Firstline\n\\Secondline\\\n\'Thirdline\'"
console.log(myStr)

/*var myStr = "This is the start. " + "This is also the beginning"
console.log(myStr)*/
var myStr = "This is the start. "
myStr += "This is also the first"
console.log(myStr)

var myName = "Charles"
var myCant = "My name is " + myName + " how are you?"
console.log(myCant)

var qualifier = "perfect"
var myStr = "CharlieAlgo is "
myStr += qualifier
console.log(myStr)

var lastNameLength;
var lastName = "Abu"
lastNameLength = lastName.length
console.log(lastNameLength)

var firstLetterOfLastName = ""
var lastName = "Abu"
firstLetterOfLastName = lastName[2]
console.log(firstLetterOfLastName)
/* strings are immutable means they cannot be altered once the are created*/

//how to get the last letter of a word, no matter how long
var firstName = "charles"
var lastLetterOfFirstName = firstName[firstName.length -1]
console.log(lastLetterOfFirstName)
// we can also use same method to get the nth number of a string
// from the last letter
var firstName = "charles"
var lastLetterOfFirstName = firstName[firstName.length -3]
console.log(lastLetterOfFirstName)

//word blanks .. using strings, provide sentence with some missing word
function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
    var result = "";
    result += "The " + myAdjective + " " + myNoun + " " + myVerb + " to the store " + myAdverb;
    return result;
}
console.log(wordBlanks("dog", "big", "ran", "quickly"));
console.log(wordBlanks("snake", "long", "moved", "swiftly"));

//Arrays allow you to store several pieces of data in one place
var myArray = ["charles", 6];
//Nested Array, Elements in an array within another array
//for example, arrays within an array
var ourArray = [["the universe", 42], ["everything", 101010]];
var myData = ourArray[1]
console.log(myData)

// modifying data with Array, which we couldn't do with strings
var myData = ourArray[0] = ["nothing", 000000];
console.log(myData);

// Access Multi-Dimensional Arrays with indexes
var ourArray = [["the universe", 42], ["everything", 101010]];
var myData = ourArray[1][0]
console.log(myData)

// Manipulate Arrays with push()
var myArray = [["john", 75],["dog", 2]]
myArray.push(["charles", 6])
console.log(myArray)

// Manipulate Arrays with pop() it removes the last element of the array
var myArray = [["john", 75],["dog", 2]]
myArray.pop()
console.log(myArray)

// Manipulate Arrays with shift() it removes the first element of the array
var myArray = [["john", 75],["dog", 2]]
myArray.shift()
console.log(myArray)

// Manipulate Arrays with unshift() it adds to the first element of the array
var myArray = [["john", 75],["dog", 2]]
myArray.unshift(["charles"])
console.log(myArray)

//shopping list
var myList = [["Garri", 2], ["milo", 1] ["kulikuli", 2], ["water", 2]]

// write reusable with functions
function ourReusableFunction(){
    console.log("hello 9ja")
}
ourReusableFunction()
// passing values to functions with Arguments
function ourFunctionWithArgs(a, b){
    console.log(a - b)
}
ourFunctionWithArgs( 5, 4)

function ourFunctionWithArg(a, b){
    console.log(a + b)
}
ourFunctionWithArg( 5, 4)

//Global scope and functions
//scope refers to the visibilities of variables
//global scope means it can be seen everywhere in your js code
// variables set outside the function are called global scope
// if no var keyword is assigned to it, it becomes global
var myGlobal = 10
function fun1(){
    oopsGlobal = 5
}
function fun2(){
    var output = ""
    if (typeof myGlobal != "undefined"){
    output += " myGlobal: " + myGlobal
    }
if (typeof oopsGlobal != "undefined"){
    output += " oopsGlobal: " + oopsGlobal
    }
    console.log(output)
}
fun1()
fun2()

// variables defined within a function has local scope
function myLocalScope(){
    var myVar = 5
    console.log(myVar)
}
myLocalScope()

//when you console outside the function its gonna show undefined because its local scope
//console.log(myVar)

/* it is possible to have local and global variable with the same name
when you do this, the local take precedence.*/
var outerWear = "T-Shirt"
function myoutfit(){
    var outerWear = "Sweater"
    return outerWear
}
console.log(myoutfit())
console.log(outerWear) // this will give us back the global value which is T-shirt

// Return a value from a function with Return
function minusSeven(num) {
    return num - 7
}
console.log(minusSeven(20)) // we will get 13

function timesFive(num){
    return num * 5
} 
console.log(timesFive(10)) // we will get 50

//Understanding undefined Value Returned from a Function
//if you dont specify a return value, its gonna have a return value of undefined
/*var sum = 0
function addThree(){
    sum += 3
}
console.log(addThree)*/

//Assignment with a Returned Value
var changed = 0;

function change(num) {
    return (num + 5) / 3;
    console.log(changed)
}
changed = change(3); 

//Stand in line
/* in computer science a cue is an abstract data structure in order. new items are added to the back of the back
old items are taken out the front, we are going to simulate that using the nextInLine function. the purpose 
is to show that
you can add an item to the array that is parsed in, and its going to return the first item on the list*/
 function nextInLine(arr, item) {
    arr.push(item);
    return arr.shift();/*Removes the first element from an array and returns it. If the array 
                      is empty, undefined is returned and the array is not modified.*/
 }

 var testArr = [1,2,3,4,5];

 console.log("Before: " + JSON.stringify(testArr));
 console.log(nextInLine(testArr, 6));
 console.log("After: " + JSON.stringify(testArr));

 /*Boolean Values, we could return true or false 
 function booleanIsFalacious(){ 
 return true
 }*/

 //use conditional logic with if statements, the if statement is used to make decision 
 function ourTrueOrFalse(isItTrue){ // takes in a variable and checks if its true or not
     if (isItTrue){
         return "Yes, it's true";
     }
     return "No, it's false";
    }
    console.log(ourTrueOrFalse(true));

    //Comparison with the Equality Operator ==
    function testEqual(val) {
        if (val == 14) { // to check if val equals 14 using the double equal sign
            return "Equal"; 
        }
        return "Not Equal";
    }
    console.log(testEqual(5));

    // comparison using the strict equality operator === it also compares strings. it doees not do type 
    // conversion unlike the double equal sign


    function compareEquality(a,b){
        if ( a === b){
            return "Equal";
        }
        return "Not Equal";
    }
    console.log(compareEquality(10, "10"));

    //inequality operator
    function testNotEqual(val){
        if (val != 99){
            return "Not Equal";
        }
        return "Equal";
    }
    console.log(testNotEqual(99)); // we parse in 99 here which is equal
    //comparison with the logical And operator
    function testGreaterThan(val) {
        if (val > 100){
            return "Over 100";
        }
        return "10 or Under";
    }
    console.log(testGreaterThan(70))
    //Greaterthan or equal to 
    function testGreaterOrEqual (val){
        if (val >= 20) {
            return "20 or Over";
        }
        if(val >= 10){
            return "10 or over"
        }
        return "Less than 10"
    }
    console.log(testGreaterOrEqual(5))

    // less than Operator
    function testLessThan(val){
        if(val < 25){
            return "Under 25"
        }

        if(val < 55){
            return "Under 55"
        }
    }
    console.log(testLessThan(20))
    //lessthan or equal to, just us the <=

    //comparisons with the Logical And Operator; sometimes you may wanna check if two things are true
    //at the same time
    function testLogicalAnd(val){
        if(val <= 50 && val >= 25){
            return "Yes"
        }
        return "No"
    }
    console.log(testLogicalAnd(30))

    //comparisons with the Logical Or Operator;
    function testLogicalOr(val){
        if(val < 12 || val > 25){
            return "Go inside"
        }
        return "Prohibitted"
    }
    console.log(testLogicalOr(11))

    //Else Statements
    /* when if statement is true, normally the block of code after the 
    if statement will be evaluated, but if it's not true nothing will happen
    but with else statement an alternate block of codes can be executed*/
    function testElse(val) {
        var result = "";
        if (val > 5) {
            result = "Bigger than 5"
        } else {
            result = " 5 or Smaller";
        }
        return result;
    } 
    console.log(testElse(4))
    // else if
    /* multiple conditions we use the else if, its a way of chaining multiple statements together*/
    function testElseIf(val){
        if(val > 10) {
            return "Greater than 10"
        } else if ( val < 5) {
            return "Smaller than 5"
        } else {
            return "Between 5 and 10"
        }
    }
    console.log(testElseIf(7))
    // logical order in if else statements, order is very important when you are using if else
    //statement. let's check this example
    function orderMyLogic(val){
        if (val < 10) {
            return " Less than 10";
        } else if (val < 5) {
            return "Less than 5";
        } else{
            return "Greater than or equal to 10"
        }
    }
    console.log(orderMyLogic(3)) 
    
    /*this less than 10 and also less than 5, how do we get an
    that is just less than 5? so it in the wrong order, so we can change
    the order. so once the first condition is met, it doesnt even check
    for the next condition.*/

        function orderMyLogicB(val){
         if (val < 5) {
        return " Less than 5";
        } else if (val < 10) {
        return "Less than 10";
        } else{
        return "Greater than or equal to 10"
        }
    }
    console.log(orderMyLogicB(3))

    //Golf Code
    var names = ["Hole-in-one", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go home"];
    function golfScore(par, strokes){
        if( strokes == 1){
            return names[0]
        } else if ( strokes <= par -2 ){
            return names[1]
        } else if( strokes ==  par -1 ){
            return names[2]
        } else if( strokes == par){
            return names[3]
        } else if(strokes == par + 1){
            return names[4]
        } else if(strokes == par + 2){
            return names[5]
        } else{
            return names[6]
        }

    }

    console.log(golfScore(4, 6));
 
    // Switch Statements
// instead of using chained else if statement you can use Switch statement, it tests a value, and you can 
//have many case statements, which defines various possible values.

function caseInSwitch(val){
    var answer = "";
    switch(val) {          // if val is one and it is using the strict equality operator,e.g "1" will not be equal to 1
        case 1:             // if val is equal to one then it will set the answer to alpha.
            answer = "alpha";
            break;          // break means we are at the end of the case statement, if you dont have a break statement
                            //it will just run unto the next case statement automatically
        case 2:
            answer = "beta";
            break;
        case 3:
            answer = "gamma";
            break;
        case 4:
            answer = "delta";
            break;
    }
    return answer;
    }
console.log(caseInSwitch(4));

function switchOfStuff(val){
    var answer = "";
    switch(val){
        case "a":
            answer = "apple";
            break;
        case "b":
            answer = "bird";
            break;
        case "c":
            answer = "cat";
            break;
        default:
            answer = "\"stuff\"";
            break;
    }

        return answer;
}
console.log(switchOfStuff(9)); /* what another value is put asides a,b or c it will return empty
but when we add default*/ 

// Multiple Identical Options in Switch Statements
function multIdOp(val){
    var answer = "";
    switch(val){
        case 1:
        case 2:
        case 3:
            answer = "Low";
            break;
        case 4:
        case 5:
        case 6:
            answer = "Mid";
            break;
        case 7:
        case 8:
        case 9:
            answer = "High";
            break;
        default:
            answer = "Not Qualified";
            break;
    }
    return answer;
}
console.log(multIdOp(9))

// Replacing If Else Chains with Switch
function chainsToSwitch(val){
    var answer = ""; 
    if(val === "bob"){
        answer = "Marley";
    } else if(val === 42){
        answer = "The Answer";
    } else if(val === 1){
        answer = "There is no #1";
    } else if(val === 99){
        answer = "Missed me by this much!";
    } else if(val === 7){
        answer = "Ate Nine";
    } else {
        answer = "dont belong";
    }
    return answer;
}
console.log(chainsToSwitch(42))

function chainsToSwitch(val){
    var answer = "";                      
    switch(val){
        case "bob":
            answer = "Marley";
            break;
        case 42:
            answer = "The Answer";
            break;
        case 1:
            answer = "There is no #1";
            break;
        case 99:
            answer = "Missed me by this much!";
            break;
        case 7:
            answer = "Ate Nine";
            break;
        default:
            answer = "dont belong";
    }
    return answer;
}
console.log(chainsToSwitch(99));

 // counting cards, when you see a low card, the card goes up, when you see a middle card
 // the card stays the same, when you see a high card it comes down. when the card is positive the 
 //  player should bet high, when it is negative the player should bet low.
 // we are going to use a switch statement.

 var count = 2;
 function cc(card) {
     switch(card){
         case 2:
         case 3:
         case 4:
         case 5:
         case 6:
             count++;
             break;
        case 10:
        case "J":
        case "Q":
        case "k":
        case "A":
            count --;
            break;
     }
     var holdbet = "Hold";
     if (count > 2){
         holdbet = "Bet";
     }
     return count + " " + holdbet
 }
 console.log(cc("A"));

 // Objects, similar to array, instead of using inndexes to access data you use arrays.
 var ourDog = {
     "name": "Camper",
     "Legs": 4,
     "tails": 1,
     "friends": ["everything!"] // everything before the columns is called the property, while after is called value.
};
// accessing objects with dot notation
var testObject = {
    "hat":   "ballcap",
    "shirt": "jersey",
    "shoes": "cleats"
};
var hatValue = testObject.hat;
var shirtValue = testObject.shirt;
console.log();

// accessing objects with bracket notation, you can use anytime, but its adviseable when the ppt has spacing
var testObj = {
    "an entree": "hamburger",
    "my side": "veggies",
    "the drink": "water"
};
var entreValue = testObj["an entree"];
var drinkValue = testObj["my side"];

//access objects properties with Variables
 var testObj = {
     12: "Namath",
     16: "Montana",
     19: "Unitas"
 };

 var playerNumber = 16;
 var player = testObj[playerNumber]; // using bracket

 // updating Object ppt
 var ourDog = {
     "name" : "Camper",
     "legs": 4,
     "tails": 1,
     "friends": ["everything"]
 };
 ourDog.name = "Happy Camper";
 console.log(ourDog.name);

  // add new properties to an object using dot or bracket notation
  var ourDog = {
      "name": "Camper",
      "legs": 4,
      "tails": 1,
      "friends": ["everything!"]
  };
  ourDog.bark = "bow-wow"; //using dot notation
  console.log(ourDog);

  var ourDog = {
    "name": "Camper",
    "legs": 4,
    "tails": 1,
    "friends": ["everything!"]
};
ourDog["bark"] = "woof!"; // using the bracket notation
console.log(ourDog);

// deleting properties from object
var ourDog = {
    "name": "Camper",
    "legs": 4,
    "tails": 1,
    "friends": ["everything!"]
};
delete ourDog.friends;
console.log(ourDog);

//Using Objects for lookups; a bunch of switch statements can be replaced using Objects
function phoneticLookup(val) {
    var result = "";
    switch(val) {
        case "alpha":
            result = "Adams";
            break;
        case "bravo":
            result = "Boston";
            break;
        case "charlie":
            result = "Chicago";
            break;
        case "delta":
            result = " Denver";
            break;
        case "echo":
            result = "Easy";
            break;
        case "foxtrot":
            result = "frank";
            break;
    }
    return result;
}
console.log(phoneticLookup("echo"));

//using Objects
function phoneticLookup(val) {
    var result = "";
    var lookup = {
        "alpha": "Adams",
        "bravo": "Boston",
        "charlie": "Chicago",
        "delta": "Denver",
        "echo": "Easy",
        "foxtrot": "frank",
    };
    result = lookup[val];
    return result;
}
console.log(phoneticLookup("alpha"));

// testing objects for properties
var myObj = {
    gift: "porny",
    pet: "kitten",
    bed: "sleigh",
};

function checkObj(checkProp) {
    if(myObj.hasOwnProperty(checkProp)){
        return myObj[checkProp];
    } else {
        return "Not Found"
    }
};
console.log(checkObj("bed"));

// manipulating Complex Objects
var myMusic = [
    {
        "artist": "Billy Joel",
        "title": "Piano Man",
        "release_year": 1973,
        "formats": [
            "CD", "8T", "LP"
        ],
        "gold": true
    },
    {
        "artist": "Beau Carnes",
        "title": "Cereal Man",
        "release_year": 2003,
        "format": [
            "Youtube video"
        ]
    },
]; // this is similar to JsON

//Accessing Nested Objects
var myStorage = {
    "car": {
        "inside": { 
            "glove box": "maps",
            "passenger seat": "crumbs" 
        },
        "outside": {
            "trunk": "jack"
        }
    }
};
var gloveBoxContents = myStorage.car.outside.trunk;
console.log(gloveBoxContents)

//Accessing Nested Array
var myplant = [
    {
        "type": "flowers",
        "list": [
            "rose", "tulip", "dandelion"
        ]
    },
    {
        "type": "trees",
        "list": [
            "fir", "pine", "birch"
        ]

    }
];
var vineyard = myplant[0].type//list[0];
console.log(vineyard);

// Record Collection
var collection = {
    "2548": {
        "album": "Slippery When Wet",
        "artist": "Bon Jovi",
        "tracks": [
            "Let It Rock", 
            "You Give Love a Bad Name"
        ]
    },
    "2468": {
        "album": "1999",
        "artist": "Prince",// its gonna update d collection, if we make any changes
        "tracks": [
            "1999",
            "Little Red Corvette"
        ]
    },
    "1245": {
        "artist": "Robert Palmer",
        "tracks": []
    },
    "5439": {
        "album": "ABBA Gold"
    }
};
var collectionCopy = JSON.parse(JSON.stringify(collection)); //to keep a copy of the collection for test, 
//since we are going to be changing the object, we wanna keep a copy of the original 


function updateRecord(id, prop, value){
    if(value===""){
        delete collection[id][prop]
    }else if(value == "tracks"){
        collection[id][prop] =   collection[id][prop] || [] // create an empty array
        collection[id][prop].push(value); //add the value to the created array
    } else {
        collection[id][prop] = value; // if it is not track and it is not empty
    }

    return collection;
}
console.log(updateRecord(1245, "tracks", "[popo, charlie]"));
//console.log(updateRecord(5439, "artist", "ABBA"));

//Iterate with While loop
var myArray = []
i = 0
while( i < 5){
    myArray.push(i)
    i++
}
console.log(myArray)


/*var ourArray = [];

for( var i= 0; i<10; i++ ){ // increment by 1
    ourArray.push(i);
}
console.log(ourArray);
 
var ourArray = [];*/

for( var i= 0; i<10; i += 2 ){ // even increment
    ourArray.push(i);
}
console.log(ourArray);
var ourArray = [];

for( var i= 1; i<10; i += 2 ){ // odd increment
    ourArray.push(i);
}
console.log(ourArray);

var ourArray = [];

for( var i= 10; i>0; i-- ){ //decrement by 1
    ourArray.push(i);
}
console.log(ourArray);
var ourArray = [];

for( var i= 10; i>0; i-=2 ){
    ourArray.push(i);
}
console.log(ourArray);
 
var ourArray = [];

for( var i= 9; i>0; i-=2 ){
    ourArray.push(i);
}
console.log(ourArray);
// nested for
function multiplyAll(arr){
    var product = 1;
    for (var i = 0; i < arr.length; i++){
        for (var j=0; j < arr[i].length; j++){ // going into the array inside the array
            product *= arr[i][j];
        }
    }
    return product;
}
var product = multiplyAll([[1,2],[3.4],[5,6,7]]);
console.log(product);

// do while loop //run atleast one time and check for conditions 
 

 

 




     
 




+