let num = [5, 9, 9, 2, 7];
console.log(`O primeiro valor do vetor é ${num[0]}`);
console.log(`O vetor tem ${num.length} posições`);

let pos = num.indexOf(1);
if (pos == -1) {
  console.log("O valor não foi encontrado");
} else {
  console.log(`O valor está na posição ${pos}`);
}
