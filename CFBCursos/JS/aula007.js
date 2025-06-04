// Operadores Lógicos em JavaScript

let idade = 20;
let temCarteira = true;

// Operador E (&&) - ambos devem ser verdadeiros
if (idade >= 18 && temCarteira) {
    console.log("Pode dirigir");
} else {
    console.log("Não pode dirigir");
}

// Operador OU (||) - pelo menos um deve ser verdadeiro
let estaChovendo = false;
let temGuardaChuva = true;

if (estaChovendo || temGuardaChuva) {
    console.log("Pode sair de casa");
} else {
    console.log("Melhor não sair");
}

// Operador NÃO (!) - inverte o valor lógico
let estaLogado = false;

if (!estaLogado) {
    console.log("Usuário precisa fazer login");
} else {
    console.log("Usuário já está logado");
}
