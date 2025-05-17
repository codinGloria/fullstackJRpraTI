// Confirmando Matrizes
// let listaCoisas = Array()

// listaCoisas['hardware'] = Array()
// listaCoisas['hardware'][0] = 'Placa de Video'
// listaCoisas['hardware'][1] = 'Notebook'

// listaCoisas['filmes'] = ['Senhor dos Anéis']
// listaCoisas['filmes'][1] = 'Harry Potter'

// console.table(listaCoisas)
// console.table(listaCoisas['hardware'])

// Sobre Functions
// Exemplo 01: Par ou Impar
// function parOuImpar(valor){
//     let resultado
//     valor % 2 == 0 ? resultado = 'PAR' : resultado = 'IMPAR'
    
//     return resultado
//     // Tambem poderiamos colocar o console.log dentro da função
//     // console.log(resultado), dessa forma não precisamos retornar nada
// }

// let verificaParOuImpar = parOuImpar(10)
// console.log(verificaParOuImpar)

// // Exemplo 02: Area de um Retangulo
// function calculateArea(height, width){
//     result = height * width
//     console.log(result)
// }

// calculateArea(10, 10)

// // Exemplo 03: Ordenar Array
// function ordernarArray(arr){
//     return arr.sort((a,b) => a - b)
// }

// let result02 = ordernarArray([1, 5, 4, 3, 2])
// console.log(result02)

// // Funcao anonima
// let teste = function(){
//     console.log('Teste')
// }

// teste()

// // Outra forma de funcao anonima
// let teste02 = (teste) => { console.log(teste) }
// teste02('Galaticos')

// Exemplo 04
// function showFunction(success, error){
//     if (true){
//         success('Sucesso na requisição')
//     } else {
//         error('Erro na requisição')
//     }
// }

// let successCallback = (message) => {console.log(message)}
// let errorCallback = (message) => {console.log(message)}

// showFunction(successCallback, errorCallback)

// // Funcao que retorne a soma dos elementos de um array
// let somaArray = (arr) => {
//     let soma = 0
//     for (let i = 0; i < arr.length; i++){
//         soma += arr[i]
//     }
//     console.log('Soma dos elementos: ' + soma)
// }

// somaArray([1, 2, 3, 4, 5])

// Funcao que retorne o maior numero do array
let maiorNumero = (arr) => {
    let maior = arr[0]
    for (let i = 0; i < arr.length; i++){
        if (arr[i] > maior){
            maior = arr[i]
        }
    }
    console.log('Maior numero: ' + maior)
}

maiorNumero([4, 8, 20, 1, 2, 40, 4])