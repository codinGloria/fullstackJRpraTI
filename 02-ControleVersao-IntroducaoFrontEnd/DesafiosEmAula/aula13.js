const formAdicionar = document.getElementById('form-adicionar');
const inputItem = document.getElementById('input-item');
const listaItens = document.getElementById('lista-itens');
const btnLimpar = document.getElementById('btn-limpar');
const contador = document.createElement('p');
const filtros = document.createElement('div');
const ordenar = document.createElement('select');

let itens = [];

window.addEventListener('DOMContentLoaded', () => {
    const dados = localStorage.getItem('listaCompras');
    if(dados) {
        itens = JSON.parse(dados);
        renderizarLista();
    }
})

function salvarDados(){
    localStorage.setItem('listaCompras', JSON.stringify(itens));
}

function renderizarLista(filtro = 'todos', ordem = 'padrao') {
    listaItens.innerHTML = '';

    let itensFiltrados = itens.slice();

    if (filtro === 'comprados') {
        itensFiltrados = itensFiltrados.filter(item => item.comprado);
    } else if (filtro === 'pendentes') {
        itensFiltrados = itensFiltrados.filter(item => !item.comprado);
    }

    if (ordem === 'alfabetica') {
        itensFiltrados.sort((a, b) => a.nome.localeCompare(b.nome));
    } else if (ordem === 'status') {
        itensFiltrados.sort((a, b) => a.comprado - b.comprado);
    }

    itensFiltrados.forEach((item, index) => {
        const li = document.createElement('li');
        li.textContent = item.nome;
        li. style.textDecoration = item.comprado ? 'line-through' : 'none';

        li.addEventListener('click', () => {
            item.comprado = !item.comprado;
            salvarDados();
            renderizarLista(getFiltroAtual(), getOrdemAtual());
        })

        const btnRemover = document.createElement('button');
        btnRemover.textContent = 'X';
        btnRemover.addEventListener('click', () => {
            removerItem(index);
        });

        li.appendChild(btnRemover);
        listaItens.appendChild(li);
    });

    atualizarContador();
}

function atualizarContador() {
    const total = itens.length;
    const comprados = itens.filter(item => item.comprado).length;
    const pendentes = total - comprados;

    contador.textContent = `Total: ${total} | Comprados: ${comprados} | Pendentes: ${pendentes}`;
}

formAdicionar.addEventListener('submit', (event) => {
    event.preventDefault();
    const novoItem = inputItem.value.trim();
    if(novoItem === '') return;

    itens.push({
        nome: novoItem,
        comprado: false
    });

    salvarDados();
    renderizarLista(getFiltroAtual(), getOrdemAtual());
    inputItem.value = '';
})

function removerItem(index) {
    itens.splice(index, 1);
    salvarDados();
    renderizarLista(getFiltroAtual(), getOrdemAtual());
}

btnLimpar.addEventListener('click', () => {
    if(confirm('Deseja realmente limpar toda a lista?')) {
        itens = [];
        salvarDados();
        renderizarLista();
    }
})

filtros.innerHTML = `
    <label><input type="radio" name="filtro" value="todos" checked> Todos</label>
    <label><input type="radio" name="filtro" value="comprados"> Comprados</label>
    <label><input type="radio" name="filtro" value="pendentes"> Pendentes</label>
`;
ordenar.innerHTML = `
    <option value="padrao">Ordem Padrão</option>
    <option value="alfabetica">Alfabética</option>
    <option value="status">Por Status</option>
`;

document.querySelector('.container').appendChild(contador);
document.querySelector('.container').appendChild(filtros);
document.querySelector('.container').appendChild(ordenar);

filtros.addEventListener('change', () => {
    renderizarLista(getFiltroAtual(), getOrdemAtual());
});
ordenar.addEventListener('change', () => {
    renderizarLista(getFiltroAtual(), getOrdemAtual());
});

function getFiltroAtual() {
    return document.querySelector('input[name="filtro"]:checked').value;
}
function getOrdemAtual() {
    return ordenar.value;
}

// Funcionalidade a serem adicionadas:
// 1. Marcar como comprado - Salvar esse estado no localStorage
// 2. Contador de itens - Mostrar quantos itens tem na lista, atualizando em tempo real
// 3. Adicione filtros para itens 'comprados' e 'pendentes'
// 4. Permita ordenar alfabeticamente ou por status