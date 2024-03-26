function pesquisar(){
    let input = document.querySelector('#search').value
    input = input.toLowerCase()
    let x = document.getElementsByClassName('animals')


    for(let i in x){
        if(!x[i].innerHTML.toLocaleLowerCase().includes(input)){
            x[i].style.display = 'none'
        } else{
            x[i].style.display = ''
        }
    }

   
}

