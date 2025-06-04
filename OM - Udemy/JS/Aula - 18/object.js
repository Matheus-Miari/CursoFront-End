// objects basics

// const nome = "João";
// const sobrenome = "Silva";
// const idade = 30;

// const nome02 = "Maria";
// const sobrenome02 = "Oliveira";
// const idade02 = 25;

// VARIAVEIS RELACIOANADAS == AGRUPAMENTO DE DADOS

// const pessoa = {
//     nome: "João",
//     sobrenome: "Silva",
//     idade: 30,
// };

// console.log(pessoa.nome, pessoa.sobrenome, pessoa.idade);


// const pessoa02 = {
//     nome: "Maria",
//     sobrenome: "Oliveira",
//     idade: 25,
// }

// console.log(pessoa02.nome, pessoa02.sobrenome, pessoa02.idade);

function criaPessoa(nome, sobrenome, idade){   // PARAMETROS
    return {
        nome: nome,
        sobrenome: sobrenome,
        idade: idade,
    };
}

const pessoa1 = criaPessoa("João", "Silva", 30);   // ARGUMENTOS
const pessoa2 = criaPessoa("Maria", "Oliveira", 25);  
const pessoa3 = criaPessoa("Pedro", "Santos", 28);
const pessoa4 = criaPessoa("Ana", "Souza", 22);

