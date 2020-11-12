const input = document.getElementById('text-input');
const containerImagem = document.getElementById('meme-image');
const containerPrincipal = document.getElementById('meme-image-container');
const escolherImagem = document.getElementById('meme-insert');
const textoMeme = document.getElementById('meme-text');
const btnFire = document.getElementById('fire');
const btnWater = document.getElementById('water');
const btnEarth = document.getElementById('earth');
const footer = document.getElementById('footer');
let imagemEscolhida = '';

function alteraTextoMeme() {
  textoMeme.innerText = input.value;
}

function mostraImagemEscolhida() {
  imagemEscolhida = URL.createObjectURL(escolherImagem.files[0]);
  containerImagem.src = imagemEscolhida;
}

function trocaBordaContainer(evento) {
  switch (evento.target.id) {
    case 'fire':
      containerPrincipal.style.border = 'dashed 3px red';
      break;

    case 'water':
      containerPrincipal.style.border = 'double 5px blue';
      break;

    case 'earth':
      containerPrincipal.style.border = 'groove 6px green';
      break;

    default:
      break;
  }
}

function selecionaMeme(event) {
  containerImagem.src = event.target.src;
  imagemEscolhida = '';
}

function criaMemePadrao() {
  for (let index = 1; index < 5; index += 1) {
    const criaDivMemes = document.createElement('img');
    criaDivMemes.id = `meme-${index}`;
    criaDivMemes.className = 'meme-padrao';
    criaDivMemes.src = `imgs/meme${index}.png`;
    criaDivMemes.addEventListener('click', selecionaMeme);
    footer.append(criaDivMemes);
  }
}

criaMemePadrao();

input.addEventListener('keyup', alteraTextoMeme);
escolherImagem.addEventListener('change', mostraImagemEscolhida);
btnFire.addEventListener('click', trocaBordaContainer);
btnWater.addEventListener('click', trocaBordaContainer);
btnEarth.addEventListener('click', trocaBordaContainer);
