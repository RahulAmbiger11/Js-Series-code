//for-of loop - array specific
/* ["", "", ""]
[{}, {}, {}]
 */

const arr = [1,2,3,4,5]

for (const num of arr) {
    console.log(num)
}

const greetings = "Hello world"
for (const char of greetings) {
    console.log(`Each character of greetings ${char}`)
}

//Maps - key-value pairs
//Maintains insertion order
//Duplicate data not allowed
/*
Refer: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map
*/

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('USSR', "Russia")

map.set('IN', "India") 

console.log(map)

// array destructuring
for(let [key, val] of map) {
    console.log(`${key} :-  ${val}`)
}


/* Not possible
** IMP **
Maps are not iterable using "for-in loop" 
*/
for (const key in map) {
    console.log(key)
}

