const textInput = document.getElementById('text-input');
const textMeme = document.getElementById('meme-text');
const imgContainer = document.querySelector('.image-container');
const imgUpload = document.getElementById('meme-insert');
const imgMeme = document.getElementById('meme-image');
const buttonContainer = document.getElementById('button-container');
const fireButton = document.getElementById('fire');
const waterButton = document.getElementById('water');
const earthButton = document.getElementById('earth');
const normalButton = document.getElementById('normal')
const memes = document.getElementById('memes-container');

function textDinamicInput() {
  textInput.addEventListener('keydown', function () {
    textMeme.innerHTML = textInput.value;
  });
}
textDinamicInput();

function imgShow() {
imgUpload.addEventListener('change', function (event) {
  imgMeme.src = URL.createObjectURL(event.target.files[0]);
});
}
imgShow();



function borderFire () {
fireButton.addEventListener('click', function () {
    imgContainer.style.border = '3px dashed red';
})
}
borderFire()

function borderIce () {
waterButton.addEventListener('click', function () {
    imgContainer.style.border = '5px double blue';
})
}

borderIce()

function borderEarth () {
earthButton.addEventListener('click', function () {
    imgContainer.style.border = '6px groove rgb(0, 128, 0)';
})
}
borderEarth()

function borderNormal () {
normalButton.addEventListener('click', function () {
    imgContainer.style.border = '1px solid black';
})
}
borderNormal()