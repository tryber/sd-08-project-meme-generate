let text_input = document.querySelector('#text-input');
let meme_text_input = document.querySelector('#meme-text');
let meme_image_img = document.querySelector('#meme-image');
let meme_insert_input = document.querySelector("#meme-insert");
let meme_image_container = document.querySelector("#meme-image-container");
let fire_btn = document.querySelector('#fire');
let water_btn = document.querySelector('#water');
let earth_btn = document.querySelector('#earth');

fire_btn.addEventListener('click', changeBorder);
water_btn.addEventListener('click', changeBorder);
earth_btn.addEventListener('click', changeBorder);

text_input.addEventListener('keyup', toKeyPressed);
meme_insert_input.addEventListener("change", function (event) {
    meme_image_img.src = URL.createObjectURL(event.target.files[0]);
});

function toKeyPressed() {
    meme_text_input.innerHTML = text_input.value;
}

function changeBorder(event) {
    if (event.target.innerText == "Fire") {
        meme_image_container.style.border = '3px dashed red';
    }

    if (event.target.innerText == "Water") {
        meme_image_container.style.border = '5px double blue';
    }

    if (event.target.innerText == "Earth") {
        meme_image_container.style.border = '6px groove green';
    }
}