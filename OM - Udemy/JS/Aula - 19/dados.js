/*
Primitivo (imutaveis): string, number, boolean, null, undefined
null (bigint, symbol) - não é um primitivo, é um objeto
*/

let a = 'A';
let b = a; // b recebe o valor de a, mas não é uma 
// referência ao mesmo espaço de memória == copia de valor
console.log(a, b); // A A

a = 'Outro valor'; // a recebe um novo valor
console.log(a, b); // Outro valor A


// Referência (mutaveis): array, object, function
let c = [1, 2, 3];
let d = c; // d é uma referência ao 
// mesmo espaço de memória de c  == APONTA PARA UM MESMO LUGAR NA MEMORIA
console.log(c, d); // [1, 2, 3] [1, 2, 3]

