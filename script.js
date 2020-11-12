const textInput = document.getElementById('text-input');
const memeText = document.getElementById('meme-text');
const memeImg = document.getElementById('meme-image');
const imgInput = document.getElementById('meme-insert');
const reader = new FileReader();

function changeMemeText() {
  const text = textInput.value;
  memeText.textContent = text;
}

textInput.addEventListener("input", changeMemeText);

function updateImage() {
  memeImg.src = reader.result;
}

reader.addEventListener('load', updateImage)

imgInput.addEventListener('change', function(event) {
  const file = event.target.files[0];
  if (file) reader.readAsDataURL(file);
});