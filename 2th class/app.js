//Loops in js.  
//   let num = prompt("enter the value")
//   for( let i= 1; i<=7; i++){
//     document.write ( num,"<br>")
// }

// for( let i=1; i<=5; i++){
//     document.write("Namasty","<br>")
// }

//Calculate sum of 1 to 5
let sum = 0;
for (let i=1; i <= 6; i++){
    sum = sum +i; //sum = 0 +1
}
document.write("sum = ",sum, "<br>"); 
document.write("loop has ended"); 
// let i = 1;
// while (i  <= 5 ){
//     document.write("apna collage","<br>");
//     i++;
// }
//do while loop;
// let i = 1;
// do{
//     console.log("Kirshan",i);
//     i++;
// } while(i <=50);

//for of loop
//string and arrey to use
// let str ="apna collage ";
// for (let i of str){ 
//     //iterator --> characters
//     console.log("i=",i);
// }

// let str ="kirshan thakur";
// let size =0 ;

// for (let i of str){ 
//     //iterator --> characters
//     console.log("i=",i);
//     size++;
// }
// console.log("string size =", size);

//{ FOR-IN LOOP always give the key value  }
// let student ={
//     name: "kirshan thakur ",
//     age : 20 ,
//     grade : "A",
//     isPass: true,
// };
//  for (let i in student){
//     console.log("key=",i, "value=",student[i]);
//  }

//let practice Qno.1 Print all even numbr from 0 to 100
//  for (let i= 1; i<= 100; i++ ){
//     // console.log(i)
//     document.write("num",i,"<br>")
//  }

// for (let num = 0 ; num <= 100 ; num++){
//     if (num%2 ==! 0 ){
//         //even number
//         console.log ('num=',num);
//     } 
// }

//Q.no 2 
// let gameNum = 25;
// let userNum = prompt("Guess the gamee number : ");
//  while(userNum != gameNum){
//     userNum = prompt("you entered the wrong number . guess again: ");   
//  }
//  document.write('Congratulations, you entered the right number'); 


// STRING IN JS 
// String is a sequence of characters used to represent text

// let str ='Apna collage ';
// let str2 = "Apna collage ";
// console.log(str[1])

// TEMPLATE LITERALS
//  let obj = {
//     item : "Pan",
//     price: 10,

//  };
//  let output = `the cost of ${obj.item} is ${obj.price} rupees.`;
//  console.log(output);

//  console.log ('the cost of', obj.item,'is', obj.price,'rupees');
// let specialString =     `This is a template literal ${1 + 10 + 3}`;
// console.log(specialString);
//  console.log("Apna \n   Collage")

// let str ='     apna collage js   ';
// // str = str.toUpperCase();
// // console.log(str);
// console.log(str.trim())


//spliting the methods 
// let str = "kirshana";
// console.log(str.slice(0,))



// adding of two variable
// let str1 ="Collage ";
//  let str2 =" Apna";
// //  let res = str1.concat(str2);
// let res ="i am learing from "+ str2 +" "+ str1;
//  console.log(res)


// search to replace the value
// let str =" hello world ";
// console.log(str.replace("hel","m"));


//charater method 
// let str =" IloveJs";
// console.log(str.charAt(4));

// let str =" IloveJs";
//  str = str.replace("I","apna")
// console.log(str);
  

let fullname = prompt("Enter your fullname without spaces ")
let userName = "@" + fullname + fullname.length;
document.write(userName)