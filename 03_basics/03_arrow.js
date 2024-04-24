//this & arrow functions in js

//object
const user = {
    username: "rahul",
    price: 999,

    welcomeMsg:function() {
        console.log(`${this.username} welcome to wesite`)
        console.log(this)
    }
}

user.welcomeMsg()
user.username = "Ramcharan"
user.welcomeMsg()

//In Node js based environment
console.log(this) //{}


function sampleFunc() {
    let username = "Yash"
    console.log(this.username) 
}

sampleFunc() //undefined


// ** IMP IQ **
//Global obj in Browser environment - Window Object

//we can't make use of 'this' keyword to refer to current context
//its only possible in case of "Objects"


//3. Arrow functions

const sampleFun = () => {
    let username = "rahul7781"
    console.log(this.username) //undefined
    console.log(this) //{}
}

// sampleFun()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

//implicit return - if single liner function
// const addTwo = (num1, num2) => num1 + num2
// const addTwo = (num1, num2) => (num1 + num2)


// console.log(addTwo(7,10))


const samFun = () => ({username:"rahul"})

console.log(samFun())

const myArr = [2,3,5,7,8]
// myArr.forEach(() => ())
