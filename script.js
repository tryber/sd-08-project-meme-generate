const showText = () => {
  const text = document.getElementById('text-input');
  text.addEventListener('keyup', function () {
    const textMeme = document.getElementById('meme-text');
    textMeme.innerHTML = text.value;
  });
};
showText();
