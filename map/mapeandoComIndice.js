/* Dado um array de números, 
use map para criar um novo array
 onde cada elemento é a soma do elemento original e seu índice.
*/

const numeros = [1, 2, 3, 4];
const resultado = numeros.map((num, idx) => ({numero_original: num, indice: idx, soma: num + idx }));
console.log(resultado);
