document.querySelector('#text-input').addEventListener('keyup', function (event){      
    if (event.key === 'Enter') {
        if (document.querySelector('#meme-text').innerHTML !== '') {
            document.querySelector('#meme-text').innerHTML = '';
            document.querySelector('#meme-text').innerHTML = document.querySelector('#text-input').value;
        }
        document.querySelector('#meme-text').innerHTML = document.querySelector('#text-input').value;        
    }    
});

//BOTAO ESTILIZAR

document.querySelector('#fire').addEventListener('click', function(){
    document.querySelector('#meme-image-container').style.border = '3px dashed red'
    document.querySelector('#meme-image-container').style.background = 'red'
});

document.querySelector('#water').addEventListener('click', function(){
    document.querySelector('#meme-image-container').style.border = '5px double blue'
    document.querySelector('#meme-image-container').style.background = 'blue'    
});

document.querySelector('#earth').addEventListener('click', function(){
    document.querySelector('#meme-image-container').style.border = '6px groove green'
    document.querySelector('#meme-image-container').style.background = 'green'
});