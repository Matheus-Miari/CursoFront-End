// funcao sem retorno
// function imprimirSoma(a, b) {
//     console.log(a + b);
// }
// imprimirSoma(2, 3); // 5
// imprimirSoma(2); // NaN
// imprimirSoma(2, 10, 4, 5); // 12 (soma apenas os dois primeiros argumentos)
// imprimirSoma()


// funcao com retorno
function soma(a, b = 0) {
    return a + b;
}
console.log(soma(2, 3)); // 5
console.log(soma(2)); // 2 (b assume o valor padrão de 0)
