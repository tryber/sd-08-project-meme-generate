window.onload = function() {
    const textInput = document.querySelector('#text-input');
    const memeText = document.querySelector('#meme-text');
    textInput.addEventListener('input', function() {
        memeText.innerHTML = textInput.value;
    })
}