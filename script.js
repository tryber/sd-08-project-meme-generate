const memeImage = document.getElementById("meme-image");
const insertLocal = document.querySelector('#text-input');

function preview() {
  memeImage.src=URL.createObjectURL(event.target.files[0]);
}
function insereTexto() {
  const textoLocal = document.getElementById('meme-text');  
  textoLocal.innerText = insertLocal.value;
 }

 insertLocal.addEventListener('keyup', insereTexto);
