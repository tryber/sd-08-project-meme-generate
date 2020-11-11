window.onload = function () {
  document
    .querySelector("#text-input")
    .addEventListener("change", atualizarTexto);
  document
    .querySelector("#text-input")
    .addEventListener("keydown", atualizarTexto);
};

function atualizarTexto() {
  let memeTexto = document.querySelector("#meme-text");
  let textArea = document.querySelector("#text-input");
  memeTexto.innerHTML = textArea.value;
}

function readURL(input) {
  var imgDiv = document.querySelector("#meme-image-img");
  var spanBtn = document.querySelector(".spanBotao");
  if (input.files && input.files[0]) {
    var reader = new FileReader();

    reader.onload = function (e) {
      imgDiv.src = e.target.result;
    };

    reader.readAsDataURL(input.files[0]);
    spanBtn.innerHTML = input.files[0].name;
  }
}
