let text_input = document.querySelector('#text-input');
let meme_text_input = document.querySelector('#meme-text');
let meme_image_img = document.querySelector('#meme-image');
let meme_insert_input = document.querySelector("#meme-insert");

text_input.addEventListener('keydown', toKeyPressed);
meme_insert_input.addEventListener("change", function () {
    changeImage(this);
});

function toKeyPressed() {
    meme_text_input.innerText = text_input.value;
}

function changeImage(input) {
    var reader;

    if (input.files && input.files[0]) {
        reader = new FileReader();

        reader.onload = function (e) {
            meme_image_img.setAttribute('src', e.target.result);
        }

        reader.readAsDataURL(input.files[0]);
    }
}