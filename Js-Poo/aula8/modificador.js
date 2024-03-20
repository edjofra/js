
function fnCapitalizar(colecao, attr){
    if (colecao.length > 0){
        if (typeof colecao[0] == 'object' && attr){
            colecao.map(item => item[attr] = item[attr].charAt(0).toUpperCase() + item[attr].slice(1));
        }else{
            return colecao.map(item => item = item.charAt(0).toUpperCase() + item.slice(1));
        }
         
    }
    
}

function fnOrdenar(colecao, attr){    
    return attr ?
        colecao.sort(function(a,b){
            return typeof a[attr] == 'number' ?
                a[attr] - b[attr] :
                a[attr].localeCompare(b[attr])
        }):
        colecao.sort(function(a,b){
            return typeof a == 'number' ?
                a - b :
                a.localeCompare(b)
        });
}

function formatarMoeda(colecao, attr){
    return colecao.map( item => item[attr] = item[attr].toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }))
 }

export default {
    capitalizar: fnCapitalizar,
    ordenar: fnOrdenar,
    real: formatarMoeda

}


