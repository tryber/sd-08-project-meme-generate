const body = document.querySelector('body');

function handleFiles(event) {
    let img = document.querySelector('#meme-insert');
    img.setAttribute('src','');
    img.src = URL.createObjectURL(event.target.files[0]);
    img.onload = function() {
        URL.revokeObjectURL(img.src) // free memory
      }
    /* now you can work with the file list */
  }