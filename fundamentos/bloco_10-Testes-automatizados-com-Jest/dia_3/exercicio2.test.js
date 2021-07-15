// 2. Com a mesma função do exercício anterior, utilizando o mock, crie uma nova implementação, que deve receber dois parâmetros e retornar a divisão do primeiro pelo segundo. Essa implementação deve ocorrer uma única vez. Faça os testes necessários.

const exercicio1 = require('./exercicio1');
const { randomNumber } = exercicio1;

// jest.mock('randomNumber');

describe('Teste da função randomNumber', () => {

    it('a função foi chamada, qual seu retorno, quantas vezes foi chamada e com quais parâmetros', () => {
      const spiedRandomNumber = jest.fn().mockImplementationOnce((a, b) => a / b);

      expect(spiedRandomNumber(10, 2)).toBe(5);
      expect(spiedRandomNumber).toHaveBeenCalled();
      expect(spiedRandomNumber).toHaveBeenCalledTimes(1);
      expect(spiedRandomNumber).toHaveBeenCalledWith(10, 2);

    });
});

// console.log(randomNumber());
