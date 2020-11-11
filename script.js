document.querySelector('#text-input').addEventListener('keyup', function (event){
    if (document.querySelector('#meme-text') !== null) {
        document.querySelector('#meme-image-container').removeChild(document.querySelector('#meme-text'));
    }    
    let divText = document.createElement('div');
    divText.innerHTML = document.querySelector('#text-input').value;
    divText.id = 'meme-text';
    if (event.key === 'Enter') {
        document.querySelector('#meme-image-container').appendChild(divText);
    }    
});