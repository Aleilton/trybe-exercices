// 1. Crie uma função que gere um número aleatório entre 0 e 100. Você irá criar também os testes para essa função. Utilizando o mock, defina o retorno padrão como 10. Teste se a função foi chamada, qual seu retorno e quantas vezes foi chamada.

const exercicio1 = require('./exercicio1');
const { randomNumber } = exercicio1;

// jest.mock('randomNumber');

describe('Teste da função randomNumber', () => {

    it('retorno padrão 10', () => {
      const spiedRandomNumber = jest.spyOn(exercicio1, 'randomNumber');
      spiedRandomNumber.mockResolvedValue(10);

      spiedRandomNumber();

      expect(spiedRandomNumber).toHaveBeenCalled();
      expect(spiedRandomNumber).toHaveBeenCalledTimes(1);
      expect(spiedRandomNumber()).resolves.toBe(10);

    });
});

// console.log(randomNumber());