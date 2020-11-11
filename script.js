const textInput = document.getElementById('text-input');
const memeText = document.getElementById('meme-text');

function textToMeme() {
  memeText.innerText = textInput.value;
}
textInput.addEventListener('keyup', textToMeme);

const insertImg = document.getElementById('meme-insert');
const memeImg = document.getElementById('meme-image');

function imgToMeme() {
  memeImg.src = URL.createObjectURL(insertImg.files[0]);
}

insertImg.addEventListener('change', imgToMeme);
