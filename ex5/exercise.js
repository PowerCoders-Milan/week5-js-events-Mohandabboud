
window.addEventListener("scroll", myFunction)
var circle = document.querySelector("#sa");
var top1 = 0;

function myFunction() {
    top1 += 10;
    circle.style.top = top1 +"px"
    console.log(top1);
}