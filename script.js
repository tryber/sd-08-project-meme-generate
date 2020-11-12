if (typeof Storage !== "undefined") {
  const textInput = document.querySelector("#text-input");
  const memeText = document.querySelector("#meme-text");
  const memeInsert = document.querySelector("#meme-insert");
  const memeImage = document.querySelector("#meme-image");
  const container = document.querySelector("#meme-image-container");
  const fire = document.querySelector("#fire");
  const water = document.querySelector("#water");
  const earth = document.querySelector("#earth");
  const meme1 = document.querySelector('#meme-1');
  const meme2 = document.querySelector('#meme-2');
  const meme3 = document.querySelector('#meme-3');
  const meme4 = document.querySelector('#meme-4');

  window.onload = function () {
    textInput.addEventListener("input", function () {
      memeText.textContent = this.value;
    });
    memeInsert.addEventListener("change", function (evt) {
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
    meme1.addEventListener('click', function () {
        memeImage.src = 'imgs/meme1.png'
    })
    meme2.addEventListener('click', function () {
        memeImage.src = 'imgs/meme2.png'
    })
    meme3.addEventListener('click', function () {
        memeImage.src = 'imgs/meme3.png'
    })
    meme4.addEventListener('click', function () {
        memeImage.src = 'imgs/meme4.png'
    })

  };
} else {
  alert("Seu navegador não oferece suporta para Web Storage");
}
