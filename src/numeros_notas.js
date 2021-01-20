console.log(7/0); // um número dividido poe zero dente ao infinito.

// Nesse caso o Javascript entende que existe um número dentro da string e realiza a operação.
console.log("15" / 3);

/*Em algumas linguagens retorna o número dois duas vezes,
aqui no javascript não funciona. retorna um NaN(Not a Number)*/
console.log("show!" * 2);

/* Existe uma especificação que gera uma imprecisão de ponto flutuante no javascript.
Procurar a especificação*/
console.log(0.1 + 0.7);

/* Nesse exemplo você pode perceber que não é possível chamar um literal
diretamente com uma função. Mas pode chamar o literal dentro de parenteses*/
//console.log(20.toString());
console.log((20.555).toFixed(2));