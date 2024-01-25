function conferir() {
  var p1 = document.getElementById("p1");
  var nac = document.getElementById("nac");

  var confNac = String(p1.value);

  nac.innerHTML = `<p>The country you are in is <strong>${confNac}</strong>. </p>`;

  if (confNac !== "Brazil") {
    nac.innerHTML += `<p>And you are Foreigner.</p>`;
  } else {
    nac.innerHTML += `<p>And you are Brazilian.</p>`;
  }
}
