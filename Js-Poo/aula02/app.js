//Devo modificar o vetor ingredientes[] para deixar todos os item com a primeira letra maiúscula e ordená-los em ordem alfabética -Abordagem Procedural 

var ingredientes = ['mel', 'água', 'sal', 'mostarda']
var modificado = []

function capitalizar(ingredientes){
    var modificado = []
    
    for(i in ingredientes){
   
    var letraGrande = ingredientes[i].charAt(0).toUpperCase()
    
    var restoTexto = ingredientes[i].slice(1)

    var resultado = `${letraGrande}${restoTexto}`

    modificado[i] = resultado
    
    return modificado
}
}
console.log(capitalizar)

//Funcionou em um caso pequeno e isolado, porém esse paradigma é inviável em grande/media escala, dificuldade em dar manuntenção, nãp reeuso e reaproveitamente de código.