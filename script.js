// Adiciona o texto no meme
const textInput = document.getElementById('text-input');
textInput.addEventListener('keyup', (event) => {
  const upperText = document.getElementById('meme-text');
  upperText.innerHTML = textInput.value;
  console.log(event.key)
}) 

// Adiciona a imagem ao container
const imageInput = document.getElementById('meme-insert');
imageInput.addEventListener('change', (event) => {
  const memeImage = document.getElementById('meme-image');
  memeImage.src = URL.createObjectURL(event.target.files[0]);
  memeImage.onload = function () {
    URL.revokeObjectURL(imageInput.src);
  };
});
