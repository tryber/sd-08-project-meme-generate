function enviaTextoMeme(evento) {
  const textoMeme = document.querySelector("#meme-text");
  textoMeme.innerText = evento.target.value;
}

function enviaImageMeme(evento) {
    const localImage = document.querySelector('#meme-image');
    console.log(evento.target.files)
    localImage.src = URL.createObjectURL(evento.target.files[0]);
}

window.onload = function () {
  const inputText = document.querySelector("#text-input");
  const inputImage = document.querySelector('#meme-insert');

  inputImage.addEventListener('change', enviaImageMeme);
  inputText.addEventListener('input', enviaTextoMeme);
};
