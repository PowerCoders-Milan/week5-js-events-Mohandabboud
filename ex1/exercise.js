// define your functions here
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  
function changeColor () {
    a[0].style.color = getRandomColor();
    a[1].style.color = getRandomColor();
    a[2].style.color = getRandomColor();
  }
  function changeColour () {
    a[0].style.color = "black"
    a[1].style.color = "black"
    a[2].style.color = "black"
}

// call the functions and connect them to an event

var a = document.querySelectorAll("strong");
var b = document.querySelector("a")
console.log(a);
b.addEventListener("mouseenter", changeColor);
b.addEventListener("mouseleave",changeColour);



/* function changeColor () {
    a[0].style.color = "red"
    a[1].style.color = "red"
    a[2].style.color = "red"
  }
  function changeColour () {
    a[0].style.color = "black"
    a[1].style.color = "black"
    a[2].style.color = "black"
}

// call the functions and connect them to an event

var a = document.querySelectorAll("strong");
var b = document.querySelector("a")
console.log(a);
b.addEventListener("mouseenter", changeColor);
b.addEventListener("mouseleave",changeColour);
*/