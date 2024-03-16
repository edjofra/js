//Modificando o array de objetos,  utilizando array.map() e reaproveitando o código de outra função


import modificador from "./modificador.js"
import ingredientes,{salada} from "./ingrediente.js"


modificador.capitalizarNovo(ingredientes, 'nome')
modificador.diminuir(ingredientes, 'valor')

modificador.capitalizar(salada)
var resCapitalizado = modificador.capitalizar(salada)
console.log(resCapitalizado)



// var resOrdenado = modificado.ordenar(resCapitalizado)
// console.log(resOrdenado)

// var resCaixaAlta = modificado.caixaAlta(salada)
// console.log(resCaixaAlta)