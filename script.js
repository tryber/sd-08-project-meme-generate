const showText = () => {
  const text = document.getElementById('text-input');
  text.addEventListener('keyup', function () {
    const textMeme = document.getElementById('meme-text');
    textMeme.innerHTML = text.value;
  });
};
showText();

const showImage = () => {
  const image = document.getElementById('meme-insert');
  image.addEventListener('change', function (event) {
    const imageMeme = document.getElementById('meme-image');
    imageMeme.src = URL.createObjectURL(event.target.files[0]);
  });
};
showImage();

const addBorderFire = () => {
  const btn = document.getElementById('fire');
  btn.addEventListener('click', function () {
    const memeContainer = document.getElementById('meme-image-container');
    memeContainer.style.border = '3px dashed red';
  });
};
addBorderFire();

const addBorderWater = () => {
  const btn = document.getElementById('water');
  btn.addEventListener('click', function () {
    const memeContainer = document.getElementById('meme-image-container');
    memeContainer.style.border = '5px double blue';
  });
};
addBorderWater();

const addBorderEarth = () => {
  const btn = document.getElementById('earth');
  btn.addEventListener('click', function () {
    const memeContainer = document.getElementById('meme-image-container');
    memeContainer.style.border = '6px groove green';
  });
};
addBorderEarth();
