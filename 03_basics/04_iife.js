//Immediately invoked function expressions(IIFE)
//** IMP IQ **
/*
In In order to overcome the pollution caused by global variables in case of normal function We use IIFE
*/

//named IIFE
(function sampleFun() {
    console.log(`DB Connected`)
})();

(function sampleFunTwo(name) {
    console.log(`DB Connected, ${name}`)
})("Rahul");

//Unnamed IIFE
((name) => {
    console.log(`${name} DB Conneted Successfully`)
})("Ramcharan")







