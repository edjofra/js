//USando callbacks Functions
/* Esse é um exemplo simples de callbacks function sícrona. A f. exibir se tornar um parameto nas demais f. e sera executada qdo as açãos das demais f. forem executadas. Na chamada tem q haver referencia à f. callback. Desse modo evita-se a repetição desnecessão do console.log()
*/
function exibir(num){
    console.log(`Esse é o resutado da operação ${num}`)
}


function soma(n1,n2, callbacks){
    let res = n1  + n2 
    callbacks(res)
}

function mult(n1, n2, cb){
    let res = n1 * n2
    cb(res)
}
soma(2,3, exibir)
mult(5,7, exibir)


