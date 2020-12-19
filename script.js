const memeImage = document.querySelector('#meme-insert');
const textInput = document.querySelector('#text-input');
memeImage.addEventListener('change', () => {
  document.querySelector('#meme-image').src = URL.createObjectURL(
    memeImage.files[0]
  );
});

textInput.addEventListener('keyup', () => {
  const memeText = document.querySelector('#meme-text');
  memeText.innerHTML = textInput.value;
});
