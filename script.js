// Adiciona o texto no meme
const textInput = document.getElementById('text-input');
textInput.addEventListener('keyup', () => {
  const upperText = document.getElementById('meme-text');
  upperText.innerHTML = textInput.value;
});

// Adiciona a imagem ao container
const imageInput = document.getElementById('meme-insert');
imageInput.addEventListener('change', (event) => {
  const memeImage = document.getElementById('meme-image');
  memeImage.src = URL.createObjectURL(event.target.files[0]);
  memeImage.onload = function () {
    URL.revokeObjectURL(imageInput.src);
  };
});

// Botões de estilo
const buttonsContainer = document.querySelector('.buttons');
const memeContainer = document.getElementById('meme-image-container');
buttonsContainer.addEventListener('click', (event) => {
  if (event.target.id === 'fire') {
    memeContainer.style.border = '3px dashed red';
  }
  if (event.target.id === 'water') {
    memeContainer.style.border = '5px double blue';
  }
  if (event.target.id === 'earth') {
    memeContainer.style.border = '6px groove green';
  }
});

// Exemplos de meme
const samples = document.querySelector('.meme-samples');
for (let memeNumber = 1; memeNumber <= 4; memeNumber += 1) {
  const images = document.createElement('img');
  images.id = `meme-${memeNumber}`;
  images.src = `/imgs/meme${memeNumber}.png`;
  images.width = 100;
  images.height = 100;
  images.style.border = '1px solid black';
  samples.appendChild(images);
}
// Adiciona o exemplo no container
samples.addEventListener('click', (event) => {
  for (let memeNumber = 1; memeNumber <= 4; memeNumber += 1) {
    if (event.target.id === `meme-${memeNumber}`) {
      const memeImage = document.getElementById('meme-image');
      memeImage.src = `/imgs/meme${memeNumber}.png`;
    }
  }
});
