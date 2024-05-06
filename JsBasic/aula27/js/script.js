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
        inputsArray.forEach((input) =>{
        // loop nas validaçoes q existem
        for(let i = 0; this.validations.length > i; i++){
            // verifica se a validação atual existe no input
            if(input.getAttribute(this.validations[i]) != null){
              //data-min-length ---> minlegth, limpando a string e transformando num medoto
                let metodo = this.validations[i].replace('data-', '').replace('-','')
            // valor do input 
                let value = input.getAttribute(this.validations[i])
            
            // invoque o metodo
                this[metodo](input, value)
            }
        }
        },this)

    }
    // met p verifica se o imput tem o numer de caractres
    minlength(input, minValue){
        let inputLength = input.value.length
        let errorMessage = `O campo precisa de pelo menos ${minValue} caracteres`

        if(inputLength < minValue){
            this.printmessage(input, errorMessage)
        }
    }
    // met p imprimir msgs na tela
    printmessage(input, msg){
        let template = document.querySelector('.error-validation').cloneNode(true);

      template.textContent = msg;
  
      let inputParent = input.parentNode;
  
      template.classList.remove('template');
  
      inputParent.appendChild(template);

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