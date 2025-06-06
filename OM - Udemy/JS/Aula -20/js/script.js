// IIFE - Immediately Invoked Function Expression

function meuEscopo() {
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');
    const pessoas = [];
    // form.onsubmit = function (evento) {
    //     evento.preventDefault(); // Evita o envio do formulário
    //     alert('Formulário enviado');
    // };
    function recebeEvento(evento) {
        evento.preventDefault(); // Evita o envio do formulário
        const nome = form.querySelector('.name');
        const sobrenome = form.querySelector('.sobrenome');
        const idade = form.querySelector('.idade');
        const altura = form.querySelector('.altura');
        const peso = form.querySelector('.peso');

        pessoas.push({
                nome: nome.value,
                sobrenome: sobrenome.value,
                idade: idade.value,
                altura: altura.value,
                peso: peso.value
            });
        console.log(pessoas);
        resultado.innerHTML += `<p>${nome.value} ${sobrenome.value}, ${idade.value} anos, ${altura.value}m, ${peso.value}kg</p>`;
}
    form.addEventListener ('submit', recebeEvento);
}
meuEscopo();