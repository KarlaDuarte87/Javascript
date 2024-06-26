/*Dado um array de números,
 use map para criar um novo array 
 onde cada número é substituído pela sua raiz quadrada.
 */

 const numeros = [1,4,9,16,25];
 const raizQuadrada = numeros.map(num => Math.sqrt(num));
 console.log(raizQuadrada);