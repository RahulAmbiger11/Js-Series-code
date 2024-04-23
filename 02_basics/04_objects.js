//Objects in Js
//** IMP IQ **
//Singleton Object
const fbUser = new Object()

//Non Singleton Object
const instaUser = {}

console.log(fbUser) //{}
console.log(instaUser) //{}

fbUser.id = "123abc"
fbUser.name = "rahul"
fbUser.isLoggedIn = false

// console.log(fbUser)

let regUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Rahul",
            lastname: "A"
        }
    }
}

// console.log(regUser.fullname.userfullname)

const obj1 = {
    1: "a",
    2: "b"
}
const obj2 = {
    3: "c",
    4: "d"
}
const obj3 = {
    5: "e",
    6: "f"
}

// const obj3 = {obj1, obj2}
//assign() - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign

const obj4 = Object.assign({}, obj1, obj2, obj3)
console.log(obj4)

//using spread operator (Recommended)
const obj5 = {...obj1, ...obj2, ...obj3}
console.log(obj5)

//database values

//array of objs.
const users  = [
    {
        id: 1,
        email: "r@gmail.com"
    },
    {
        id: 2,
        email: "a@gmail.com"
    },

]

//way to access
console.log(users[1].email)

console.log(fbUser)

//methods
console.log(Object.keys(fbUser)) //returns keys in arr in []
console.log(Object.values(fbUser)) //returns vals in arr in []
console.log(Object.entries(fbUser)) //returns entries in arr in []

console.log(fbUser.hasOwnProperty('isLoggedIn')) //true