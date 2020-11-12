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
    let url = URL.createObjectURL(entradaImagem.files[0]);
    imageMeme.src = url;
}
entradaImagem.addEventListener("change",atualizaImagem);

function bordaFire () {
    if (memeContainer.style.border === "3px dashed red"){
        memeContainer.style.border = "1px solid black";
    } else {
        memeContainer.style.border = "3px dashed red";
    }
}
document.getElementById("fire").addEventListener("click",bordaFire);

function bordaWater () {
    if (memeContainer.style.border === "5px double blue"){
        memeContainer.style.border = "1px solid black";
    } else {
        memeContainer.style.border = "5px double blue";
    }
}
document.getElementById("water").addEventListener("click",bordaWater);

function bordaEarth () {
    if (memeContainer.style.border === "6px groove green"){
        memeContainer.style.border = "1px solid black";
    } else {
        memeContainer.style.border = "6px groove green";
    }
}
document.getElementById("earth").addEventListener("click",bordaEarth);

function escolheMemesProntos (event) {
    if (event.target === document.querySelectorAll(".meme-pronto")[0]){
        imageMeme.src = "imgs/meme1.png";
    } else if  (event.target === document.querySelectorAll(".meme-pronto")[1]) {
        imageMeme.src = "imgs/meme2.png";
    } else if (event.target === document.querySelectorAll(".meme-pronto")[2]) {
        imageMeme.src = "imgs/meme3.png";
    } else if (event.target === document.querySelectorAll(".meme-pronto")[3]) {
        imageMeme.src = "imgs/meme4.png";
    }
}
document.querySelector(".meme-pronto-container").addEventListener("click",escolheMemesProntos);