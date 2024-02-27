// Igualdade (compara valores)
let igualdade = 2 == 2; // valores e tipos iguais
console.log('igualdade: ', igualdade); // Saída => igualdade: true

// Igualdade (compara valores)
igualdade = 2 == '2'; // valores iguais, mas tipos diferentes
console.log('igualdade: ', igualdade); // Saída => igualdade: true

// Igualdade estrita (compara valores e tipos)
let igualdadeEstrita = 2 === 2; // valores e tipos iguais
console.log('igualdadeEstrita:', igualdadeEstrita); // Saída => igualdadeEstrita: true

// Igualdade estrita (compara valores e tipos)
igualdadeEstrita = 2 === '2'; // valores iguais, mas tipos diferentes
console.log('igualdadeEstrita:', igualdadeEstrita); // Saída => igualdadeEstrita: false

// Diferença (compara se valores são diferentes)
let diferenca = 3 != 4;
console.log('diferenca:', diferenca); // Saída => diferenca: true

// Diferença estrita (compara valores e tipos)
let diferencaEstrita = 'a' !== 'a';
console.log('diferencaEstrita:', diferencaEstrita); // Saída => diferencaEstrita: false

// Menor que (verifica se um valor é menor que outro)
let menorQue = 1 < 2;
console.log('menorQue:', menorQue); // Saída => menorQue: true

// Menor ou igual que (verifica se um valor é menor ou igual a outro))
let menorOuIgual = 2 <= 2;
console.log('menorOuIgual:', menorOuIgual); // Saída => menorOuIgual: true

// Maior que (verifica se um valor é maior que outro)
let maiorQue = 4 > 4;
console.log('maiorQue:', maiorQue); // Saída => maiorQue: false

// Maior ou igual que (verifica se um valor é maior ou igual a outro))
let maiorOuIgual = 4 >= 4;
console.log('maiorOuIgual:', maiorOuIgual); // Saída => maiorOuIgual: true
