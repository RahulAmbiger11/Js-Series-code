/*
Promises in js - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
Previous promise libraries - Q or BlueBird
*/

//Way-1
//Creation
const myPromise = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        console.log("Async task is done");
        resolve()

    },1000)
})

//Consumption
myPromise.then(() => {
    console.log("Promise consumed")
})

//Way-2
new Promise((resolve, reject) => {
    setTimeout(()=>{
        console.log("Async Promise is Created");
        resolve()
    },1000)
}).then(()=>{
    console.log("Async 2 is resolved")
})

const promiseThree = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve({username:"Rahul", email:"rahul@gmail.com"})
    },1000)
})

promiseThree.then((user)=>{
    console.log(user)
})

const promiseFour = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        let error = true
        if(!error) {
            resolve({username:"hitesh", password:"12345"})
        } else{
            reject("ERROR: Something went wrong")
        }
    })
})

promiseFour.then((user) => {
    console.log(user)
    return user.username
}).then((username)=>{
    console.log(username)
}).then((error)=>{
    console.log(error)
})