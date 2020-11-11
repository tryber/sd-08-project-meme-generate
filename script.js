window.onload = function () {
    // Lista de objetos
    const txtTexto = document.getElementById('text-input');
    const divTexto = document.getElementById('meme-text');
    // Lista de eventos dos objetos
    txtTexto.addEventListener('keyup', inputText);
    // Lista de  funções dos eventos dos objetos
    function inputText(event) {
        divTexto.innerText = txtTexto.value;
    }
}