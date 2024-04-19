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