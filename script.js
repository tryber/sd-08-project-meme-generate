const body = document.querySelector('body');

window.onload = starterFunctions;

function starterFunctions(){
  addListenerToTextToMeme();
}

function addListenerToTextToMeme(){
  let textInput = document.querySelector('#text-input');
  let memeText = document.querySelector('#meme-text')
  textInput.addEventListener('keyup', function(event){
    memeText.innerHTML = event.target.value;
  })
}

function handleFiles(event) {
    let img = document.querySelector('#meme-insert');
    img.setAttribute('src','');
    img.src = URL.createObjectURL(event.target.files[0]);
    img.onload = function() {
        URL.revokeObjectURL(img.src) // free memory
      }
    /* now you can work with the file list */
  }