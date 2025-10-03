/**
 * Kenneth Soriano
 * lab 7 - Intro to DOM
 */
console.log("Kenneth Soriano")
// access(select) element by id name
let titlenode = document.querySelector("#title")
console.log(titlenode)
// access(select) element by class name
let desc = document.querySelector(".description")
console.log(desc)
//access(select) elemetn by tag name
let heading1 = document.querySelectorAll("h1")
console.log(heading1)

// access(select) all element by class name
let description_all = document.querySelectorAll(".description")
console.log(description_all)
console.log("loop through each element in the node list")
for(let index = 0; index<description_all.length; index++){
    console.log(`${description_all[index].textContent}`)
}

// collect(select) the elements
let shape = document.querySelector(".shapeContainer")
let btn_square = document.querySelector(".btn_square")
let btn_circle= document.querySelector(".btn_circle")
let btn_rectangle = document.querySelector(".btn_rectangle")

// add an event to each button 

btn_square.addEventListener("click", function(){
    shape.classname = "square"
    shape.textContent = "square".toUpperCase()
    shape.style.backgroundColor ="gold";
} )
btn_circle.addEventListener("click", function(){
    shape.classname = "circle"
    shape.textContent = "cricle"
    shape.style.fontsize = "1rem"
    shape.style.backgroundColor = "hotpink";
})

btn_rectangle.addEventListener("click", function(){
    shape.classname = "rectangle"
    shape.textContent = "rectangle"
    shape.style.backgroundColor = "gray";
    shape.style.fontsize = "2rem"
})


// SEP 30
// event handler
let btnpress =  document.queryselector(".btnpress")
btnpress.onclick= function(){alert(`${new Date()}`)}

// mouse events
let x = document.queryselector(".x")
let circle_paragraph = document.queryselector(".circle_paragraph")
x.onmouseover = function(){circle_paragraph.textcontent += " - Circle -"}

// event listener
let box_color = document.queryselector(".box_color")
// fuction to randomly pick a color as a rgb value
const randomRGB = fuction(){
    let red = Math.floor(Math.random()*255)
    let green = Math.floor(Math.random()*255)
     let blue = Math.floor(Math.random()*255)
    return `rgb(${red}, ${green}, ${blue})`
}
box_color.addEventlistener("mouseout",fuction(){
    box_color.style.bacgroundcolor = randomRGB()
})


// Key event
// collect the element
let inputtext = document.queryselector(".inputtext")
let username_paragraph = document.queryselector(".username_paragraph")
inputttext.addEventlistener("keydown", fuction(){
    username_paragraph.textcontent = "username must have 3+ charcaters"
})

// EXERCISE
// note: use querySelector() or querySelectorAll()
// collect elements: search for the first p with class ps1
// add a mouseout event to change the text content to "STUDENT'S FULL NAME"
let ps1 = document.queryselector('.ps1');
ps1.addEvenlistener('moseout',function(){
    ps1.textcontent="STUDENT'S FULL NAME"
});


// search for the second p with class ps2
// add a click event to the ps2 to change the font-size to 25px  and color to olive when is clicked
let ps2 = document.queryselector('.ps2');
 ps2.addEvenlistener('click',function(){
     ps2.style.fontsize = "25px";
     ps2.style.color = "olive";
 });

// search for the first div with class divs2
// add a click event to change the background color to indigo
let divs2 = document.queryselector('.divs2');
 divs2.addEvenlistener('click',function(){
     divs2.style.backgroundColor = "indigo";
 });


// search for the second div with class divs2
// add a keydown event to change the width of divs3 to 300px
let divs3 = document.queryselector('.divs3');
 divs3.addEvenlistener('click',function(){
     divs3.style.width = "300px";
 });
