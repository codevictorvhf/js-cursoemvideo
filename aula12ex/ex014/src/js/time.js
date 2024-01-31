function carregar() {
  let msg = document.getElementById("msg");
  let img = document.getElementById("image");

  let data = new Date();
  let hour = data.getHours();

  msg.innerHTML = `Now it's ${hour} time`;
  if (hour > 0 && hour < 12) {
    img.src = "src/images/manha.png";
    document.body.style.background = "#FDDC8E";
  } else if (hour >= 12 && hour <= 18) {
    img.src = "src/images/tarde.png";
    document.body.style.background = "#F07600";
  } else {
    img.src = "src/images/noite.png";
    document.body.style.background = "#000A13";
  }
}
