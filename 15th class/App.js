// function name() {
//     console.log("Apna collage of javascript...");
// };
// setTimeout(name,2000)// timeout ; 2s=2000ms
// setTimeout(() => {
//     console.log("apna collage ki class bohat ye important hai bhai ...");
// }, 1000);
// setTimeout(() => {
//     console.log("apna collage ki class bohat ye important hai bhai ...");
// }, 2000);
// setTimeout(() => {
//     console.log("apna collage ki class bohat ye important hai bhai ...");
// }, 3000);
// setTimeout(() => {
//     console.log("apna collage ki class bohat ye important hai bhai ...");
// }, 4000);
// setTimeout(() => {
//     console.log("apna collage ki class bohat ye important hai bhai ...");
// }, 5000);
// setTimeout(() => {
//     console.log("apna collage ki class bohat ye important hai bhai ...");
// }, 6000);
// setTimeout(() => {
//     console.log("apna collage ki class bohat ye important hai bhai ...");
// }, 6000);
// setTimeout(() => {
//     console.log("apna collage ki class bohat ye important hai bhai ...");
// }, 7000);
// setTimeout(() => {
//     console.log("apna collage ki class bohat ye important hai bhai ...");
// }, 9000);
// setTimeout(() => {
//     console.log("=8=apna collage ki class  bohat ye important hai bhai ...");
// }, 80000);
/// callback...
// function sum(a,b){
//     console.log(a+b);
// }
// function calculator(a,b, sumCallback) {
//     sumCallback(a,b);
// }
// calculator(2,2,sum)


//callback hell;
//nasting
// let age =19;
// if(age>18){
//     if(age>=60){
//         console.log("senior");
//     }else{
//         console.log("middle class");
//     }
// }else{
//     console.log("dont force anyone !");
// }
// function getData(dataId, getnextData) {
//     setTimeout(() => {
//         console.log('data  = ami', dataId);
//         if (getnextData) {
//             getnextData();
//         }
//     }, 2000);
// }
// //this is the callback hell ==> (oyramid of doom)
// getData(1, () => {console.log("getting data2 .....");
//     getData(2, () => {console.log("getting data3 .....");
//         getData(3, () => {console.log("getting data4 .....");
//             getData(4, () => {console.log("getting data5 .....");
//                 getData(5, () => {console.log("getting data6 .....");
//                     getData(6, () => {console.log("getting data7 .....");
//                         getData(7,);
//                     });
//                 });
//             });
//         });
//     });
// });

//Promises ...
// promise is for eventual complteion of taking


// let promise = new Promise ((resole,reject)=>{
//     console.log("I am ready to Fight of Problem & Error of code.");
//      resole("Finally Im Win the Game of The Life...!")
//     reject("SO sorry for the lose of Game of code , Pleace try Again the Game of Life!")
// })

// let promise = new Promise ((resole,reject)=>{
// console.log("I am ready to Fight of Problem & Error of code.");
//  resole("Finally Im Win the Game of The Life...!");
// });
// function getData(dataId, getnextData) {
//       return new Promise((resole, reject) => {
//         setTimeout(() => {
//             console.log("DATA=", dataId);
//             resole("Finally Im Win the Game of The Life...!");
//             if (getnextData) {
//                 getnextData();
//             }
//         }, 2000);
//     })
// }