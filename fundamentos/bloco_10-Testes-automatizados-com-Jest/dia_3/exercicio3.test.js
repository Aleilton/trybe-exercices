// 3. Ainda com a mesma função do primeiro exercício, utilizando o mock, crie uma nova implementação que receba três parâmetros e retorne sua multiplicação. Após fazer os devidos testes para ela, resete sua implementação e crie uma nova, que receba um parâmetro e retorne seu dobro. Faça os testes necessários.

const exercicio1 = require('./exercicio1');
const { randomNumber } = exercicio1;

// jest.mock('randomNumber');

describe('Teste da função randomNumber', () => {

    it('crie uma nova implementação que receba três parâmetros e retorne sua multiplicação. Após fazer os devidos testes para ela, resete sua implementação e crie uma nova, que receba um parâmetro e retorne seu dobro', () => {
      const spiedRandomNumber = jest.fn().mockImplementation((a, b, c) => a * b * c);

      expect(spiedRandomNumber(5, 2, 3)).toBe(30);
      expect(spiedRandomNumber).toHaveBeenCalled();
      expect(spiedRandomNumber).toHaveBeenCalledTimes(1);
      expect(spiedRandomNumber).toHaveBeenCalledWith(5, 2, 3);

      spiedRandomNumber.mockRestore();
      spiedRandomNumber.mockImplementation((a) => a * 2);

      expect(spiedRandomNumber(5)).toBe(10);
      expect(spiedRandomNumber).toHaveBeenCalled();
      expect(spiedRandomNumber).toHaveBeenCalledTimes(1);
      expect(spiedRandomNumber).toHaveBeenCalledWith(5);

    });

});

// console.log(randomNumber());
