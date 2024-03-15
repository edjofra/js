//adicionei .nome no vetor, pois agr tratará de uma propiedade especifica dos objetos
function fnCapitalizar(vetor){
    var modificado = []
    
    for(let i in vetor){
       
        var letraGrande = vetor[i].nome.charAt(0).toUpperCase()
        
        var restoTexto = vetor[i].nome.slice(1)

        var resultado = `${letraGrande}${restoTexto}`

        modificado[i] = resultado
    }

    return modificado 
}

function fnOrdenar(vetor){
    return vetor.sort(function(a,b){
        return a.localeCompare(b)
     })
}

function fnCaixaAlta(vetor){
    let modificado = []
    
    for(let i in vetor){
        modificado[i] = vetor[i].nome.toUpperCase()
    }
    return modificado
}

export default {
    capitalizar: fnCapitalizar, 
    ordenar: fnOrdenar,
    caixaAlta: fnCaixaAlta
}


