function fncapitalizar(vetor){
    var modificado = []
    let k = 0// se tirar dá errp, ñ sei o motivo
    for(k in vetor){
   
    var letraGrande = vetor[k].charAt(0).toUpperCase()
    
    var restoTexto = vetor[k].slice(1)

    var resultado = `${letraGrande}${restoTexto}`

    modificado[k] = resultado
    }

    return modificado 
}


function fnordenar(vetor){
    return vetor.sort(function(a,b){
        return a.localeCompare(b)
     })
}

const familia = ['nandra', 'jojo', 'juju','de']
const automoveis = ['carro', 'moto', 'onibus', 'biz', 'van']
export default  {
    ordenar: fnordenar,
    capitalizar: fncapitalizar
}
export {familia, automoveis }