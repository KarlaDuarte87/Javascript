/*Dado um array de números, use map para
 criar um novo array onde cada número é convertido para uma string.*/
 const numeros = [1,2,3,4,5];
 const conversaoString = numeros.map(x=> x.toString());
 console.log(conversaoString);