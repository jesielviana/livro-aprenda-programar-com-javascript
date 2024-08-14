//arquivo operacoes-modulo.test.js
import { describe, expect, test } from "bun:test";
import { somar, subtrair, multiplicar } from '../capitulo-8/operacoes-modulo';

describe('Testes para a função somar', () => {
  test('Dois números positivos', () => {
    expect(somar(2, 3)).toBe(5);
  });

  test('Um número positivo e um negativo', () => {
    expect(somar(5, -3)).toBe(2);
  });
});

describe('Testes para a função subtrair', () => {
  test('Dois números positivos', () => {
    expect(subtrair(5, 2)).toBe(3);
  });

  test('Um número positivo e um negativo', () => {
    expect(subtrair(5, -3)).toBe(8);
  });
});

describe('Testes para a função multiplicar', () => {
  test('Dois números positivos', () => {
    expect(multiplicar(2, 3)).toBe(6);
  });

  test('Um número positivo e um negativo', () => {
    expect(multiplicar(5, -3)).toBe(-15);
  });
});
