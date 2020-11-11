function enviaTextoMeme(evento) {
  const textoMeme = document.querySelector('#meme-text');
  textoMeme.innerText = evento.target.value;
}

function enviaImageMeme(evento) {
  const localImage = document.querySelector('#meme-image');
  localImage.src = URL.createObjectURL(evento.target.files[0]);
}

function colorirBordaFire() {
  const container = document.querySelector('#meme-image-container');
  container.style.border = '3px dashed red';
}

function colorirBordaWater() {
  const container = document.querySelector('#meme-image-container');
  container.style.border = '5px double blue';
}

function colorirBordaEarth() {
  const container = document.querySelector('#meme-image-container');
  container.style.border = '6px groove green';
}

function acionarMeme1() {
  const imageMeme = document.querySelector('#meme-image');
  imageMeme.src = './imgs/meme1.png';
}

function acionarMeme2() {
  const imageMeme = document.querySelector('#meme-image');
  imageMeme.src = './imgs/meme2.png';
}

function acionarMeme3() {
  const imageMeme = document.querySelector('#meme-image');
  imageMeme.src = './imgs/meme3.png';
}

function acionarMeme4() {
  const imageMeme = document.querySelector('#meme-image');
  imageMeme.src = './imgs/meme4.png';
}

window.onload = function () {
  const inputText = document.querySelector('#text-input');
  const inputImage = document.querySelector('#meme-insert');
  const btnFire = document.querySelector('#fire');
  const btnWater = document.querySelector('#water');
  const btnEarth = document.querySelector('#earth');
  const meme1 = document.querySelector('#meme-1');
  const meme2 = document.querySelector('#meme-2');
  const meme3 = document.querySelector('#meme-3');
  const meme4 = document.querySelector('#meme-4');

  inputImage.addEventListener('change', enviaImageMeme);
  inputText.addEventListener('input', enviaTextoMeme);

  btnFire.addEventListener('click', colorirBordaFire);
  btnWater.addEventListener('click', colorirBordaWater);
  btnEarth.addEventListener('click', colorirBordaEarth);

  meme1.addEventListener('click', acionarMeme1);
  meme2.addEventListener('click', acionarMeme2);
  meme3.addEventListener('click', acionarMeme3);
  meme4.addEventListener('click', acionarMeme4);
};
