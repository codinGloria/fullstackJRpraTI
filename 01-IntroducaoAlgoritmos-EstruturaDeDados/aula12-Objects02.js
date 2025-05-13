const livraria = [
    {titulo: "Código Limpo", autor: "Robert C. Martin", ano: 2008},
    {titulo: "The Gunslinger", autor: "Stephen King", ano: 1982},
    {titulo: "Laranja Mecânica", autor: "Anthony Burgess", ano: 1962},
    {titulo: "Pequeno Príncipe", autor: "Antoine de Saint-Exupéry", ano: 1943},
    {titulo: "As Crônicas Marcianas", autor: "Ray Bradbury", ano: 1950}
]

for (let livro of livraria) {
    if (livro.ano < 2000) {
        console.log(livro)
    }
}

let filmes = [
    {titulo: "Senhor dos Anéis", genero: "Fantasia"},
    {titulo: "Jogo da Imitação", genero: "Drama"},
    {titulo: "Clube da Luta", genero: "Drama"},
    {titulo: "Ilha do Medo", genero: "Suspense"},
    {titulo: "Pulp Fiction", genero: "Crime"},
    {titulo: "Poderoso Chefão", genero: "Crime"},
    {titulo: "DVD do Renight - Melhores Momentos", genero: "Comédia"},
    {titulo: "Ai, que vida!", genero: "Comédia"},
    {titulo: "Kill Bill", genero: "Ação"},
    {titulo: "Batman Forever", genero: "Ação"},
    {titulo: "Batman - Piada Mortal", genero: "Animação"},
    {titulo: "As Branquelas", genero: "Comédia"},
    {titulo: "Terno de 1 Bilhão de Dólares", genero: "Comédia"}
]

// Contar a quantidade de filmes por gênero
let contagemGenero = {}

filmes.forEach(filme => {
    if (contagemGenero[filme.genero]) {
        contagemGenero[filme.genero]++
    } else {
        contagemGenero[filme.genero] = 1
    }
});

console.table(contagemGenero)

for (let genero in contagemGenero) {
    console.log(`Existem ${contagemGenero[genero]} filmes do gênero ${genero}`)
}

// Calcular o fatorial de um número
function calcularFatorial(numero){
    let fatorial = 1
    for (let i = 1; i <= numero; i++){
        fatorial *= i
    }

    console.log(`O fatorial de ${numero} é ${fatorial}`)
}

calcularFatorial(5)
calcularFatorial(10)

// Imprima os 10 primeiros némeros da sequência de Fibonacci
function fibonacci(){
    let a = 0, b = 1, temp
    console.log(a)
    console.log(b)
    for (let i = 3; i <= 10; i++){
        temp = a + b
        console.log(temp)
        a = b
        b = temp
    }
}

fibonacci()