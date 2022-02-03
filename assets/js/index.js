// scroll position to navbar

window.addEventListener("scroll", (event) => {
    let scroll = this.scrollY;

    var div = $("#services");
    var offset = div.offset();
    var topo = offset.top;

    if (scroll >= topo) {
        document.querySelector("header").style.position = "fixed";
        document.querySelector("header").classList.remove("headerFixedDown");
        document.querySelector("header").classList.add("headerFixedDown");
    } else {
        document.querySelector("header").style.position = "absolute";
        document.querySelector("header").classList.remove("headerFixedDown");
    }
});


// Anima transição de menu scroll

$(".menu a").click(function (e) {
    e.preventDefault();
    var id = $(this).attr('href'),
        targetOffset = $(id).offset().top;
    $('html, body').animate({
        scrollTop: targetOffset
    }, 500);
});


// slide menu Mobile

var btn = document.getElementById('label-menu');
var menu = document.getElementById('menu');
var loginArea = document.getElementById('login-area');

var link = document.querySelectorAll('#links-menu a');

function slideMenu() {

    // add e remove class show/hide de menu links
    menu.classList.contains('showMobile') ? (
        menu.classList.remove('hideMobile')
    ) : (
        menu.classList.add('showMobile')
    );
    // add e remove class togglerDown/togglerUp e hide/show de menu links
    menu.classList.contains('togglerDown') ? (
        menu.classList.remove('togglerDown'),
        menu.classList.remove('hideMobile'),
        menu.classList.add('togglerUp')
    ) : (
        menu.classList.add('togglerDown'),
        menu.classList.remove('togglerUp'),
        menu.classList.remove('togglerUp')
    );

    loginArea.classList.contains('showMobile') ? (
        loginArea.classList.remove('hideMobile')
    ) : (
        loginArea.classList.add('showMobile')
    );
    // // add e remove togglerDown/togglerUp e remove hide de menu links
    loginArea.classList.contains('togglerDown') ? (
        loginArea.classList.remove('togglerDown'),
        loginArea.classList.remove('hideMobile'),
        loginArea.classList.add('togglerUp')
    ) : (
        loginArea.classList.add('togglerDown'),
        loginArea.classList.remove('togglerUp'),
        loginArea.classList.remove('hideMobile')
    );
}

function slideMenuToggleButton() {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        slideMenu();
    })
}


// click no link o menu fecha

function linksMenuSlide() {
    link[0].addEventListener('click', () => {
        slideMenu();
    })
    link[1].addEventListener('click', () => {
        slideMenu();
    })
    link[2].addEventListener('click', () => {
        slideMenu();
    })
    link[3].addEventListener('click', () => {
        slideMenu();
    })
}

linksMenuSlide();
slideMenuToggleButton();




function loginDropDown() {
    var loginArea = document.getElementById("tab-login");
    loginArea.classList.contains("hide") ? (
        loginArea.classList.remove("hide")
    ):(
        loginArea.classList.add("hide")
    );
}

var btnLogin = document.getElementById("access");
btnLogin.addEventListener('click', () => {
    loginDropDown();
})