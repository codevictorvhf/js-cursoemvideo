function conferir() {
  var p1 = document.getElementById("p1");
  var nac = document.getElementById("nac");

  var confNac = String(p1.value);

  nac.innerHTML = `<p>O país que você está é <strong>${confNac}</strong>. </p>`;

  if (confNac !== "Brasil") {
    nac.innerHTML += `<p>E você é Estrangeiro.</p>`;
  } else {
    nac.innerHTML += `<p>E você é Brasileiro.</p>`;
  }
}

// var país = "EUA";
// console.log(`Vivendo em ${país}`);
// if (país != "Brasil") {
//   console.log("Você é Estrangeiro");
// } else {
//   console.log("Você é Brasileiro");
// }
