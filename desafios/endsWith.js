/*Complete a solução para que 
retorne verdadeiro se o primeiro argumento
 (string) passado terminar com o segundo argumento (também uma string).
 */

 function solucao(str, ending){
    return str.endsWith(ending);
 }

 console.log(solucao('abc', 'bc'));
 console.log(solucao('cdef', 'def'));