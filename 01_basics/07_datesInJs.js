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
let createdDate = new Date(2023, 0, 24, 5, 4)
console.log(createdDate.toDateString()) //Tue Jan 24 2023
console.log(createdDate.toLocaleString()) //1/24/2023, 5:04:00 AM

//specific format

//foreign fomat of date
let myCreatedDate = new Date("2024-01-23")
console.log(myCreatedDate.toLocaleString())

//indian format
let myCreatedOne = new Date("03-12-2023") //mm-dd-yyyy
console.log(myCreatedOne.toLocaleString())


let myDT = new Date("3-23-2024") //mm-dd-yyyy
console.log(myDT.toLocaleString()) 

//Timestamps
let myTStamp = Date.now()
console.log(myTStamp) //millisec's

//easy for comparison
console.log(myDT.getTime()) //millisec's


//** IMP IQ **
//millisec's → sec's
console.log(Math.floor(Date.now()/1000)) //sec's

//or
console.log(Math.round(Date.now()/1000)) //sec's


let newDate = new Date()
console.log(newDate)
console.log(newDate.getMonth() + 1) //starts from 0 ie, Apr - 3
console.log(newDate.getDay()) //mon -1


//** IMP **
//toLocaleString()

let newOne = newDate.toLocaleString('default', {
    weekday: "long"
})

console.log(newOne)




