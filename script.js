let textInput = document.getElementById('text-input');
let memeImageContainer = document.getElementById('meme-image-container');
let memeText = document.getElementById('meme-text');

function atualizaTexto(text) {
    textInput.textContent = text.target.value;
    memeText.textContent = textInput.textContent; 
}

textInput.addEventListener('input', atualizaTexto);
