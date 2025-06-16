// 09. Conversão entre Formatos: Escreva duas funções:
//      - paresParaObjeto(pares) recebe um array de pares [ [chave,valor], ... ] e retorna o objeto equivalente.
//      - objetoParaPares(obj) faz o inverso, retornando um array de pares

function paresParaObjeto(pares) {
    let obj = {};
    for (let i = 0; i < pares.length; i++) {
        let [chave, valor] = pares[i];
        obj[chave] = valor;
    }
    return obj;
}

function objetoParaPares(obj) {
    let pares = [];
    for (let chave in obj) {
        pares.push([chave, obj[chave]]);
    }
    return pares;
}

let pares = [
    ["nome", "Glória"],
    ["idade", 23],
];

let obj = paresParaObjeto(pares);
console.log("\nPares para objeto:", obj);

let obj2 = { curso: "Dev Full Stack", modulo: 1 };
console.log("\nObjeto para pares:", objetoParaPares(obj2)); 