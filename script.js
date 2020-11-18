window.onload = starterFunctions;

function starterFunctions() {
  addListenerToTextToMeme();
  addListenerToBorderButtons();
  addListenerToMemeTemplate();
}

function addListenerToTextToMeme() {
  let textInput = document.querySelector('#text-input');
  let memeText = document.querySelector('#meme-text')
  textInput.addEventListener('keyup', function (event) {
    memeText.innerHTML = event.target.value;
  })
}

function handleFiles(event) {
  let img = document.querySelector('#meme-image');
  img.setAttribute('src', '');
  img.src = URL.createObjectURL(event.target.files[0]);
  img.onload = function () {
    URL.revokeObjectURL(img.src) // free memory
  }
  /* now you can work with the file list */
}

function addListenerToBorderButtons() {
  let buttonsId = ['#fire', '#water', '#earth'];

  for(let index = 0; index < buttonsId.length; index += 1){
    let currentButton = document.querySelector(buttonsId[index]);
    currentButton.addEventListener('click', function(event){
      let imgContainer = document.querySelector('#meme-image-container');
      if(index == 0){
        imgContainer.style.border = "3px dashed red";
      }else if(index == 1){
        imgContainer.style.border = "5px double blue";
      }else if(index == 2){
        imgContainer.style.border = "6px groove green";
      }
    })
  }
}

function addListenerToMemeTemplate(){
  let memeTemplateContainer = document.querySelectorAll('.meme-template')

  for(let index = 0; index < memeTemplateContainer.length; index += 1){
    memeTemplateContainer[index].addEventListener('click', function(event){
      let img = document.querySelector('#meme-image');
      let memeTemplate = event.target.src;
      img.src = memeTemplate;
    })
  }

}