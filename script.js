function add(a,b){
    return a+b;
}

function subtract(a,b){
    return a-b;
}

function multiply(a,b){
    return a*b;
}

function divide(a,b){
    return a/b;
}

function operate(operator,firstNum,secondNum){
    firstNum = parseInt(firstNum);
    secondNum = parseInt(secondNum);
    if(operator === '+'){
        return add(firstNum,secondNum);
    }
    else if(operator === '-'){
        return subtract(firstNum,secondNum);
    }
    else if(operator === '*'){
        return multiply(firstNum,secondNum);
    }
    else if(operator === '/'){
        return divide(firstNum,secondNum);
    }
}

// let firstNum
// let secondNum = prompt("Enter second number: ");
// let operator = prompt("Enter the operator"); 
// operate(operator,firstNum,secondNum);

let display = document.querySelector('.display-area');
let num 

let one = document.querySelector('.one');
one.addEventListener('click',(event)=>{
    let displayRow = document.createElement('div');
    displayRow.textContent = event.target.textContent;
    display.appendChild(displayRow);
    num = display.textContent;
    console.log(num);
})

let two = document.querySelector('.two');
two.addEventListener('click',(event)=>{
    let displayRow = document.createElement('div');
    displayRow.textContent = event.target.textContent;
    display.appendChild(displayRow);
    num = display.textContent;
    console.log(num);
})

let three = document.querySelector('.three');
three.addEventListener('click',(event)=>{
    let displayRow = document.createElement('div');
    displayRow.textContent = event.target.textContent;
    display.appendChild(displayRow);
    num = display.textContent;
    console.log(num);
})

let four = document.querySelector('.four');
four.addEventListener('click',(event)=>{
    let displayRow = document.createElement('div');
    displayRow.textContent = event.target.textContent;
    display.appendChild(displayRow);
    num = display.textContent;
    console.log(num);
})

let five = document.querySelector('.five');
five.addEventListener('click',(event)=>{
    let displayRow = document.createElement('div');
    displayRow.textContent = event.target.textContent;
    display.appendChild(displayRow);
    num = display.textContent;
    console.log(num);
})

let six = document.querySelector('.six');
six.addEventListener('click',(event)=>{
    let displayRow = document.createElement('div');
    displayRow.textContent = event.target.textContent;
    display.appendChild(displayRow);
    num = display.textContent;
    console.log(num);
})

let seven = document.querySelector('.seven');
seven.addEventListener('click',(event)=>{
    let displayRow = document.createElement('div');
    displayRow.textContent = event.target.textContent;
    display.appendChild(displayRow);
    num = display.textContent;
    console.log(num);
})

let eight = document.querySelector('.eight');
eight.addEventListener('click',(event)=>{
    let displayRow = document.createElement('div');
    displayRow.textContent = event.target.textContent;
    display.appendChild(displayRow);
    num = display.textContent;
    console.log(num);
})

let nine = document.querySelector('.nine');
nine.addEventListener('click',(event)=>{
    let displayRow = document.createElement('div');
    displayRow.textContent = event.target.textContent;
    display.appendChild(displayRow);
    num = display.textContent;
    console.log(num);
})

let zero = document.querySelector('.zero');
zero.addEventListener('click',(event)=>{
    let displayRow = document.createElement('div');
    displayRow.textContent = event.target.textContent;
    display.appendChild(displayRow);
    num = display.textContent;
    console.log(num);
})
// let digits = document.querySelectorAll('.digits');
let operator = document.querySelectorAll('.operator');
let operatorSign
let equal = document.querySelector('.equal');
let firstNum
let secondNum
let intermediate
// let displayRow
// let button
let clear = document.querySelector('.clear');
// digits.forEach(item=>{
//   item.addEventListener('click',(event)=>{
//     displayRow = document.createElement('div')
//     displayRow.classList.add('displayRow')
//     button = event.target.textContent;
//     displayRow.textContent = button;
//     display.appendChild(displayRow);  
operator.forEach(item=>{
    item.addEventListener('click', (event)=>{
        firstNum = display.textContent;
        console.log(`first num -> ${firstNum}`);
        display.textContent = '';
        operatorSign = event.target.textContent;
        equal.addEventListener('click',()=>{
            secondNum = display.textContent;
            console.log(`second num -> ${secondNum}`);
            intermediate = operate(operatorSign,firstNum,secondNum);
            display.textContent = intermediate;
            console.log(intermediate);
        })
    })
})

clear.addEventListener('click',()=>{
    display.textContent = '';
    firstNum = 0;
    secondNum = 0;
})


// displayRow.textContent = button;//
// console.log(button);
// display.appendChild(displayRow);