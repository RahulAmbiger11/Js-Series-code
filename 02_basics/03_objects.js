//Objects in js (** IMP Topic **)
//sigleton obj -  using constructor - Object.create()

// obj - key: val

//object literals

//** IMP IQ **

const mySym = Symbol("key1")

const jsUser = {
    name : "rahul",
    "full name": "rahul A",
    [mySym]: "val1",
    age: 22,
    loc: "Bengaluru",
    email: "rahul@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

//2 ways of accessing
console.log(jsUser.email)
console.log(jsUser["email"]) 
console.log(jsUser["full name"]) 

//IMP IQ
console.log(jsUser)
console.log(jsUser[mySym])
console.log(typeof jsUser[mySym])

jsUser.email = "rahul@gmail.com"
//not able to modify further
// Object.freeze(jsUser)
jsUser.email = "rahul@yahoo.com"
console.log(jsUser.email);

//functions - we can also add functions inside obj
jsUser.greeting = function() {
    console.log("Hello from rahul!")
}

//** IMP **
//this - refers to current obj properties
jsUser.greetingTwo = function() {
    console.log(`Hello jsUser, ${this.name}`)
}


console.log(jsUser.greeting())
console.log(jsUser)

console.log(jsUser.greetingTwo())

