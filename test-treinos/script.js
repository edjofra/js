//num1.style.background = 'pink'

    
var res = document.querySelector('div#res')

function soma(){
    var n1 = document.getElementById('num1')
    var n2 = document.querySelector('input#num2')
    var n1 = Number(n1.value)
    var n2 = Number(n2.value)
    var s = n1 + n2
    
    res.innerHTML = `A soma de ${n1} e ${n2} é igual a <strong>${s}</strong>`
   
    }
   
function subt(){
    var n1 = document.getElementById('num1')
    var n2 = document.querySelector('input#num2')
    var n1 = Number(n1.value)
    var n2 = Number(n2.value)
    var s = n1 - n2
    
    res.innerHTML = `A subtração de ${n1} e ${n2} é igual a <strong>${s}</strong>`
    

    }

function mult(){
    var n1 = document.getElementById('num1')
    var n2 = document.querySelector('input#num2')
    var n1 = Number(n1.value)
    var n2 = Number(n2.value)
    var s = n1 * n2
    
    res.innerHTML = `A multiplicação de ${n1} e ${n2} é igual a <strong>${s}</strong>`
    

    }

function divi(){
    var n1 = document.getElementById('num1')
    var n2 = document.querySelector('input#num2')
    var n1 = Number(n1.value)
    var n2 = Number(n2.value)
    var s = n1 / n2
    
    res.innerHTML = `A divisão de ${n1} e ${n2} é igual a <strong>${s}</strong>`
    

    }
   
function limpar(){
    res.innerHTML= 'Resultado: ' 
}
  

