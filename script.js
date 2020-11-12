let inputByUserForMeme = document.getElementById('text-input');
let buttonforImageSubmit = document.getElementById('image-submit');

//
//Adicionando evento para inserir texto na caixa de memes
inputByUserForMeme.addEventListener('keyup',function () {
    let textInsideMeme = document.getElementById('meme-text');
    textInsideMeme.innerText = inputByUserForMeme.value;
})
//
//Adicionando evento para o botão que submeterá a imagem
buttonforImageSubmit.addEventListener('click', function () {
  let memeImageInsideContainer = document.getElementById('meme-image');
  let imageTheUserChose = document.getElementById('meme-insert').files[0];
  let imageSelectedURL = URL.createObjectURL(imageTheUserChose);
  memeImageInsideContainer.src =imageSelectedURL;
  memeImageInsideContainer.onload = function () {
    URL.revokeObjectURL(imageInput.src);
  }
})