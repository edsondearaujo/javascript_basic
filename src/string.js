const curso = "Bootcamp";

console.log(curso.charAt(3)); // retorna o caractere do índice especificado
console.log(curso.charCodeAt(3)); // posição do índex na tabela ASCII
console.log(curso.indexOf('t')); // retorna o índice do caractere (posição)

console.log(curso.substring(4)); // retorna a string a partir do índice chamado
console.log(curso.substring(2, 4)); // retorna a string dentro do intervalo

console.log('Bem-vindos ao '.concat(curso).concat('!')); // concatenação com o método 'concat'
console.log('Bem-vindos ao ' + curso + '!'); // concatenação simples

console.log(curso.replace('p', 'x')); // substitue os valores

/* como lidar com um conteúdo no formato CSV,
formato em que os dados são separados por ponto e vírgula.
Para isso passamos para o método uma expressão regular.*/
console.log('IoT ; Blockchain ; Agricultura ; Automação'.split(/\s*;\s*/));