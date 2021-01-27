# Anotações sobre JavaScript

## Organização do código em JavaScript

O JavaScript é organizado em sentenças de código, podendo terminar ou não, com ponto e vígula.

~~~ JavaScript
    console.log("Sentença de código");
~~~
 
É organizado também em blocos de código, delimitados por chaves.

~~~ JavaScript
{
    {
        console.log("Blocos de código");
    }
}
~~~

## Tipagem

JavaScript é uma linguagem fracamente tipada, você não precisa falar que tipo de variável foi declarada (inteiro, string). Então vemos que javascript tem uma tipagem dinâmica, isso deixa a linguagem mais flexível

## Declaração de variáveis

Evite usar nomes genéricos e siglas.

~~~ JavaScript
    let numero = 5;// que número? da onde?
    let valor = ''; //qual valor?
    let nc = "fulano de tal"; //nome completo 
~~~

## Number

Procurar especificação da imprecisão de ponto flutuante no site do [ECMA](https://www.ecma-international.org/).


# Referências
[StackBlitz](https://stackblitz.com/)
