function insertText() {
    let getInputText = document.getElementById('text-input');
    let getMemeText = document.getElementById('meme-text');
    getInputText.addEventListener('keyup', () => {
        getMemeText.innerHTML = getInputText.value;
    })
}

function loadFile() {
    let inputElement = document.getElementById("meme-insert");
    let getElementImg = document.getElementById('meme-img'); 
    inputElement.addEventListener("change", function() {
        const fileList = this.files[0]; /* now you can work with the file list */
        const objectURL = window.URL.createObjectURL(fileList);
        getElementImg.src = objectURL;
        getElementImg.onload = () => URL.revokeObjectURL(this.src);
        console.log(objectURL);
    })
}


function main() {
    insertText();
    loadFile();
}

main()