const calciBox = document.getElementById('mainBox');
const togglerBox = document.getElementById('tb');
const operator = document.getElementsByClassName('operator');
const resultBoard = document.getElementById('rb');
const icon = togglerBox.firstElementChild;


function setDarkStyles(){
    calciBox.classList.add('dark');
    for(let i = 0; i < operator.length; i++){
        operator[i].classList.add('darkOp');
    }
    rb.classList.add('darkRb');
    togglerBox.classList.add('darkBox');
    icon.classList.add('y');
}

function setBrightStyles(){
    calciBox.classList.remove('dark');
    for(let i = 0; i < operator.length; i++){
        operator[i].classList.remove('darkOp');
    }
    rb.classList.remove('darkRb');
    togglerBox.classList.remove('darkBox');
    icon.classList.remove('y');
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
