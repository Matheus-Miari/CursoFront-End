{{{{ var sera = 'Salve salve rapaziada !!' }}}} // variavel var ==
//  fica visivel fora do bloco
console.log(sera);

// em outras linguagens nao ficaria visivel fora do escopor / bloco

function teste() {
    var local = 'Acesso chamando a funcao teste'; // variavel var ==
    console.log(local); // visivel dentro do bloco
}

teste(); // chama a funcao teste
// console.log(local); // erro, nao visivel fora do bloco

// evitar o uso de var em escopo global

