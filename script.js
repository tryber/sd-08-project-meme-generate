function enviaTextoMeme(evento) {
  const textoMeme = document.querySelector("#meme-text");
  textoMeme.innerText = evento.target.value;
}

function enviaImageMeme(evento) {
  const localImage = document.querySelector("#meme-image");
  console.log(evento.target.files);
  localImage.src = URL.createObjectURL(evento.target.files[0]);
}

function colorirBordaFire() {
    const container = document.querySelector('#meme-image-container')
    container.style.border = '3px dashed red'
}

function colorirBordaWater() {
    const container = document.querySelector('#meme-image-container')
    container.style.border = '5px double blue'
}

function colorirBordaEarth() {
    const container = document.querySelector('#meme-image-container')
    container.style.border = '6px groove green'
}





window.onload = function () {
  const inputText = document.querySelector("#text-input");
  const inputImage = document.querySelector("#meme-insert");
  const btnFire = document.querySelector("#fire");
  const btnWater = document.querySelector("#water");
  const btnEarth = document.querySelector("#earth");

  inputImage.addEventListener("change", enviaImageMeme);
  inputText.addEventListener("input", enviaTextoMeme);

  btnFire.addEventListener('click', colorirBordaFire)
  btnWater.addEventListener('click', colorirBordaWater)
  btnEarth.addEventListener('click', colorirBordaEarth)
};
