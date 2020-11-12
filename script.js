let textInsideMeme =document.getElementById('meme-text');
let inputByUserForMeme =document.getElementById('text-input')
//
//Adicionando evento para inserir texto na caixa de memes
inputByUserForMeme.addEventListener('keyup',function () {
    textInsideMeme.innerText = inputByUserForMeme.value;
})