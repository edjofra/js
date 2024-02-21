//num1.style.background = 'pink'

var num1 = document.querySelector('#num1')
var num1 = document.querySelector('#num2')

var r = document.querySelector('#r')


function soma(){
    if(num1.value == 0 || num2.value == 0){
        window.alert('Preencha os dois número')
    } else{
        var n1 = Number(num1.value)
        var n2 = Number(num2.value)

        var so = n1 + n2
        r.innerHTML=`${so}`
    }
   
}

function subt(){
    if(num1.value == 0 || num2.value == 0){
        window.alert('Preencha os dois número')
    } else{
        var n1 = Number(num1.value)
        var n2 = Number(num2.value)

        var su = n1 - n2
        r.innerHTML=`${su}`
    }
}

function mult(){
    if(num1.value == 0 || num2.value == 0){
        window.alert('Preencha os dois número')
    } else{
        var n1 = Number(num1.value)
        var n2 = Number(num2.value)

        var mu = n1 * n2
        r.innerHTML=`${mu}`
    }
}

function divi(){
    if(num1.value == 0 || num2.value == 0){
        window.alert('Preencha os dois número')
    } else{
        var n1 = Number(num1.value)
        var n2 = Number(num2.value)

        var di = n1 / n2
        r.innerHTML=`${di}`
    }
}