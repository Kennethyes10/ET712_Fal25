console.log("kenneth soriano")
// collect the elements
let myform = document.querySelector(".myform")
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
    }
    else{
       username_error_msg.textcontent= "username myst  be"
       btnsubmit.disabled = true
    }
})
