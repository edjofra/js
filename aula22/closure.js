
//Jeito usual de utilizar/relacionar um var e function de escopo global  
const nomeTodo = 'Edjofra Marques do Nascimento'

const editeNome = nome =>{
    const fatie = nome.split(" ")
    return `${fatie[0]} ${fatie[fatie.length - 1]}`
}

console.log(editeNome(nomeTodo))

//Utilizando Closure, uma função child(formateNome) q utiliza as variaáves (n) da funçao parent (nomeCompleto)

const nomeCompleto = () =>{
    const n = 'Antonio Edvandro do Nascimento'
    
    const formateNome = () => {
        const partes = n.split(" ")
        return `${partes[0]} ${partes[partes.length - 1]}`
    }

    return formateNome
}

const minhaClosure = nomeCompleto()
console.log(minhaClosure())
