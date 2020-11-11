const inputMeme = document.querySelector('#text-input');
const memeText = document.querySelector('#meme-text');
const memeContainer = document.querySelector('#meme-image-container');
const memeImage = document.querySelector('#meme-image');
const memeInsert = document.querySelector('#meme-insert');

//  Adicionar texto do input ao meme
inputMeme.addEventListener('input', function () {
  memeText.innerText = inputMeme.value;
});

//  Adicionar Imagem do input ao meme
memeInsert.addEventListener('input', function () {
  const url = URL.createObjectURL(memeInsert.files[0])
    memeImage.src = url
})

// adicionar classe à div atraves de click;
const buttonFire = document.querySelector('#fire');
const buttonWater = document.querySelector('#water');
const buttonEarth = document.querySelector('#earth');

buttonFire.addEventListener('click', function () {
  memeContainer.className = "border-fire"
});

buttonWater.addEventListener('click', function () {
  memeContainer.className = "border-water"
});

buttonEarth.addEventListener('click', function () {
  memeContainer.className = "border-earth"
});