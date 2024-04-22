//Arrays in js

//data of any type can be present
//can be resizable - in js
//Refer: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array


const myArr = [0, 1,2,3,4,5]
console.log(myArr[0])

const myHeros = ["shaktiman", "Hanuman", "superman"]

let arr1 = new Array(1,2,3,4,5,6)
console.log(arr1)
console.log(arr1[1])


//** IMP IQ **
/*
 - shallow copy : share common ref. point
 - deep copy : doesn't share common ref.point
 */

 //methods in js
 // to add elems
myArr.push(7)
myArr.push(8)
console.log(myArr)

//removes last elem
myArr.pop()
console.log(myArr)

// disadv. - have to change element's index pos by 1
//unshift() - adds elem at start
myArr.unshift(9)
console.log(myArr)

//shift() -  removes elem from start
myArr.shift()
console.log(myArr)

//questionairre methods
console.log(myArr.includes(9)) //false - bool
console.log(myArr.indexOf(9)) //-1
console.log(myArr.indexOf(3)) //2

//join - elems of arr → string
let newArr = myArr.join(",") 
console.log(myArr)

console.log(newArr)
console.log(typeof newArr) //string

//slice and splice
//**IMP IQ **
console.log("A ", myArr)

//slice()
const myn1 = myArr.slice(1,3) //range is not included
console.log("B ", myArr)
console.log(myn1)

//splice()
const myn2 = myArr.splice(1,3) //range is included
console.log("C ", myArr) //org arr. manipulation happens
console.log(myn2)



















