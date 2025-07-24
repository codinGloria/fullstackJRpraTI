const fetchData = require('./fetchData');

test('fetchData deve retornar "Dados Recebidos" após 2 segundos', async () => {
    const data = await fetchData();
    expect(data).toBe('Dados Recebidos');
})