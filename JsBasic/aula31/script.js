//hasAttribuite, getAttribuite, setAttribuite -- são complementos do query/getById, q tratam dos atribuitos(genéricos) do elementos selecionados,pergutando/pucha/altera

//hasAttribuite - perguta se tem attr, resposta boolean
console.log(document.querySelector('.classQualquer').hasAttribute('id'))

//getAttribuite - pega o valor/nome que está dentro do attr, resposta string

let nameClass = document.querySelector('#idGet')
console.log(nameClass.getAttribute('class'))

//setAttribuite - altera, editando ou inovando, os attr no elementos

let setElement = document.querySelector('#idSet')
// oldWay - setElement.style.color='red'
setElement.setAttribute('style','color: red')
setElement.setAttribute('class', 'Newclass')
console.log(setElement)