// 07. Mapeamento e Ordenação: Dado um array produtos = [{ nome, preco }, ...], crie uma função que retorne um novo array apenas com os nomes, ordenados por preço crescente, usando map, sort.

let produtos = [
    { nome: "Rímel", preco: 10.99 },
    { nome: "Sombra", preco: 5.50 },
    { nome: "Batom", preco: 7.98 },
    { nome: "Base", preco: 15.99 },
    { nome: "Esmalte", preco: 3.98 }
]

function ordenarProdutosPorPreco(produtos) {
    return produtos
        .sort((a, b) => a.preco - b.preco)
        .map(produto => produto.nome)
}

console.log(ordenarProdutosPorPreco(produtos))