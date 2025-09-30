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
