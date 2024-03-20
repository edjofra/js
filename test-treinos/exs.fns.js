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

let familia = ['nandra', 'juju', 'jojo']

let primos = [2,3,5,7,11,13]

function fnCaixaAlta(colecao, attr){
    if (colecao.length > 0){
         if(typeof colecao[0] == 'object' && attr){
            return  colecao.map(item => item[attr] = item[attr].toUpperCase())
         } else {
            return colecao.map(item => item.toUpperCase())
             
         }
    }
}

function fnmais(colecao, attr){
   if (typeof colecao == 'object' && attr){
        colecao.map(x => x[attr] +=10 )
    } else {
        return  colecao.map(x => x+=10)
       
    }
}

function fncaro(colecao, attr){
colecao.forEach( x => {
    x[attr] > 12 ?
    x['comprar'] = 'sim':
    x['comprar'] = 'não'
    }
)
}

function fnbarato(colecao, attr){
    return colecao.filter(x => x[attr] < 12)
     
}

export default {
    
    caixaAlta: fnCaixaAlta,
    mais: fnmais,
    caro: fncaro,
    barato: fnbarato

}

export {ingredientes, familia,primos}

