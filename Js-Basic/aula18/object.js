//exemplo de Obejct:
let amigo = {nome:'Jô', 
    idade: 27, 
    peso:82.5, 
    engordar(p ){
        console.log('Engordou')
        this.peso+= p
        //o this é uma autoreferencia ao obj., não necessita escrever 'pessoa'
    } }
    
    
amigo.engordar(p=8)
console.log(`vc engordou ${p} quilos quilos e agora tem ${amigo.peso}`)
