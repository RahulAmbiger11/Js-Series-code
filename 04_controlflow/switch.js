//Control flow statements: 
// switch statement in js

// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

/* const month = 3
switch (month) {
    case 1:
        console.log("Jan")
        break;
    case 2:
        console.log("Feb")
        break;
    case 3:
        console.log("Mar")
        // break;
    case 4:
        console.log("Apr")
        break;

    default:
        console.log("Default case match");
        break;
} */

const month = "Mar"
switch (month) {
    case "Jan":
        console.log("January")
        break;
    case "Feb":
        console.log("February")
        break;
    case "Mar":
        console.log("March")
        break;
    case "Apr":
        console.log("April")
        break;

    default:
        console.log("Default case match");
        break;
}

//here, if "break" is not added in matched case, then
// all other cases after that will be executed except, "Default block".

// break - to break control flow






