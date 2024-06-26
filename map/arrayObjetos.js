/* Dado um array de números, use map para criar um novo array de
 objetos onde cada objeto tem uma propriedade valor com o número original.*/

 const numeros = [1, 2, 3, 4, 5];
 const resultado = numeros.map(num =>({valor: num}));
 console.log(resultado);