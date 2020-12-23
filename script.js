const memeImage = document.querySelector('#meme-insert');
const textInput = document.querySelector('#text-input');
const borders = document.querySelectorAll('.border');
const memes = document.querySelectorAll('#memes');
memeImage.addEventListener('change', () => {
  const selectImage = memeImage.files[0];
  document.querySelector('#meme-image').src = URL.createObjectURL(selectImage);
});

textInput.addEventListener('keyup', () => {
  const memeText = document.querySelector('#meme-text');
  memeText.innerHTML = textInput.value;
});

borders.forEach((element) => {
  element.addEventListener('click', () => {
    const myImage = document.querySelector('#meme-image-container');
    if (element.id === 'fire') {
      myImage.style.border = '3px dashed red';
    } else if (element.id === 'water') {
      myImage.style.border = '5px double blue';
    } else {
      myImage.style.border = '6px groove green';
    }
  });
});

memes.forEach((meme) => {
  meme.addEventListener('click', (event) => {
    console.log(event.target.src);
    document.querySelector('#meme-image').src = event.target.src;
  });
});
