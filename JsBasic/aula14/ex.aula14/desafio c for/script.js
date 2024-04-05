var but = document.querySelector('#but')
but.addEventListener('click', contar)


function contar(){
    var tab = document.querySelector('#tabuada')
   
    var ini = document.getElementById('ini')
        var i = Number(ini.value)
        var c = 1
        tab.innerHTML=''
        
    if (ini.value.length == 0){
        window.alert('[ERROR] preencha o formulário')
    } else{
        for (c;c<=10;c++){
        var item = document.createElement('option')
        item.text=`${i} x ${c} = ${i*c}`
        item.value= `v${c}`
        tab.appendChild(item)
        }
    }
}
 function finalizar(){
    
 }
       