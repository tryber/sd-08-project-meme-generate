// Lista de objetos
const txtTexto = document.getElementById('text-input');
const divTexto = document.getElementById('meme-text');
const btnChooseFile = document.getElementById('meme-insert');
const btnFire = document.getElementById('fire');
const btnWater = document.getElementById('water');
const btnEarth = document.getElementById('earth');
const inputFile = document.getElementById('file');
const imgPhoto = document.getElementById('meme-image-id');
const lblFileName = document.getElementById('file-name');
const memeImgContainer = document.getElementById('meme-image-container');

window.onload = function () {
  // Lista de  funções dos eventos dos objetos

  function inputText() {
    divTexto.innerText = txtTexto.value;
  }

  // https://stackoverflow.com/questions/31693296/is-it-possible-to-make-a-button-as-file-upload-button
  function openDialog() {
    document.getElementById('file').click();
  }

  function submitImage(event) {
    lblFileName.innerHTML = event.target.files[0].name;
    imgPhoto.src = URL.createObjectURL(event.target.files[0]); // https://stackoverflow.com/questions/15201071/how-to-get-full-path-of-selected-file-on-change-of-input-type-file-using-jav/15201258#15201258
  }

  function fireBorder() {
    memeImgContainer.style.border = '3px dashed red';
  }

  function waterBorder() {
    memeImgContainer.style.border = '5px double blue';
  }

  function earthBorder() {
    memeImgContainer.style.border = '6px groove green';
  }

  // Lista de eventos dos objetos
  txtTexto.addEventListener('keyup', inputText);
  btnChooseFile.addEventListener('click', openDialog);
  btnFire.addEventListener('click', fireBorder);
  btnWater.addEventListener('click', waterBorder);
  btnEarth.addEventListener('click', earthBorder);
  inputFile.addEventListener('change', submitImage);
};
