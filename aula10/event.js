var area = document.getElementById("area");
area.addEventListener("click", clicar);
area.addEventListener("mouseover", entrar);
area.addEventListener("mouseout", sair);

function clicar() {
  area.innerText = "Clicou";
  area.style.background = "darkred";
  area.style.color = "black";
}

function entrar() {
  area.innerText = "Entrou";
}

function sair() {
  area.innerText = "Saiu";
  area.style.background = "green";
  area.style.color = "white";
}
