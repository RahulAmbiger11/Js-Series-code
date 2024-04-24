//Scopes in Js

//global scope
var a = 300
let b = 400
const c = 500

if (true) {
    //local scope
    var a = 10
    let b = 20
    const c = 30

    console.log("INNER ", a) //10
    console.log("INNER ", b) //20
    console.log("INNER ", c) //30
}

//var is not scope based (ie, not block scoped)
console.log(a) //10
console.log(b) //400
console.log(c) //500

/*
** IMP IQ **
Scope of Windows Browser js environment &
Scope of Coding environment using Node.js are Different.
 */

//Nested Scopes

//we can access the parent function variables inside child function
function one() {
    let username = "rahul"

    function two() {
        let website = "youtube"
        console.log(username)
    }
    // console.log(website)
    two()
}
one()


if (true) {
    const username = "rahul"
    if(username ===  "rahul") {
        const website = " youtube"
        console.log(username + website)
    }
    // console.log(website)
}
// console.log(username)

//+++++++++++++++++++++++++++++++++++++++++++++++++++
// ** IMP IQ **
// Ways to create functions

//1. Function as  a declaration

console.log(addOne(5))

function addOne(num) {
    return num+1
}


//2. function as a expression
// console.log(addTwo())

const addTwo = function(num) {
    return num+2
}

/*
(**IMP IQ **)
Variable Hoisting:
When we declare a function as an expression, and if you try to invoke that particular function before the function, then it is going to throw the error. It is because of "variable hoisting".

- It depends on function scope and how js treats variables etc.
*/