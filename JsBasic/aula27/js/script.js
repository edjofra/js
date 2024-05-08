//COPY
class Validator {
    constructor(){
        this.validations = [
            'data-required',
            'data-min-length',
            'data-max-length',
            'data-email-validate',
            'data-only-letters',
            'data-equal',
            'data-pass-validation',
        ]
    }

// metodo que faz a validação de todos capos
    validate(form){
        //resgata todas validações recentes, depois limpa
        let currentValidations = document.querySelectorAll('form .error-validation')
        if(currentValidations.length > 0){
            this.cleanValidations(currentValidations)
        }
        //pegar os imputs
        let inputs = form.getElementsByTagName('input')

        // pra ser possivel dá o looping, tenho q transofrma esse HTMLcollections em Array
        let inputsArray = [...inputs]
        
        //loop nos iputs e validação no que for encontrado
        inputsArray.forEach((input) =>{
        // loop nas validaçoes q existem
        for(let i = 0; this.validations.length > i; i++){
            // verifica se a validação atual existe no input
            if(input.getAttribute(this.validations[i]) != null){
              //data-min-length ---> minlegth, limpando a string e transformando num medoto
                let metodo = this.validations[i].replace('data-', '').replace('-','')
            // valor do input 
                let value = input.getAttribute(this.validations[i])
            
            // invoque o metodo genérico
                this[metodo](input, value)
            }
        }
        },this)

       

    }

    // met p verifica se o imput tem o numer minimo de caractres
    minlength(input, minValue){
        let inputLength = input.value.length
        let errorMessage = `O campo precisa de pelo menos ${minValue} caracteres`

        if(inputLength < minValue){
            this.printmessage(input, errorMessage)
        }
    }

    // met p verifica se o imput tem o numero maxímo de caractres
    maxlength(input, maxValue){
        let inputLength = input.value.length
        let errorMessage = `O campo precisa ter no máximo ${maxValue} caracteres`

        if(inputLength > maxValue){
            this.printmessage(input, errorMessage)
        }
    }

    // met p imprimir msgs na tela
    printmessage(input, msg){

        let erros = input.parentNode.querySelector('.error-validation')

        if(erros === null){
            let template = document.querySelector('.error-validation').cloneNode(true);

       template.textContent = msg
  
      let inputParent = input.parentNode;
  
      template.classList.remove('template');
  
      inputParent.appendChild(template);
        }

    }

    // verificar se o input é requrido, se está vazio
    required(input){
        let inputValue = input.value
        
        if(inputValue === ''){
            let erroMsg = `Este campo é obrigatório`

            this.printmessage(input, erroMsg)
        }
    }

    //limpar as validações da tela
    cleanValidations(validations){

        validations.forEach(e => e.remove())

    }

    //validando e-mail via RegEx
    emailvalidate(input){
        //email@email.com
        let re = /\S+@\S+\.\S+/
        let email = input.value
        let errorMsg = 'Insira um e-mail padrão: user@email.com'

        if(!re.test(email)){

            this.printmessage(input, errorMsg)
        }

    }

    onlyletters(input){
        let re =  /^[A-Za-z]+$/
        let inputValue = input.value
        let erroMsg = 'Este campo não aceita numeros nem caracteres especiais'
        if(!re.test(inputValue)){

            this.printmessage(input, erroMsg)
        }
    }

    equal(input, inputName){

        let inputToCompare = document.getElementsByName(inputName)[0]

        let erroMsg = `Este campo deve estar igual ao ${inputName}`

        if(input.value != inputToCompare.value){
            this.printmessage(input, erroMsg)
        }

    }

    passvalidation(input){
        
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