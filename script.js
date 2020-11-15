const localeButtonStyleEarth = document.getElementById('earth');
const localeButtonStyleFire = document.getElementById('fire');
const localeButtonFileImage = document.getElementById('file-image');
const localeButtonStyleWater = document.getElementById('water');
const localeMemeImage = document.getElementById('meme-image');
const localeMemeInsert = document.getElementById('meme-insert');
const localeMemeText = document.getElementById('meme-text');
const localeTextInput = document.getElementById('text-input');
const localeMemeImageContainer = document.getElementById('meme-image-container');
const localeMemeImageOption = document.querySelectorAll('#meme-image-option img');

function uploadImageMeme() {
  localeMemeInsert.click();
}
function previewFile(change) {
  const file = change.target.files.item(0);
  const reader = new FileReader();
  reader.onloadend = () => {
    localeMemeImage.src = reader.result;
  };
  reader.readAsDataURL(file);
  localeMemeImage.style.display = 'block';
}
function insertTextMeme(get) {
  const newTextInsert = get.target.value;
  localeMemeText.innerText = newTextInsert;
}
function styleBorderMeme(pixel, type, color) {
  localeMemeImageContainer.style.border = `${pixel}px ${type} ${color}`;
}
function toggleImageMeme(src) {
  localeMemeImage.style.display = 'block';
  const fileImage = src.target;
  switch (fileImage.id) {
    case 'meme-1':
      localeMemeImage.src = fileImage.src;
      break;
    case 'meme-2':
      localeMemeImage.src = fileImage.src;
      break;
    case 'meme-3':
      localeMemeImage.src = fileImage.src;
      break;
    case 'meme-4':
      localeMemeImage.src = fileImage.src;
      break;
    default:
      localeMemeImage.src = fileImage.src;
      break;
  }
}

localeTextInput.addEventListener('keyup', insertTextMeme);
localeMemeInsert.addEventListener('change', previewFile);
localeMemeInsert.addEventListener('change', previewFile);
localeButtonStyleEarth.addEventListener('click', () => {
  styleBorderMeme(6, 'groove', 'green');
});
localeButtonStyleFire.addEventListener('click', () => {
  styleBorderMeme(3, 'dashed', 'red');
});
localeButtonFileImage.addEventListener('click', uploadImageMeme);
localeButtonStyleWater.addEventListener('click', () => {
  styleBorderMeme(5, 'double', 'blue');
});
localeMemeImageOption.forEach((element) => {
  element.addEventListener('click', toggleImageMeme);
});
