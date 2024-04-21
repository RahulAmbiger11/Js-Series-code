//dates in js - starts from jan 1, 1970
//in millisec's

//refer: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date

let myDate = new Date()
console.log(myDate.toString())
console.log(myDate.toDateString())
console.log(myDate.toISOString())
console.log(myDate.toLocaleString())

//** IMP IQ **
console.log(typeof myDate) //object

//months in js strats from - 0
let createdDate = new Date(2024, 0, 24)
console.log(createdDate.toDateString()) 