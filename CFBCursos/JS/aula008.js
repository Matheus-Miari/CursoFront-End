// Bitwise em JavaScript - Explicação passo a passo

// COmeçar com dois números:
let a = 5;  // Em binário: 0101
let b = 3;  // Em binário: 0011

console.log("a = 5 -> binário: 0101");
console.log("b = 3 -> binário: 0011");

// OPERADOR AND (&) - compara cada bit
// Só retorna 1 se os dois bits forem 1
let resultadoAND = a & b;
// 0101
// &
// 0011
// ====
// 0001 -> decimal: 1
console.log("a & b = " + resultadoAND); // Resultado: 1

// OPERADOR OR (|) - compara cada bit
// Retorna 1 se pelo menos um bit for 1
let resultadoOR = a | b;
// 0101
// |
// 0011
// ====
// 0111 -> decimal: 7
console.log("a | b = " + resultadoOR); // Resultado: 7

// OPERADOR XOR (^) - compara cada bit
// Retorna 1 se os bits forem diferentes
let resultadoXOR = a ^ b;
// 0101
// ^
// 0011
// ====
// 0110 -> decimal: 6
console.log("a ^ b = " + resultadoXOR); // Resultado: 6

// OPERADOR NOT (~) - inverte os bits
let resultadoNOT = ~a;
// ~0101 = 1010 (complemento de dois)
// Resultado em decimal será -6 (JavaScript usa 32 bits)
console.log("~a = " + resultadoNOT); // Resultado: -6

// DESLOCAMENTO À ESQUERDA (<<) - move os bits para a esquerda
// É como multiplicar por 2
let resultadoShiftLeft = a << 1;
// 0101 << 1 = 1010 (binário) = 10 (decimal)
console.log("a << 1 = " + resultadoShiftLeft); // Resultado: 10

// DESLOCAMENTO À DIREITA (>>) - move os bits para a direita
// É como dividir por 2
let resultadoShiftRight = a >> 1;
// 0101 >> 1 = 0010 = 2
console.log("a >> 1 = " + resultadoShiftRight); // Resultado: 2
