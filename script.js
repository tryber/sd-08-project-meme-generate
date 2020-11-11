const textInput = document.getElementById('text-input');
const memeText = document.getElementById('meme-text');

function textToMeme() {
  memeText.innerText = textInput.value;
}
textInput.addEventListener('keyup', textToMeme);
