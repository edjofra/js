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
        let previous = +this.previousOperationText.innerText
        let current = +this.currentOperationText.innerText

        switch(operation){
            case '+':
                result = previous + current
                this.updateScreen(result, operation, current, previous)
                break;
            default:
                return;
        }

      
    }

    // change de values of calc screen
    updateScreen(
       result = null, 
        operation = null, 
        current = null, 
        previous = null){
            this.currentOperationText.innerText += `${result} ${operation} ${current} ${previous}`
           
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

