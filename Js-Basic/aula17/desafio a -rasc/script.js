
//num.style.background = 'pink'
let num = document.querySelector('input#num')
let res = document.querySelector('div#res')
let tabe = document.querySelector('select#tabela')
let valo = []

function numOk(n){
  if (n>=1 && n<=100){
    return true
  } else{
    return false
  }
}
function listOk(n, l){
  if(l.indexOf(n) != -1 ){
    return true
  } else{
    return false
  }

}

function adicionar(){
if(numOk(Number(num.value)) && !listOk(Number(num.value), valo)){
  
  valo.push(Number(num.value))
  let opt = document.createElement('option')
  tabe.appendChild(opt)
  opt.innerText=`O número ${num.value} foi adicionado`
  res.innerHTML= ''
  
  
} else{
  window.alert ('DEU RUIM, TENTE NOVAMENTE')
}

num.value = ''
num.focus() 
}

function finalizar(){
  if(valo == 0){
    window.alert('Adicione números')
  } else{
    let tot = valo.length
    let maior = valo[0]
    let menor = valo[0]
    let soma = 0
    
    for(pos in valo){
      soma += valo[pos]
      if(valo[pos] > maior)
      maior = valo[pos]
      if(valo[pos] < menor)
      menor = valo[pos]
    }

  let media = soma/tot
  res.innerHTML= ''
  res.innerHTML+= `<p>No total foram adicionados ${tot} números</p>`
  res.innerHTML+= `<p> O maior número adicionado é ${maior}`
  res.innerHTML+= `<p> O menor número adicionado é ${menor}`
  res.innerHTML+= `<p>A soma total é ${soma}`
  res.innerHTML+= `<p>A media total é ${media}`

  }

}

    




    

    
