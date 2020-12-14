const showBtn = document.querySelector("#show-image");
const memeImage = document.querySelector("#meme-image");

// showBtn.addEventListener("click", (event) => {
//   const doidera = document.querySelector("#meme-container");
//   memeImage.src = URL.createObjectURL(event.target.files[0]);
// });

memeImage.addEventListener("change", (e) => {
  document.querySelector("#blah").src = URL.createObjectURL(memeImage.files[0]);
  document.querySelector("#blah").style.display = "block";
});
