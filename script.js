window.onload = function () {
    // Lista de objetos
    const txtTexto = document.getElementById('text-input');
    const divTexto = document.getElementById('meme-text');
    const btnChooseFile = document.getElementById('meme-insert');
    const inputFile = document.getElementById('file');
    const imgPhoto = document.getElementById('meme-image');
    const lblFileName = document.getElementById('file-name');
    // Lista de eventos dos objetos
    txtTexto.addEventListener('keyup', inputText);
    btnChooseFile.addEventListener('click', openDialog);
    inputFile.addEventListener('change', submitImage);
    // Lista de  funções dos eventos dos objetos    
    
    function inputText(event) {
        divTexto.innerText = txtTexto.value;
    }
    
    // https://stackoverflow.com/questions/31693296/is-it-possible-to-make-a-button-as-file-upload-button
    function openDialog(event) {
        document.getElementById('file').click();
    }
    function submitImage(event) {
        lblFileName.innerHTML = event.target.files[0].name;
        imgPhoto.src = URL.createObjectURL(event.target.files[0]); // https://stackoverflow.com/questions/15201071/how-to-get-full-path-of-selected-file-on-change-of-input-type-file-using-jav/15201258#15201258
    }
}