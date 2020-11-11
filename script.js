const textInput = document.querySelector('#text-input');
const memeText = document.querySelector('#meme-text');


function updateText() {
  memeText.innerHTML = textInput.value;
}

textInput.addEventListener('keyup', updateText);
