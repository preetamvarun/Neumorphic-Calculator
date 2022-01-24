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
let operatorsArr = ["+","-","*","/"];
let isDark = false;

function clearHistoryValue(){
    historyValue.innerHTML = "";
}

function clearOutputValue(){
    outputValue.innerHTML = "";
}

function getOutputValue(){
    return eval(historyValue.innerHTML);
}

function setTimeOut(){
    setTimeout(function(){
        historyValue.innerHTML = "";   
    },2000);
}

// Calculating percentage manually because eval function is not working accurately on percentages
function calculatePercentage(str ,num){
    num = Number(num);
    number = Number(str);
    return (number/100) * num;
}

function calci(x){

    if(outputValue.classList.contains('error')){
        outputValue.classList.remove('error');
    }

    if(historyValue.classList.contains('error')){
        historyValue.classList.remove('error');
    }

    // dealing with + - / *
    if(operatorsArr.indexOf(x.textContent) !== -1){
        historyValue.innerHTML += x.textContent;
    }

    // dealing with =
    else if(x.textContent === "="){
        clearOutputValue();
        try{
            if(isNaN(getOutputValue())){
                historyValue.innerHTML = "Can't perform";
            } else{
                historyValue.innerHTML = getOutputValue();
            }
            if(historyValue.textContent === "Can't perform" || historyValue.textContent === 'Infinity' || historyValue.textContent === '-Infinity'){
                historyValue.classList.add('error');
                setTimeOut();
            }
        } 
        catch(err){
            historyValue.textContent = 'Format Error!';
            historyValue.classList.add('error');   
            setTimeOut();
        }
    }

    // dealing with %
    else if(x.textContent === "%"){
        if(historyValue.textContent !== ""){
            historyValue.innerHTML += x.textContent;
        }
    }

    // dealing with numbers 
    else{
        historyValue.innerHTML += x.textContent;
        if(historyValue.textContent[historyValue.textContent.length - 2] === "%"){
            let x = calculatePercentage(outputValue.textContent , historyValue.textContent[historyValue.textContent.length - 1] );
            historyValue.innerHTML = x;
        }
        try{
            console.log(getOutputValue());
            if(isNaN(getOutputValue())){
                outputValue.innerHTML = "Can't Perform";
                outputValue.classList.add('error');
            } else if(getOutputValue() === Infinity || getOutputValue() === -Infinity){
                outputValue.innerHTML = "Infinity";
                outputValue.classList.add('error');
            }
            else{
                outputValue.innerHTML = getOutputValue();
            }
        } catch(err){
            outputValue.textContent = "Format Error!";
            outputValue.classList.add('error');
        }
    }
}


/* 0 . 9 */
for(let i = 0; i < numbers.length; i++){
    numbers[i].addEventListener('click',function(){
        // if (resultArr.indexOf(historyValue.innerHTML) !== -1) calci(numbers[i]);
        if(historyValue.innerHTML !== 'Format Error!' && historyValue.innerHTML !== '-Infinity'
        && historyValue.innerHTML !== "Can't perform" && historyValue.innerHTML != 'Infinity'
        ) calci(numbers[i]);
    });
}

/* + - / x =  %*/
for(let i = 0; i < operators.length; i++){
    operators[i].addEventListener('click', function(){
        if(historyValue.innerHTML !== 'Format Error!' && historyValue.innerHTML !== '-Infinity'
        && historyValue.innerHTML !== "Can't perform" && historyValue.innerHTML !== 'Infinity'
        ) calci(operators[i]);
    });
}

/*AC DEL*/
for(let i = 0; i < clearItems.length; i++){
    clearItems[i].addEventListener('click',function(){

        if(clearItems[i].textContent === 'Del'){

            clearOutputValue();

            let str = historyValue.innerHTML;

            if(str === 'Infinity' || str === "Can't perform" || str === 'Format Error!' || str === '-Infinity'){
                clearHistoryValue();
            }

            else{
                str = str.substring(0,str.length-1);
                historyValue.innerHTML = str;
            }
        } 
        
        else{
            clearHistoryValue();
            clearOutputValue();
        }       
    });
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
}

togglerBox.addEventListener('click', function(){
    if(icon.classList.contains('fa-sun')){
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
        localStorage.setItem('mode', JSON.stringify('dark-mode'));
        setDarkStyles();
    } else{
        icon.classList.add('fa-sun');
        icon.classList.remove('fa-moon');
        localStorage.setItem('mode', JSON.stringify('bright-mode'));
        setBrightStyles();
    }
});


document.addEventListener('DOMContentLoaded', function(){
    let x;
    // if the browswer is loaded for the first time
    if(localStorage.getItem('mode') === null){
        x = 'bright-mode';
        localStorage.setItem('mode', JSON.stringify(x));
    } else{
        x = JSON.parse(localStorage.getItem('mode'));
        if(x === 'dark-mode'){
            setDarkStyles();
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
        } else{
            setBrightStyles();
            icon.classList.add('fa-sun');
            icon.classList.remove('fa-moon');
        }
    }
});