// 01. Validação de Datas: Crie a função ehDataValida(dia, mes, ano) que retorne true se os valores formarem uma data real (meses de 28–31 dias, ano bissexto para fevereiro) e false caso contrário.

function ehDataValida(dia, mes, ano) {
    if (mes < 1 || mes > 12 || dia < 1 || ano < 0) {
        return false
    }

    let diasNoMes = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

    if ((ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0)) {
        diasNoMes[1] = 29 // Fevereiro em ano bissexto
    }

    return dia <= diasNoMes[mes - 1]
}

// Exemplo 01: Data válida
console.log(ehDataValida(28, 2, 2002)) 

// Exemplo 02: Data inválida
console.log(ehDataValida(29, 2, 2001))