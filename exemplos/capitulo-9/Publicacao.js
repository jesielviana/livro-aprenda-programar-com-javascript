import Comentario from './Comentario.js';

class Publicacao {
  constructor(usuario, descricao, midia) {
    this.usuario = usuario;
    this.dataPublicacao = new Date();
    this.descricao = descricao;
    this.midia = midia;
    this.curtidas = 0;
    this.comentarios = [];
  }

  editar(novoTexto, novasImagens, novosVideos) {
    // Método para editar o conteúdo da publicação
  }

  remover() {
    // Método para remover a publicação do sistema
  }

  /* Este método é responsável por incrementar o contador de curtidas da publicação. Quando um usuário curte uma publicação, esse método é chamado, e o contador de curtidas é aumentado em 1. */
  curtir() {
    this.curtidas++;
  }

  descurtir() {
    // Método para decrementar o contador de curtidas da publicação
  }

  /* Este método permite adicionar um novo comentário à publicação. Quando um usuário comenta em uma publicação, este método é invocado. Ele cria uma nova instância da classe Comentario, utilizando o usuário que está comentando e o texto do comentário. Em seguida, esse novo comentário é adicionado ao array comentarios da publicação. */
  comentar(texto) {
    const novoComentario = new Comentario(this.usuario, texto);
    this.comentarios.push(novoComentario)
  }
}

export default Publicacao;
