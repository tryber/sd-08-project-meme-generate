const memeImage = document.getElementById('meme-image');

const loadFile = (evtImage) => {
  memeImage.src = URL.createObjectURL(evtImage.target.files[0]);
  memeImage.onload = () => {
    URL.revokeObjectURL(memeImage.src);
  };
};

document.getElementById('meme-insert').addEventListener('change', loadFile);

const memeText = document.getElementById('text-input');

const insertText = () => {
  document.getElementById('meme-text').innerText = memeText.value;
};

document.getElementById('text-input').addEventListener('keyup', insertText);

const changeBorderStyle = (color) => {
  const imageElement = document.getElementsByClassName('meme-image-container')[0];
  switch (color) {
    case 'red':
      imageElement.style.border = 'red dashed 3px';
      break;
    case 'blue':
      imageElement.style.border = 'blue double 5px';
      break;
    case 'green':
      imageElement.style.border = 'green groove 6px';
      break;
    default:
      break;
  }
};

const fireBtn = document.getElementById('fire');
const waterBtn = document.getElementById('water');
const earthBtn = document.getElementById('earth');

fireBtn.addEventListener('click', () => changeBorderStyle('red'));
waterBtn.addEventListener('click', () => changeBorderStyle('blue'));
earthBtn.addEventListener('click', () => changeBorderStyle('green'));

const sendMeme = (evtMeme) => {
  const defaultMeme = evtMeme.target.src;
  document.getElementsByClassName('meme-image')[0].outerHTML = `<img id="meme-image" src="${defaultMeme}"class="meme-image">`;
};

const memeOneBtn = document.getElementById('meme-1');
const memeTwoBtn = document.getElementById('meme-2');
const memeThreeBtn = document.getElementById('meme-3');
const memeFourBtn = document.getElementById('meme-4');

memeOneBtn.addEventListener('click', sendMeme);
memeTwoBtn.addEventListener('click', sendMeme);
memeThreeBtn.addEventListener('click', sendMeme);
memeFourBtn.addEventListener('click', sendMeme);
