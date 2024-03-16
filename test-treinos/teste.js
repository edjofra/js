
var familia = ['nandra', 'jojo', 'juju', 'de']
var cardapio = [
    {
        nome: 'pastel',
        preco: 4.5
    },
    
    {
        nome: 'bolo',
        preco: 3.00 
    },
    {
        nome: 'coxinha',
        preco: 4.00
    }

]

function destacar(vetor, atributo){
    let novo = vetor.map((x) => { x[atributo]= `${x[atributo].toUpperCase()}`})
    
    return novo
}
console.log(destacar(cardapio, 'nome'))

// function highPrice(vetor, valor){
//     let x = vetor.filter(x => x[valor] > 3)
//     return x
// }
// let novo = highPrice(cardapio, 'preco')
// console.log(novo)

// let filtrar = cardapio.filter( f => f.nome == 'bolo')
// console.log(filtrar)