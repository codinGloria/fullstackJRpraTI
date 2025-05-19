// // Exemplos de Objetos
// class Car {
//     constructor(nome, cor){
//         this.nome = nome;
//         this.cor = cor;
//     }
// }

// let car4 = new Car("McQueen", "Vermelho");
// let car3 = new Car("Sally", "Azul");

// let car = {
//     nome: "McQueen",
//     cor: "Vermelha",

//     acelerar: function(){
//         console.log("Acelerando");
//     }
// }

// let car2 = {
//     nome: "Sally",
//     cor: "Azul",

//     acelerar: function(){
//         console.log("Acelerando");
//     }
// }

// console.log(car);
// console.log(car2);
// console.log(car3);
// console.log(car4);

// // Simply Linked List
// class Node {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//   }
// }

// class SimplyLinkedList {
//     constructor() {
//         this.head = null;
//     }

//     inserirInicio(v){
//         let novo = new Node(v)
//         novo.next = this.head
//     }

//     imprimir(){
//         let atual = this.head
//         let str = ""
//         while(atual){
//             str += atual.value + " -> "
//             atual = atual.next
//         }

//         str += "null"
//         console.log(str)
//     }
// }

// const lista = new SimplyLinkedList()
// lista.inserirInicio(10)
// lista.inserirInicio(20)
// lista.inserirInicio(30)
// lista.inserirInicio(40)

// lista.imprimir()

// Doubly Linked List
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
    }

    inserirInicio(v) {
        let novo = new Node(v)
        novo.next = this.head
        if (this.head) {
            this.head.prev = novo
        }
        this.head = novo
    }

    inserirFim(v) {
        let novo = new Node(v)
        if (!this.head) {
            this.head = novo
            return
        }
        let atual = this.head
        while (atual.next) {
            atual = atual.next
        }
        atual.next = novo
        novo.prev = atual
    }

    imprimirFrente(){
        let atual = this.head
        let str = ""
        while(atual){
            str += atual.value + " -> "
            atual = atual.next
        }

        str += "null"
        console.log(str)
    }

    imprimirAtras(){
        let atual = this.head
        while(atual.next){
            atual = atual.next
        }
        let str = ""
        while(atual){
            str += atual.value + " -> "
            atual = atual.prev
        }

        str += "null"
        console.log(str)
    }
}

const lista = new DoublyLinkedList()
lista.inserirInicio(10)
lista.inserirInicio(20)

lista.inserirFim(50)
lista.inserirFim(60)

lista.imprimirFrente()
lista.imprimirAtras()