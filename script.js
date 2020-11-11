//  Adicionar texto do input ao meme
const inputMeme = document.querySelector('#text-input');
const memeText = document.querySelector('#meme-text');
const memeContainer = document.querySelector('#meme-image-container')

inputMeme.addEventListener('input', function () {
  memeText.innerText = inputMeme.value;
});

memeText.style.widht = memeContainer.style.widht
