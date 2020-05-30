// Use of static class
class Matematica {
    static soma(a, b) {
        return a + b
    }
}

// Método estático: por isso não precisa definir uma nova
// classe Matematica com new Matematica
console.log(Matematica.soma(1, 2))