/* Dado um array de objetos com
propriedades nome e sobrenome,
 use map para criar um novo array 
 de strings onde cada string é uma combinação de nome e sobrenome.
 */

 const pessoas = [{nome: "Ana", sobrenome: "Silva"}, {nome: "Bruno", sobrenome: "Costa"}];
 const resultado = pessoas.map(pessoa => `${pessoa.nome} ${pessoa.sobrenome}`);
 console.log(resultado);