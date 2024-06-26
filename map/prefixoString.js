/*Dado um array de strings,
 use map para criar um novo array
  onde cada string tem um prefixo adicionado. */

const palavras = ["ola", "mundo", "javascript"];
const prefixo = "Prefixo:";
const resultado = palavras.map(palavra => prefixo + palavra);
console.log(resultado);