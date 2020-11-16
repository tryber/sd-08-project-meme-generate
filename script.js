let textInput = document.getElementById('text-input');
let memeImageContainer = document.getElementById('meme-image-container');
let memeText = document.getElementById('meme-text');
let memeImage = document.getElementById('meme-image');
let memeInsert = document.getElementById('meme-insert');
let buttonFire = document.getElementById('fire');
let buttonWater = document.getElementById('water');
let buttonEarth = document.getElementById('earth');

function atualizaTexto(text) {
    textInput.textContent = text.target.value;
    memeText.textContent = textInput.textContent; 
}

textInput.addEventListener('input', atualizaTexto);

function carregaImagem(insert) {
	memeImage.src = URL.createObjectURL(insert.target.files[0]);
}

buttonFire.addEventListener('click', function() {
	memeImageContainer.style.border = "dashed 3px red";
})

buttonWater.addEventListener('click', function() {
	memeImageContainer.style.border = "double 5px blue";
})

buttonEarth.addEventListener('click', function() {
	memeImageContainer.style.border = "groove 6px green";
})
