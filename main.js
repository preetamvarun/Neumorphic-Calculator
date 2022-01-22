const calciBox = document.getElementById('mainBox');
const togglerBox = document.getElementById('tb');
const numbers = document.getElementsByClassName('num');
const operators = document.getElementsByClassName('opr');
const clearItems = document.getElementsByClassName('clr');
const resultBoard = document.getElementById('rb');
const output = document.getElementById('er');
const history = document.getElementById('calciBox');
const icon = togglerBox.firstElementChild;
let historyValue = document.getElementById('history-value');
let outputValue = document.getElementById('output-value');


/* TOGGLE THEMES */
function setDarkStyles(){
    calciBox.classList.add('dark');
    for(let i = 0; i < operator.length; i++){
        operator[i].classList.add('darkOp');
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
    for(let i = 0; i < operator.length; i++){
        operator[i].classList.remove('darkOp');
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

/* 0 . 9 */

function getHistoryValue(){
    return historyValue.textContent;
}

function setHistoryValue(value){
    historyValue.innerHTML = value;
}

function clearHistoryValue(){
    historyValue.innerHTML = "";
}

function clearOutputValue(){
    outputValue.innerHTML = "";
}

for(let i = 0; i < numbers.length; i++){
    numbers[i].addEventListener('click',function(){
        historyValue.innerHTML += numbers[i].textContent;
    })
}

/*AC DEL*/
for(let i = 0; i < clearItems.length; i++){
    clearItems[i].addEventListener('click',function(){
        if(clearItems[i].textContent === 'Del'){
            let str = getHistoryValue();
            str = str.substring(0,str.length-1);
            setHistoryValue(str);
        } else{
            clearHistoryValue();
            clearOutputValue();
        }       
    })
}

/* + - / x = */
for(let i = 0; i < operators.length; i++){

}