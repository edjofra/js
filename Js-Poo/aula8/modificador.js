

function fnCaixaAlta(colecao, attr){
    if (colecao.length > 0){
         (typeof colecao[0] == 'object' && attr)?
        colecao.map(item => item[attr] = item[attr].toUpperCase()):
        colecao.map(item => item.toUpperCase())
    }
}



export default {
    caixaAlta: fnCaixaAlta,
   
}


