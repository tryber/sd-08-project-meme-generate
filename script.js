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

function toggleFire() {
  memeImg.className = 'fire';
}

function toggleWater() {
  memeImg.className = 'water';
}

function toggleEarth() {
  memeImg.className = 'earth';
}

const buttonFire = document.getElementById('fire');
buttonFire.addEventListener('click', toggleFire);

const buttonWater = document.getElementById('water');
buttonWater.addEventListener('click', toggleWater);

const buttonEarth = document.getElementById('earth');
buttonEarth.addEventListener('click', toggleEarth);
