window.onload = function() {
    const textInput = document.querySelector('#text-input');
    const memeText = document.querySelector('#meme-text');
    textInput.addEventListener('input', function() {
        memeText.innerHTML = textInput.value;
    })

    const memeInsert = document.querySelector('#meme-insert');
    const memeImage = document.querySelector('#meme-image');
    memeInsert.addEventListener('click', function() {
        console.log(memeInsert.value);
        memeImage.src = memeInsert.value;
    })

    const imageContainer = document.querySelector('#meme-image-container');
    addEventListener('click', function(event) {
        let botao = event.target;
        console.log(botao)
        if (botao.classList.contains('change-border')) {
            if (botao.id == 'fire') {
                imageContainer.style.border = '3px dashed rgba(228, 49, 49, 0.822)';
            } else if (botao.id == 'water') {
                imageContainer.style.border = '5px double rgba(49, 127, 228, 0.822)';
            } else if (botao.id == 'earth') {
                imageContainer.style.border = '6px groove rgba(136, 228, 49, 0.822)';
            }
        }
    })
}