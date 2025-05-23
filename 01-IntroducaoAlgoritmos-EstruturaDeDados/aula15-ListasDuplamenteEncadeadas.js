// Doubly Linked List
class Node {
    constructor(valor) {
        this.valor = valor;
        this.anterior = null;
        this.proximo = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    inserirInicio(v) {
        let novo = new Node(v)
        novo.proximo = this.head
        if (this.head) {
            this.head = this.tail = novo
        } else {
            novo.proximo = this.head
            this.head.anterior = novo
            this.head = novo
        }
        this.length++
    }

    inserirFim(v) {
        let novo = new Node(v)
        if (!this.head) {
            this.head = this.tail = novo
        } else {
            this.tail.proximo = novo
            novo.anterior = this.tail
            this.tail = novo
        }

        this.length++
    }

    inserirEm(indice, valor){
        if (indice < 0 || indice > this.length) throw new RangeError("Indice fora do limite")
        if (indice === 0) return this.inserirInicio(valor)
        if (indice === this.length) return this.inserirFim(valor)

        let atual = this.head
        for (let i = 0; i < indice; i++) {
            atual = atual.proximo
        }

        let novo = new Node(v)
        let noAntigo = atual.anterior

        noAntigo.proximo = novo
        novo.anterior = noAntigo
        novo.proximo = atual
        atual.anterior = novo

        this.length++
    }

    removerEm(indice){
        if (indice < 0 || indice >= this.length) throw new RangeError("Indice fora do limite")

        let remover
        
        if (this.length === 1){
            remover = this.head
            this.head = this.tail = null
        } else if (indice === 0){
            remover = this.head
            this.head = this.head.proximo
            this.head.anterior = null
        } else if (indice === this.length - 1){
            remover = this.tail
            this.tail = this.tail.anterior
            this.tail.proximo = null
        } else {
            let atual = this.head

            for (let i = 0; i < indice; i++) {
                atual = atual.proximo
            }

            remover = atual
            let { antigo, novo } = atual
            antigo.proximo = novo
            novo.anterior = antigo
        }

        this.length--
        
    }
}