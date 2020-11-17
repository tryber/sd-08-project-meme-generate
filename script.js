function preview(event) {
  const imagem = document.querySelector('#meme-image')
  imagem.src=URL.createObjectURL(event.target.files[0]);
}

function text(){
  textInput = document.querySelector('#text-input')
  textInput.addEventListener('keyup', ()=>{
  textMeme.innerHTML = textInput.value;
  })
}
text()
window.onload = function() {
  const xablau = document.querySelector('#meme-insert')
  textMeme = document.querySelector('#meme-text')

  textMeme.addEventListener('keyup', text)
  xablau.addEventListener('change' , preview);
}

