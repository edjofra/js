//JEITO COM FUNCTION, separando requisitos(dados) de métodos(açoes com os dados)


//Melhorando a organização do code:  Distiubuindo Responsabilidades/Papeis  definidos através de  funçoes (capitalizar,ordenar)

var ingredientes = ['mel', 'água', 'sal', 'mostarda']


function capitalizar(ingredientes){
    var modificado = []
    
    for(i = 0; i < ingredientes.length; i++){
   
        var letraGrande = ingredientes[i].charAt(0).toUpperCase()
        
        var restoTexto = ingredientes[i].slice(1)

        var resultado = `${letraGrande}${restoTexto}`

        modificado[i] = resultado
    }

    return modificado 
}


function ordenar(ingredientes){
    return ingredientes.sort(function(a,b){
        return a.localeCompare(b)
     })
}

// console.log(capitalizar(ingredientes))
// console.log(ordenar(ingredientes))
//Juntano esses dois resultados:

var resultadoCapitalizado = capitalizar(ingredientes)
var resultadoOrdenação = ordenar(resultadoCapitalizado)

console.log(resultadoCapitalizado)
console.log(resultadoOrdenação)
//vetores ficaram iguais, a função ordenar modificou o vetor original capitalizado, não é o ideal, pois evetualmente pode ser que precise do var resultadoCapitalizado intacto.  



