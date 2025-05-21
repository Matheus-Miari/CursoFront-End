// TROCAR AS VARIAVEIS 

let varA = 'A';  // B
let varB = 'B';  // C
let varC = 'C'; // A

let tempVar = varA; // A
varA = varB; // B
varB = varC; // C
varC = tempVar; // A

console.log(varA, varB, varC); // A B C = B C A 

// [varA, varB, varC] = [varB, varC, varA] = utilizado Array

