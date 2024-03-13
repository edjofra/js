
//JEITO SEM FUNCTION

//Devo modificar o vetor ingredientes[] para deixar todos os item com a primeira letra maiúscula e ordená-los em ordem alfabética -Abordagem Procedural 

var ingredientes = ['mel', 'água', 'sal', 'mostarda']
var modificado = []

for(i in ingredientes){

    var letraGrande = ingredientes[i].charAt(0).toUpperCase()
    
    var restoTexto = ingredientes[i].slice(1)

    var resultado = `${letraGrande}${restoTexto}`

    modificado[i] = resultado
}

var ordenado = modificado.sort(function(a,b){
   return a.localeCompare(b)
})// precisou de uma function dentro do metodo sort(), pois o acento de àgua estava confundindo o programa

console.log(ordenado)

//Funcionou em um caso pequeno e isolado, porém esse paradigma é inviável em grande/media escala, dificuldade em dar manuntenção, nãp reeuso e reaproveitamente de código.