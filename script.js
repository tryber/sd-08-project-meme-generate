window.onload = function () {
  document
    .querySelector("#text-input")
    .addEventListener("keyup", atualizarTexto);

  document.querySelector("#fire").addEventListener("click", aplicarFogo);
  document.querySelector("#water").addEventListener("click", aplicarAgua);
  document.querySelector("#earth").addEventListener("click", aplicarTerra);

  document.querySelectorAll(".preLoadedMemes img").forEach((e) => {
    e.addEventListener("click", (evt) => {
      adicionarImagem(evt.target.src);
    });
  });
};

function adicionarImagem(source) {
  let imgDiv = document.querySelector("#meme-image-img");
  imgDiv.src = source;
}

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
      imgDiv.src = "#";
      imgDiv.src = e.target.result;
    };

    reader.readAsDataURL(input.files[0]);
    spanBtn.innerHTML = input.files[0].name;
  }
}

function aplicarFogo() {
  let memeContainer = document.querySelector("#meme-image-container");
  memeContainer.style.border = "3px dashed red";
}

function aplicarAgua() {
  let memeContainer = document.querySelector("#meme-image-container");
  memeContainer.style.border = "5px double blue";
}

function aplicarTerra() {
  let memeContainer = document.querySelector("#meme-image-container");
  memeContainer.style.border = "6px groove green";
}
