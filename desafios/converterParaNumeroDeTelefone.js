/*Escreva uma função que aceite um array de 10 inteiros 
(entre 0 e 9), que retorne uma string desses números na forma de um número de telefone.

Exemplo
createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => retorna "(123) 456-7890"
O formato retornado deve estar correto para completar este desafio.

Não se esqueça do espaço após os parênteses de fechamento!
*/

function criarNumeroDeTelefone(numero=[]){
    if (numero.length !== 10){
        throw new Error("O Array deve conter exatamente 10 números.");
    }

    const formatacaoNumero = `(${numero[0]}${numero[1]}${numero[2]}) ${numero[3]}${numero[4]}${numero[5]}-${numero[6]}${numero[7]}${numero[8]}${numero[9]}`;
    return formatacaoNumero;
}

const numeros = [0,1,2,3,4,5,6,7,8,9];
console.log(criarNumeroDeTelefone(numeros));