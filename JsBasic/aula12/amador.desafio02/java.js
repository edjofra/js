style.background = 'pink'
  function clicar(){
    var ano = document.querySelector('#ano')
    var n = Number(ano.value)
    var data = new Date()
    var year = data.getFullYear()
    var s =  year - n
    var res = document.querySelector('#res')
    var sex = document.getElementsByName('radsex')
    var nac = document.getElementsByName('radnac')
   
    
if (n == 0 || n>2024 || n<1900 ){
    window.alert('ERRO, tente novamente')
}
    
 else if(sex[0].checked && nac[0].checked){
     if(s<18){
        res.innerHTML=` você é um JOVEM BRAZUCA de ${s} anos`
    }else if(s<60){
        res.innerHTML=` você é um HOMEN BRAZUCA de ${s} anos`
    }else if(s<100){
        res.innerHTML=` você é um VELHO BRAZUCA de ${s} anos`
    }}else if(sex[0].checked && nac[1].checked){
        if(s<18){
           res.innerHTML=` você é um JOVEM GRINGO de ${s} anos`
       }else if(s<60){
           res.innerHTML=` você é um HOMEN GRINGO de ${s} anos`
       }else if(s<100){
           res.innerHTML=` você é um VELHO GRINGO de ${s} anos`
       }
} else if(sex[1].checked && nac[0].checked){
    if(s<18){
       res.innerHTML=` você é uma JOVEM BRAZUCA de ${s} anos`
   }else if(s<60){
       res.innerHTML=` você é uma MULHER BRAZUCA de ${s} anos`
   }else if(s<100){
       res.innerHTML=` você é uma VELHA BRAZUCA de ${s} anos`  
   }}
   else if(sex[1].checked && nac[1].checked){
    if(s<18){
       res.innerHTML=` você é uma JOVEM GRINGA de ${s} anos`
   }else if(s<60){
       res.innerHTML=` você é uma MULHER GRINGA de ${s} anos`
   }else if(s<100){
       res.innerHTML=` você é uma VELHA GRINGA de ${s} anos`
   }}
   else if(sex[2].checked){
    if(nac[0].checked){ 
        res.innerHTML=` você é uma PESSOA BRAZUCA de ${s} anos`    
    } else if(nac[1].checked){
        res.innerHTML=` você é uma PESSOA GRINGA de ${s} anos`
    }

    
   } else{
    window.alert('ERRO, tente novamente')
   }

}