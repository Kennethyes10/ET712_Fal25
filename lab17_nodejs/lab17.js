console.log("Kenneth Soriano")
console.log('----- example 1: console ------')
console.warn("Warning! check the last line before proceed")
console.error("ERROR, port is not avialable!")
console.trace("TRACE LOCATION")

setTimeout(()=>{
    console.warn("Warning! input string for the next line")
}, 3000)

console.log('------- example 2: creating a simple module file -----')
// const name = require("./mod.js")
import name from "./mod.js"

console.log(name.helper("Peter"))
console.log(name.id(12345))
console.log(name.useremail("peter@neverland.edu"))

console.log('------- example 3: event emitter -----')
const events = require('events');

const eventEmitter = new events.EventEmitter()

eventEmitter.on('test', function(a){
    console.log(a);
})

eventEmitter.emit('test', ' EVENTS IN NODEJS')
