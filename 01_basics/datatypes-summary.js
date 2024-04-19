//Datatypes summary
/* 2 Imp things:
- To store data in memory
- To access data from memory
*/

// JS - Dynamically typed (Not necessarily need to declare values with respective type)

//1. Primitive Datatypes(Call by value)
/*
7 types:
- String
- Number
- Boolean
- BigInt
- null
- Symbol → UNIQUE 
- undefined
*/

const score = 100 //number
const scoreValue = 100.3 //number
const isLoggedIn = false // boolean
const outsideTemp = null //null
let userEmail; //undefined
let str = "ram" //string

//Symbol
const id = Symbol('123') 
const anotherId = Symbol('123')
console.log(id === anotherId) //false

//bigint
const bigNum = 47364364534547387343n;
console.log()


//That's why called Call by Value
let age = 33
let anotherAge = age
console.log(anotherAge) //33
console.log(age)//33

anotherAge = 37
console.log(anotherAge) //37
console.log(age) //33

// 2. Reference Types/Non primitive (Call by Reference)
//Array, Object, Functions

//array
let heros = ["shaktiman", "hanuman", "superman"]
console.log(heros) 

let anotherHeros =  heros
console.log(anotherHeros)

//That's why called call by reference
let addIt = anotherHeros.push("mario")
console.log(anotherHeros)
console.log(heros)

//object
let myObj = {
    name: "rahul",
    age: 22,
}

//function
const myFunc = function() {
    console.log("Hello world")
}
console.log(myFunc())
console.log( typeof myFunc) //function or  object function

//typeof Operator: // https://262.ecma-international.org/5.1/#sec-11.4.3

