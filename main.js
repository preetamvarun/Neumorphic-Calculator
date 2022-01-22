const calciBox = document.getElementById('mainBox');
const togglerBox = document.getElementById('tb');
const operator = document.getElementsByClassName('operator');
const resultBoard = document.getElementById('rb');
const endResult = document.getElementById('er');
const calculations = document.getElementById('calciBox');
const icon = togglerBox.firstElementChild;


function setDarkStyles(){
    calciBox.classList.add('dark');
    for(let i = 0; i < operator.length; i++){
        operator[i].classList.add('darkOp');
    }
    resultBoard.classList.add('darkResultBox');
    togglerBox.classList.add('darkBox');
    icon.classList.add('y');
    calculations.classList.add('calcDark');
    endResult.classList.add('endResultDarkMode');
}

function setBrightStyles(){
    calciBox.classList.remove('dark');
    for(let i = 0; i < operator.length; i++){
        operator[i].classList.remove('darkOp');
    }
    resultBoard.classList.remove('darkResultBox');
    togglerBox.classList.remove('darkBox');
    icon.classList.remove('y');
    calculations.classList.remove('calcDark');
    endResult.classList.add('endResultDarkMode');
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

for(let i = 0; i < operator.length; i++){
    let value = operator[i].firstElementChild.textContent;
    // operator[i].addEventListener('click', function(){
    //     displayArea.innerHTML += value;
    // })
    operator[i].addEventListener('click', function(){
        if(value === "="){
            endResult.style.display = 'block';
            // console.log(endResult);
        }
    })
}