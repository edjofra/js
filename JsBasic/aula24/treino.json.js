var ingredientes = [
    {
        "codigo":0,
        "nome":"Burger Fogo Selvagem",
        "descricao":"Um hambúrguer picante com pimentões grelhados, queijo pepper jack derretido, cebolas caramelizadas e molho de pimenta chipotle, servido em um pão de jalapeño",
        "valor":29.9,
        "quantidade":0,
        "categoria":0,
        "imagem":"burger_fogo_selvagem.png",
        "promocao":true,
        "disponivel":true
    },
    {
        "codigo":1,
        "nome":"Burger Clássico Americana",
        "descricao":"Um hambúrguer de carne bovina suculenta com queijo cheddar derretido, alface crocante, tomate fresco, cebola roxa fatiada e um toque de molho especial, tudo em um pão de hambúrguer tradicional.",
        "valor":29.9,
        "quantidade":0,
        "categoria":0,
        "imagem":"burger_classico_americana.png",
        "promocao":true,
        "disponivel":true
    },
    {
        "codigo":2,
        "nome":"Burger Mediterrâneo",
        "descricao":" Um hambúrguer de cordeiro temperado com especiarias mediterrâneas, coberto com queijo feta cremoso, azeitonas kalamata fatiadas, tomate seco, alface romana e molho de iogurte tzatziki, servido em um pão de pita.",
        "valor":28.5,
        "quantidade":0,
        "categoria":0,
        "imagem":"burger_mediterraneo.png",
        "promocao":true,
        "disponivel":true
    }
]

var produtos = [
    {
        nome: 'mel',
        valor: 2.50
    },

    {
        nome: 'água',
        valor: 1.00

    },
    {
        nome: 'mostarda',
        valor: 3.20

    },
    
]

var x = JSON.stringify(produtos)

console.log(produtos)
console.log(x)

var y = JSON.parse(x)
console.log(y)

var z = JSON.stringify(ingredientes)
console.log(z)
