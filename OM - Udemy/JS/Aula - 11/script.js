// alert('Com a mensagem de alerta');  ALERTA

// window.alert('Com a mensagem de alerta');  WINDOW ALERTA

// window.confirm('Com a mensagem de confirmação');  CONFIRMAÇÃO

// window.prompt('Com a mensagem de prompt');   // PROMPT
// Exibe o valor retornado pelo prompt

// let confirma = confirm("Você quer continuar?");
// alert(confirma);

let num1 = prompt("Digite um número");
let num2 = prompt("Digite outro número");
let soma = parseInt(num1) + parseInt(num2);
// alert("A soma é: " + soma);
// alert(typeof soma); // Exibe o tipo da variável soma

alert (`O resultado da soma é: ${soma}`); // Template String