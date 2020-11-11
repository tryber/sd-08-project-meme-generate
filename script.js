function enviaTextoMeme(evento) {
  let textoMeme = document.querySelector("#meme-text");
  textoMeme.innerText = evento.target.value;
}

window.onload = function () {
  let inputText = document.querySelector("#text-input");
  inputText.addEventListener("change", enviaTextoMeme);
};
