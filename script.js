let textInput = document.getElementById('text-input');
let memeImageContainer = document.getElementById('meme-image-container');
let memeText = document.getElementById('meme-text');
let memeImage = document.getElementById('meme-image');
let memeInsert = document.getElementById('meme-insert');

function atualizaTexto(text) {
    textInput.textContent = text.target.value;
    memeText.textContent = textInput.textContent; 
}

textInput.addEventListener('input', atualizaTexto);

function carregaImagem(insert) {
	memeImage.src = URL.createObjectURL(insert.target.files[0]);
}
