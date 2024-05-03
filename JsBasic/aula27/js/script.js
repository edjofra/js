//criando um objeto
class Validator {
    constructor(){
        this.validations = [
            'data-min-length',
        ]
    }

// metodo que faz a validação de todos capos
    validate(form){
        //pegar os imputs
        let inputs = form.getElementsByTagName('input')
        // pra ser possivel dá o looping, tenho q transofrma esse HTMLcollections em Array
       
        let inputsArray = [...inputs]
        //loop nos iputs e validação no que for encontrado
        inputsArray.forEach((input) => {
            //loop com todas as validações q existem
            for(let i = 0; this.validations.length > i; i++){
                if(input.getAttribute(this.validations[i]) =! null){
                    input.getAttribute(this.validations[i])
                    console.log('ACHOOOU')
                }
            }
        

        })


    }

}

let validator = new Validator()
// seleção de elementos
const form = document.querySelector('#register-form')
const submit = document.querySelector('#btn-submit')


//evento
submit.addEventListener('click', (e) => {
    e.preventDefault()
    validator.validate(form);
})