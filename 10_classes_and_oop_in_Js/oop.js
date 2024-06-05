//object literal
const user = {
    //props
    username:"rahul",
    loginCount: 8,
    signedIn: true,

    //methods
    getuserDetails:function() {
        console.log("Got user details from database")
    }
}

console.log(user.username)
console.log(user.getuserDetails())

