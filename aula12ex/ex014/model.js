function carregar() {
  let msg = document.getElementById("msg");
  let img = document.getElementById("image");

  let data = new Date();
  let hour = data.getHours();

  msg.innerHTML = `Agora são ${hour} horas`;
  if (hour > 0 && hour < 12) {
    // BOM DIA
    img.src = "manha.png";
    document.body.style.background = "#FDDC8E";
  } else if (hour >= 12 && hour <= 18) {
    // BOA TARDE
    img.src = "tarde.png";
    document.body.style.background = "#F07600";
  } else {
    // BOA NOITE
    img.src = "noite.png";
    document.body.style.background = "#000A13";
  }
}
