// Modularização CommonsJS
const operacoes = require('./operacoes-commonjs');

// Utilizando as funções e constantes exportadas pelo módulo
console.log(operacoes.PI); // Saída: 3.14
console.log(operacoes.soma(5, 3)); // Saída: 8
console.log(operacoes.subtracao(10, 4)); // Saída: 6
