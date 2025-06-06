// NULLISH COALESCING OPERATOR
// 

const idade = 0; // se colocar 0 o resultado será nao informado // se colocar undefined o resultado será nao informado// se colocar um valor numérico, o resultado será o valor numérico

// 0, '', false, null, undefined são valores falsy // nao validos

console.log(`Sua idade é: ${idade ?? 'não informada'}`); //  0 // se colocar 0 o resultado será 0 // se colocar undefined o resultado será nao informada // se colocar um valor numérico, o resultado será o valor numérico

// OBJETOS 

const user = {
    nome: 'João',
    idade: 30,
    address: {
        rua: 'Rua A',
        numero: 123,
        cidade: 'São Paulo'
    }
};

console.log(Object.keys(user)); // ['nome', 'idade', 'address'] // retorna as chaves do objeto user

console.log(Object.values(user)); // ['João', 30, { rua: 'Rua A', numero: 123, cidade: 'São Paulo' }] // retorna os valores do objeto user

console.log(Object.entries(user)); // [['nome', 'João'], ['idade', 30], ['address', { rua: 'Rua A', numero: 123, cidade: 'São Paulo' }]] // retorna as chaves e valores do objeto user

// desestruturando o objeto user

const { nome, idade: userIdade, address: { cidade } } = user;
