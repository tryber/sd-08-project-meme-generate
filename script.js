const localeTextInput = document.getElementById('text-input');
const localeMemeInsert = document.getElementById('meme-insert');
const localeMemeText = document.getElementById('meme-text');
const localeMemeImage = document.getElementById('meme-image');
const localeButtonFileImage = document.getElementById('file-image');

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

localeTextInput.addEventListener('keyup', insertTextMeme);
localeButtonFileImage.addEventListener('click', uploadImageMeme);
localeMemeInsert.addEventListener('change', previewFile);
