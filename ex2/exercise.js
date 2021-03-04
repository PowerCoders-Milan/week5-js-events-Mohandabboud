/* function width() {
    var a = document.getElementById("body");
    console.log(a.width)
}
var a = document.getElementById("body");
console.log(a.width)

function getResolution() {
    alert("Your screen resolution is: " + window.screen.width * window.devicePixelRatio + "x" + window.screen.height * window.devicePixelRatio);
} */

var body = document.querySelector("body");
function changeColor (x) {
    if (x <= 300 ) {
        body.style.backgroundColor= "green"
    } else if (x >= 300 && x <= 700) {
        body.style.backgroundColor= "red"
     } else if (x > 700) {
        body.style.backgroundColor= "yellow" 
    }
    }

var x = window.screen.width;
var y = window.screen.height;


var p = document.querySelectorAll("p");
p[1].innerHTML = "The window width is " + x +" pixels and its hight is " + y +" pixels."


window.onload = changeColor(x);            
          