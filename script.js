let text_input = document.querySelector('#text-input');
let meme_text_input = document.querySelector('#meme-text');
text_input.addEventListener('keydown', toKeyPressed);

function toKeyPressed() {
    meme_text_input.innerText = text_input.value;
}