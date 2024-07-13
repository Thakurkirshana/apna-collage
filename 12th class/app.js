var a = document.querySelector("#bulb")
var btn = document.querySelector("button");


var flag = 0

btn.addEventListener("click", function () {
    if (flag == 0) {
        btn.innerText = "OFF"
        btn.style.backgroundColor = "green"
        bulb.style.backgroundColor = "yellow"
        console.log("Clicked");
        flag = 1;
    } else {
        btn.innerText = "ON"

        btn.style.backgroundColor = "red"
        bulb.style.backgroundColor = "transparent"
        console.log("Click the Again");
        flag = 0;
    }

})


