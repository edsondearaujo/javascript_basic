
        let vet = [1, 3, 7, 6, 4, 0, 5]
        
        //vet[7] = 12 // Maneira automática de colocar um valor dentro do vetor
        vet.push(2) // Método PUSH coloca um valor sempre no final do vetor, sem a necessidade de mostrar qual é a posição
        
        //vet.sort() // O método SORT, ordena os valores em ordem do menor para o maior

        /*for(let i=0 ; i<vet.length ; i++){
                console.log(`Posição:${i} Valor[${vet[i]}]\n`)
        }
        */

        //Essa sintaxe do FOR só funciona para arrays e objetos. Obs: Todo ARRAY em JS é um OBJECT
        /*for(let j in vet){
                console.log(vet[j])
        }*/

        //console.log(`\nOs valores do vetor é: ${vet} \nO comprimento do vetor é: ${vet.length}\n`) //vet.length nos dá o comprimento do vetor. Utilizando o atributo LENGTH

        let indice = vet.indexOf(10)

        console.log(`O vetor: ${vet}`)
        console.log(`Comprimento do vetor: ${vet.length}`)

        // Caso a entrada seja um valor que não existe no vetor, o JS retornará -1. Aqui nós vamos tratar esse caso, usando o IF e ELSE.
        if(indice == -1){
                console.log('O valor não foi encontrado.')
        }else{
                console.log(`O valor zero está na posição: ${indice}`)
        }

