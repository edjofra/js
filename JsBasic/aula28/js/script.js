const previousOpertationText = document.querySelector('#previous-operation')
const currentOperationText = document.querySelector('#current-operation')
const buttons = document.querySelectorAll('#buttons-container button')

class Calculator{
    constructor( previousOpertationText, currentOperationText) {
        //não need operar com DOM, trago pra dentro do objeto
       this.previousOpertationText = previousOpertationText
       this.currentOperationText = currentOperationText
       
       //oq esta sendo digitado no momento
       this.currentOperation = ''

    }
    //add digit to calculator screen
    addDigit(digit){
        //check if has a dot
        if(digit === '.' && this.currentOperationText.innerText.includes('.')){
            return
        }
        
        this.currentOperation = digit
        this.updateScreen()
    }

    //process all calculator operations
    processOperation(operation){
        // check if current value is empty
        if(currentOperationText.innerText === '' && operation !== 'C'){
            if(this.previousOpertationText.innerText !== ''){
                //chenge operation
                this.changeOperation(operation)
            }
            return
            
        }


        //get current and previous values
        let operationValue;
        let previous = +this.previousOpertationText.innerText.split(" ")[0]
        let current = +this.currentOperationText.innerText
       
        switch(operation){
            case '+':
                operationValue = previous + current
                this.updateScreen(operationValue, operation, previous, current)
                break;
            case '-':
                operationValue = previous - current
                this.updateScreen(operationValue, operation, previous, current)
                break;    
            case '*':
                operationValue = previous * current
                this.updateScreen(operationValue, operation, previous, current)
                break;
            case '/':
                operationValue = previous / current
                this.updateScreen(operationValue, operation, previous, current)
                break;

            case 'DEL':
                this.processDel()
                break;

            case 'CE':
                this.processClear()
                break;

            case 'C':
                this.processClearAll()
                break;

            case '=':
                this.processEqual()
                break;
                        
            default:
                return;
        }

    }

    //Change values of calculator screen
    updateScreen(
        operationValue = null, 
        operation = null, 
        previous = null, 
        current = null
    ){
        console.log(operationValue, operation, previous, current)

       if(operationValue === null){
        this.currentOperationText.innerText += this.currentOperation 
       }else{
            //check if is Zero
            if(previous === 0){
                operationValue = current
            }
            //current value to previous (on top)

            this.previousOpertationText.innerText = `${operationValue} ${operation}`
            this.currentOperationText.innerText =''

       }
    }

    changeOperation(operation){
        const mathOperation = ['+','-','*','/']
        if(!mathOperation.includes(operation)){
            return
        }

        this.previousOpertationText.innerText = this.previousOpertationText.innerText.slice(0,-1) + operation
    }

    processDel(){
        this.currentOperationText.innerText = this.currentOperationText.innerText.slice(0, -1)
    }

    processClear(){
        this.currentOperationText.innerText = ''
    }

    processClearAll(){
        this.currentOperationText.innerText = ''
        this.previousOpertationText.innerText = ''
    }

    processEqual(){

        const operation =  previousOpertationText.innerText.split(' ')[1]

        this.processOperation(operation)

    }

}

const calc = new Calculator(previousOpertationText, currentOperationText)

buttons.forEach((btn) => {
    btn.addEventListener('click', (e) => {
       const value = e.target.innerText
       //convertendo os valores em numeros
       if(+value >= 0 || value === '.'){
        calc.addDigit(value)
       } else{
        calc.processOperation(value)
       }
    })
})


