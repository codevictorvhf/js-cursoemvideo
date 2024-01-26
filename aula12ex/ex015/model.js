function verificar() {
  let date = new Date();
  let year = date.getFullYear();

  let txtano = document.getElementById("txtano");
  let res = document.getElementById("res");

  if (txtano.value == 0 || txtano.value > year) {
    window.alert("[ERRO] Verifique os dados e tente novamente");
  } else {
    let fsex = document.getElementsByName("radsex");
    let idade = year - Number(txtano.value);

    let gênero = "";
    let img = document.createElement("img");
    img.setAttribute("id", "foto");
    if (fsex[0].checked) {
      gênero = "Homem";
      if (idade >= 0 && idade < 10) {
        // criança
        img.setAttribute("src", "bebemenino.jpg");
      } else if (idade < 18) {
        // jovem
        img.setAttribute("src", "jovemhomem.jpg");
      } else if (idade < 50) {
        // adulto
        img.setAttribute("src", "adulto.jpg");
      } else {
        // idoso
        img.setAttribute("src", "idoso.jpg");
      }
    } else if (fsex[1].checked) {
      gênero = "Mulher";
      if (idade >= 0 && idade < 10) {
        // criança
        img.setAttribute("src", "bebemenina.jpg");
      } else if (idade < 18) {
        // jovem
        img.setAttribute("src", "jovemmulher.jpg");
      } else if (idade < 50) {
        // adulto
        img.setAttribute("src", "adulta.jpg");
      } else {
        // idoso
        img.setAttribute("src", "idosa.jpg");
      }
    }
    res.style.textAlign = "center";
    res.innerHTML = `Detectamos ${gênero} com idade de ${idade} anos`;
    res.appendChild(img);
  }
}
