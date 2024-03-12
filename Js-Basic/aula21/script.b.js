//setTimeout -> Function, tempo(1 = milessegundo, ou seja executa uma função só depois de um tempo)
console.log('Antes do setTimeout')//sincrona, sem o método setTimeout

setTimeout(function() {
    console.log('Teste do setTimeout')
}, 3000)//assincrona

/*setIterval -> assincrona, é um loop não para de executar eqto não determinar o fim, cuidado para não travar o computador

setInterval()(function() {
    console.log('Teste do setInterval')
}, 3000)*/

