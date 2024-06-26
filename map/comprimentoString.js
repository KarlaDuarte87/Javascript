/* Dado um array de strings, use map para criar um novo array 
onde cada string é substituída pelo seu comprimento. */

const palavras = ["teste", "mantenha", "pneumoultramicroscopicossilicovulcanoconiótico"];
const tamPalavras = palavras.map(palavra => palavra.length);
console.log(tamPalavras);