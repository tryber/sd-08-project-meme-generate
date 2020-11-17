function preview(event) {
  imagem.src=URL.createObjectURL(event.target.files[0]);
}

function text(){
  textInput = document.querySelector('#text-input')
  textMeme = document.querySelector('#meme-text')
  textInput.addEventListener('keyup', ()=>{
    textMeme.innerText = textInput.value;
  })
}
text()
window.onload = function() {
  const xablau = document.querySelector('#uploadImage')
  xablau.addEventListener('change' , preview);
}

