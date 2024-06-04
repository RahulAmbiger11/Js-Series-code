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
const promiseFour = new Promise(function(resolve, reject){
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








