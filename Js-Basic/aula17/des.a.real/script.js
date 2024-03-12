var num = document.querySelector('input#num')
var tab = document.querySelector('select#tabela')
var res = document.querySelector('div#res')
let valores = []

function isNumero(x){
  if(x >=1 && x<=100){
    return true
  }else{
    return false
  }
}
function inLista(x, y){
  if(y.indexOf(x) != -1){
    return true
  }else{
    return false
  }
}

function clicar(){
 if(isNumero(Number(num.value)) && !inLista(Number(num.value), valores)){
  window.alert('OKK')} else  {
  window.alert('[ERROR] Cheque o formulário e preencha novamente')
}
 }



/*function clicar(){
    var num = document.querySelector('#num')
    var n = Number(num.value)
    if(n == 0 || n>100){
        window.alert('[ERROR] Cheque o formulário e preencha novamente')
    } else{
    var tab = document.querySelector('#tabuada')
    var opt = document.createElement('option')
    tab.appendChild(opt)
    opt.innerHTML= `O crl do número é ${n}`

           
    }   
}

function finalizar(){
  var num = document.querySelector('#num')
  var n = Number(num.value)
  var res = document.querySelector('#res')
  var tab = document.querySelector('#tabuada')
    var opt = document.createElement('option')
    tab.appendChild(opt)
  
 
   res.innerHTML = `O dobro do número adicionado ${n} é ${n*2} <br>`
   res.innerHTML += `PORRA possui ${a}`
    }*/

 
    




    

    
