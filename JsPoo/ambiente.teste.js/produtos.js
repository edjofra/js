
let familia = ['nandra', 'juju', 'jojo']
var ingredientes = [
    {
        nome: 'mel',
        valor: 2.50
    },

    {
        nome: 'água',
        valor: 1.00

    },
    {
        nome: 'mostarda',
        valor: 3.20

    },
    
]


  function fnCaixaAlta(vetor){     
     let novo = vetor.map(x=> x.toUpperCase())
      return novo
  }

 function fnNewCaixaAlta(vetor, attr){
     return vetor.map(x => x[attr] = x[attr].toUpperCase())
  
 }



export default {
   caixaAlta: fnCaixaAlta,
   newCaixaAlta: fnNewCaixaAlta
    
}
export {familia,ingredientes}