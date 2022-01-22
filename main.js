const calciBox = document.getElementById('mainBox');
const togglerBox = document.getElementById('tb');
const toggleButtons = document.getElementsByClassName('operator');
const numbers = document.getElementsByClassName('num');
const operators = document.getElementsByClassName('opr');
const clearItems = document.getElementsByClassName('clr');
const resultBoard = document.getElementById('rb');
const output = document.getElementById('er');
const history = document.getElementById('calciBox');
const icon = togglerBox.firstElementChild;
let historyValue = document.getElementById('history-value');
let outputValue = document.getElementById('output-value');

function getHistoryValue(){
    return historyValue.textContent;
}

function getOutputValue(){
    return outputValue.textContent;
}

function clearHistoryValue(){
    historyValue.innerHTML = "";
}

function clearOutputValue(){
    outputValue.innerHTML = "";
}

/* 0 . 9 */
for(let i = 0; i < numbers.length; i++){
    numbers[i].addEventListener('click',function(){
        historyValue.innerHTML += numbers[i].textContent;
        try{
            outputValue.innerHTML = eval(historyValue.innerHTML);  
        }
        catch(err){
            outputValue.textContent = "Format Error!";
            outputValue.classList.add('error');
        }
    });
}

/* + - / x = */
for(let i = 0; i < operators.length; i++){
    operators[i].addEventListener('click', function(){
        if(operators[i].textContent === "="){
            historyValue.innerHTML = getOutputValue();
            clearOutputValue();
        } else{
            historyValue.innerHTML += operators[i].textContent;
        }
    })
}

/*AC DEL*/
for(let i = 0; i < clearItems.length; i++){
    clearItems[i].addEventListener('click',function(){
        if(clearItems[i].textContent === 'Del'){
            let str = getHistoryValue();
            str = str.substring(0,str.length-1);
            historyValue.innerHTML = str;
        } else{
            clearHistoryValue();
            clearOutputValue();
        }       
    })
}

/* TOGGLE THEMES */
function setDarkStyles(){
    calciBox.classList.add('dark');
    for(let i = 0; i < toggleButtons.length; i++){
        toggleButtons[i].classList.add('darkOp');
    } 
    resultBoard.classList.add('darkResultBox');
    togglerBox.classList.add('darkBox');
    icon.classList.add('y');
    history.classList.add('calcDark');
    output.classList.add('endResultDarkMode');
    console.log(output);
}

function setBrightStyles(){
    calciBox.classList.remove('dark');
    for(let i = 0; i < toggleButtons.length; i++){
        toggleButtons[i].classList.remove('darkOp');
    }
    resultBoard.classList.remove('darkResultBox');
    togglerBox.classList.remove('darkBox');
    icon.classList.remove('y');
    history.classList.remove('calcDark');
    output.classList.remove('endResultDarkMode');
    console.log(output);
}

togglerBox.addEventListener('click', function(){
    if(icon.classList.contains('fa-sun')){
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
        setDarkStyles();
    } else{
        icon.classList.add('fa-sun');
        icon.classList.remove('fa-moon');
        setBrightStyles();
    }
});