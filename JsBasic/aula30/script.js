// Constructor = metodo para definir propiedades(caracteristicas) e metodos(ações) de objts

//OLD way
const member1 = {
    nome: 'JO',
    idade: 28,
    cor: 'verde',
    peso: 80.5
}
const member2 = {
    nome: 'Dê',
    idade: 31,
    cor: 'preto',
    peso: 90.5
}

//CONSTRUCTOR WAY
function Family(nome, idade, cor, p){
    this.nome = nome
    this.idade = idade
    this.cor = cor
    this.peso = p
    this.quem = function(){console.log(`Vc é ${this.nome}`)}//não necessita por parametro nem formal, nem real
}

const member3 = new Family('Juh', 30, 'Rosa', 70.3)
const member4 = new Family('Nandra', 25, 'Rosa', 68.25)
console.log(member4.nome)
member3.quem()
console.log(Family)

