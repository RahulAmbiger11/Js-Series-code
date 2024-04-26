//Usage of for in loop
//Objects

const myObj = {
    js: "JavaScript",
    cpp: "C++",
    rb: "Ruby",
    swift: "Swift by apple"
}

for (const key in myObj) {
    console.log(`${key} :- ${myObj[key]}`)
}

//for arrays
const myArr = ["js", "cpp",  "java", "python"]
//here, index pos. → keys
for (const key in myArr) {
    console.log(`${key} :- ${myArr[key]}`)
}