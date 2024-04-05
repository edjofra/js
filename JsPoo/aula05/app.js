//Importei vetor e objetos literal( array de objetos) de outra pág., modularizando ainda mais o código.


import modificado from "./modificador.js"

import {ingredientes,salada} from "./ingrediente.js"//importados do obj literal


console.log(ingredientes)
console.log(salada)

var resCapitalizado = modificado.capitalizar(salada)
console.log(resCapitalizado)

var resOrdenado = modificado.ordenar(resCapitalizado)
console.log(resOrdenado)

var resCaixaAlta = modificado.caixaAlta(salada)
console.log(resCaixaAlta)
// note que apenas o vetor(salada) foi alterado pelo modificador. Para manipular array de obj.(ingredientes) é necessário algumas configurações