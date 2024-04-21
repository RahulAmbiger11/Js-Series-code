//Numbers in js
const score = 400
console.log(score) //400
console.log(typeof(score)) //number

//for to be specific - object format
const balance  = new Number(100)
console.log(balance) //[Number: 100]

//toString() of strings
console.log(typeof balance.toString()) // string
console.log(balance.toString()) // num → string

//string based methods
console.log(balance.toString().length)


//methods
console.log(balance.toFixed(2)); // adds 2 → 0's

//*** IMP IQ ***
// toPrecision()
const num1 = 123.5864
console.log(num1.toPrecision(4))

//toLocaleString()
const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN')) //10,00,000

//++++++++++++++++++++ Maths +++++++++++++++++++++++++++++++++++++
console.log(Math)

//methods
console.log(Math.abs(-4)) //4
console.log(Math.round(4.3)) //4
console.log(Math.round(4.6)) //5

console.log(Math.ceil(4.6)) //5 - top value
console.log(Math.floor(4.6)) //4 - low value

console.log(Math.min(4,3,6,7,8)) //3
console.log(Math.max(4,3,6,7,8)) //8


//** IMP **
//random()

console.log(Math.random()) //random value btween 0-1(decimal values)

console.log((Math.random()*10) + 1)

const min = 10
const max = 20

//** IMP IQ **
console.log(Math.floor(Math.random() * (max - min + 1)) + min)