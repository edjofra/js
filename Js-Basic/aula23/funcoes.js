
// function exibirSituação (nota, media) {
//     if(nota >= media){
//         alert('PASSOU')
//     } else {
//         alert('REPROVADO')
//     }
// }

// let prova1 = Number(prompt('Qual a nota:  '))

// exibirSituação(prova1, 6)

//omitindo os parametros formais e utilizando -arguments-, q funciona como um array dos valores que serão repassados na chamada, tem a vantagem de não limitar a quantidade de variaveis 

function calcularMedias (){ // sem parametros nos parenteses
    if(arguments.length == 0){
        return alert('Informe pelo menos uma nota')
    }
    let soma = 0
    let quantiaNotas = arguments.length//quantas notas foram utilizadas

    for(i = 0; i < quantiaNotas; i++){//soma dos valores das notas utilizadas
        soma+= arguments[i]
    }

    var media = soma / quantiaNotas
    alert(`Essa é a media das notas: ${media}`)
    
}

calcularMedias(5, 6, 8);
calcularMedias(2, 10);
calcularMedias(7.5, 10, 8, 9.5);
calcularMedias();