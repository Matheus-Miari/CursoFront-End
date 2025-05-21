const nome = 'Matheus';
const sobreNome = 'Miari';
const idade = 25;
const peso = 69;
const altura = 1.79;

let imc = peso / (altura * altura);
let anoNascimento = 2025 - (idade);

// console.log(nome, so, 'tem', idade, 'anos, pesa', peso, 'tem ', altura, 'de altura e seu IMC e de', imc, 'Ele nasceu em ', anoNascimento );

console.log(nome, sobreNome, `tem ${idade} anos, pesa ${peso} tem ${altura} de altura e seu IMC e de ${imc}, ele nasceu em ${anoNascimento}`);

