const body = document.querySelector('body');

createBasics(); 

function createBasics(){
    let h1 = document.createElement('h1');
    h1.innerHTML = 'MEME GENERATOR';
    body.appendChild(h1);

    let inputText = document.createElement('input');
    inputText.id = 'text-input';
    body.appendChild(inputText);

    let inputFile = document.createElement('input');
    inputFile.id = 'select-img';
    inputFile.setAttribute('type','file');
    inputFile.setAttribute('accept','image/*');
    inputFile.setAttribute('onchange','handleFiles(event)');
    inputFile.style.display = 'block'
    body.appendChild(inputFile);

    let memeContainer = document.createElement('div');
    memeContainer.id = 'meme-image-container';
    memeContainer.style.width = '500px';
    memeContainer.style.height = '500px';
    memeContainer.style.position = 'relative';
    body.appendChild(memeContainer);

    let txtBox = document.createElement('div');
    txtBox.id = 'meme-text';
    txtBox.innerHTML = 'Teste *-*'
    txtBox.style.position = 'absolute';
    txtBox.style.bottom  = 0;
    memeContainer.appendChild(txtBox);

    let imgBox = document.createElement('div');
    imgBox.id = 'meme-image';
    imgBox.style.width = '500px';
    imgBox.style.height = '500px';
    imgBox.style.border = '1px solid black';
    imgBox.style.backgroundColor = 'white';
    memeContainer.appendChild(imgBox);

    let img = document.createElement('img');
    img.id = 'meme-insert';
    img.style.height = '100%';
    img.style.width = '100%';
    img.style.objectFit = 'fill';
    imgBox.appendChild(img);
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