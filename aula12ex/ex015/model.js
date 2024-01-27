function verificar() {
  let date = new Date();
  let year = date.getFullYear();

  let txtano = document.getElementById("txtano");
  let res = document.getElementById("res");

  if (txtano.value == 0 || txtano.value > year) {
    window.alert("[ERROR] Check the data and try again");
  } else {
    let fsex = document.getElementsByName("radsex");
    let age = year - Number(txtano.value);

    let gender = "";
    let img = document.createElement("img");
    img.setAttribute("id", "foto");
    if (fsex[0].checked) {
      gender = "man";
      if (age >= 0 && age < 10) {
        // criança
        img.setAttribute("src", "bebemenino.jpg");
      } else if (age < 18) {
        // jovem
        img.setAttribute("src", "jovemhomem.jpg");
      } else if (age < 50) {
        // adulto
        img.setAttribute("src", "adulto.jpg");
      } else {
        // idoso
        img.setAttribute("src", "idoso.jpg");
      }
    } else if (fsex[1].checked) {
      gender = "woman";
      if (age >= 0 && age < 10) {
        // criança
        img.setAttribute("src", "bebemenina.jpg");
      } else if (age < 18) {
        // jovem
        img.setAttribute("src", "jovemmulher.jpg");
      } else if (age < 50) {
        // adulto
        img.setAttribute("src", "adulta.jpg");
      } else {
        // idoso
        img.setAttribute("src", "idosa.jpg");
      }
    }
    res.style.textAlign = "center";
    res.innerHTML = `We detected a ${gender} with aged ${age} years`;
    res.appendChild(img);
  }
}
