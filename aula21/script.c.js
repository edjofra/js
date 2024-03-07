/*Botando um fim nosetTimeout e no setInterval, timers não sera mais executado após determinada condição*/ 

//clearTimeout -> transfomre o setTime em var e bote ele dentro do clearTime
var x = 0
var myTime = setTimeout(function(){
    console.log(`x é igual a 0`)
},1500)

x = 5

if(x > 0){
    clearTimeout(myTime)
    console.log('x passou de 0')
}

//clearInterval-> transformo o setIterval em variável para posteriormente referenciar no cleaInterval de uma outra função
var myIntervalo = setInterval(function(){
    console.log('Imprimindo Intervalo')
}, 1500)


setTimeout(function(){
console.log('Não repita mais')
    clearInterval(myIntervalo)
}, 3000)  
