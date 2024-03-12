let nump = [2,3,5]
console.log(`${nump}`)
nump[3] = 7
console.log(`${nump}`)
nump.push(0)
console.log(`${nump}`)
nump.sort()
console.log(`${nump}`)
console.log(`Nesse array existem ${nump.length} elementos`)
console.log(`${nump.indexOf(2)}`)

console.log(`O vetor/array 'nump' possui os seguines elementos : [${nump}]`)
for (i = 0; i < nump.length; i++){
    console.log(`O indice/index(key) ${i} tem o conteúdo/valor ${nump[i]}`)
}
