let umaString = 'Um texto';

// console.log(umaString);

// strings sao indexada 
// comencanco com 0

// console.log(umaString[4]); // [ esta o indice ]

// console.log(umaString.charAt(5));  // funcao charAt

// console.log(umaString.concat(' ', 'batatinha'));  concatenacao

// console.log(umaString.indexOf('texto')); // retorna o indice do texto resultdo = 3

// console.log(umaString.indexOf('texto', 4)); // retorna o indice do texto a partir da posicao 4 resultdo = -1

// console.log (umaString.lastIndexOf('m')); // retorna o indice mas procur de tras para frente

// console.log(umaString.match(/[a-z]/g)); // expressao regular

// console.log(umaString.search(/x/)); // procura

// console.log(umaString.replace('Um', 'Batata'));  // troca

let outraString = 'O rato roeu a roupa do rei de roma';

// console.log(outraString.length);

// console.log(outraString.slice(2, 6));  // fatiamento

console.log(outraString.split(' '));

console.log(outraString.toUpperCase());