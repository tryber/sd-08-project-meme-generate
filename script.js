const textInput = document.querySelector('#text-input');
const memeText = document.querySelector('#meme-text');
const imageInput = document.querySelector('#meme-insert');
const imageOutput = document.querySelector('#meme-image');
const memeContainer = document.querySelector('#meme-image-container');
const waterButton = document.querySelector('#water');
const fireButton = document.querySelector('#fire');
const earthButton = document.querySelector('#earth');
const templates = document.querySelector('.preloaded-images');

function updateText() {
  memeText.innerHTML = textInput.value;
}

textInput.addEventListener('keyup', updateText);

function loadImage(event) {
  imageOutput.src = URL.createObjectURL(event.target.files[0]); // src: https://shorturl.at/lqFN2
}

imageInput.addEventListener('change', loadImage);

function changeBorder(type) {
  memeContainer.style.border = type;
}

function baseBorder() {
  return '1px solid black';
}

function fireBorder() {
  return '3px dashed red';
}

function waterBorder() {
  return '5px double blue';
}

function earthBorder() {
  return '6px groove green';
}

changeBorder(baseBorder());

waterButton.addEventListener('click', () => changeBorder(waterBorder()));
fireButton.addEventListener('click', () => changeBorder(fireBorder()));
earthButton.addEventListener('click', () => changeBorder(earthBorder()));

function loadTemplate(event) {
  if (event.target.src) {
    imageOutput.src = event.target.src;
  }
}

templates.addEventListener('click', loadTemplate);
