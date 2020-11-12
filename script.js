const textInput = document.getElementById('text-input');
const memeText = document.getElementById('meme-text');

function changeMemeText() {
  const text = textInput.value;
  memeText.textContent = text;
}

textInput.addEventListener("input", changeMemeText)