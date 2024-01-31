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
        img.setAttribute("src", "src/images/bebemenino.jpg");
      } else if (age < 18) {
        // jovem
        img.setAttribute("src", "src/images/jovemhomem.jpg");
      } else if (age < 50) {
        // adulto
        img.setAttribute("src", "src/images/adulto.jpg");
      } else {
        // idoso
        img.setAttribute("src", "src/images/idoso.jpg");
      }
    } else if (fsex[1].checked) {
      gender = "woman";
      if (age >= 0 && age < 10) {
        // criança
        img.setAttribute("src", "src/images/bebemenina.jpg");
      } else if (age < 18) {
        // jovem
        img.setAttribute("src", "src/images/jovemmulher.jpg");
      } else if (age < 50) {
        // adulto
        img.setAttribute("src", "src/images/adulta.jpg");
      } else {
        // idoso
        img.setAttribute("src", "src/images/idosa.jpg");
      }
    }
    res.style.textAlign = "center";
    res.innerHTML = `We detected a ${gender} with aged ${age} years`;
    res.appendChild(img);
  }
}
