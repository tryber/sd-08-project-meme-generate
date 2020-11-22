const textInput = document.getElementById('text-input');
const text = document.getElementById('meme-text');

function inputChanged() {
  textInput.addEventListener('keyup', function () {
    text.innerText = textInput.value;
  });
}
inputChanged();
