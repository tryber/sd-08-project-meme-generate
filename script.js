let memeContainer = document.getElementById("meme-image-container");
let entradaTexto = document.getElementById("text-input");
let textoMeme = document.getElementById("meme-text");
let entradaImagem = document.getElementById("meme-insert");
let imageMeme = document.getElementById("meme-image");

function atualizaTexto() {
    textoMeme.innerText = entradaTexto.value;
}
entradaTexto.addEventListener("input",atualizaTexto);

function atualizaImagem () {
    imageMeme.src = entradaImagem.files[0].name;
}
entradaImagem.addEventListener("change",atualizaImagem);