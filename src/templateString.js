const produto = 'Cogumelos';
const concatenacao = 'Você trabalha com qual produto? ' + produto;

const template = `
Qual produto você trabalha? 
${produto}`;
console.log(concatenacao, template);

// Expressões
console.log(`2 * 8 = ${2*8}`);

// chamando uma função usando "Template String"
const up = texto_entrada => texto_entrada.toUpperCase();
console.log(`Ei! vc aí. ${up('cuidado')}!`)