/* adding element to the page.
select element we are adding to, append and append child
with "append"" you can append strings but with append child you can 
only append things like tags; span, divs ...*/ 
//const body = document.body;
//body.appendChild("hello world"); // you get an error.
//body.append("hello world"); // no error
/* with appen you can pass in multiple things into it, but in 
appendchild you can"t*/
//body.appendChild("hello world" , "best") // error
//body.append("hello world" , "best") // this will run

/* Lets create an element, where appendchild can work*/
//creatng something in js. doesnt mean you have added it to the page



/*const div = document.createElement("div");
//div.innerText = "Hello World"
body.append(div);*/

// You can also add text using

/*div.textContent = "YELLO World"
div.innerHTML = <br> hello world </br>
body.append(div);*/

/*const body = document.body;
const div = document.createElement("div")
const strong = document.createElement("strong")
strong.innerText = "Hello World 2";
div.append(strong)
body.append(div); // more secure way to change html content. */






// innertext logs it out out, just like how it is on the html display.
// textContent logs with all the extra element or style involve 
// thats the difference between innerText and textContent

// modifying the html inside an element
const body = document.body;
const div = document.querySelector("div");
const spanH1 = document.querySelector("#hi");
const spanBye = document.querySelector("#bye");
/*spanBye.remove();
div.append(spanBye);*/
console.log(spanH1.getAttribute("id"));
//console.log(spanH1.setAttribute("id", "poposki"))
// we can also use spanH1.id = "poposk"
spanH1.removeAttribute("id");





