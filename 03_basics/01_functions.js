//Functions in js
// func definition
function sayMyName() {
    console.log("R")
    console.log("A")
    console.log("H")
    console.log("U")
    console.log("L")
}

//reference
// sayMyName

//func call
sayMyName()

//parameters
function addTwoNums(num1, num2) {
    console.log(num1 + num2)
}

//** IMP **
function addTwoNumbs(num1, num2) {
    // let result = num1 + num2
    // return result
    return num1 + num2
}
//arguments
addTwoNums(3,5)

let res = addTwoNumbs(3,4)
// console.log("Result ",res)

//** IMP IQ **
function loginUserMsg(username = "Ramcharan") {
    if(!username) {
        console.log("Please enter a username")
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMsg("Rahul"))
// console.log(loginUserMsg()) 



//** IMP **
//rest operator & spread operator are same 
//But, depends on usecase

//Rest operator
function calCartPrice(val1, val2, ...num1) {
    return num1
}
//** IMP IQ **
// console.log(calCartPrice(200, 400, 500, 2000)) // [500, 200]


const user  = {
    username: "rahul",
    price: 999
}

function handleObj(anyObj) {
    console.log(`User name is ${anyObj.username} and price is ${anyObj.price}`)
}

// handleObj(user)
handleObj({
    username: "Ramcharan",
    price: 399
})

const myNewArr = [200,400,100,600]

function returnSecondVal(getArr) {
    return getArr[1]
}
console.log(returnSecondVal(myNewArr))