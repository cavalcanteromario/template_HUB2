// scroll position to navbar

window.addEventListener("scroll", (event) => {
    let scroll = this.scrollY;

    if (scroll > 0) {
        var teste = document.getElementById("home").scrollTop = 0;
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

var btn_close_about = document.getElementById('btn-close-about');





// --------------------------------------------------------
// pegar posição da div
function getPosicaoElemento(elemID) {
    var offsetTrail = document.getElementById(elemID);
    var offsetLeft = 0;
    var offsetTop = 0;
    while (offsetTrail) {
        offsetLeft += offsetTrail.offsetLeft;
        offsetTop += offsetTrail.offsetTop;
        offsetTrail = offsetTrail.offsetParent;
    }
    if (navigator.userAgent.indexOf("Mac") != -1 &&
        typeof document.body.leftMargin != "undefined") {
        offsetLeft += document.body.leftMargin;
        offsetTop += document.body.topMargin;
    }
    return {
        left: offsetLeft,
        top: offsetTop
    };
}

//EXEMPLO CHAMADA
// alert("esquerda:" + getPosicaoElemento("about").left)
// alert("topo:" + getPosicaoElemento("about").top) 
var posTop = getPosicaoElemento('about').top;

if (posTop >= 233) {
    btn_close_about.classList.remove('show');
    btn_close_about.classList.add('hide')
}


var about = document.getElementById('about');
