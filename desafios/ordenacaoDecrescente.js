/*Sua tarefa é criar uma função que possa 
receber qualquer número inteiro não negativo como 
argumento e retorná-lo com seus dígitos em ordem decrescente.
 Essencialmente, reorganize os dígitos para criar o número mais alto possível.

Exemplos:
Entrada: 42145 Saída: 54421

Entrada: 145263 Saída: 654321

Entrada: 123456789 Saída: 987654321 */

function descendingOrder(n){
     const numStr = n.toString();
     const numArray = numStr.split('');
     numArray.sort((a,b) =>b-a);
     const numStrOrdenado = numArray.join('');

     return parseInt(numStrOrdenado, 10);
  }

console.log(descendingOrder(123456));
console.log(descendingOrder(123447992545782156));