// we learn the events of javascript... this is the importaint chapter of js 
// let btn1 = document.querySelector(".btn");
// btn1.ondblclick = () => {
//     console.log("how are you dear frinds?");
//     let a = 25;
//     a++;
//     console.log(a);
// }
//  let btn=document.querySelector(".btn");
//  btn.addEventListener("click",(ev)=>{
//     console.log("button number 1= handler1.");
//  })

//  btn.addEventListener("click",(ev)=>{
//     console.log("button number 2= handler2.");
//  })

// const handler3 =()=>{
//     console.log("button number 3= handler2.");
// }

//  btn.addEventListener("click",(ev)=>{
//     console.log("button number 4= handler4.");
//  })

// btn.removeEventListener("click",handler3);


// let newbtn = document.querySelector("button");
// let mode = "light";// dark men change karna hai
// newbtn.addEventListener("click", () => {
//     // console.log("You are trying to the change the mode of background.");
//     if (mode === "light") {
//         mode = "dark";
//         document.querySelector("div").style.backgroundColor = "black"
//         document.querySelector("div").style.color = "white"
//         document.querySelector("body").style.backgroundColor = "blue"
//         document.querySelector(".one").style.backgroundColor = "orange"
//         document.querySelector(".two").style.backgroundColor = "yellow"
//         document.querySelector(".three").style.backgroundColor = "white"
//         document.querySelector(".four").style.backgroundColor = "black"
//         document.querySelector(".five").style.backgroundColor = "pink"

//     } else {
//         mode = "light";
//         document.querySelector("div").style.backgroundColor = "white"
//         document.querySelector("div").style.color = "black"
//         document.querySelector("body").style.backgroundColor = "green"
//         document.querySelector(".one").style.backgroundColor = "golden"
//         document.querySelector(".two").style.backgroundColor = "yellow"
//         document.querySelector(".three").style.backgroundColor = "orange"
//         document.querySelector(".four").style.backgroundColor = "pink"
//         document.querySelector(".five").style.backgroundColor = "blue"
//     }
//     console.log(mode);
// })

let mode = document.querySelector(".apna");
let body = document.querySelector("body");

let currmode = "white";
mode.addEventListener("click", () => {
    if (currmode === "white") {
        mode.innerHTML = "Light mode"
        currmode = "dark";
        body.setAttribute("class", "fucking")
        //    body.classList.add("dark")
        //    body.classList.remove("white")
    } else {

        mode.innerHTML = "Dark mode"
        currmode = "white";
        //     body.classList.add("white")
        //    body.classList.remove("dark")
        body.setAttribute("class", "fucking2")
        
    }
    console.log(currmode);
})


// var new1 = document.querySelector(".btn");
// console.log(new1);
// new1.setAttribute("class","white")

// var new2 = document.querySelector(".apna");
// console.log(new2);
// new2.setAttribute("class","dark");



// var babu = document.querySelector(".hard");
// console.log(babu);
// babu.setAttribute("class", "fucking")