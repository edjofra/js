var b = document.querySelector('#but')
b.addEventListener('click', verificar)

function verificar(){
b.style.background = 'pink'
var data = new Date()
var year = data.getFullYear()

var fano = document.querySelector('#ano')
var a = Number(fano.value)
var s = year - a
if(a == 0 || a > year || a < 1900){
    window.alert('[ERROR]Verifique os dados e tente novamente')
} else{
    var sex = document.getElementsByName('sexB')
    var gên = ''
    var img = document.createElement('img')
    img.setAttribute('id' , 'foto')//msm coisa de <img  id='foto'> no doc html
    var back = document.querySelector('body')
    if(sex[0].checked){
        back.style.background= 'rgba(89, 124, 230, 0.795)'
        if (s <= 12){
            gên = 'um Menino'
            img.setAttribute('src', 'cri.M.png' )
        }else if(s < 50){
            gên = 'um Homi'
            img.setAttribute('src', 'jov.M.png' )
        }else {
            gên = 'um Velho'
            img.setAttribute('src', 'vel.M.png' )
        }


    }else if(sex[1].checked){    
        back.style.background= 'rgba(238, 73, 199, 0.658)'
        if (s <= 12){
            gên = 'uma Menina'
            img.setAttribute('src', 'cri.F.png' )
        }else if(s < 50){
            gên = 'uma Mulher'
            img.setAttribute('src', 'jov.F.png' )
        }else {
            gên = 'uma Velha'
            img.setAttribute('src', 'val.F.png' )
        }
    }else if(sex[2].checked){ 
        back.style.backgroundImage='linear-gradient(to right, rgb(50, 116, 208) , rgb(247, 0, 202))'
        img.setAttribute('src', 'trans.png')
        if (s <= 12){
            gên = 'ume Menine'
        }else if(s < 50){
            gên = 'alguém Não-Binarie'
        }else {
            gên = 'ume Velhe'
        }
    }
}

var res = document.querySelector('#res')
res.innerHTML=`Detectamos ${gên} com idade de ${s} anos`
res.appendChild(img)
img.style.maxWidth ='250px'
}
