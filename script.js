// Função construída tomando como base o post em https://stackoverflow.com/questions/4459379/preview-an-image-before-it-is-uploaded/27165977#27165977
function getImage(event) {
  const image = document.getElementById('meme-image');
  image.src = URL.createObjectURL(event.target.files[0]);
  image.onload = () => {
    URL.revokeObjectURL(image.src);
  };
}

function changeImgText() {
  const inputText = document.getElementById('text-input');
  const textInImage = document.getElementById('meme-text');
  textInImage.innerText = inputText.value;
}

function changeBorderToFire() {
  const memeContainer = document.getElementById('meme-image-container');
  memeContainer.style.border = '3px dashed red';
}

function changeBorderToWater() {
  const memeContainer = document.getElementById('meme-image-container');
  memeContainer.style.border = '5px double blue';
}

function changeBorderToEarth() {
  const memeContainer = document.getElementById('meme-image-container');
  memeContainer.style.border = '6px groove green';
}

window.onload = () => {
  const inputImgFile = document.getElementById('meme-insert');
  inputImgFile.addEventListener('change', getImage);

  const inputText = document.getElementById('text-input');
  inputText.addEventListener('keyup', changeImgText);

  const fireBtn = document.getElementById('fire');
  fireBtn.style.backgroundColor = 'red';
  fireBtn.addEventListener('click', changeBorderToFire);

  const waterBtn = document.getElementById('water');
  waterBtn.style.backgroundColor = 'blue';
  waterBtn.addEventListener('click', changeBorderToWater);

  const earthBtn = document.getElementById('earth');
  earthBtn.style.backgroundColor = 'green';
  earthBtn.addEventListener('click', changeBorderToEarth);
};
