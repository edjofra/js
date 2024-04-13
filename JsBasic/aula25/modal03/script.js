const butao = document.querySelector('button')
const modal = document.querySelector('dialog')
const butaoClose = document.querySelector('dialog button')

butao.onclick = function(){
    modal.showModal()
}
butaoClose.onclick = function(){
    modal.close()
}