// 08. Agrupamento por Propriedade: Em vendas = [{ cliente, total }, ...], use reduce para gerar um objeto onde cada chave é um cliente e o valor é a soma de todos os seus total.

let vendas = [
    { cliente: "Luan", total: 100 },
    { cliente: "Glória", total: 200 },
    { cliente: "Eric", total: 150 },
    { cliente: "Luan", total: 110 },
    { cliente: "Yasmin", total: 300 },
    { cliente: "Glória", total: 250 },
];

function agruparVendasPorCliente(vendas) {
    return vendas.reduce((acc, venda) => {
        const { cliente, total } = venda;
        if (!acc[cliente]) {
            acc[cliente] = 0;
        }
        acc[cliente] += total;
        return acc;
    }, {});
}

console.log(agruparVendasPorCliente(vendas));