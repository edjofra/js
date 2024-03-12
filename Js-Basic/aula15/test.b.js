let a = [3,5,4,1]
/*Burro way:
console.log(`${a[0]}`)
console.log(`${a[1]}`)
console.log(`${a[2]}`)
console.log(`${a[3]}`)*/
/*Jeito inteligente:
console.log(`O array/veto 'a' possui esses elementos:${a}`)
for (let p = 0; p < a.length; p++){
    console.log(`O índice ${p} tem como conteúdo ${a[p]}`)
}*/
console.log(`O array/veto 'a' possui esses elementos:${a}`)
for ( p in a ){
    console.log(`O índice ${p} tem como conteúdo ${a[p]}`)
}