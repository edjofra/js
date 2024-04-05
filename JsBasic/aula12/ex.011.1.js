var idade = 1150
console.log(`Sua idade é de ${idade} anos`)

if (idade < 16) { 
    console.log('Não vota')
}
else if(idade>18 && idade<60 ) {
    console.log('Vota Sim')
}
 else {
    console.log('Voto opcional')
}