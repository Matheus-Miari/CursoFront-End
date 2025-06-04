// function.js
// nada e executado apos o return 

function saudar(nome) {
    return `Salve galera! ${nome}!`; // Retorna a saudação
}

const varitvel = saudar('Math'); // Chama a função saudar 
// com o argumento 'Math' e armazena o resultado em varitvel

// console.log(varitvel); // Exibe o valor retornado pela função

function somar(a, b) {
    return a + b; // Retorna a soma de a e b
}
// console.log(somar(2, 3)); // Exibe o resultado da soma de 2 e 3

const raiz = function (n) {
    return n ** 0.5; // Retorna a raiz quadrada de n
};

console.log(raiz(9)); // Exibe a raiz quadrada de 9

const raizArrow = (n) => n ** 0.5; // Função de seta para calcular a raiz quadrada
console.log(raizArrow(16)); // Exibe a raiz quadrada de 16

