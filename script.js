const memeContainer = document.getElementById('meme-image-container');
const textInput = document.getElementById('text-input');
const memeText = document.getElementById('meme-text');
const memeImg = document.getElementById('meme-image');
const imgInput = document.getElementById('meme-insert');
const reader = new FileReader();

function changeMemeText() {
  const text = textInput.value;
  memeText.textContent = text;
}

textInput.addEventListener('input', changeMemeText);

function updateImage() {
  memeImg.src = reader.result;
}

reader.addEventListener('load', updateImage);

imgInput.addEventListener('change', function (event) {
  const file = event.target.files[0];
  if (file) reader.readAsDataURL(file);
});

const borders = ['fire', 'water', 'earth'];

function removeContainerBorders() {
  for (let index = 0; index < borders.length; index += 1) {
    const border = borders[index];
    memeContainer.classList.remove(`border-${border}`);
  }
}

function addContainerBorder(border) {
  removeContainerBorders();
  memeContainer.classList.add(`border-${border}`);
}

function toggleFire() {
  addContainerBorder('fire');
}

function toggleWater() {
  addContainerBorder('water');
}

function toggleEarth() {
  addContainerBorder('earth');
}

const buttonFire = document.getElementById('fire');
buttonFire.addEventListener('click', toggleFire);

const buttonWater = document.getElementById('water');
buttonWater.addEventListener('click', toggleWater);

const buttonEarth = document.getElementById('earth');
buttonEarth.addEventListener('click', toggleEarth);

const memes = document.querySelectorAll('.meme');
for (let index = 0; index < memes.length; index += 1) {
  const meme = memes[index];
  meme.addEventListener('click', function (event) {
    memeImg.src = event.target.src;
  });
}
