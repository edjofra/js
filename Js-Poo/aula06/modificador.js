//Refatorando códigos, adaptando para que seja possivel manipular array de objs. através do método map(),

function fnDiminuir (arrayObj, propriedade){
    if(typeof arrayObj[0] == 'object'){
        let res = arrayObj.map(function(ob){
            ob[propriedade] -= 1
            return ob            
        })
        console.log(res)
    }

}

function fnCapitalizarNovo(colecao, atributo){
   
    if(typeof colecao[0] == 'object'){
        var resultado = colecao.map(function(obj){
            
            var letraGrande = obj[atributo].charAt(0).toUpperCase()
            var restoTexto = obj[atributo].slice(1)
            
            obj[atributo] = `${letraGrande}${restoTexto}`
            
            return  obj
        })
        console.log(resultado)
    }
}

function fnCapitalizar(vetor){
    var modificado = []
    
    for(let i in vetor){
       
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
    ordenar: fnOrdenar,
    caixaAlta: fnCaixaAlta,
    capitalizarNovo: fnCapitalizarNovo,
    diminuir: fnDiminuir
}


