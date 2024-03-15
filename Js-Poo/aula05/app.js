//Importei objeto literal(ou array de objetos) de outra pág., modularizando ainda mais o código.


import modificado from "./modificador.js"

import ingredientes from "./ingrediente.js"//importados do obj literal


console.log(ingredientes)
console.log(ingredientes[0].nome)

var resCapitalizado = modificado.capitalizar(ingredientes)
console.log(resCapitalizado)

var resOrdenado = modificado.ordenar(resCapitalizado)
console.log(resOrdenado)

var resCaixaAlta = modificado.caixaAlta(ingredientes)
console.log(resCaixaAlta)