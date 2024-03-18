
import modificador from "./modificador.js"
import ingredientes from "./ingrediente.js"

function criar(objeto){
    var lista = document.querySelector('.listaToda')
    lista.innerHTML += ` <li class="produto">
    <p class="nomeProduto">
    ${objeto.nome}    
    </p>
     <p class="preco.Produto">
   Preco
     </p>`
}

function listar(){
    
    // for(let i = 0; i < ingredientes.length; i++ ){
    //     let tudo = ingredientes[i]
    //     criar(tudo)
    // }

    for (let i in ingredientes){
        let tudo = ingredientes[i]
        criar(tudo)
    }

    // for (let tudo of ingredientes) {

    //    criar(tudo)
    // }
}

listar()

// function cardsRetangulos (cards){
 
//     var lista = document.querySelector('.lista')
//     lista.innerHTML+=`<li class="card-retangulo">
//                           <img src="imagens/${cards.imagem}" alt="${cards.nome}" class="img-retangulo">
  
//                           <div class="info">
//                               <h3>${cards.nome}</h3>
//                               <p class="descricao">${cards.descricao}</p>
//                               <p class="price">${formatarMoeda(cards.preco)}</p>
//                               </div>
//                           </li>`
                        
// } 
// function ListarTudo(){
//       for(key in produtos){
//       var produto = produtos[key]
//       cardsRetangulos(produto)
//       }
// }
