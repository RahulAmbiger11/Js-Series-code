//Conversion operations in js
let score = "33abc"
console.log(typeof score)
console.log(typeof(score)) //method format

let valueInNumber = Number(score)

//IMP IQ
console.log(valueInNumber) //NaN
console.log(typeof valueInNumber) //number

let score1 = true
let InNum = Number(score1)
console.log(InNum) //1
console.log(typeof InNum) //number

let isLoggedIn = 1
let boolIsLoggedIn = Boolean(isLoggedIn)
console.log(boolIsLoggedIn) //true
console.log(typeof boolIsLoggedIn) //boolean

let str1 = ""
let isBoolVal = Boolean(str1)
console.log(isBoolVal) //false

// 1 → true; 0 → false
//"" → false
//"rahul" → true

// number - string
let SomeNum = 33
let strNum = String(SomeNum)
console.log(strNum) //33
console.log(typeof strNum) //string

//=================================================================

//Operations

let value = 3
let negValue = -value
console.log(negValue) //-3

//Basic Math Operations
// console.log(2+2)
// console.log(2-2)
// console.log(2*3)
// console.log(2/3)
// console.log(2%3)

let str2 = "hello"
let str3 = " rahul"
let str4 = str2 + str3
console.log(str4)  

//datatype of first value is preffered
console.log("1" + 2) //12
console.log(1 + "2") //12
console.log("1" + "2") //12
console.log("1" + 2 + 2) //122
//IMP - here 1st values are in number format, based on that respective operation is performed
console.log(2+2+"1") //41

console.log((3+4) * 5 % 3) //2

//Refer for Abstract Operations: https://tc39.es/ecma262/#sec-algorithm-conventions-abstract-operations


//Not Recommended
// let num1, num2, num3
// num1 = num2 = num3 = 2+2

//prefix and postfix: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment

let gameCounter = 100
++gameCounter; //prefix
console.log(gameCounter)

gameCounter++; //postfix
console.log(gameCounter)