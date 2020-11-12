document.querySelector('#text-input').addEventListener('keyup', (event) => {
  const memeText = document.querySelector('#meme-text');
  memeText.innerText = event.target.value;
});
