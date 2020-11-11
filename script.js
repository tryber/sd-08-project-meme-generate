const textInput = document.getElementById('text-input');
const memeText = document.getElementById('meme-text');

function textToMeme() {
  memeText.innerText = textInput.value;
}
textInput.addEventListener('keyup', textToMeme);

const insertImg = document.getElementById('meme-insert');
const memeImg = document.getElementById('meme-image');

function imgToMeme() {
  memeImg.src = URL.createObjectURL(insertImg.files[0]);
}

insertImg.addEventListener('change', imgToMeme);

const btnsBorders = ['fire', 'water', 'earth'];
const borders = ['3px dashed red', '5px double blue', '6px groove green'];
const container = document.getElementById('meme-image-container');

for (let pos = 0; pos < btnsBorders.length; pos += 1) {
  let btn = document.getElementById(btnsBorders[pos]);
  btn.addEventListener('click', function () {
    container.style.border = borders[pos];
  });
}
