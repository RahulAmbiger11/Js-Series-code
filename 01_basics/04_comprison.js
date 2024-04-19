
//Comparison operations in js
// console.log(2 > 1)
// console.log(2 >= 1)
// console.log(2 < 1)
// console.log(2 < 1)
// console.log(2 == 1)
// console.log(2 != 1)

//No recommended 
console.log("2" > 1) //true
console.log("02" > 1) //true

//when we are comparing 2 values it's datatypes should be same

//IMP IQ
//NOT RECOMMENDED IN  - Development codebase
console.log(null > 0) //false
console.log(null == 0) //false
console.log(null >= 0) //true

//Note: 
// Equality operator & Comparison operators work differently.
// Comparison operators (<=, >= ) convert null → 0
//O/P - true
// Equality operator(===) - doesn't convert it to 0
//O/P - false

console.log(undefined == 0) //false
console.log(undefined > 0) //false
console.log(undefined < 0) //false
console.log(undefined <= 0) //false
console.log(undefined >= 0) //false

//strict check ===
// false
console.log("2" === 2) // value & datatype check
