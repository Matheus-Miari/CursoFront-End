// ARRAY = UMA ISTA INDEXADA DE VALORES

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(array[0]); // 1
// console.log(array[1]); // 2
// console.log(array[2]); // 3

const alunos = ['João', 'Maria', 'José', 'Ana', 'Pedro', 'Lucas', 'Luana', 'Fernanda', 'Roberto', 'Carla'];
// console.log(alunos[0]); // João
// console.log(alunos[1]); // Maria
// console.log(alunos[2]); // José

console.log(alunos[0]); // João

alunos[3] = 'Ana Paula'; // Substitui 'Ana' por 'Ana Paula'
console.log(alunos[3]); // Ana Paula

console.log(alunos.length); // 10 - Tamanho do array

alunos[11] = 'Carlos'; // Adiciona 'Carlos' na posição 11
console.log(alunos[11]); // Carlos 

alunos.push('Fernanda'); // Adiciona 'Fernanda' no final do array
console.log(alunos[alunos.length - 1]); // Fernanda

alunos.unshift('Roberto'); // Adiciona 'Roberto' no início do array
console.log(alunos[0]); // Roberto

const removidoUltimo = alunos.pop(); // Remove o último elemento do array
console.log(alunos[alunos.length - 1]); // Fernanda foi removida, então agora o último é 'Carlos'

const removidoPrimeiro = alunos.shift(); // Remove o primeiro elemento do array
console.log(alunos[0]); // Roberto foi removido, então agora o primeiro é 'João' 

delete alunos[2]; // Remove o elemento na posição 2 (José)
console.log(alunos[2]); // undefined - José foi removido

console.log(alunos.slice(0,5)); // ['João', 'Maria', 'undefined', 'Ana Paula', 'Pedro'] - Retorna os primeiros 5 elementos

console.log(alunos.slice(0,-1)); // ['João', 'Maria', 'undefined', 'Ana Paula', 'Pedro', 'Lucas', 'Luana', 'Carlos'] - Retorna todos menos o último elemento

console.log(typeof alunos); // object - Arrays são objetos em JavaScript
console.log(alunos instanceof Array); // true - Verifica se alunos é uma instância de Array
console.log(alunos instanceof Object); // true - Verifica se alunos é uma instância de Object