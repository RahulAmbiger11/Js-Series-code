/*reduce() functionality
refer: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
*/

let myNums = [1,2,3,4,5,6,7,8,9,10]

// let initVal = 0
/* let myTotal = myNums.reduce(function(acc, curVal) {
    console.log(`acc: ${acc} and currVal: ${curVal}`)
    return acc + curVal
}, initVal)

console.log(myTotal) */

//using arrow functionality
let initVal = 0
let myTotal = myNums.reduce((acc, currVal)=>{
    console.log(`acc: ${acc} and currVal: ${currVal}`)
    return acc + currVal
})
// console.log(myTotal)

const shopCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 5999
    },
    {
        itemName: "datascience course",
        price: 10999
    }
]

const priceToPay = shopCart.reduce((acc, item) => (acc + item.price), 0)
console.log(priceToPay)






