// Adiciona o texto no meme
const textInput = document.getElementById('text-input');
textInput.addEventListener('keyup', (event) => {
  const upperText = document.getElementById('meme-text');
  upperText.innerHTML = textInput.value;
  console.log(event.key)
}) 
