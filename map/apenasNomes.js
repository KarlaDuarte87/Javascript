/* Dado um array de 
objetos com propriedades nome e idade, 
use map para criar um novo array que contém apenas os nomes.
*/

const pessoas = [{nome: "Ana", idade: 25}, {nome: "João", idade: 26}];
const resultado = pessoas.map(pessoa => pessoa.nome);
console.log(resultado);