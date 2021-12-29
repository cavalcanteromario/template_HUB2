// scroll position to navbar

window.addEventListener("scroll", (event) => {
    let scroll = this.scrollY;
    if (scroll > 700) {
        document.querySelector("header").style.position = "fixed";
        document.querySelector("header").classList.add("headerFixedDown");
        document.querySelector("header").classList.remove("headerFixedUp");

    } else {
        document.querySelector("header").style.position = "absolute";
        document.querySelector("header").classList.remove("headerFixedDown");
        document.querySelector("header").classList.add("headerFixedUp");
    }
});

var img1 = document.getElementById("img-carousel1");
var img2 = document.getElementById("img-carousel2");
var img3 = document.getElementById("img-carousel3");

var slidebtn = document.getElementById("slide-buttons");
var btn = document.createElement("button");

slidebtn.appendChild(btn);

var carousel = document.getElementById("carousel").children;

console.log(carousel);