import { describe, expect, test, beforeEach } from "bun:test";
import Usuario from '../capitulo-9/Usuario.js';

describe('Testes para a classe Usuario', () => {
  let usuario1;
  let usuario2;

  beforeEach(() => {
    usuario1 = new Usuario('Manoel', '15-05-1935');
    usuario2 = new Usuario('Francisca', '10-10-1940');
  });

  test('Teste para criarPublicacao', () => {
    // Teste com publicações vazias
    expect(usuario1.publicacoes.length).toBe(0);

    usuario1.criarPublicacao('Olá mundo!');
    usuario1.criarPublicacao('Estou testando a criação de publicações.');

    // Verifica se o número de publicações foi incrementado corretamente
    expect(usuario1.publicacoes.length).toBe(2);
  });

  test('Teste para seguirUsuario', () => {
    // Teste com seguidores e seguindo vazios
    expect(usuario1.seguidores.length).toBe(0);
    expect(usuario1.seguindo.length).toBe(0);

    usuario1.seguirUsuario(usuario2);

    // Verifica se o usuário foi adicionado à lista de seguindo
    expect(usuario1.seguindo).toContain(usuario2);

    // Verifica se o usuário atual foi adicionado à lista de seguidores do outro usuário
    expect(usuario2.seguidores).toContain(usuario1);
  });

  // Adicione mais testes conforme necessário
});
