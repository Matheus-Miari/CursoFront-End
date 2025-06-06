let idade = 16;
if (idade < 16) {
    console.log("Você não pode votar.");
} else if (idade < 18 || idade > 70) {
    console.log("Você pode votar, mas não é obrigatório.");
}else {
    console.log("Você deve votar.");
}
// A idade é 16, então a saída será: "Você pode votar, mas não é obrigatório."
// Se a idade fosse 15, a saída seria: "Você não pode votar."
// Se a idade fosse 18, a saída seria: "Você deve votar."