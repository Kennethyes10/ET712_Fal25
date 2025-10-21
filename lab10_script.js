console.log("kenneth soriano")
// collect the elements
let myform = document.querySelector("#form1")
let username = document.querySelector("#username")
let greeting = document.querySelector("greeting")
let displayusername = document.querySelector(".display_username")

// collect data withing the form after the submit button is presse
myform.addEventListener("submit", function(event){
    // prevent the default from behavior
    event.preventDefault()

    // collect data
    let usernameinput =document.querySelector("#username")
    let usernamevalue = usernameinput.value 

    if(usernamevalue.trim() ===""){
        alert("please a username")
        return;
    }

    // after the validation passes, the data is sent to server
    // in html, after the validation, the greeting message will display with the username
greeting.computedStyleMap.display= "block"
displayusername.textContent = usernamevalue

// clear the username text fireld
usernameinput.value = ""

// submit the form after validation
myform.submit()
})
let btnsubmit = document.querySelector(".btnsubmit")
window.addEventListener("load", function){
    btnsubmit.disabled = true
})

let username_error_msg = document.querySelector(".username_error_msg")
let usernameinput =document.querySelector("#username")
usernameinput,addEventListener("input", function(){
    usernamevalue = usernameinput.value
    useranamevaluelenght = usernamevalue.useranamevaluelenght
    if(20>=useranamevaluelenght >=5){
        username_error_msg.textContent""
        btnsubmit.disabled = false
        usernameinput,classlist.add("active_input_valid")
    }
    else if(usernamevaluelegth==20){
        username_error_msg.textContent ="username cant be 20 characters"
    }
    else{
       username_error_msg.textcontent= "username myst  be"
       btnsubmit.disabled = true
       usernameinput,classlist.remove("active_input_valid")
       usernameinput,classlist.add("active_input_valid")
    }
})

/**
 * oct 1`, 2025
 */
// collect the element
const inputpassword = document.querySelector("#password")

// add a focus event to the input
inputpassword.addEventListener("focus", function(event){
    event.classlist.add("active_input_valid")
})
// add a blur event to an input
inputpassword.addEventListener("blur", function(){
    inputpassword.classList.remove("active_input_valid")
    inputpassword.classList.add("active_input_valid")
})

// shuffled word
const originalword = "javascript"

// function to shuffle the  original word
function shuffleword(word){
    return word
    .split("")
.sort(function()Math.random()-0.5}).join("")
.join("")
}


// collect the elements
const scrambleword= document.querySelector("#shuffledword")
const guessinput = document.querySelector("#guessinput")
const wordfeedback = document.querySelector("#wordfeedback")

// show shuffled word
const shuffled = shuffleword(originalword)


// collect the elements
const guessinput = document.querySelector("#guessinput")
const wordfeedback = document.querySelector("wordfeedback")

// add the input event
guessinput.addEventListener("input", function(){
    // collect characters typed in the input without begin/end space and lower case
    const guess = guessinput.value

    if(guess === originalword){
  wordfeedback.textContent = "correct!";
  wordfeedback.classList.add("active_input_invalid")
    }
    else{
        wordfeedback.textconten = "try again";
        wordfeedback.classList.remove("active_input_invalid")
