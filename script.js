function insertText() {
    let getInputText = document.getElementById('text-input');
    let getMemeText = document.getElementById('meme-text');
    getInputText.addEventListener('keyup', () => {
        getMemeText.innerHTML = getInputText.value;
    })
}

function loadFile() {
    var reader = new FileReader();
    reader.onload = function () {
        var output = document.getElementById('output_image');
        output.src = reader.result;
    }
    reader.readAsDataURL(event.target.files[0]);
}


function main() {
    insertText();
    loadFile();
}

main()