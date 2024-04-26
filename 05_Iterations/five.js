const code = ["js", "java", "ruby", "python", "cpp"]

//using forEach() functionality of array

code.forEach(function(val) {
    console.log(val)
})

//using arrow function
code.forEach((item)  => {
    console.log(item)
})


function printMe(item) {
    console.log(item)
}

//reference
code.forEach(printMe)


//other functionalities of forEach()
code.forEach((item, index, arr)=>{
    console.log(item, index, arr);

})



let myArr = ["yash", "shrimuruli", "Punith", "Uppi", "Sudeep","Darshan"]

myArr.forEach((item, index, arr)=>{
    console.log(item, index, arr)
})



//specially used in case database data
//array of Obj's.
let myCode = [
    {
        langName:"javascript",
        langFilename: "js"
    },
    {
        langName:"python",
        langFilename: "py"
    },
    {
        langName:"java",
        langFilename: "java"
    }
]

myCode.forEach((item)=> {
    console.log(item.langName)
})