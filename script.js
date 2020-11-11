function addText(){
  let userText = document.getElementById('text-input');
  userText.addEventListener('keypress', function (event){
    let imgText = document.getElementById('meme-text');
    imgText.innerText = event.target.value;
  })  
}
addText();


/*function uploadImage() {  
  let input = document.getElementById('submit-file');
  input.addEventListener('change', function (event){
    let board = document.getElementById('meme-image-container');    
    appendFiles(event.target.files);
    let img = document.createElement('img');
    img.src = input.files[0];
    board.appendChild(img);
  })
}
uploadImage();
//função criada com elementos retirados desse artigo: https://braziljs.org/artigos/1001-formas-de-fazer-input-de-arquivos-com-javascript/
*/