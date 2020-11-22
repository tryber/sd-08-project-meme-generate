const memeInsert = document.querySelector('input[name=image]');
const textInput = document.getElementById('text-input');
const text = document.getElementById('meme-text');
const memeImage = document.getElementById('meme-image');
const memeImageContainer = document.getElementById('meme-image-container');
const btnFire = document.getElementById('fire');
const btnWater = document.getElementById('water');
const btnEarth = document.getElementById('earth');

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
function chooseBorder(button) {
  let border = '';
  if (button.id === 'fire') {
    border = 'border: 3px dashed red';
  }
  if (button.id === 'water') {
    border = 'border: 5px double blue';
  }
  if (button.id === 'earth') {
    border = 'border: 6px groove green';
  }
  memeImageContainer.style = border;
}
function listeningButtons() {
  btnFire.addEventListener('click', function () {
    chooseBorder(btnFire);
  });
  btnWater.addEventListener('click', function () {
    chooseBorder(btnWater);
  });
  btnEarth.addEventListener('click', function () {
    chooseBorder(btnEarth);
  });
}
listeningButtons();
function loadMeme() {
  const memes = document.querySelectorAll('.memes img');
  for (let index = 0; index < memes.length; index += 1) {
    memes[index].addEventListener('click', function () {
      memeImage.src = memes[index].src;
    });
  }
}
loadMeme();
