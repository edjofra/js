var but = document.querySelector('#but')
but.addEventListener('click', contar)
/*style.background = 'red'*/

function contar(){
    var res = document.querySelector('#res')
   
    var ini = document.getElementById('ini')
         var i = Number(ini.value)
    var fim = document.getElementById('fim')
         var f = Number(fim.value)
    var pas = document.getElementById('pas')
        var p = Number(pas.value)
    if (ini.value.length == 0 || fim.value.length==0 || pas.value.lenth==0){
        window.alert('[ERROR] preencha totos os formulários')
    }   else {
            res.innerHTML= 'Contando... <br>'
            if(p<=0){
                window.alert('[ERROR] o passo não pode ter o valor 0 ou negativo! considerado o valor = 1')
                p = 1
            }
        if(i<f){
            //contagem crescente
            for (i; i<=f; i+=p){
            res.innerHTML+= `${i} \u{1F449}`
        }
            //contagem regressiva
        }else if(i>f){
            for (i; i>=f; i-=p)
            res.innerHTML+= `${i} \u{1F449}`
        }
            res.innerHTML+= `\u{1F3C1}`
        }
    } 

    

    
