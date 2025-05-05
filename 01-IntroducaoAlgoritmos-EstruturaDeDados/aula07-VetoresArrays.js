let fruitList = Array()
let nameList = ['Glória', 'Luan', 'Dante', 'Liana']

fruitList[0] = 'banana'
fruitList[1] = 'maçã'
fruitList['Vermelhas'] = 'morango'

// console.table(fruitList)
// console.table(nameList)

// for (let i = 0; i < nameList.length; i++) {
//     console.log(nameList[i])
// }

fruitList.push('melancia') // adiciona no final do array
fruitList.unshift('banana') // adiciona no início do array
fruitList.pop() // remove o último elemento
fruitList.shift() // remove o primeiro elemento

let resultado = fruitList.indexOf('banana') // retorna o índice do elemento
console.log(resultado)

console.table(fruitList)