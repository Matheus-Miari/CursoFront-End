// jogar para cima  -- hoisting

console.log('a = ', a)   // existe porem nao foi definida
var a = 2
console.log('a = ',a)   // aparece o valor 



console.log('b = ', b) // erro 
let b = 2   // let nao ocorre o hoisting
console.log(b) 