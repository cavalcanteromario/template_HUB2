// var proximaImagem = 1;
// var zIndexAtual = 0;
// var imagens = document.getElementById("container").children;

// function avancarImagem() {
//     imagem = imagens[proximaImagem];
//     imagem.style.zIndex = ++zIndexAtual;
//     imagem.style.marginLeft = "0%";

//     proximaImagem++;

//     if (proximaImagem >= imagens.length) {
//         proximaImagem = 0;
//     }

//     setTimeout(resetarImagens, 10000);
// }

// function resetarImagens() {
//     imagemVisivel = proximaImagem - 1;

//     if (imagemVisivel < 0) {
//         imagemVisivel = imagens.length - 1;
//     }

//     for (var i = 0; i < imagens.length; i++) {
//         if (i != imagemVisivel) {
//             imagens[i].style.marginLeft = "100%";
//         }
//     }
// }

// var intervalo = setInterval(avancarImagem, 6000);