var agora = new Date()
var diaSem = agora.getDay()
console.log(diaSem)

/*
O 'new Date()' e o 'x.getDay()' está dentro do
sistema Js, que considerando os dias da semanas atribui essa numeração:

0 = Domingo
1 = Segunda
2 = Terça 
3 = Quarta 
4 = Quinta
5 = Sexta
6 = Sábado
Posso ignorar essas duas ferramentas q servem para dizer o dia de hj, e ao inves ir na variálvel diaSem é atribuir os valores de 0-6, ia funcionar de igual modo 
*/


switch (diaSem) {
    case 0:
        console.log('Domingo')
        break;
    case 1:
        console.log('Segunda')
        break
    case 2:
        console.log('Terça')
        break
    case 3:
        console.log('Quarta')
        break
    case 4:
        console.log('Quinta')
        break
    case 5:
        console.log('Sexta')
        break
    case 6:
        console.log('Sábado')
        break
    default:
        console.log('{[ERROR]Dia inválido')
        break;
}