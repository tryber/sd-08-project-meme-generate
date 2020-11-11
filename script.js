document.querySelector('#text-input').addEventListener('keyup', function (event){      
    if (event.key === 'Enter') {
        if (document.querySelector('#meme-text').innerHTML !== '') {
            document.querySelector('#meme-text').innerHTML = '';
            document.querySelector('#meme-text').innerHTML = document.querySelector('#text-input').value;
        }
        document.querySelector('#meme-text').innerHTML = document.querySelector('#text-input').value;        
    }    
});