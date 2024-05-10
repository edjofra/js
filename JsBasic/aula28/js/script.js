const previousOperationText = document.querySelector('#previous-operations')
const currentOperationText = document.querySelector('#current-operations')
const buttons = document.querySelectorAll('#buttons-container button')

class Calculator{

    constructor(previousOperationText, currentOperationText){

        this.previousOperationText = previousOperationText
        this.currentOperationText = currentOperationText
        this.currentOperation = '' 
    }

    //add digit to calculator screen
    addDigit(digit){

    // check if current operation already has a dot
    if(digit === '.' &&  this.currentOperationText.innerText.includes('.')){
        return
    }
        this.currentOperation = digit
        this.updateScreen(digit)
    }

    //process all operations

    processOperation(operation){
        //get Current and Previous values to operate
        let operationValue; 
        const previous = +this.previousOperationText.innerText
        const current = +this.currentOperationText.innerText

        switch(operation){
            case '+':
                operationValue = previous + current
                this.updateScreen(operationValue, operation, current,previous)
                break;
            default:
                return;
        }

      
    }

    // change de values of calc screen
    updateScreen(
        operationValue = null, 
        operation = null, 
        current = null, 
        previous = null){
            console.log(operationValue, operation, current, previous)
       
            this.currentOperationText.innerText += this.currentOperation
        
    }

}

const calc = new Calculator(previousOperationText, currentOperationText)

buttons.forEach( (btn) => {
    btn.addEventListener('click', (e) => {
        const value = e.target.innerText

        if(+value >= 0 || value === '.'){
           calc.addDigit(value)
        } else{
            calc.processOperation(value)
        }

    } )
}
)

