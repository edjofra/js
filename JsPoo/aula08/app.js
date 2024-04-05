
import modificador from "./modificador.js"
import ingredientes from "./ingrediente.js"


modificador.capitalizar(ingredientes, 'nome')
modificador.ordenar(ingredientes,'nome')
modificador.real(ingredientes, 'valor')

function criar(obj){
let section = document.querySelector('.listaToda')
section.innerHTML += `
            <li class="produto">
                <p class="nomeProduto">
                ${obj.nome}
                </p>
                <p class="preco.Produto">
                ${obj.valor}
                </p>
            </li> 
`
}

function listar(){
    for(let produto of ingredientes)
    criar(produto)  
}

listar()



