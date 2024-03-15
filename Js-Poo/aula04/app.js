//MODULARIZAÇÃO, evita misturar as camadas lógias,DOM, de visualização. Criar um arquivo separado, fora do app.js, cuja atribuição é manipular/editar dados (SEPARAR, GENERALIZAR para REAPROVEITAR). uma bilioteca de soluições 

import modificado from "./modificador.js"

console.log(modificado)

var ingredientes = ['mel', 'água', 'sal', 'mostarda']
var resCapitalizado = modificado.capitalizar(ingredientes)
var resOrdenado = modificado.ordenar(resCapitalizado)
var resCaixaAlta = modificado.caixaAlta(resOrdenado)
console.log(resCapitalizado)
console.log(resOrdenado)
console.log(resCaixaAlta)