var idade = 85
console.log(`Sua idade é de ${idade} anos`)

if (idade < 16) { 
    console.log('Não vota')
}
else if(idade>18 && idade<60 ) {
    console.log('Vota Sim')
}
else if(idade >120){
    console.log('ERROR')
}
 else {
    console.log('Voto opcional')
}