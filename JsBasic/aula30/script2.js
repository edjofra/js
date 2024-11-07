class bigClass{

    constructor(){
        this.valido = [
            'data-requered',
            'data-nome-check',
            'data-email-check',
            'data-senha-check',
            'data-min-length',
        ]
    }

    checando(dado){
        let currentValidations = document.querySelectorAll('form')
        if(currentValidations.length > 0){
            this.cleanValidations(currentValidations)
        }
       let todo = document.getElementsByTagName('input')
       let todoArray = [...todo]

        todoArray.forEach((input)=>{
           
            for(let i = 0; i < this.valido.length; i++){
                if(input.getAttribute(this.valido[i]) =! null ){
                    let metodo = this.valido[i].replace('data-','').replace('-','')
                    let nameAttr = input.getAttribute(this.valido[i])

                    this[metodo](nameAttr,input)

                }
            }
        }, this)

    }

    requered(input){
        let inputValue = input.inputValue
        if(inputValue === ''){
            let ErroMsg = 'Algum Campo está em brnaco'

            this.printMsg(input,ErroMsg)
        }

    
    }
  
    minlength(input, minV){
        let inputLength = input.value.inputLength
        let erroMsg = `POUCO DEMAIS, possui apenas ${inputLength}, necessita de no mínimo ${minV}`
        if(inputLength<minV){
            this.printMsg(input, erroMsg)
        }
            }
    printMsg(input, errorMsg){
        let resultado = document.querySelector('#res')

        resultado.innerHTML = `${errorMsg}`

    }

    cleanValidations(validations){

        validations.forEach(e => e.remove())
    
    }
    nomecheck(){

    }
    emailcheck(){

    }
    senhacheck(){

    }
}

let testeFatal = new bigClass

const form = document.querySelector('form')

let resultado = document.querySelector('#res')

let but1 = document.querySelector('#btn')



but1.addEventListener('click',  (e) => {

    e.preventDefault()
    testeFatal.checando(form)

} )

let but2 = document.querySelector('#btn2')
but2.addEventListener('click', function(){
    resultado.innerHTML = ''
})
