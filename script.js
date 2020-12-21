const textInput = document.getElementById('text-input');
textInput.addEventListener('keyup', () => {
  const upperText = document.getElementById('meme-text');
  upperText.innerHTML = textInput.value;
});

const imageInput = document.getElementById('meme-insert');
imageInput.addEventListener('change', (event) => {
  const memeImage = document.getElementById('meme-image');
  memeImage.src = URL.createObjectURL(event.target.files[0]);
  memeImage.onload = function () {
    URL.revokeObjectURL(imageInput.src);
  };
});

const buttonsContainer = document.querySelector('.buttons');
const memeContainer = document.getElementById('meme-image-container');
buttonsContainer.addEventListener('click', (event) => {
  switch (event.target.id) {
    case 'fire':
      memeContainer.style.border = '3px dashed red';
      break;
    case 'water':
      memeContainer.style.border = '5px double blue';
      break;
    case 'earth':
      memeContainer.style.border = '6px groove green';
      break;
    default:
      break;
  }
});

const samples = document.querySelector('.meme-samples');
for (let memeNumber = 1; memeNumber <= 4; memeNumber += 1) {
  const images = document.createElement('img');
  images.id = `meme-${memeNumber}`;
  images.src = `/imgs/meme${memeNumber}.png`;
  // images.width = 100;
  // images.height = 100;
  images.style.border = '1px solid black';
  samples.appendChild(images);
}

samples.addEventListener('click', (event) => {
  for (let memeNumber = 1; memeNumber <= 4; memeNumber += 1) {
    if (event.target.id === `meme-${memeNumber}`) {
      const memeImage = document.getElementById('meme-image');
      memeImage.src = `/imgs/meme${memeNumber}.png`;
    }
  }
});
