// armazenado uma função em uma variável
const imprimirSoma = function(a, b) {
    console.log(a + b);
}
imprimirSoma(2, 3); // 5
imprimirSoma(2); // NaN (b é undefined)
imprimirSoma(2, 10, 4, 5); // 12 (soma apenas os dois primeiros argumentos)
imprimirSoma(); // NaN (a e b são undefined)


// armazenado uma função arrow em uma variável
const som = (a, b ) => {
    return a + b;
}

console.log(som(2, 3)); // 5

// armazenado uma função arrow em uma variável com retorno implícito
const subtracao = (a, b) => a - b;
console.log(subtracao(5, 3)); // 2

const imprimirTexto = texto => console.log(texto);
imprimirTexto("Olá, mundo!"); // Olá, mundo!