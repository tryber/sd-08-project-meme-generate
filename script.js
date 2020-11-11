window.onload = function() {
    const textInput = document.querySelector('#text-input');
    const memeText = document.querySelector('#meme-text');
    textInput.addEventListener('input', function() {
        memeText.innerHTML = textInput.value;
    })

    const memeInsert = document.querySelector('#meme-insert');
    const memeImage = document.querySelector('#meme-image');
    memeInsert.addEventListener('input', function() {
        if (memeInsert.files[0] != undefined) {
            console.log(memeInsert.files[0])
            memeImage.src = URL.createObjectURL(memeInsert.files[0]);
        }
    })

    const imageContainer = document.querySelector('#meme-image-container');
    addEventListener('click', function(event) {
        let botao = event.target;
        if (botao.classList.contains('change-border')) {
            if (botao.id == 'fire') {
                imageContainer.style.border = '3px dashed red';
            } else if (botao.id == 'water') {
                imageContainer.style.border = '5px double blue';
            } else if (botao.id == 'earth') {
                imageContainer.style.border = '6px groove green';
            }
        }
    })

    addEventListener('click', function(event) {
        let imagem = event.target;
        if (imagem.className == 'meme-pronto') {
            memeImage.src = imagem.src;
        }
    })
}