/**
 * Kenneth Soriano
 * lab 5, more about fuctions, object
 * Sep 11, 2025 
 */
console.log("Kenneth Soriano")
// Example 1
// anonymous fuction in a variable
let greet = function (username){
    console.log(`Welcome to fuction ${username}`)
}
// arrow fuction
let greeting =  (username)=>{
    console.log(`good afternoon ${username}`)
}
// EXAMPLE 2: default parameters
// randomly generated a number between 1 and 9 
// fuction will pass the amount of time that the number will be generated
function rand_number(x){
for(let n = 1; n <= x; n++){
    let num = Math.ceil (Math.random()*9)
    console.log(`${num}`)
}
}

// EXAMPLE 3: spread syntax ...
numbers = [2, 0, -10, 5, 8, -9]
let max_numbers = Math.max(numbers)
console.log(`---Example 3 : spread -----`)
console.log(`The maxium number is = ${max_number}`)

// create an object 'car'
const car ={
    type:"fiat",
    model: "500",
    color: "white"
}

//method
car_discription = fuction(){
return `Car type = ${this.type}, ${this.model}, car color = ${this.color}`
}

// EXAMPLE 5
// create an object 'myMath' that will calculate the perimeter or the area of a rectangle
const myMath = {
// methods
perimeter : function(w=0,1=0){ return (2*w)+(2*1) },
area : function(w=0,1=0) {return w*1}
}

// EXAMPLE 6
const cat = {
// properties
name: "Mickey"
color: "Black with white spots",

breed: unknow ,
// method
meow:()=>{console.log("MEOW MEOW MEOW"){
}

// EXAMPLE 7
const hen = {
    // properties
    name : "helen",
    eggCount : 0,

    // method 
    layAnEgg : ()=>{
        this.eggCount++
        return `${this.name} lays an egg`
    },
    resetEggcount(){
        this.eggCount = 0
        return `${this.name} egg count = ${this.eggCount}`
    }
}


// Example:8 try-catch

function yell(message= ""){
    try{
    console.log(messgae.toUppercase().repeat(3))
}
catch(error){
    console.log(error)
    console.log('please pass a string next time!')
}
finally{
    console.log('end of a program')


    // Exercise one
    const mycalculator = {
        message: "my litte calculator",
        side"2

    area_square() {
        return Math.pow(this.side, 2);
    },
    volume_cube() {
        return Math.pow(this.side, 3);
    };    

     // Exercise two
    function readProperty(obj , prop) {
        try{
            return obj[prop];
        } catch (e) {
            return "Error accessing property";
        }
    }
