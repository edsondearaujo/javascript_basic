const prova_1 = 5.2;
const prova_2 = Number('5.9');

console.log(prova_1, prova_2);
// Number com "N" maiúsculo é uma função, number com "n" minúsculo é um tipo.
console.log(Number.isInteger("Função Number P1: ", prova_1));
console.log(Number.isInteger("Função Number P2: ",prova_2)); // Aqui o Number é uma função.

const peso_P1 = 2;
const peso_P2 = 3;

const nota_final = (prova_1 * peso_P1) + (prova_2 * peso_P2);
const media = nota_final / (peso_P1 + peso_P2);

console.log("Nota final: ", nota_final);
console.log("Média: ", media.toFixed(2)); // Aqui o media.toFixed é um tipo number.
console.log("Binário: ", media.toString(2));
console.log("Tipo: ", typeof media);
