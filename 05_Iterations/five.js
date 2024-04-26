const code = ["js", "java", "ruby", "python", "cpp"]

//using forEach() functionality of array

/* code.forEach(function(val) {
    console.log(val)
}) */

//using arrow function
/* code.forEach((item)  => {
    console.log(item)
})
 */

function printMe(item) {
    console.log(item)
}

//reference
code.forEach(printMe)

