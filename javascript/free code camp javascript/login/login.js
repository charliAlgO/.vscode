pass = document.getElementById("password")

function testEqual(pass) {
    if (pass === "HeartJs6#") { // to check if val equals 14 using the double equal sign
        return "correct password"; 
    } else{
    return "Incorrect password";
    };
}
console.log(testEqual(pass));
