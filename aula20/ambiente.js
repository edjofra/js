let familia = [
    {nome: 'Jojo',
    idade: 28,
    cor: 'vermelha',
    hobbies:  ["ler", "assisistir", "malhar"]
    },
    {
    nome: 'Dê',
    idade: 31,
    cor: 'Preto',
    hobbies: ['camping', 'programar']
    }

]

familia.push({nome: 'Juju', idade: 29, cor: 'rosa', hobbies:['series', 'novelas']})

familia.unshift({nome: 'Nandra', idade: 25, cor: 'rosa', hobbies:['filmes', 'novelas']})

familia.splice(2,0,{nome: 'Bianca', idade: 29, cor: 'preto', hobbies:['filmes', 'livros']})


let exemp = [2,3,5,7,1,4,6]
exemp.sort()

let achar = familia.find(a => a.cor == 'rosa')

let filtrar = familia.filter( f => f.cor == 'rosa')

let time = familia.map(i => i.idade +=5)
console.log()


familia.forEach(v =>{
    v['vitalidade'] = 'pessoa nova'
    if(v.idade>30){
      v['vitalidade'] = 'pessoa velha'
    }
})
console.log()