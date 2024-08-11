// let num= document.getElementById("button");
// console.log(num);
// let clas= document.getElementsByClassName("myClass");
// console.log(clas);
//   let name= document.getElementsByTagName("h1");
//   console.log(name);
// let name2= document.querySelectorAll("h1");
// console.dir(name2.innerText);
// name2.inner
// console.log(name);
// let name= document.querySelectorAll("button");
// console.log(name);
// let dom = document.querySelector("h1");
// console.dir(dom.innerText);
// dom.innerText= dom.innerText+ " landa ka matha hai ye code bhi";
// let dot=document.querySelector("h1");
// console.log(dot.setAttribute("id","oknewclass"));
// // let kuch=dot.getAttribute("id")
// // console.log(kuch);
// console.log(dot.getAttribute("id"));

//  let toDay=document.createElement("button",);
//  toDay.innerText="Click Me!";
//  toDay.style.color="white";
//  toDay.style.backgroundColor="red";
//  document.querySelector("body").prepend(toDay);
//  toDay.addEventListener("click",function() {
//    if (currMode==="light") {
//     currMode ="dark";
//     document.querySelector("body")
//    } else {
    
//    }
//  }
//  )

// var question = "Your species?";
//  var defaultAnswer = " kirshan thakur";
//  var spec = prompt(question, defaultAnswer);
let modeBtn=document.querySelector("#mode");
let currMode="light";//dark
modeBtn.addEventListener("click",()=>{
    if (currMode==="light") {
currMode="dark";
document.querySelector("body")       
//    modeBtn.setAttribute("id","dark")
    } else {
        currMode="light";

        modeBtn.setAttribute("id","white")
        
    }
    console.log(currMode);
})