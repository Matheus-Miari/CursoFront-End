let num = 10;   // escopo do bloco // let fica visivel apenas dentro do bloco

{     
    let num = 20;    // let nao fica visivel fora do bloco
    // var num = 20; // se fosse var, ficaria visivel fora do bloco
    console.log('dentro: ',num); // 20   // procura o primeiro num que encontrar, que é o do bloco
}

console.log('fora: ',num); // 10