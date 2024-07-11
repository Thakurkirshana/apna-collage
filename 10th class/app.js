// // alert("This is the Dom class page!")
// // DOM document object model(dom)
// //Dynamics changing Dom 
// // document.body.style.background="green";
// // document.body.style.background="pink"
// // document.body.childNodes.innerText="baba";
// // let heading = document.getElementById("");
// // console.log  (button);
// // let heading1= document.getElementsByClassName("heading");
// // console.log(heading1);
// // let para = document.getElementsByTagName("p");
// // console.log(para);

// // let firstelement = document.querySelector(".heading");
// // console.log(firstelement);
// // let allElement= document.querySelectorAll('.heading');
// // console.log(allElement);


// // let num = document.body.childNodes.innerText="king is the control of world.";
// // console.log(num);
// // let docu=document.getElementsByTagName("body");
// // console.log(docu);

// // console.dir(document.body);

// // let tagName = document.getElementsByTagName("td");
// // console.log(tagName);
// // let neWo = document.getElementById("bhI");
// // console.log(neWo.innerText);
// // let neQe = document.querySelectorAll("h1");
// // console.log(neQe);
// // let tagName1 = document.body.style.background="white";
// // document.body.style.color="black"
// // // console.log(tagName1);
// // let num =document.getElementsByClassName.innerText="apna collage";
// // console.log(num);
// // // document.body.childNodes.innerText="apna collage .com";
// // // document.body.childNodes.innerText="akjjiajdja"
// // let don=document.querySelectorAll("heading")
// // let apna=document.getElementById("apna");
// // console.log(apna);

// // let apka = document.getElementsByTagName("tr");
// // console.log(apka);

// // let button= document.querySelector(".button");
// // console.log(button.innerText);
// //  console.dir(button);
// // let div = document.querySelector("div");
// // console.log(div);
// // console.log(div.innerText);

// // let heading = document.querySelector("h4");
// // console.log(heading.innerText);
// // let doc= document.querySelector("h4");
// // console.log(doc);

// // let vava =document.querySelector("h4");
// // console.log(vava.innerText="Amar singh chamkila is the real hero of the susity");
// //  let a = document.querySelector("h4")
// //  console.log(a.innerText="baby ko base pasand hai...");
// //  a.innerHTML="<h1>Startup Pakistan Page..</h1>";
// //  a.style.background="black"
// //  a.style.borderRadius="40px"

// //  a.addEventListener("click",function(){
// //     console.log("hey baby kesa dia phr");
// //  })

// //  let button = document.querySelector("button");
// //  button.addEventListener("click", function(){
// //     console.log(" Chal kya raya hai es button men.");
// //  })

// // var a1 = addEventListener("click",function(){
// //     a1.innerHtml="Bhai Kya Haal Hai Apki"
// //     a1.style.color="yellow"
// //     a1.style.backgroundColor="white"
// // })
// let h2= document.querySelector("h2");
// console.log(h2.innerText);
// h2.innerText=h2.innerText+"Apna collage js classes."

// let divs= document.querySelectorAll(".box");
// console.log(divs[0].innerText="New uniqe");
// divs[1].innerText="zero value";
// divs.add

// let apa=document.querySelector(".box1");
// console.log(apa);
// apa.addEventListener("click",function(){
//     apa.innerHTML="bhai muji to bohat bukhe lagi hai"
//     apa.style.color="black"
//     apa.style.backgroundColor="pink"
// })


// let baba=document.querySelector(".box2");
// console.log(baba);
// baba.addEventListener("click",function(){
//     baba.innerHTML="bhai muji to bohat bukhe lagi hai"
//     baba.style.color="black"
//     baba.style.backgroundColor="yellow"
// })

// let divs = document.querySelectorAll(".b ox")
// // for (div of divs ){
// //     console.log(div.innerText);
// // }
// // divs[0].innerText="new uniqe value 1"
// // divs[1].innerText="apna collage"
// // divs[2].innerText="zero dot function"

// let divs=document.querySelectorAll(".box");
// let idx=0;
// for( div of divs){
//     div.innerText=`phr se woi soch ${idx}`
//     idx++;
// }
// // let divs=document.querySelectorAll(".box");
// // let idx=1;
// // for (div of divs ) {
// //   div.innerText=`new ${idx}`;
// //   idx++;

// // };

// // // let ivs = document.querySelectorAll(".box")
// // let idexx=1;
// // for(div of divs ){
// //     div.innerText=`bhai kya bhai ${idexx}`
// // }

// //Atribute chapther in js dom

// let div= document.querySelector("div");
// console.log(div  );
// let id=div.getAttribute("id");
// console.log(id);

// let name=div.getAttribute("name");
// console.log(name);
// let para =document.querySelector("p");
// console.log(para.setAttribute("class","newClass bhau"));
// let para = document.querySelector("p");
// console.log(para.setAttribute("class", "newClass"));

// let newBtn =document.createElement("button");
// newBtn.innerText="click me!";
// newBtn.style.backgroundColor="green"
// newBtn.style.color="white"
// newBtn.style.fontSize="20px"
// console.log(newBtn);

// let div = document.querySelector("div");
// div.after(newBtn)

// newBtn.addEventListener("click",function(){
//     newBtn.innerHTML="bhai ki website";
//     newBtn.style.backgroundColor="red"
// })

// let newHeading=document.createElement("h1");
// newHeading.innerHTML="<i> Hi, I am a new Era of AI.</i>";
// document.querySelector("div").prepend(newHeading);

// let data ="Hi, I am a new Era of AI.";
// document.write(data).prepend(data);
// let para=document.querySelector("p");
// para.remove();

// let newBtn1= document.createElement("button");
// newBtn1.innerText="Apna collage!";
// newBtn1.style.backgroundColor="pink";
// console.log(newBtn1);
// let apn=document.querySelector("apn");
// apn.after(newBtn1)

let newBtn = document.createElement("button");
newBtn.innerText="Click me!";
newBtn.style.backgroundColor="white";
newBtn.style.color="black";
newBtn.style.fontSize="50px";
document.querySelector("body").prepend(newBtn);




// let para = document.querySelector("p");
// para.setAttribute("class","newClass")

let para = document.querySelector("p");
para.classList.add("newClass")