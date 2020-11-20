// Requisito 01 - O site deve possuir uma caixa de texto com a qual quem usa
// pode interagir para inserir texto em cima da imagem escolhida.
function addText() {
  const textInput = document.querySelector('#text-input');
  textInput.addEventListener('keyup', function() {
    const textMeme = document.querySelector('#meme-text');
    textMeme.innerHTML = textInput.value;
  });
}
addText();

// Requisito 02 - O site deve permitir que quem usa faça upload de uma imagem de seu computador.
function addImage() {
  const memeInsert = document.querySelector('#meme-insert');
  memeInsert.addEventListener('change', function (event) {
    const img = document.querySelector('#meme-image');
    img.src = URL.createObjectURL(event.target.files[0]);
  });
}
addImage();

function addBorderFire() {
  const btnBorder = document.querySelector('#fire');
  btnBorder.addEventListener('click', function () {
    const imageContainer = document.querySelector('#meme-image-container');
    imageContainer.style.border = '3px dashed red';
  });
}
addBorderFire();

function addBorderWater() {
  const btnBorder = document.querySelector('#water');
  btnBorder.addEventListener('click', function () {
    const imageContainer = document.querySelector('#meme-image-container');
    imageContainer.style.border = '5px double blue';
  });
}
addBorderWater();

function addBorderEarth() {
  const btnBorder = document.querySelector('#earth');
  btnBorder.addEventListener('click', function () {
    const imageContainer = document.querySelector('#meme-image-container');
    imageContainer.style.border = '6px groove green';
  });
}
addBorderEarth();
