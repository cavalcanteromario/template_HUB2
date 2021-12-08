var i = 0;
document.getElementById('btn-hamburguer').addEventListener('click', () => {
    if (i == 0) {
        console.log('é zero!');
        document.getElementById('menu').classList.remove('hide');
        document.getElementById('menu').classList.add('show');     
        i++;
    } else {
        console.log('não é zero!');
        document.getElementById('menu').classList.remove('show');
        document.getElementById('menu').classList.add('hide');
        i--;
    }
});

function clicanolinkmenu() {
    document.getElementById('menu').classList.remove('show');
    document.getElementById('menu').classList.add('hide');
}

document.getElementById("btn-hamburguer").addEventListener('click', () => {
    const toggleLeft = document.getElementById("btn-left");
    const toggleRight = document.getElementById('btn-right');
    const left = toggleLeft.classList.add('active');
    const right = toggleLeft.classList.add('active');
    // console.log('ok');
    console.log(toggleLeft);
    console.log(toggleRight);
    console.log(left);
    console.log(right);
    const a = document.getElementById("btn-left");
    const b = document.getElementById('btn-right');
    console.log('left',toggleLeft1, a);
    console.log('right',toggleRight1, b);

})