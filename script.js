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
});

const button2 = document.getElementById('water');
button2.addEventListener('click', () => {
  image.style.border = '5px double blue';
});

const button3 = document.getElementById('earth');
button3.addEventListener('click', () => {
  image.style.border = '6px groove green';
});

const meme1 = document.getElementById('meme-1');
meme1.addEventListener('click', () => {
  document.getElementById('meme-image').src = 'imgs/meme1.png';
  const memeText = document.getElementById('meme-text');
  memeText.innerHTML = 'Ooooloooco meu - Essa Feraí bixo';
});

const meme2 = document.getElementById('meme-2');
meme2.addEventListener('click', () => {
  document.getElementById('meme-image').src = 'imgs/meme2.png';
  const memeText = document.getElementById('meme-text');
  memeText.innerHTML = 'Me acorda só ano que vem';
});

const meme3 = document.getElementById('meme-3');
meme3.addEventListener('click', () => {
  document.getElementById('meme-image').src = 'imgs/meme3.png';
  const memeText = document.getElementById('meme-text');
  memeText.innerHTML = 'Maaano, oq tá acoteceno?';
});

const meme4 = document.getElementById('meme-4');
meme4.addEventListener('click', () => {
  document.getElementById('meme-image').src = 'imgs/meme4.png';
  const memeText = document.getElementById('meme-text');
  memeText.innerHTML = 'Vô ganhá a eleissaum';
});
