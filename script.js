const input = document.getElementById('text-input');
const containerImagem = document.getElementById('meme-image');
const escolherImagem = document.getElementById('meme-insert');
const textoMeme = document.getElementById('meme-text');

function alteraTextoMeme() {
  textoMeme.innerText = input.value;
}

function mostraImagemEscolhida(event) {
  const curlFiles = escolherImagem.files

  for (const file of curlFiles) {
    let teste = URL.createObjectURL(file);
    containerImagem.style.backgroundImage = `url('${teste}')`;
  }
}




input.addEventListener('keyup', alteraTextoMeme)
escolherImagem.addEventListener('change', mostraImagemEscolhida)