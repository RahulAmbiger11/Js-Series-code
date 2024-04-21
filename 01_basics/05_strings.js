const name = "rahul "
const repoCount = 7

//Not recommended
// console.log(name + repoCount + " Value")

//string Interpolation (Recommended)
console.log(`Hello my name is ${name} and my repocount is ${repoCount}`)


//objects of Js
const gameName = new String("Bgmi-In")

//can access individual character
console.log(gameName[0]) 
console.log(gameName.__proto__) //to know methods 

//methods of strings
console.log(gameName.length) //4

console.log(gameName.toUpperCase()) 
console.log(gameName.charAt(0)) //B
console.log(gameName.charAt(2)) //m
console.log(gameName.indexOf('i')) //3


//-ve values not allowed
const newString = gameName.substring(-4,4) //last index value is ignored
console.log(newString) //Bgmi

//IMP
const anotherStr = gameName.slice(-4,4) //-ve values can be given
console.log(anotherStr)


//trim() - removes leading & trailing spaces
//Refer: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trim

const newString1 = "   rahul   "
console.log(newString1)
console.log(newString1.trim())

//replace()
let url = "https://www.google%20india.com"
console.log(url.replace('%20', '-'))

//presence of particular substring
console.log(url.includes('google')) //true
console.log(url.includes('rahul')) //false


//using split() - string will split based on spaces in array format
let sentence = "Hello Rahul welcome to bgmi"
let s1 = sentence.split(' ', 2)
console.log(s1)
console.log(typeof s1) //Array object






