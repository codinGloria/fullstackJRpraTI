const soma = require('./soma');

test('soma de 1 + 2 deve ser 3: ', () => {
    expect(soma(5,1)).toBe(6);
})

test('Soma -1 +1 deve ser 0: ', () => {
    expect(soma(-1,1)).toBe(0);
})