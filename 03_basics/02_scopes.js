//Scopes in Js

//global scope
var a = 300
let b = 400
const c = 500

if (true) {
    //local scope
    var a = 10
    let b = 20
    const c = 30

    console.log("INNER ", a) //10
    console.log("INNER ", b) //20
    console.log("INNER ", c) //30
}

//var is not scope based (ie, not block scoped)
console.log(a) //10
console.log(b) //400
console.log(c) //500

/*
** IMP IQ **
Scope of Windows Browser js environment &
Scope of Coding environment using Node.js are Different.
 */