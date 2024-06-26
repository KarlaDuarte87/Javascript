
/*Dado um array de números, 
use filter para remover os números
 negativos e map para criar um novo
  array onde cada número é multiplicado por 2.
 */

  const numeros = [-1, 2, -5, -7, 5, 9, 10];
  const resultado = numeros.filter(num => num >= 0).map(num => num * 2);
  console.log(resultado);
  