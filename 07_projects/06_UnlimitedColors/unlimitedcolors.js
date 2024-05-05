//generate random colors
let randomColor = () => {
    let hex = "0123456789ABCDEF"
    let color = "#"

    for(let i = 0; i < 6; i++) {
       color += hex[Math.floor( Math.random()*16)]
    }
    return color
}

let intervalId

//start
document.querySelector('#start').addEventListener('click', ()=>{
    //handling edge cases
    if(!intervalId) {
        intervalId = setInterval(()=>{
            document.body.style.backgroundColor = randomColor()
        }, 1000)
    }
})

//stop
document.querySelector('#stop').addEventListener('click',()=>{
    clearInterval(intervalId)
    //handling edge cases
    intervalId = null
})
