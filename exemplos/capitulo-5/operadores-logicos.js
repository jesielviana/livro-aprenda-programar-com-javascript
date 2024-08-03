// E (ambas as condições precisam ser verdadeiras)
let condicaoE = true && true; 
console.log('condicaoE:', condicaoE); // Saída => condicaoE: true

// E (ambas as condições precisam ser verdadeiras)
  condicaoE = true && false; 
console.log('condicaoE:', condicaoE); // Saída => condicaoE: false

// Ou (pelo menos uma das condições precisa ser verdadeira)
let condicaoOU = false || true; 
console.log('condicaoOU:', condicaoOU); // Saída => condicaoOU: true

// Ou (pelo menos uma das condições precisa ser verdadeira)
  condicaoOU = false || false; 
console.log('condicaoOU:', condicaoOU); // Saída => condicaoOU: false

// Negação (inverte o valor lógico da expressão)
let negacao = !false; // condicao3 = true
console.log('negacao:', negacao); // Saída => negacao: true