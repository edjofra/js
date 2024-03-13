var produtos = [
    {
        codigo:0,
        nome:"Burger Fogo Selvagem",
        descricao:"Um hambúrguer picante com pimentões grelhados, queijo pepper jack derretido, cebolas caramelizadas e molho de pimenta chipotle, servido em um pão de jalapeño",
        preco:29.9,
        quantidade:0,
        categoria:0,
        imagem:"burger_fogo_selvagem.png",
        promocao:true,
        disponivel:true
    },
    {
        codigo:1,
        nome:"Burger Clássico Americana",
        descricao:"Um hambúrguer de carne bovina suculenta com queijo cheddar derretido, alface crocante, tomate fresco, cebola roxa fatiada e um toque de molho especial, tudo em um pão de hambúrguer tradicional.",
        preco:29.9,
        quantidade:0,
        categoria:0,
        imagem:"burger_classico_americana.png",
        promocao:true,
        disponivel:true
    },
    {
        codigo:2,
        nome:"Burger Mediterrâneo",
        descricao:" Um hambúrguer de cordeiro temperado com especiarias mediterrâneas, coberto com queijo feta cremoso, azeitonas kalamata fatiadas, tomate seco, alface romana e molho de iogurte tzatziki, servido em um pão de pita.",
        preco:28.5,
        quantidade:0,
        categoria:0,
        imagem:"burger_mediterraneo.png",
        promocao:true,
        disponivel:true
    },
    {
        codigo:3,
        nome:"Burger Vegano Zen",
        descricao:"Um hambúrguer à base de feijão preto e cogumelos grelhados, coberto com abacate em fatias, brotos de alfafa, cebola roxa em conserva, molho de tahine e servido em um pão integral.",
        preco:28.5,
        quantidade:0,
        categoria:0,
        imagem:"burger_vegano_zen.png",
        promocao:false,
        disponivel:true
    },
    {
        codigo:4,
        nome:"Burger Sudoeste",
        descricao:" Um hambúrguer de peru temperado com especiarias tex-mex, coberto com queijo pepper jack derretido, guacamole caseiro, jalapeños em conserva, alface iceberg crocante e tomate fresco, servido em um pão de milho.",
        preco:25.0,
        quantidade:0,
        categoria:0,
        imagem:"burger_sudoeste.png",
        promocao:false,
        disponivel:true
    },
    {
        codigo:5,
        nome:"Burger da Floresta",
        descricao:"Um hambúrguer de cogumelos portobello grelhados, coberto com queijo suíço derretido, rúcula fresca, tomate seco, cebolas caramelizadas e um toque de molho balsâmico, servido em um pão de cereais.",
        preco:24.5,
        quantidade:0,
        categoria:0,
        imagem:"burger_da_floresta.png",
        promocao:false,
        disponivel:true
    },
    {
        codigo:6,
        nome:"Burger Picante Asiático",
        descricao:"Um hambúrguer de frango asiático marinado com gengibre e alho, coberto com kimchi picante, cebolinhas frescas, brotos de feijão, molho de amendoim e coentro, servido em um pão de brioche.",
        preco:24.0,
        quantidade:0,
        categoria:0,
        imagem:"burger_picante_asiatico.png",
        promocao:false,
        disponivel:true
    },
    {
        codigo:6,
        nome:"Burger Surf & Turf",
        descricao:"Um hambúrguer de carne bovina suculenta coberto com camarões grelhados, queijo gorgonzola derretido, rúcula fresca, tomate fatiado e molho de aioli de limão, servido em um pão de cebola.",
        preco:23.0,
        quantidade:0,
        categoria:0,
        imagem:"burger_surf_turf.png",
        promocao:false,
        disponivel:false
    },
    {
        codigo:7,
        nome:"Burger Texano BBQ",
        descricao:"Um hambúrguer de carne de porco desfiada em molho barbecue defumado, coberto com queijo cheddar derretido, anéis de cebola frita crocantes, picles de jalapeño e mais molho barbecue, servido em um pão de batata.",
        preco:19.99,
        quantidade:0,
        categoria:0,
        imagem:"burger_texano_BBQ.png",
        promocao:false,
        disponivel:true
    },
    {
        codigo:8,
        nome:"Burger Caprese",
        descricao:"Um hambúrguer de carne bovina suculenta, coberto com queijo mozzarella derretido, tomate fatiado, folhas de manjericão fresco, pesto de manjericão e um toque de vinagre balsâmico, servido em um pão ciabatta.",
        preco:15.0,
        quantidade:0,
        categoria:0,
        imagem:"burger_aprese.png",
        promocao:false,
        disponivel:true
    },
    {
        codigo:9,
        nome:"Burger North",
        descricao:"Um hambúrguer de carne bovina suculenta, coberto com queijo mozzarella derretido, tomate fatiado, folhas de manjericão fresco, pesto de manjericão e um toque de vinagre balsâmico, servido em um pão ciabatta.",
        preco:15.0,
        quantidade:0,
        categoria:0,
        imagem:"burger_north.png",
        promocao:false,
        disponivel:true
    },
    {
        codigo: 10,
        nome: "Carne Bovina",
        descricao: "Carne proveniente de gado bovino. Saborosa e versátil, ideal para grelhados, assados e hambúrgueres.",
        preco:20.0,
        quantidade:0,
        categoria:1,
        imagem:"carne_bovina.png",
        promocao:false,
        disponivel:true
    },
    {
        codigo: 11,
        nome: "Carne de Frango",
        descricao: "Carne branca proveniente de aves, como galinhas e frangos. Leve e saudável, ótima para grelhados, ensopados e assados.",
        preco:20.0,
        quantidade:0,
        categoria:1,
        imagem:"carne_frango.png",
        promocao:false,
        disponivel:true
    },
    {
        codigo: 12,
        nome: "Carne Suína",
        descricao: "Carne proveniente de porcos. Possui diversas cortes, sendo usada em pratos como churrasco, costelinha assada e carne de porco agridoce.",
        preco:20.0,
        quantidade:0,
        categoria:1,
        imagem:"carne_suina.png",
        promocao:false,
        disponivel:true
    },
    {
        codigo: 13,
        nome: "Carne de Cordeiro",
        descricao: "Carne proveniente de ovelhas ou cordeiros jovens. Possui um sabor característico e é comumente utilizada em guisados, assados e ensopados.",
        preco:20.0,
        quantidade:0,
        categoria:1,
        imagem:"carne_cordeiro.png",
        promocao:false,
        disponivel:true
    },
    {
        codigo: 14,
        nome: "Carne de Peixe",
        descricao: "Carne proveniente de peixes de água doce ou salgada. Leve e saudável, é frequentemente grelhada, assada ou cozida em pratos como ceviche e sushi.",
        preco:20.0,
        quantidade:0,
        categoria:1,
        imagem:"carne_peixe.png",
        promocao:false,
        disponivel:true
    },
    {
        codigo: 15,
        nome: "Carne de Peru",
        descricao: "Carne branca proveniente de perus. Mais magra que a carne de frango, é comumente consumida assada, grelhada ou desfiada em sanduíches e saladas.",
        preco:25.0,
        quantidade:0,
        categoria:1,
        imagem:"carne_peru.png",
        promocao:false,
        disponivel:false
    },
    {
        codigo: 16,
        nome: "Carne de Pato",
        descricao: "Carne proveniente de patos. Possui um sabor marcante e é frequentemente utilizada em pratos gourmet, como magret de pato grelhado.",
        preco:25.0,
        quantidade:0,
        categoria:1,
        imagem:"carne_pato.png",
        promocao:false,
        disponivel:true
    },
    {
        codigo: 17,
        nome: "Carne de Coelho",
        descricao: "Carne proveniente de coelhos. Possui uma textura macia e sabor suave, sendo comumente utilizada em ensopados, guisados e patês.",
        preco:39.9,
        quantidade:0,
        categoria:1,
        imagem:"carne_coelho.png",
        promocao:false,
        disponivel:false
    },
    {
        codigo: 18,
        nome: "Carne de Cabra",
        descricao: "Carne proveniente de cabras. Mais comum em algumas regiões do mundo, é utilizada em pratos como cabrito assado, ensopados e cozidos.",
        preco:29.9,
        quantidade:0,
        categoria:1,
        imagem:"carne_cabra.png",
        promocao:false,
        disponivel:true
    },
    {
        codigo: 19,
        nome: "Carne de Jacaré",
        descricao: "Carne exótica proveniente de jacarés. Possui uma textura semelhante à do frango e é consumida em pratos típicos de algumas regiões, como ensopados e espetinhos.",
        preco:49.9,
        quantidade:0,
        categoria:1,
        imagem:"carne_jacare.png",
        promocao:false,
        disponivel:true
    },
    {
        codigo: 20,
        nome: "Porção de Batata Frita",
        descricao: "Porção generosa de batatas fritas crocantes, servidas com molho de maionese caseira.",
        preco:20.0,
        quantidade:0,
        categoria:2,
        imagem:"batata_frita.png",
        promocao:false,
        disponivel:true
    },
    {
        codigo: 21,
        nome: "Porção de Onion Rings",
        descricao: "Deliciosas rodelas de cebola empanadas e fritas, servidas com molho barbecue para mergulhar.",
        preco:20.0,
        quantidade:0,
        categoria:2,
        imagem:"onion_rings.png",
        promocao:false,
        disponivel:true
    },
    {
        codigo: 22,
        nome: "Porção de Coxinha de Frango",
        descricao: "Porção de mini coxinhas de frango, recheadas com um delicioso creme de frango e fritas até ficarem crocantes.",
        preco:20.0,
        quantidade:0,
        categoria:2,
        imagem:"coxinha_frango.png",
        promocao:false,
        disponivel:false
    },
    {
        codigo: 23,
        nome: "Porção de Mandioca Frita",
        descricao: "Fatias de mandioca cozida e fritas até dourar, servidas com molho de pimenta.",
        preco:20.0,
        quantidade:0,
        categoria:2,
        imagem:"mandioca_frita.png",
        promocao:false,
        disponivel:true
    },
    {
        codigo: 24,
        nome: "Porção de Bolinho de Bacalhau",
        descricao: "Pequenos bolinhos de bacalhau, feitos com batata, bacalhau desfiado e temperos, fritos até ficarem dourados e crocantes.",
        preco:20.0,
        quantidade:0,
        categoria:2,
        imagem:"bolinho_bacalhau.png",
        promocao:false,
        disponivel:true
    },
    {
        codigo: 25,
        nome: "Refrigerante de Cola",
        descricao: "Bebida gaseificada com sabor característico de cola, refrescante e adocicada.",
        preco:7.5,
        quantidade:0,
        categoria:3,
        imagem:"refrigerante_cola.png",
        promocao:false,
        disponivel:true
    },
    {
        codigo: 26,
        nome: "Suco de Laranja Natural",
        descricao: "Suco natural espremido de laranjas frescas, rico em vitamina C e refrescante.",
        preco:5.0,
        quantidade:0,
        categoria:3,
        imagem:"suco_laranja.png",
        promocao:false,
        disponivel:true
    },
    {
        codigo: 27,
        nome: "Água Mineral com Gás",
        descricao: "Água mineral gaseificada, refrescante e com um toque de efervescência.",
        preco:2.5,
        quantidade:0,
        categoria:3,
        imagem:"agua_gas.png",
        promocao:false,
        disponivel:true
    },
    {
        codigo: 28,
        nome: "Chá Gelado de Pêssego",
        descricao: "Chá preto gelado aromatizado com suco natural de pêssego, levemente adocicado e refrescante.",
        preco:8.0,
        quantidade:0,
        categoria:3,
        imagem:"cha_gelado_pessego.png",
        promocao:false,
        disponivel:true
    },
    {
        codigo: 29,
        nome: "Limonada Caseira",
        descricao: "Bebida refrescante feita com suco de limão fresco, água, açúcar e gelo, equilibrada entre o doce e o azedo.",
        preco:5.0,
        quantidade:0,
        categoria:3,
        imagem:"limonada_caseira.png",
        promocao:false,
        disponivel:true
    },
    {
        codigo: 30,
        nome: "Smoothie de Morango e Banana",
        descricao: "Bebida cremosa feita com morangos frescos, banana, iogurte natural e um toque de mel, nutritiva e refrescante.",
        preco:9.5,
        quantidade:0,
        categoria:3,
        imagem:"moothie_morango_banana.png",
        promocao:false,
        disponivel:true
    },
    {
        codigo: 31,
        nome: "Café Gelado",
        descricao: "Café forte e gelado, servido com cubos de gelo, refrescante e energizante.",
        preco:7.5,
        quantidade:0,
        categoria:3,
        imagem:"cafe_gelado.png",
        promocao:false,
        disponivel:false
    },
    {
        codigo: 32,
        nome: "Milkshake de Baunilha",
        descricao: "Bebida cremosa e gelada feita com sorvete de baunilha, leite e essência de baunilha, doce e reconfortante.",
        preco:15.0,
        quantidade:0,
        categoria:3,
        imagem:"milkshake_baunilha.png",
        promocao:false,
        disponivel:true
    },
    {
        codigo: 33,
        nome: "Suco Detox de Couve e Abacaxi",
        descricao: "Suco verde feito com couve fresca, abacaxi, limão e gengibre, refrescante e cheio de nutrientes.",
        preco:10.0,
        quantidade:0,
        categoria:3,
        imagem:"suco_detox_couve_abacaxi.png",
        promocao:false,
        disponivel:true
    },
    {
        codigo: 34,
        nome: "Iced Tea de Manga e Maracujá",
        descricao: "Chá gelado com sabor tropical de manga e maracujá, levemente adocicado e refrescante.",
        preco:9.0,
        quantidade:0,
        categoria:3,
        imagem:"iced_tea_maracuja.png",
        promocao:false,
        disponivel:true
    }

];

var categorias = [
    {
        codigo:0,
        nome:"Hamburgues"
    },
    {
        codigo:1,
        nome:"Carne na chapa"
    },
    {
        codigo:2,
        nome:"Porções"
    },
    {
        codigo:3,
        nome:"Bebidas"
    },
    {
        codigo:4,
        nome: "Bolos"
    }
];

function init(){
    ListarTudo()
    mostrarCategoriasMenu()
    listandoTodosProdutosPromocao()
    
    }
init()

function criarCardCategoria(item){
    
    var listaMenu = document.getElementById('lista-menu')
    listaMenu.innerHTML += `<a href="#" class="item">${item.nome}</a> `

}
function mostrarCategoriasMenu(){
    for(index in categorias){
        var categoria = categorias[index]
        criarCardCategoria(categoria)
    }
}

function cardProdutosPromocao (prato) {

    var promocao = document.querySelector('#lista-promocoes')
    
    promocao.innerHTML+=`
    <div class="card-promocoes">
        <img src="imagens/${prato.imagem}" alt="${prato.nome}" class="img-promocoes">
        <p class="texto-promocoes">${prato.nome}</p>
        
        <p class="preco-promocoes">${formatarMoeda(prato.preco)}</p>
    </div>
    `
}
function listandoTodosProdutosPromocao (){
    for (key in produtos){
    var produto = produtos[key]
        if(produto.promocao == true ){
    cardProdutosPromocao (produto)
        }
    }
    
}

function cardsRetangulos (cards){
 
    var lista = document.querySelector('.lista')
    lista.innerHTML+=`<li class="card-retangulo">
                          <img src="imagens/${cards.imagem}" alt="${cards.nome}" class="img-retangulo">
  
                          <div class="info">
                              <h3>${cards.nome}</h3>
                              <p class="descricao">${cards.descricao}</p>
                              <p class="price">${formatarMoeda(cards.preco)}</p>
                              </div>
                          </li>`
                        
} 
function ListarTudo(){
      for(key in produtos){
      var produto = produtos[key]
      cardsRetangulos(produto)
      }
}
      
function formatarMoeda(value){
   return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}



