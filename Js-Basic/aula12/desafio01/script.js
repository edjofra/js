
function carregar (){

    var data = new Date()
    var H = data.getHours()
    var M = data.getMinutes()
    
    var msg = document.querySelector('.msg')
    var img = document.querySelector('#foto')
    var bod = document.querySelector('body')

    if (H == 16 && M == 15){
        msg.innerHTML = `OLHAAA A HORAAAA, 4 e 15, 4 e 15, aki na Cabaço F.M.`
        bod.style.background = 'grey'
        img.src= 'imagens/ele.png'}
    else if (H <= 12) { 
        msg.innerHTML = `Olá, são exatamentes <strong>${H}h e ${M}min</strong>, <br> tenha um <strong>BOM DIA!</strong>`
        bod.style.background = '#E1E2EA'
        img.src= 'imagens/dia.png'
    } else if (H <= 18) { 
       
         msg.innerHTML = `Olá, são exatamentes <strong>${H}h e ${M}min</strong>, <br> tenha uma <strong>BOA TARDE!</strong>`
         bod.style.background = '#FDB04B'
         img.src= 'imagens/tarde.png'
        
    } else if (H < 24) {
       
        msg.innerHTML = `Olá, são exatamentes <strong>${H}h e ${M}min </strong>, <br> tenha uma <strong>BOA NOITE!</strong>`
        bod.style.background = '#080827'
        img.src= 'imagens/noite.png'
    } else { msg.innerHTML = `[ERROR] <br> hora equivocada`
    bod.style.background = 'black'
    img.src= 'none'}
}




