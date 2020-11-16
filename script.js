// DEFINES SELECTORS
const textInput = document.querySelector('#text-input');
const textMeme = document.querySelector('#meme-text');
const container = document.querySelector('.container');
const imageInput = document.querySelector('#meme-insert');
const image = document.querySelector('#meme-image');

textInput.addEventListener('keyup', () => {
  textMeme.innerHTML = textInput.value;
});

imageInput.addEventListener('change', (event) => {
  image.src = URL.createObjectURL(event.target.files[0]);
});

// const loadImage = (event) => {
//   if (event.target.src) {
//     image.src = event.target.src;
//   }
// };
