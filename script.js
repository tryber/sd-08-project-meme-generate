const memeImage = document.querySelector('#meme-insert');
const textInput = document.querySelector('#text-input');
const borders = document.querySelectorAll('.border');
const memes = document.querySelectorAll('#memes');
memeImage.addEventListener('change', () => {
  const selectImage = memeImage.files[0];
  document.querySelector('#meme-image').src = URL.createObjectURL(selectImage);
});

textInput.addEventListener('keyup', () => {
  const memeText = document.querySelector('#meme-text');
  memeText.innerHTML = textInput.value;
});
