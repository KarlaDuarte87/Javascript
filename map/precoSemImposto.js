/*Dado um array de preços, 
use map para criar um novo array
 onde cada preço é acrescido de 10% de imposto.
 */

 const precos = [100, 200, 300];
 const resultado = precos.map(x => x * 1.10);
 console.log(resultado);