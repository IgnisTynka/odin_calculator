let operationDiv = document.getElementById('calculations');
let equalDiv = document.getElementById('result');

const numbers = document.querySelectorAll('.numbers');
const operators = document.querySelectorAll('.operators')
const operatorsSymbol = ['+', '-', '*', '/', '%'];

let selectedOperator = new Array;
let operatorNumber = 0;

numbers.forEach(number => {
    number.addEventListener('click', () => {
        if(equalDiv.innerText != ''){
            equalDiv.innerText = '';
            operationDiv.innerText = '';
        }
        if(operatorsSymbol.includes(operationDiv.innerText.slice(-1))){
            operatorNumber++;
        }
        
        operationDiv.innerText += number.value; 
    })
});

operators.forEach(operator => {
    operator.addEventListener('click', () => {
        if(operatorsSymbol.includes(operationDiv.innerText.slice(-1))){
            operationDiv.innerText = operationDiv.innerText.slice(0, -1) 
            operationDiv.innerText += operator.value;
        }else{
            operationDiv.innerText += operator.value;
            decimal.disabled = false;
        }
        selectedOperator[operatorNumber] = operator.value;
        console.log(selectedOperator);
    })
});

equal.addEventListener('click', () => {
    let result = 0;
    let numbersArray = [];
    let splitOperators = new RegExp()
    numbersArray = operationDiv.innerText.split(/[{+}\-{*}{/}{%}]/);
    console.log(numbersArray);
    for(i = 0; i < operatorNumber; i++){
        if(selectedOperator[i] == '+'){
            result = Number(numbersArray[0]) + Number(numbersArray[1]); 
        }else if(selectedOperator[i] == '-'){
            result = Number(numbersArray[0]) - Number(numbersArray[1]);
        }else if(selectedOperator[i] == '*'){
            result = Number(numbersArray[0]) * Number(numbersArray[1]);
        }else if(selectedOperator[i] == '/'){
            result = Number(numbersArray[0]) / Number(numbersArray[1]);
        }else if(selectedOperator[i] == '%'){
            result = Number(numbersArray[0]) % Number(numbersArray[1]);
        }
        numbersArray.shift();
        console.log(numbersArray);
        numbersArray[0] = result;

    }
    equalDiv.innerText = result;
    selectedOperator = [];
    operatorNumber = 0;
    decimal.disabled = false;
})

decimal.addEventListener('click', () => {    
    if(operationDiv.innerText == ''){
        operationDiv.innerText += '0.';
    }else{
        operationDiv.innerText += '.';
    }
    decimal.disabled = true;
})

allclear.addEventListener('click', () => {
    operationDiv.innerText = '';
    equalDiv.innerText = '';
    selectedOperator = [];
    operatorNumber = 0;
    decimal.disabled = false;
})

oneclear.addEventListener('click', () => {
    if(operationDiv.innerText.slice(-1) == '.'){
        decimal.disabled = false;
    }else if(operatorsSymbol.includes(operationDiv.innerText.slice(-1))){
        selectedOperator.pop();
    }
    operationDiv.innerText = operationDiv.innerText.slice(0, -1) 
})