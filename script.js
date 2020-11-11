const textInput = document.querySelector('#text-input');
const memeText = document.querySelector('#meme-text');
const imageInput = document.querySelector('#meme-insert');
const imageOutput = document.querySelector('#meme-image');


function updateText() {
  memeText.innerHTML = textInput.value;
}

textInput.addEventListener('keyup', updateText);

function loadImage(event) {
  imageOutput.src = URL.createObjectURL(event.target.files[0]); // src: https://shorturl.at/lqFN2
}

imageInput.addEventListener('change', loadImage);
