function mostrarTexto() {
    let inputText = document.querySelector('#text-input');
    let TextoMeme = document.querySelector('#meme-text');
    TextoMeme.innerText = inputText.value;
}

window.onload = function () {
    let inputText = document.querySelector('#text-input');
    inputText.addEventListener('change', mostrarTexto);
}