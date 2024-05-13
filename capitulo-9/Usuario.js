import Publicacao from './Publicacao.js';

class Usuario {
  constructor(nome, dataNascimento) {
    this.nome = nome;
    this.dataNascimento = dataNascimento;
    this.seguidores = [];
    this.seguindo = [];
    this.publicacoes = [];
  }

 /* Este método possibilita a criação de uma nova publicação, onde são fornecidos o texto e possíveis mídias (como imagens ou vídeos), e então uma nova instância da classe Publicacao é criada com esses dados, associada ao usuário que a criou, e adicionada à sua lista de publicações. */
  criarPublicacao(texto, midia) {
    const novaPublicacao = new Publicacao(this, texto, midia);
    this.publicacoes.push(novaPublicacao);
  }

  /* Este método permite que o usuário atual comece a seguir outro usuário, adicionando-o à sua lista de "seguindo" e também se registrando na lista de "seguidores" daquele usuário.  */
  seguirUsuario(usuario) {
    this.seguindo.push(usuario);
    usuario.seguidores.push(this);
  }

  deixarDeSeguirUsuario(usuario) {
    // Método para deixar de seguir outro usuário
  }
}

export default Usuario;
