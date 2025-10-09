let displaypexels = document.querySelector(".displaypexels")
// read the pixels from the y axis
window.addEventListener9("scroll", function(){
    let y_pixels = window.scrollY
    displaypexels.innerHTML = `${y_pixels} px away from the top`
})

// to the top
const toTop = document.querySelector(".toTop")
window.addEventListener("scroll", function(){
    let y_pixels = this.window.scrollY
    if (y_pixels>600){
        toTop.style.display = "block"
    }
    else{
        toTop.style.display = "none"
    }
})
 // resize event: change background color if the window is resize
 window.addEventListener("resize", function(){
displaypexels.style.backgroundcolor = "crimson"
 })

 //load event: when the page finishes loading, open an alert dialog
 window.addEventListener("load", function(){
    this.alert("pae fully load")
 })


// modal window
const openmodal = document.querySelectorAll(".openmodal")
const modaloverlay = document.querySelectorAll("#modaloverlay")
const closebtn = document.querySelectorAll("#closebtn")

openmodal.addEventListener("click", function(){
    modaloverlay.style.display = "block"
})

closebtn.addEventListener("click", function(){
    modaloverlay.style.display = "none"
})
