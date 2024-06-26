// THIS CHAPTER CONSISTS OF FUNCTION 
// function myFunction(s,b) {;

//     s= s,
//     b;
//     return s;
//      ("Welcome to the  javaScript Function Chapter");
//     console.log("Java befawa bula fdoa ")
// }
// let val = myFunction("Welcome to the  javaScript Function Chapter","Java befawa bula fdoa","Java befawa bula fdoa");
// console.log(val)
// myFunction()
// myFunction()
// myFunction()

// function sum (x,y ,z){
// s= x+y*z;
// return s;
// }
// let val = sum (2,3,4);
// console.log(val);

// Arrow function 
// function abc(a,b){
//     return a+b;
// }
// let arrowSum = (a,b)=>{
//     console.log(a+b);
// }
// arrowSum(4,4)


//function of multiplication
// function abc(a,b){
//     return a*b;
// }
// let arrowSum = (a,b)=>{
//     console.log(a*b);
// }
// arrowSum(4,4)


// mainse value
// function abc(a,b){
//     return a-b;
// }
// let arrowSum = (a,b)=>{
//     console.log(a-b);
// }
// arrowSum(4,4)

// function abc(a,b){
//     return a/b;
// }
// let arrowSum = (a,b)=>{
//     console.log(a/b);
// }
// arrowSum(400,40)


// Qs.Create a function using the "function" keyword that takes 
//a String as an argument & returns the number of vawels the string.
// A,E,I,O,U
function countVowels(str) {
    let count = 0;

    for (const char of str) {

        if (char === "a"
            || char === "e"
            || char === "i"
            || char === "o"
            || char === "u") {
                count++;
        }
    }
    console.log(count);
}
