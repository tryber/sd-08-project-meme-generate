const textInput = document.getElementById('text-input');
const memeText = document.getElementById('meme-text');

function setText() {
  memeText.innerText = textInput.value;
}

textInput.addEventListener('input', setText);
