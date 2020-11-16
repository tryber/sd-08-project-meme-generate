// DEFINES SELECTORS
const textInput = document.querySelector('#text-input');
const textMeme = document.querySelector('#meme-text');
const container = document.querySelector('.container');
const imageInput = document.querySelector('#meme-insert');
const image = document.querySelector('#meme-image');
const waterButton = document.querySelector('#water');
const fireButton = document.querySelector('#fire');
const earthButton = document.querySelector('#earth');


textInput.addEventListener('keyup', () => {
  textMeme.innerHTML = textInput.value;
});

imageInput.addEventListener('change', (event) => {
  image.src = URL.createObjectURL(event.target.files[0]);
});

const originalBorder = () => {
  const original = [
    '1px solid black',
  ];

  return original;
}

const blueBorder = () => {
  const blue = [
    '5px double blue',
  ];

  return blue;
};

const redBorder = () => {
  const red = [
    '3px dashed red',
  ];

  return red;
};

const greenBorder = () => {
  const green = [
    '6px groove green',
  ];

  return green;
};

const changeBorder = (type) => {
  container.style.border = type[0];
};

changeBorder(originalBorder());

waterButton.addEventListener('click', () => changeLayout(blueBorder()));
fireButton.addEventListener('click', () => changeLayout(redBorder()));
earthButton.addEventListener('click', () => changeLayout(greenBorder()));

// const loadImage = (event) => {
//   if (event.target.src) {
//     image.src = event.target.src;
//   }
// };
