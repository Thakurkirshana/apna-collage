// function naam(){
//     console.log("hello world");
// }
// naam()
// let nam=(x, y) => {
//     console.log(x + y)
// }
// nam("mohanna", "ali");
// let ali = (z,x)=>{
//     console.log(z+x);
// }
// ali(2,3)
// let name =function(){
//     console.log();
// }
// function()
// let sum = (a, b) => {
//   return a + b;

// // }
// let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let newNumbers = arr.map((X) => {
//     return X*2;
// }
// // )
// let arrA =[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//  arrA.forEach((val )=>{
//     console.log(val*2);
//  })
// let arr = prompt("movies num");
// let newNumbers = arr.map((X) => {
//     return X*2;
// })
// let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let newNumbers = arr.map((X) => {
//     return X%2===0;})
// let arrA = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// arrA.forEach((val) => {
//     console.log(val % 2 === 1);
// })
// let mun = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// let newArr = mun.map((val) => {
//     return val * 2;
// });
// console.log(newArr);
// let calcSquare = (mun) => {
//     console.log(mun * mun)
// };
// let arr = [1,2,3,4,5,6,7,8,];
// const output=arr.reduce((abc,cde )=>{
//     return abc+cde;
// });
// console.log(output);

// this is the printing the largest number.
// let arr = [1, 2, 3, 14, 15, 69, 7, 8,];
// const output = arr.reduce((abc, cde) => {
//     return abc>cde ? abc : cde;
// });
// console.log(output);

let n = prompt(" Enter a number: ");
let arr =[];
for (let i=1; i<=n ; i++){
    arr[i-1]=i;
}
console.log(arr);
 let  sum = arr.reduce((res,curr)=>{
    return res+curr;
 });
 console.log("sum=",sum);

 let  factorial = arr.reduce((res,curr)=>{
    return res*curr;
 });
 console.log("factorial = ",factorial);