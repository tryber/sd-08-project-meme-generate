window.onload = function(){
   const a = document.getElementById('insert');
   a.addEventListener('change', loadFile)

}



function loadfle(event) {
    const localImage = document.querySelector('#meme-image');
    localImage.src = URL.createObjectURL(evento.target.files[0]);
  }