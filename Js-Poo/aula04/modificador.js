function fnCapitalizar(vetor){
    var modificado = []
    let i = 0
    for(i in vetor){
       
        var letraGrande = vetor[i].charAt(0).toUpperCase()
        
        var restoTexto = vetor[i].slice(1)

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
        modificado[i] = vetor[i].toUpperCase()
    }
    return modificado
}

export default {
    capitalizar: fnCapitalizar, 
    //propriedade(nome acessivel pra exportação) : funcionalidade/valor (referenciada nessa pagina modi.js)
    ordenar: fnOrdenar,
    caixaAlta: fnCaixaAlta
}// é um objeto com 3 propiedades


