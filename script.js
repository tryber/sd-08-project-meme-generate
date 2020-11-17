// Requisito 01 - O site deve possuir uma caixa de texto com a qual quem usa pode interagir para inserir texto em cima da imagem escolhida.
function addText () {
  let textInput = document.querySelector('#text-input');
  textInput.addEventListener('keyup', function() {
    let textMeme = document.querySelector('#meme-text');
    textMeme.innerHTML = textInput.value;
  });
}
addText();