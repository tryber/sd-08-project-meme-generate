function insertText() {
    let getInputText = document.getElementById('text-input');
    let getMemeText = document.getElementById('meme-text');
    getInputText.addEventListener('keyup', () => {
        getMemeText.innerHTML = getInputText.value;
    })
}

function loadFile() {
    const inputElement = document.getElementById("meme-insert");
    inputElement.addEventListener("change", function() {
        const fileList = this.files; /* now you can work with the file list */
        console.log(fileList);
    })
}


function main() {
    insertText();
    loadFile();
}

main()