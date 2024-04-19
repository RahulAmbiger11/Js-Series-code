const accountId = 7781
//declaring variables - let, var
let accountEmail = "rahul@google.com" //preffered
var accountPassword = "12345" // scope related issue 
accountCity = "Bengaluru" //can declare, but not recommended
let accountState; //undefined

// accountId = 2 //Not allowed
console.log(accountId) 

accountEmail = "rahul@gmail.com"
accountPassword = "1234"
accountCity = "BJP"
console.log(accountEmail)
console.log(accountPassword)
console.log(accountCity)

//**IMP **
//In tabular format - []
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

/*
Prefer not to use var - Because of issue in block & function scope
*/
