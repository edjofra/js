var but = document.querySelector('#but')
but.addEventListener('click', contar)


function contar(){
    var res = document.querySelector('#tabuada')
   
    var ini = document.getElementById('ini')
        var i = Number(ini.value)
        var n = 1
        res.innerHTML=''
        
    if (ini.value.length == 0){
        window.alert('[ERROR] preencha o formulário')
    } else{
        while (n<=10) {
        var item = document.createElement('option')
        item.text = `${i} x ${n} = ${i*n}`
        item.value = `res${n}` 
        n++
        res.appendChild(item) 
        }
    }
}
       