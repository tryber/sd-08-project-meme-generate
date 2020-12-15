const showText = () => {
  const text = document.getElementById('text-input');
  text.addEventListener('keyup', function () {
    const textMeme = document.getElementById('meme-text');
    textMeme.innerHTML = text.value;
  });
};
showText();

const showImage = () => {
  const image = document.getElementById('meme-insert');
  image.addEventListener('change', function (event) {
    const imageMeme = document.getElementById('meme-image');
    imageMeme.src = URL.createObjectURL(event.target.files[0]);
  });
};
showImage();
