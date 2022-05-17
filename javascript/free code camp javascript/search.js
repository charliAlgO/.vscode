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