// Asignment Opertors this is all the ap .
// let a = 5;
// let b = 4;
// a+=b;
// // a-=4;
// // a*=7;
// // // a%=4;
// // // a**=5;
//  console.log("a = ",a);


// Comparison Operators...
// 1. equal to
//2. equal to & type ===
//3. not equal to !=
//4. not equal to & type !==
// >,<=,<,<=

// let a = 5;
// let b = 6 ;
// console.log("a==b",a==b); //false value
// console.log("a==b",a!=b); //FALSE  value
// console.log("a==b",a!==b);// false vLUE
// console.log("a = b", a > b);// false 
// console.log("a = b", a < b);//true 







// let age = 23;
// age = 45;
// age = 46;
// age = 43;
// age = 45;
// console.log(age)

// const student = {
//     fullName : "Kirshan " ,
//     castName : "Thakur" ,
//     age : 21 ,
//     Grade : "A1" ,
//     isPass : true ,
// };
// student["castName"] = student["castName"] +"rajputana"
// console.log(student.castName)
// student["fullName"] = student["fullName"] + "kumar";
// console.log(student.fullName)
// student["age"] = student["age"] + 1;
// console.log(student.age)
// console.log(student["castName"])
// console.log(student.fullName )


// let practice 
// const profile ={
//     fullName :"Kirshana Thakur",
//     isFollow : true,
//     fan : "5K",
//     name :" shardha  khapra",
//     pragraf: " thank you for you are support"

// };
// console.log(profile)
// Assigment Operators
// let a = 5 ;
// let b = 2 ;
//   a *= 4 
//   console.log ("a 2000 = ", a);

//CONDITION STATEMENT

// let age =prompt("enter your age")
//  if( age >= 18){
//     console.log("You Can Vote")
//  }
// if(age < 18 ){
//     console.log("You Can Not Vote")
// }
// let vote= 12;
// let votee;
// if (vote >= 18) {

//     console.log("you need to vote !");
    
// }else{
//     console.log("don't need to vode by your age!");
// }
// let mode="koi";
// let color;
// if (mode==="dark") {
//     // console.log("apna collage1");
//     color="black"
// }else{
//     // console.log("apna collage2");
//     color="white"
// }
// console.log(color);
// let fullName ="kirshan thakur"
// // let name ;
// if( fullName === "kirshan"){
//     console.log("yoou can selelted for job")
// }
// if(fullName === "kirshan thakur"){
//     // name="you are not selescted  ......."
//     console.log("you are not selescted   ... ")
// }
// let mode =prompt("name");
// let color;
// if(mode === "kirshan"){
//     color ="you are sele";
// }
// if (mode === "ashok"){ 
//  color ="you are not sels";}
//      console.log(color)
// let mode =prompt("color");
// let color;
// if(mode === "dark"){
//     color ="black";
// }
// if (mode === "light"){
//  color ="white";}
//      console.log(color)

// if-else statement 

// let mode =prompt("color");
// let color;
// if(mode === "dark"){
//     color ="black";
// }
// else{
//     color ="kirshan java";}
//     console.log(color)

// ODD AND EVEN
// let num = prompt("enter value to check out odd and even!");
// if( num % 2 === 0){
//     console.log(num,'is even');

// }else{
//     console.log(num,'is odd');
// }

// let rain = true;
// if(rain){
//  console.log("** Taking my umbrella when I need to go outside *
// } else {
//  console.log("** I can leave my umbrella at home **");
// }

//ELSE IF STATEMENT 

// let myAge=prompt("check the name ");
// let agefact;
// if (myAge==18) {
//     agefact="this age is wrong.";
    
// } else if (myAge==21) {
// agefact="this is main~";    
// } 
// else if (myAge==22) {
//     agefact="baubali~";    
//         } 
//     else if (myAge==27) {
//         agefact="viky koshal ki~";    
//         } 
//         else if (myAge==211) {
//             agefact="apna collage ki~";    
//             } 
//             else if (myAge==20) {
//                 agefact="pya nhi~";    
//                 } 
                                        
// else{
//     agefact="ye bilkul galat hai";
// }
// console.log(agefact);

// let mode ="dark";
// let color;

// if (mode ==="dark"){
//     color ="black";
// }else if (mode ==="blue"){
//     console.log("blue")
// } else if( mode ==="pink"){
//     console.log("pink")
// } else if (mode ==="yellow"){
//     console.log("yellow")
// }
// else{
//     color ="white"
// };
// console.log(color);

// if( mode === "dark") {console.log("dark")};



// let num = prompt('Enter the number ');
// if( num % 5 === 0 ){
//     console.log( num, "is a multiple of 5");
// } else{
//     console.log(num, "is not a multiple of 5");
// }
//  var newBtn = document.createElement("input")
// newBtn.innerText = "Click me!";

// newBtn.style.textAlign = "center"
// document.querySelector("body").prepend(newBtn)

// var b = 0;
// newBtn.addEventListener("click", function () {
//     if (b == 0) {

//         newBtn.style.color = "white"
//         newBtn.style.backgroundColor = "black"
//         console.log("click hogia ");
//         b = 1;
//     } else {

//         newBtn.style.color = "blue"
//         newBtn.style.backgroundColor = "pink"
//         console.log('Again SnD ');
//         b = 0;
//     }
// })
let neww=document.createElement("input")
let num = prompt("How much Your Score And Check Your Grade!");

let Grade;
if(num >= 90 && num <=100){
    Grade ="A1" ;  
}else if (num >= 70 && num <=89){
    Grade ="A";

}else if (num >= 60 && num <=69){
    Grade ="B";

}else if (num >= 50 && num <=59){
    Grade ="C";

}else if (num >= 20 && num <=49){
    Grade ="D";
}
document.write("Accounding to your score, your grade was :" , Grade)
// document.querySelector("body").prepend(num)
// let num = prompt("Enter the score !")
// let Grade;
// if( num >= 90 && num <= 100){
//     Grade ="A";
// }
// else if( num >= 80 && num <= 90){
//     Grade ="B";
// }
//  else if( num >= 70 && num <= 80){
//     Grade ="C";
// }
//  else if( num >= 60 && num <= 70){
//     Grade ="D";
// }
//  else if( num >= 50 && num <= 60){
//     Grade ="E";
// }
//  else if( num >= 40 && num <= 50){
//     Grade ="F";
// }
// if ( num >= 30 && num <= 20){
//     Grade ="G";
// }
// document.write("Accounding to your score, your grade was :" , Grade)
 
// let num = prompt("Enter The Value");
// if (num % 2 === 0){
//     document.write (num, " IS EVEN");
// }
//  else{
//     document.write (num, " IS ODD");
// }

// let age = prompt("init");
// let result = age >= 18 ? "Adults" : "Not Adults";
// console.log(result);
//  let name = prompt('enter the name');
//  console.log(name)



// Ternary Opertors==> this is the simpler way to written (if else statement.)
// let age = prompt("let,s check out the age");
// let results = age >= 18 ? "Aduls":"Not a Adult"
// console.log("this online :",results);

