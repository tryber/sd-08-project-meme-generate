let text_input = document.querySelector('#text-input');
let meme_text_input = document.querySelector('#meme-text');
let meme_image_img = document.querySelector('#meme-image');
let meme_insert_input = document.querySelector("#meme-insert");

text_input.addEventListener('keyup', toKeyPressed);
meme_insert_input.addEventListener("change", function (event) {
    meme_image_img.src = URL.createObjectURL(event.target.files[0]);
});

function toKeyPressed() {
    meme_text_input.innerHTML = text_input.value;
}