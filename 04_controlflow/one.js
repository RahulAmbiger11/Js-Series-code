//Control flow in js

const isUserLoggedIn = true
if(2 !== 3) {
    console.log("executed")
}

// <, >, <=, >=, ==, !=, 
//=== (checks val + datatype)
// !==


const temp = 41

//if-else
if(temp < 50) {
    console.log("Tempreture is less than 50")
} else {
    console.log("Tempreture greater than 50")
}

/* const score  = 200
if(score > 100) {
    let power = "fly"
    console.log(`User Power ${power}`)
}
console.log(`User Power ${power}`) */

//shorthand notation (Implicit scope)
// const balance = 1000
// if(balance> 500) console.log("Test")


//Nesting 
let balance = 1000
if(balance < 500) {
    console.log("less than");
} else if(balance < 750) {
    console.log("Less than 750");
} else if(balance < 900) {
    console.log("Less than 900");
}
else {
    console.log("less than 1200")
}

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

//and &&
if(userLoggedIn && debitCard && 2==2) {
    console.log("Allow to Buy")
}

//or ||
if(loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in")
}


