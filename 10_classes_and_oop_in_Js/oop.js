//object literal
const user = {
    //props
    username:"rahul",
    loginCount: 8,
    signedIn: true,

    //methods
    getuserDetails:function() {
        // console.log("Got user details from database")
        //this - refers to current context
        // console.log(`Username: ${this.username}`)

        //functional context
        console.log(this);
    }
}

console.log(user.username)
// console.log(user.getuserDetails())

//global context
console.log(this) //{}


//Constructor function
//refer: https://youtu.be/_TjtAyMkiTI?t=25191

/* const promiseOne = new Promise()
const date = new Date() */


class User {
    constructor(username, loginCount, isLoggedIn) {
        this.username = username;
        this.loginCount = loginCount;
        this.isLoggedIn = isLoggedIn;

        this.geeeting = function () {
            console.log(`Welcome ${this.username}`);
        };

        //defined implicitly
        // return this
    }
}

//creating diff. instances using "new" keyword
const userOne = new User("rahul",12,true)
const userTwo = new User("ram",11,true)
console.log(userOne.constrctor)
// console.log(userTwo)


//instanceOf() in js - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/instanceof

//Example of instanceOf()
class Car {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
}

const auto = new Car("Honda","Accord",1998)
const autoTwo = new Car("Honda","Amaze",2002)
console.log(auto instanceof Car) //true
console.log(autoTwo instanceof Car) //true

//we can't use "this" kewword in arrow functions
//Js Uses Prototypal behaviour refer: https://youtu.be/_TjtAyMkiTI?t=26302


