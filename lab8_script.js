/*
lab 8, event
oct 7,2025
*/
console.log("lab 8-events");
console.log("Kenneth Soriano")

let btnpressme=
document.querySelector(".btnpressme");
btnpressme.addEventListener("click",function(e){
    if(e.target.textContent==="Press me!"){
e.target.textcontent="key was pressed";
    }
    else{
e.target.textContent="Press ME!";

//toggle between the classes in css
e.target.classlist.toggle("btnactive");
    }};

// Event delegation
let list =document.getElementById("#list");
list/addEventListener("click",function(event){
    // check if the clicked element is a list item or its child
    if(event.target.tagName.toLowercase()==="li"){
        event.target.();
    }
})

/** prevent default */
const qcclink = document.querySelector(".qcclink")
qcclink.addEventListener("click", function(e){
    e.preventDefault()
    alert("qcc website is under maintenance")
})

/** WINDOW EVENT */
let btnscrollby = document.querySelector(".btnscrollby")
let content = document.querySelector("#content")
btnscrollby.addEventListener("click", function(){
    window.scrollBy(200,0)
})
/** photo gallery scrolling */
const btnright = document.querySelector(".btnright")
const btnleft = document.querySelector(".btnleft")

// define a function to scroll the gellary by an image size
function scrollgallery(pixels){
    document.querySelector("div.gellery-container").scrollBy({
        left: pixels,
        behavior: "smooth"
    })
}

// add event to each button
btnright.addEventListener("click",function(){
    scrollgallery(500)
btnleft.addEventListener("click", function(){
    scrollgallery(-500)
})
}


// *Lab exercisse
<meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>lab8-Kenneth Soriano</title>
  <style>

    

