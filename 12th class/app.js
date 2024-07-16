// var a = document.querySelector("#bulb")
// var btn = document.querySelector("button");


// var flag = 0

// btn.addEventListener("click", function () {
//     if (flag == 0) {
//         btn.innerText = "OFF"
//         btn.style.backgroundColor = "green"
//         bulb.style.backgroundColor = "yellow"
//         console.log("Clicked");
//         flag = 1;
//     } else {
//         btn.innerText = "ON"

//         btn.style.backgroundColor = "red"
//         bulb.style.backgroundColor = "transparent"
//         console.log("Click the Again");
//         flag = 0;
//     }
// })


// var a = document.querySelector("#bulb");
// var btn = document.querySelector("button");
// var xyz = 0;
// btn.addEventListener("click", function () {
//     if (xyz == 0) {
//         btn.innerHTML = "OFF"
//         a.style.color = "blue"
//         a.style.backgroundColor="black"
//         console.log("clicked");
//         xyz = 1;
//     } else {
//         btn.innerText = "ON"
//         btn.style.color = "black"
//         a.style.backgroundColor = "skyblue"
//         xyz = 0;
//     }
// })


var newBtn = document.createElement("button");
newBtn.innerText = "Click me!";

newBtn.style.textAlign = "center"
document.querySelector("body").prepend(newBtn)

var b = 0;
newBtn.addEventListener("click", function () {
    if (b == 0) {

        newBtn.style.color = "white"
        newBtn.style.backgroundColor = "black"
        console.log("click hogia ");
        b = 1;
    } else {

        newBtn.style.color = "blue"
        newBtn.style.backgroundColor = "pink"
        console.log('Again SnD ');
        b = 0;
    }
})
// let babu = document.querySelector("#btn");
// babu.addEventListener
var newOk = document.querySelector("button");
newOk.setAttribute("class",".btn");
// // new1.setAttribute("newClass","btn")
newOk.setAttribute("class","btn");



var aba = document.querySelector(".newClass");
aba.setAttribute("class","btn");
