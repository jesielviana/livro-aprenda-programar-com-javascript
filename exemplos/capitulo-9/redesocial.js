// Importando as classes
import Usuario from './Usuario.js';

// Criando dois objetos de usuário
const usuario1 = new Usuario('Alice', new Date('1990-05-15'));
const usuario2 = new Usuario('Bob', new Date('1985-10-22'));

// Fazendo com que o usuário 2 siga o usuário 1
usuario2.seguirUsuario(usuario1);

// Criando uma publicação para o usuário 1
usuario1.criarPublicacao('Primeira pulicação somente texto', null);

// Curtindo a própria publicação
usuario1.publicacoes[0].curtir()

// Adicionando comentário à própria publicação
usuario1.publicacoes[0].comentar("Isto é um comentário")

// Usuário curtindo publicação de outro usuário
usuario2.seguindo[0].publicacoes[0].curtir()

// Exibindo nomes dos usuários
console.log(usuario1.nome) 
console.log(usuario2.nome)
// Exibindo quantidade de seguidores dos usuários
console.log(usuario1.seguidores.length)
console.log(usuario2.seguidores.length)
// Exibindo quantidade de "seguindo" dos usuários
console.log(usuario1.seguindo.length)
console.log(usuario2.seguindo.length)

// Exibindo das publicações do Usuário 1
console.log(usuario1.publicacoes)
console.log(usuario1.publicacoes[0].curtidas)
console.log(usuario1.publicacoes[0].comentarios)

