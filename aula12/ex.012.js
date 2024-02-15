
var hr = 12
console.log(`Agora são exatamentee ${hr} horas!`)
if (hr<5) {
    console.log('Bom madrugada!')
} else if(hr<12){
    console.log('Bom dia')
} else if(hr<18) { 
    console.log('Boa tarde!')
    
} else if(hr<24){
    console.log('Bom noite')
} else{
    console.log('[ERROR] Hora inválida')
}