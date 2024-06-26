/* Dado um array de strings, 
use map para criar um novo array 
onde cada string é convertida para letras maiúsculas.
 */

const palavras = ["teste", "mantenha", "pneumoultramicroscopicossilicovulcanoconiótico"];
const maiusculas = palavras.map(converter => converter.toUpperCase());
console.log(maiusculas);
