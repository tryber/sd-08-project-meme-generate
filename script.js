window.onload = function(){
    const inputImage = document.querySelector('#meme-insert');


    inputImage.addEventListener('change', loadfle);
}



function loadfle(event) {
    const localImage = document.querySelector('#meme-image');
    localImage.src = URL.createObjectURL(evento.target.files[0]);
  }


  function addValue(v,c,m){
    var v=['v',c,m]
    prinf("/n INSIRA O NOME")
    scanf("%d"),v[0]
    prinf("/n INSIRA O MATRICULA"
    scanf("%d"),v[1]
    prinf("/n INSIRA O CPF")
    scanf("%d"),v[2]
    return v;
  }
  addValue('jose',12021093120,12121)