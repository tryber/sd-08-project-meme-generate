function addText() {
  let userText = document.getElementById('text-input');
  userText.addEventListener('keypress', function (event) {
    let imgText = document.getElementById('meme-text');
    imgText.innerText = event.target.value;
  })  
}
addText();

function uploadImage(){
  let input = document.getElementById('submit-file');
  input.addEventListener('change', function(event){
    let reader = new FileReader();
    reader.onload = function () {
      let img = new Image();
      let value = '500px';
      img.src = reader.result;      
      //img.className = 'meme-pic';
      let imgContainer = document.getElementById('meme-image-container');
      imgContainer.appendChild(img);
    }
    reader.readAsDataURL(input.files[0]);
  })
}
uploadImage()
// função criada de acordo com esse video: https://www.youtube.com/watch?v=-AR-6X_98rM
