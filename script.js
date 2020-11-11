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
}