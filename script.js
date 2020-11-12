if (typeof Storage !== "undefined") {
  const textInput = document.querySelector("#text-input");
  const memeText = document.querySelector("#meme-text");
  const memeInsert = document.querySelector("#meme-insert");
  const container = document.querySelector("#meme-image-container");
  const fire = document.querySelector("#fire");
  const water = document.querySelector("#water");
  const earth = document.querySelector("#earth");
  window.onload = function () {
    textInput.addEventListener("input", function () {
      memeText.textContent = this.value;
    });
    memeInsert.addEventListener("change", function (evt) {
      const memeImage = document.querySelector("#meme-image");
      memeImage.src = URL.createObjectURL(evt.target.files[0]);
      memeImage.onload = function () {
        URL.revokeObjectURL(memeImage.src);
      };
    });
    fire.addEventListener("click", function () {
      container.style.border = "3px dashed red";
    });
    water.addEventListener("click", function () {
      container.style.border = "5px double blue";
    });
    earth.addEventListener("click", function () {
      container.style.border = "6px groove green";
    });
  };
} else {
  alert("Seu navegador não oferece suporta para Web Storage");
}
