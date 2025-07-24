const ContaBancaria = require('./ContaBancaria');

describe('Testes da classe ContaBancaria', () => {
    let conta;

    beforeEach(() => {
        conta = new ContaBancaria();
    });

    test('Saldo inicial deve ser 0', () => {
        expect(conta.consultarSaldo()).toBe(0);
    });

    test('Depositar 100 deve resultar em saldo 100', () => {
        conta.depositar(100);
        expect(conta.consultarSaldo()).toBe(100);
    });

    // Depositar um valor inválido
    test('Depositar um valor inválido deve retornar um erro', () => {
        expect(() => conta.depositar(-40)).toThrow('O valor depositado deve ser maior que zero.');
    });

    // Sacar um valor inválido
    test('Sacar um valor inválido deve retornar um erro', () => {
        expect(() => conta.sacar(-40)).toThrow('O valor sacado deve ser maior que zero.');
        expect(() => conta.sacar(400)).toThrow('Saldo insuficiente para saque.');
    });
})