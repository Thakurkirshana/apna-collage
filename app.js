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


//let practice 
// const profile ={
//     fullName :"Kirshana Thakur",
//     isFollow : true,
//     fan : "5K",
//     name :" shardha  khapra",
//     pragraf: " thank you for you are support"

// };
// console.log(profile)
//Assigment Operators
// let a = 5 ;
// let b = 2 ;
//   a *= 4 
//   console.log ("a = ", a);

//CONDITION STATEMENT

// let age = 11;
//  if( age >= 18){
//     console.log("You Can Vote")
//  }
// if(age <= 18 ){
//     console.log("You Can Not Vote")
// }
// let fullName = "kirshan kthakur";
// if( fullName == "kirshan thakur"){
//     console.log("yoou can selelted for job")
// }
// if(fullName = "kirshan thakur"){
//     console.log("you can not seleted inuniverty")
// }

// let mode ="light";
// let color;
// if(mode === "dark"){
//     color ="black";
// }
// if (mode === "light"){
//     color ="white";}
//     console.log(color)

// if-else statement 

// let mode ="king";
// let color;
// if(mode === "dark"){
//     color ="black";
// }
// else{
//     color ="pk";}
//     console.log(color)

// ODD AND EVEN
// let num = 21;
// if( num % 2=== 0){
//     console.log(num,'is even');

// }else{
//     console.log(num,'is odd');
// }

//ELSE IF STATEMENT 
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
//     console.log("kuch bhi nhi hota 5 se")

// } else{
//     console.log(num, "y=gim saui  sjha");
// }


let num = prompt("enter valur")
let Grade;
if(num >= 90 && num <=100){
    Grade ="A1" ;  
}else if (num >= 70 && num <=89){
    Grade ="A";

}else if (num >= 60 && num <=69){
    Grade ="B";

}else if (num >= 50 && num <=59){
    Grade ="C";

}else if (num >= 0 && num <=49){
    Grade ="D";

}
console.log("Accounding to your score, your grade was :" , Grade)


