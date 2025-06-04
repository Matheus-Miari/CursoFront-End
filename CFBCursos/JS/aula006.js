// // Declaração de variáveis
let nome = "Maria";     // string (texto)
let idade = 25;         // number (número)
let estudante = true;   // boolean (verdadeiro ou falso)

// Exibir valores no console
console.log(nome);      // Mostra: Maria
console.log(idade);     // Mostra: 25
console.log(estudante); // Mostra: true

// Operadores aritméticos
let a = 10;
let b = 5;

console.log(a + b); // Soma: 15
console.log(a - b); // Subtração: 5
console.log(a * b); // Multiplicação: 50
console.log(a / b); // Divisão: 2
console.log(a % b); // Módulo: 0

// Operadores relacionais
console.log(a > b);   // true
console.log(a < b);   // false
console.log(a == 10); // true
console.log(a === "10"); // false (comparação de valor e tipo)

// Condicional (if/else)
if (idade >= 18) {
    console.log("É maior de idade");
} else {
    console.log("É menor de idade");
}

// Estrutura de repetição (for)
for (let i = 1; i <= 5; i++) {
    console.log("Contando: " + i);
}

// Função simples
function saudacao(nome) {
    console.log("Olá, " + nome + "!");
}

saudacao("João"); // Chamada da função
