//for loop

for(let i = 0; i <= 10; i++) {
    const elem = i;
    if(elem == 5) {
        console.log("5 is best number")
    }
    console.log(elem)
}

// console.log(elem)


for(let i=0; i<=10; i++) {
    console.log(`Outer loop value: ${i}`)
    for(let j=0; j<= 10; j++) {
        console.log(`Inner loop value ${j} and inner loop value ${i}`)
        // console.log(i + "*" + j + " = " + i*j)
    }
}

for(let i=1; i <= 10; i++) {
    for(let j=1; j<= 10; j++) {
        console.log(i + "*" + j + " = " + i*j)
    }
}


let myArr = ["flash", "Batman", "superman"]
for (let index = 0; index < myArr.length; index++) {
    const elem = myArr[index]
    console.log(elem)   
}

/*
break
continue
*/

//break - breaks out of the loop
/* for (let i = 0; i <= 20; i++) {
    
    if(i==5) {
        console.log(`5 is favourite number`)
        break
    }
    console.log(`Value of i is: ${i}`)    
} */

//continue - skips particular iteration 
for (let i = 0; i <= 20; i++) {
    
    if(i==5) {
        console.log(`5 is favourite number`)
        continue
    }
    console.log(`Value of i is: ${i}`)    
}