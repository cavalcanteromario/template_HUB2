// scroll position to navbar

window.addEventListener("scroll", (event) => {
    let scroll = this.scrollY;

    if(scroll > 0) {
        var teste = document.getElementById("home").scrollTop = 0;
        console.log(teste);
    }

    if (scroll > 700) {
        document.querySelector("header").style.position = "fixed";
        document.querySelector("header").classList.add("headerFixedDown");
        document.querySelector("header").classList.remove("headerFixedUp");

        // sublinhado nos links
        document.getElementById("services").style.textDecoration = "underline";

    } else {
        document.querySelector("header").style.position = "absolute";
        document.querySelector("header").classList.remove("headerFixedDown");
        document.querySelector("header").classList.add("headerFixedUp");

        // sublinhado nos links
        document.getElementById("services").style.textDecoration = "none";
    }
});

var img1 = document.getElementById("img-carousel1");
var img2 = document.getElementById("img-carousel2");
var img3 = document.getElementById("img-carousel3");

var slidebtn = document.getElementById("slide-buttons");
var btn = document.createElement("button");

slidebtn.appendChild(btn);

var carousel = document.getElementById("carousel").children;



// carousel slide

const  slides = document.querySelectorAll('[data-js="carousel-item"]')
const nextButton = document.querySelector('[data-js="carousel_button-next"]')

console.log(slides)

nextButton.addEventListener('click', () => {
    console.log('oi')
})