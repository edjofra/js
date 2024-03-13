//MODULARIZANDO, separando

import xxx from "./mudador.js"// export default, exporta  uma única vez,  é tipo um obj de functions, importa sem {},nome xxx criado nessa pag., referencia o default e é usado antes da function especfica (xxx.fnyyy)

import { familia, automoveis} from "./mudador.js" // export normal, pode-se exportar vários, importar com {}, poderia coloca-lo dentro do default

// import xxx, { familia, automoveis} from "./mudador.js" --- outra forma de codar, com code todo junto



var ingredientes = ['mel', 'água', 'sal', 'mostarda']

console.log(xxx.ordenar(ingredientes))
console.log(xxx.capitalizar(ingredientes))
console.log(familia)
console.log(automoveis)
