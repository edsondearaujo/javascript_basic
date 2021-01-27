console.log(7/0); // um número dividido por zero tende ao infinito. O Javascript retornará um "Infinity"

/* O Javascript percebe que não faz sentido realizar essa operação,
então ele converte a string para número e ver se dar certo.*/
console.log("15" / 3);

console.log('5' + 5); /* Aqui o javascript vai realizar a concatenação.
Pois, o símbolo de + faz com que a linguagem entenda como strings, que tem prioridade. */

/*Em algumas linguagens retorna o número dois duas vezes,
aqui no javascript não funciona. retorna um NaN(Not a Number)*/
console.log("show!" * 2);

// Existe uma especificação que gera uma imprecisão de ponto flutuante no javascript.
console.log(0.1 + 0.7);

/* Esse exemplo mostra que não é possível chamar um literal
diretamente com uma função. Mas pode chamar o literal dentro de parenteses*/
//console.log(20.toString());
console.log((20.555).toFixed(2));