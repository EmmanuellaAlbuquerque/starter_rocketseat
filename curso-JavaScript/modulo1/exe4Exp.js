function experiencia(anos) {
    // código aqui
    if (anos >= 0 && anos < 1) {
        return 'iniciante'
    } else if (anos >=1 && anos < 3){
       return 'intermediario'
    } else if (anos >=3 && anos <= 6) {
        return 'avançado'
    } else if (anos >= 7) {
        return 'jedi master'
    } else {
        return 'idade inválida'
    }
   }

for (var anosEstudo = -1; anosEstudo < 10; anosEstudo++) {
    console.log('Com', anosEstudo, ':', experiencia(anosEstudo))
}
// De 0-1 ano: Iniciante
// De 1-3 anos: Intermediário
// De 3-6 anos: Avançado
// De 7 acima: Jedi Master
