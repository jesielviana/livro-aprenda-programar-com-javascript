class Comentario {
  constructor(usuario, texto) {
    this.usuario = usuario;
    this.dataComentario = new Date();
    this.texto = texto;
  }

  editar(novoTexto) {
    // Método para editar o conteúdo do comentário
  }

  remover() {
    // Método para remover o comentário do sistema
  }
}

export default Comentario;
