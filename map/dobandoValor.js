const numeros = [1, 2, 3, 4, 5, 6];
const duplicar = x => x * 2;
const duplicados = numeros.map(duplicar);
console.log(duplicados)
// [2, 4, 6, 8, 10, 12]

//aqui dobramos os valores do array numeros com a função map

//Dado um array de números,
// use map para criar um novo array onde 1 é adicionado a cada número.


const adicao = numeros.map(x => x +1);
console.log(adicao);

