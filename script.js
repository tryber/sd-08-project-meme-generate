const input = document.getElementById('text-input');
const containerImagem = document.getElementById('meme-image');
const escolherImagem = document.getElementById('meme-insert');
const textoMeme = document.getElementById('meme-text');

function alteraTextoMeme() {
  textoMeme.innerText = input.value;
}

function mostraImagemEscolhida() {
  const curlFiles = escolherImagem.files;

  for (const file of curlFiles) {
    const imagemEscolhida = URL.createObjectURL(file);
    containerImagem.style.backgroundImage = `url('${imagemEscolhida}')`;
  }
}

input.addEventListener('keyup', alteraTextoMeme);
escolherImagem.addEventListener('change', mostraImagemEscolhida);
