//arrays in js 
const marvelHeros = ["thor", "ironman", "captain"]
const dcHeros = ["superman", "flash", "batman"]

//push()
// marvelHeros.push(dcHeros)
// console.log(marvelHeros)
// console.log(marvelHeros[3][1])

//concat()
// const heros = marvelHeros.concat(dcHeros)
// console.log(heros)

//spread operator - best approach
const allHeros = [...marvelHeros, ...dcHeros]
console.log(allHeros)

//** IMP **
//flat() 
const anoArr = [1,2,3,[4,5,6],7,[8,9,[10,11,12]]]
console.log(anoArr)

console.log(anoArr.flat(Infinity))
//or
console.log(anoArr.flat(3)) //specifying arr depth

console.log(Array.isArray("Rahul"))

//from() - to convert any data to arr format
console.log(Array.from("Rahul"))

//need to specify (** IMP IQ **)
console.log(Array.from({name: "rahul"})) //[]

let score1 = 100
let score2 = 200
let score3 = 300

//of() - array from set of elems.
console.log(Array.of(score1, score2, score3))



