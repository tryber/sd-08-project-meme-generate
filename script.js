const memeImage = document.getElementById('meme-insert');
const textInput = document.getElementById('text-input');

memeImage.addEventListener('change', () => {
  const selectImage = memeImage.files[0];
  document.getElementById('meme-image').src = URL.createObjectURL(selectImage);
});

textInput.addEventListener('keyup', () => {
  const memeText = document.getElementById('meme-text');
  memeText.innerHTML = textInput.value;
});

const button1 = document.getElementById('fire');
const image = document.getElementById('meme-image-container');
button1.addEventListener('click', () => {
  image.style.border = '3px dashed red';
})

const button2 = document.getElementById('water');
button2.addEventListener('click', () => {
  image.style.border = '5px double blue';
})

const button3 = document.getElementById('earth');
button3.addEventListener('click', () => {
  image.style.border = '6px groove green';
})