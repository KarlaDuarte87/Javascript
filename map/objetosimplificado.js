/*Dado um array de objetos complexos,
 use map para criar um novo array de objetos
  simplificados que contenham apenas algumas propriedades selecionadas.
 */

  const complexos = [
    {id: 1, nome: "Produto 1", preco: 10, categoria: "A"},
    {id: 2, nome: "Produto 2", preco: 20, categoria: "B"}
  ];

  const simplificado = complexos.map(objeto => ({nome: objeto.nome, preco: objeto.preco}));
  console.log(simplificado);
