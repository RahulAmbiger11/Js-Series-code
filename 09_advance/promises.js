/*
Promises in js - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
Previous promise libraries - Q or BlueBird
*/

//promise creation
//way-1
/* let promiseOne = new Promise(function(resolve, reject){
    //Async tasks - DB Calls, N/W calls
    setTimeout(function(){
        console.log("Promise Created")
        resolve()
    },1000)
})

//promise consumption
promiseOne.then(function(){
    console.log("Promise Consumed")
}) */

//way-2
/* new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2")
        resolve()
    }, 1000)
}).then(function(){
    console.log("Async task 2 resolved")
})

 */
/* let promiseThree = new Promise(function(resolve, reject){
    //passing params using resolve()
    setTimeout(function(){
        resolve({username:"rahul", email:"rahul@gmail.com"})
    },1000)
})

promiseThree.then(function(user){
    console.log(user)
})
 */
/* const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false
        if (!error) {
            resolve({username: "rahul", password: "123"})
        } else {
            reject('ERROR: Something went wrong')
        }
    }, 1000)
})

 promiseFour
 .then((user) => {
    console.log(user);
    return user.username
}).then((username) => {
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(() => console.log("The promise is either resolved or rejected"))
 */

//promise creation

/* const promiseFive = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true
        if (!error) {
            resolve({username:"javascript", password:"123"})
        } else{
            reject("ERROR: Something went wrong")
        }
    }, 1000)
})

//promise consumption
async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response)
    } catch (error) {
        console.log(error)
    }
}

consumePromiseFive()
 */

//for JSON response data
//refer: https://jsonplaceholder.typicode.com/users


//fetching json data from api using try-catch 
/* async function getAllUsers(){
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json()
        console.log(data)
    } catch (error) {
        console.log("E: ", error)
    }
}
getAllUsers() */

//fetching json data from api using .then & .catch
fetch('https://jsonplaceholder.typicode.com/users')
.then((res)=>{
    return res.json()
})
.then((data)=>{
    console.log(data)
})
.catch((error)=> console.log(error))

/*
Refer for fetch API: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch

** IMP IQ **
https://youtu.be/_TjtAyMkiTI?t=23307

Refer fetch(): https://youtu.be/_TjtAyMkiTI?t=23766
*/
