let serie = {
    nome: 'High School Musical',
    dataLancamento: 2007,
    atores: ['Zac Efron', 'Vanessa Hudgens', 'Ashley Tisdale'],
    status: 'finalizada',
    classificacao: 18,
    nrTemporadas: {
        temp: 12,
        temp2: 1,
        temp3: 0
    },

    mostrarCaracteristicas: function () {
        return `O nome da série é ${this.nome} a classificação é ${this.classificacao} e o status é ${this.status}`;
    }
}

console.log(serie.mostrarCaracteristicas());

let livro = {
    titulo: 'O Hobbit',
    autor: 'J.R.R. Tolkien',
    ano: 1925,

    mostrarCaracteristicas: function () {
        return `O nome do livro é ${this.titulo}, foi lançado em ${this.ano} e o autor foi ${this.autor}`;
    }
}

console.log(livro.mostrarCaracteristicas());
console.log(livro.titulo);
console.log(livro.autor);
console.log(serie.status);

let atleta = {
    nome: 'CR7 - Flavio Caça Rato',
    time: 'Caixias',
    esporte: 'Beach Tenis',
    melhorAmigo: 'Ribagol',

    celebrarVitoria: function () {
        console.log('SIIIIIIIIII')
    },
}

console.log(atleta.celebrarVitoria());

let atletaSecundario = atleta
atletaSecundario.arquiRival = 'Ganso'

console.log(atleta)
console.log(atletaSecundario)

function anime (nome, personagemForte, personagemFraco, nota) {
    this.nome = nome;
    this.personagemForte = personagemForte;
    this.personagemFraco = personagemFraco;
    this.nota = nota;

    this.mostrarAnime = function () {
        return `nome: ${this.nome}, \nmaisForte: ${this.personagemForte}, \nmaisFraco: ${this.personagemFraco}, \nnota: ${this.nota}`;
    }
}

let naruto = new anime('Naruto', 'Ebisu', 'Orochimaru', 6)
console.log(naruto.mostrarAnime())

let onePiece = new anime('One Piece', 'Coby', 'Ace', 8)
console.log(onePiece.mostrarAnime())

function jogos(titulo, genero, anoLancamento, empresa, jogar){
    return {
        titulo,
        genero,
        anoLancamento,
        empresa,
        jogar
    }
}

let jogo = jogos("Dragon Age", "RPG", 2009, "Bioware", () => console.log("Morrendo"))
jogo.jogar()

let personagens = [['Killua', 'Gon'], 'Minato', 'Sanji']

for (let key in personagens){
    console.log(personagens[key])
}

for (let personagem of Object.keys(personagens)){
    console.log(personagem)
}

let professor = {
    nome: 'Stark',
    disciplina: 'Fisica',
    notas: {
        aluno1: [2, 5],
        aluno2: [3,2],
    }
}

let somaNotas = 0
let numeroEstudantes = 0

for (let estudante in professor.notas){
    numeroEstudantes++
    for (let nota of professor.notas[estudante]){
        somaNotas += nota
    }
}

let media = somaNotas / numeroEstudantes

console.log(`A média da turma é ${media}`)

if (media >= 3){
    console.log(`${professor.nome} está acima da média`)
} else {
    console.log(`${professor.nome} está abaixo da média`)
}