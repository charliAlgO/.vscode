/*var countA = document.getElementById("countFifu");
var countApp = countA.innerHTML;
console.log(countApp)

const btn = document.getElementById("increment");
let countApper = 0;
btn.addEventListener("click", function (event){
    countApp.innerText = countApper;
    countApper += 1;
    
});*/

const btn2 = document.getElementById("decrement");
const btn1 = document.getElementById("increment");
const btn0 = document.getElementById("reset");
let charles1 = document.getElementById("countFifu");
let charles2 = document.getElementById("Record");
let charles = 0;
let charles3 = [];
btn1.onclick = function (){ 
    charles++;
    charles1.innerHTML = "Total" + ":" + " " + charles;
}

btn2.onclick = function (){ 
    if( charles > 0){  
        charles--;
        charles1.innerHTML = "Total" + ":" + " " + charles;
    }
}
btn0.onclick = function (){  
        //console.log(charles);
        charles3.push(charles)
        //console.log(charles3);
        charles2.innerHTML = charles3.join()
        //charles2.innerHTML = charles;
        charles = 0
        charles1.innerHTML = "Total" + ":" + " " + charles;
}
        


/*function counter(){
            for(0 ="charley"<100){

            }
        }
button = "btn";
button.onclick = function counter() {
    if( charley = 0){ 
        charley++;
    }
    return charley=charley.innerHTML;
}*/



