const memeInsert = document.querySelector('input[name=image]');
const textInput = document.getElementById('text-input');
const text = document.getElementById('meme-text');
const memeImage = document.getElementById('meme-image');

function inputChanged() {
  textInput.addEventListener('keyup', function () {
    text.innerText = textInput.value;
  });
}
inputChanged();

function imagePreview() {
  memeInsert.addEventListener('change', function () {
    const reader = new FileReader();
    reader.onloadend = function () {
      memeImage.src = reader.result;
    };
    if (memeInsert) {
      reader.readAsDataURL(memeInsert.files[0]);
    } else {
      memeImage.src = '';
    }
  });
}
imagePreview();
