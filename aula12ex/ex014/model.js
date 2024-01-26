function carregar() {
  var msg = document.getElementById("msg");
  var img = document.getElementById("photo");

  var data = new Date();
  // let hour = data.getHours();
  var hour = 8;
  msg.innerHTML = `Agora são ${hour} horas`;
  if (hour >= 0 && hour < 12) {
    // BOM DIA
    img.src = "manha.png";
  } else if (hour >= 12 && hour < 18) {
    // BOA TARDE
    img.src = "tarde.png";
  } else {
    // BOA NOITE
    img.src = "noite.png";
  }
}
