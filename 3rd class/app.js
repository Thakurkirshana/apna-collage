// Chapter 4 ARRAYS  in js 
// collection of items ,
//{ multiple variable occurs inthe same arrays }

// let marks =[2,2,2,2,2,2,2,2,2,2,2];
// console.log(marks[6])
// console.log(marks.length)
// let heros =['ironman','superman','jogiman', 'pkman', 'kirshan']
// console.log(heros[0]='Alibaba')

//interview q. string are immuteable {jo change na hosky same string se 
//value ko change karne k lai dusra string bana pari.}
//             Array are muteable.
// length is the property , property give the value.
// methods is the do functionality (kam karta hai ) 


// Looping over an Array
// print all elements of an array
// loop -----> iterable (string, objects, arrays)
// for( let indx= 0; indx< arr.length; indx++){}
// for-of loop
// let heros =['ironman','superman','jogiman', 'pkman', 'kirshan']
// for( let i=0; i<heros.length; i++){
//     console.log(heros[i])

// }

// let heros =['ironman','superman','jogiman', 'pkman', 'kirshan']
// for (let hero of heros){
//     console.log(hero.toUpperCase())
// }
// let cities =['karachi','mirpurkhas','hyderabad','larkana', 'lAhour', 'dadu','manzurabad']
// for ( let city of cities ){
//     document.write(city.toUpperCase(),"<br>")
// }

//Q.no practice 

//     let marks = [85,97,44,37,76,60];
// let sum = 0;
//     for (let val of marks){
//         sum+= val;
//     }
//     let avg = sum / marks.length;
//     console.log(`avg marks of the clas = ${avg}`)


// q.no 
// let items = [250, 645, 300, 900, 50];
// for (let i = 0; i< items.length; i++){
//     let offer = items[i]/10;
//     items[i] -= offer;
// }
// console.log(items);

// let practice 
let company = ['Bloomberg','Microsoft','Uber','Google','IBM','Netflix'];
company.shift()
 company.splice(2,1,"ola")
 company.push("Amazon")
 document.write(company)