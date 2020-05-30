// Herança
class List {
    constructor() {
        this.data = []
    }

    add(data) {
        this.data.push(data)
        console.log(this.data)
    }
}

class TodoList extends List {
    constructor() {
        super()

        this.usuario = 'Emmanuella'
    }

    mostraUsuario() {
        console.log(this.usuario)
    }
}

// Instânciando classe
var MinhaLista = new TodoList()

document.getElementById('novotodo').onclick = function () {
    MinhaLista.add('NOVO TO-DO')
}

MinhaLista.mostraUsuario()
