
// ..........................................................ВЕРХНИЕ ВКЛАДКИ И ПОЛЯ........................................................
let i;
let tabcontent;
let tablinks;

function openField(name, elmnt, color) {
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].style.backgroundColor = "";
    }
    document.getElementById(name).style.display = "flex";
    elmnt.style.backgroundColor = color;
}

document.getElementById("defaultOpen").click();


// .....................................................МОДАЛЬНОЕ ОКНО РЕГИСТРАЦИЯ..........................................
const modal2 = document.getElementById('myModal2');
const btn2 = document.getElementById('myBtn2');
const span2 = document.getElementsByClassName('close2')[0];

btn2.onclick = function() {
    modal2.style.display = "block";
}

span2.onclick = function() {
    modal2.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal2) {
        modal2.style.display = "none";
    }
}


// ..............................................ПРОВЕРКА НА ВАЛИДНОСТЬ РЕГИСТРАЦИИ..........................................
const nameField = document.getElementById('login');
const emailField = document.getElementById('email');
const textField = document.getElementById('subject');
const submit = document.querySelector('.submit');
const sendButton = document.getElementById('send');

function validate() {
    if(nameField.validity.valid && emailField.validity.valid && textField.validity.valid) {
        sendButton.classList.remove('invalid');
    }
    else {
        sendButton.classList.add('invalid');
    }
}

nameField.addEventListener('input', () => {
    validate();
});

emailField.addEventListener('input', () => {
    validate();
});

textField.addEventListener('input', () => {
    validate();
});

submit.onclick = function(event) {
    if(!sendButton.classList.contains('invalid')) {
        modal2.style.display = "none";
        event.preventDefault();
    }
}


// .................................................СМЕНА СТИЛЕЙ КНОПОК В НАСТРОЙКАХ..............................
const one = document.getElementById('one');
const two = document.getElementById('two');
const six = document.getElementById('six');
const seven = document.getElementById('seven');
const eight = document.getElementById('eight');
const cho = document.querySelector('.cho');
const shirt = document.querySelector('.shirt');
const shirt2 = document.querySelector('.shirt2');

function styleOffSize() {
    one.classList.remove('cho');
    two.classList.remove('cho');
}

function styleOffName() {
    six.classList.remove('cho');
    seven.classList.remove('cho');
    eight.classList.remove('cho');
}

one.addEventListener('click', (event) => {
    styleOffSize();
    one.classList.add('cho');
});

two.addEventListener('click', (event) => {
    styleOffSize();
    two.classList.add('cho');
});

six.addEventListener('click', (event) => {
    styleOffName();
    six.classList.add('cho');
});

seven.addEventListener('click', (event) => {
    styleOffName();
    seven.classList.add('cho');
});

eight.addEventListener('click', (event) => {
    styleOffName();
    eight.classList.add('cho');
});


// .................................................ТАЙМЕР........................................
const start = document.getElementById('start');
const stope = document.getElementById('stop');
const timers = document.querySelector('.timers');
const pause = document.querySelector('.pause');
const well = document.querySelector('.well');
let isGameStarted = false;
let isGamePaused = false;
let minCount = 0;
let secCount = 0;
let noname;

function startStopTime () {
    if (isGameStarted && !isGamePaused) {
        if (secCount < 3000) {
            secCount++;
        }
        else {
            minCount++
            secCount = 0;
        }
        timers.textContent = addZero(minCount) + ' : ' + addZeroSec(secCount);
        noname = setTimeout(startStopTime, 20);
    }
}
 
function addZero(n) {
    if (n < 10) {
        return '0' + String(n);
    }
    else {
        return String(n);
    }
    
}

function addZeroSec(n) {
    n = Math.floor(n / 50);
    if (n < 10) {
        return '0' + String(n);
    }
    else {
        return String(n);
    }
    
}

start.addEventListener('click', (event) => {
    isGamePaused = false;
    isGameStarted = true;
    startStopTime();
});

function pauseGame () {
    if (isGameStarted) {
        if (isGamePaused === false) {
            isGamePaused = true;
        }
        else {
            isGamePaused = false;
        }
    } 
}

pause.addEventListener('click', (event) => {
    pauseGame();
});

stope.addEventListener('click', (event) => {
    for (let i = 0; i < picChips.length; i++) {
        picChips[i].style.backgroundImage = 'url("assets/31.png")'
        picChips[i].style.opacity = '1';
    };
    if (isGameStarted = true) {
        isGameStarted = false
        minCount = 0;
        secCount = 0;
        timers.textContent = addZero(minCount) + ' : ' + addZeroSec(secCount);
    } 
});

// .................................................ИГРОВОЕ ПОЛЕ........................................................
const picChips = document.querySelectorAll('.picChips');
const gameContent = document.querySelector('.gameContent');
const gameContent2 = document.querySelector('.gameContent2');
const poorly = document.querySelector('.poorly');
let modal = document.getElementById('myModal');
const plant = {
    nec1:  'url("assets/pl/1.png")',
    nec2:  'url("assets/pl/8.png")',
    nec3:  'url("assets/pl/3.png")',
    nec4:  'url("assets/pl/6.png")',
    nec5:  'url("assets/pl/4.png")',
    nec6:  'url("assets/pl/7.png")',
    nec7:  'url("assets/pl/5.png")',
    nec8:  'url("assets/pl/2.png")',
    nec9:  'url("assets/pl/7.png")',
    nec10: 'url("assets/pl/8.png")',
    nec11: 'url("assets/pl/3.png")',
    nec12: 'url("assets/pl/6.png")',
    nec13: 'url("assets/pl/5.png")',
    nec14: 'url("assets/pl/2.png")',
    nec15: 'url("assets/pl/4.png")',
    nec16: 'url("assets/pl/1.png")',
    nec17: 'url("assets/pl/9.png")',
    nec18: 'url("assets/pl/11.png")',
    nec19: 'url("assets/pl/14.png")',
    nec20: 'url("assets/pl/15.png")',
    nec21: 'url("assets/pl/16.png")',
    nec22: 'url("assets/pl/10.png")',
    nec23: 'url("assets/pl/13.png")',
    nec24: 'url("assets/pl/12.png")',
    nec25: 'url("assets/pl/16.png")',
    nec26: 'url("assets/pl/18.png")',
    nec27: 'url("assets/pl/17.png")',
    nec28: 'url("assets/pl/18.png")',
    nec29: 'url("assets/pl/9.png")',
    nec30: 'url("assets/pl/14.png")',
    nec31: 'url("assets/pl/11.png")',
    nec32: 'url("assets/pl/17.png")',
    nec33: 'url("assets/pl/12.png")',
    nec34: 'url("assets/pl/15.png")',
    nec35: 'url("assets/pl/13.png")',
    nec36: 'url("assets/pl/10.png")'
};
const animal = {
    nec1:  'url("assets/ani/1.png")',
    nec2:  'url("assets/ani/8.png")',
    nec3:  'url("assets/ani/3.png")',
    nec4:  'url("assets/ani/6.png")',
    nec5:  'url("assets/ani/4.png")',
    nec6:  'url("assets/ani/7.png")',
    nec7:  'url("assets/ani/5.png")',
    nec8:  'url("assets/ani/2.png")',
    nec9:  'url("assets/ani/7.png")',
    nec10: 'url("assets/ani/8.png")',
    nec11: 'url("assets/ani/3.png")',
    nec12: 'url("assets/ani/6.png")',
    nec13: 'url("assets/ani/5.png")',
    nec14: 'url("assets/ani/2.png")',
    nec15: 'url("assets/ani/4.png")',
    nec16: 'url("assets/ani/1.png")',
    nec17: 'url("assets/ani/9.png")',
    nec18: 'url("assets/ani/11.png")',
    nec19: 'url("assets/ani/14.png")',
    nec20: 'url("assets/ani/15.png")',
    nec21: 'url("assets/ani/16.png")',
    nec22: 'url("assets/ani/10.png")',
    nec23: 'url("assets/ani/13.png")',
    nec24: 'url("assets/ani/12.png")',
    nec25: 'url("assets/ani/16.png")',
    nec26: 'url("assets/ani/18.png")',
    nec27: 'url("assets/ani/17.png")',
    nec28: 'url("assets/ani/18.png")',
    nec29: 'url("assets/ani/9.png")',
    nec30: 'url("assets/ani/14.png")',
    nec31: 'url("assets/ani/11.png")',
    nec32: 'url("assets/ani/17.png")',
    nec33: 'url("assets/ani/12.png")',
    nec34: 'url("assets/ani/15.png")',
    nec35: 'url("assets/ani/13.png")',
    nec36: 'url("assets/ani/10.png")'
};
const food = {
    nec1:  'url("assets/fod/1.png")',
    nec2:  'url("assets/fod/8.png")',
    nec3:  'url("assets/fod/3.png")',
    nec4:  'url("assets/fod/6.png")',
    nec5:  'url("assets/fod/4.png")',
    nec6:  'url("assets/fod/7.png")',
    nec7:  'url("assets/fod/5.png")',
    nec8:  'url("assets/fod/2.png")',
    nec9:  'url("assets/fod/7.png")',
    nec10: 'url("assets/fod/8.png")',
    nec11: 'url("assets/fod/3.png")',
    nec12: 'url("assets/fod/6.png")',
    nec13: 'url("assets/fod/5.png")',
    nec14: 'url("assets/fod/2.png")',
    nec15: 'url("assets/fod/4.png")',
    nec16: 'url("assets/fod/1.png")',
    nec17: 'url("assets/fod/9.png")',
    nec18: 'url("assets/fod/11.png")',
    nec19: 'url("assets/fod/14.png")',
    nec20: 'url("assets/fod/15.png")',
    nec21: 'url("assets/fod/16.png")',
    nec22: 'url("assets/fod/10.png")',
    nec23: 'url("assets/fod/13.png")',
    nec24: 'url("assets/fod/12.png")',
    nec25: 'url("assets/fod/16.png")',
    nec26: 'url("assets/fod/18.png")',
    nec27: 'url("assets/fod/17.png")',
    nec28: 'url("assets/fod/18.png")',
    nec29: 'url("assets/fod/9.png")',
    nec30: 'url("assets/fod/14.png")',
    nec31: 'url("assets/fod/11.png")',
    nec32: 'url("assets/fod/17.png")',
    nec33: 'url("assets/fod/12.png")',
    nec34: 'url("assets/fod/15.png")',
    nec35: 'url("assets/fod/13.png")',
    nec36: 'url("assets/fod/10.png")'
};
let active = plant;
let nomerHoda = 0; // первый или второй
let lastClick; // dataset предыдущей карточки
let lastKard; // предыдущая карточка
let correct = 0; // счетчик совпадений
let size = 18; // разные размеры окна

for (let i = 0; i < picChips.length; i++) {
    picChips[i].style.backgroundImage = 'url("assets/31.png")';
    let pressed = picChips[i];
    pressed.addEventListener('click', (event) => {
        if (!isGamePaused && isGameStarted) {     
            if (pressed.style.backgroundImage === 'url("assets/31.png")') {
                if (nomerHoda === 2) {
                    nomerHoda = 0;
                }
                nomerHoda++;
                pressed.style.backgroundImage = active[pressed.dataset.kard];
                if (nomerHoda === 2) {
                    if (active[pressed.dataset.kard] === active[lastClick]) {
                        // подсвечиваем зеленым, делаем некликабельным
                        let clickOne1 = lastKard;
                        let clickTwo1 = pressed;
                        clickOne1.classList.add('well');
                        clickTwo1.classList.add('well');
                        setTimeout(function () {
                            clickOne1.style.opacity = '0.4';
                            clickTwo1.style.opacity = '0.4';
                            clickOne1.classList.remove('well');
                            clickTwo1.classList.remove('well');
                        }, 900);
                        correct++;
                        if (correct === size) {
                            pauseGame ();
                            modal.style.display = 'block';
                            correct = 0;
                        }
                    }
                    else {
                        // переворачиваем карточки обратно 
                        let clickOne = lastKard;
                        let clickTwo = pressed;
                        clickOne.classList.add('poorly');
                        clickTwo.classList.add('poorly');
                        setTimeout(function () {
                            clickOne.style.backgroundImage = 'url("assets/31.png")';
                            clickTwo.style.backgroundImage = 'url("assets/31.png")';
                            clickOne.classList.remove('poorly');
                            clickTwo.classList.remove('poorly');
                        }, 900);
                    }
                }
                lastClick = pressed.dataset.kard;
                lastKard = pressed;
            } 
        }; 
    });
};

// кнопки выбора игрового поля и карточек
eight.addEventListener('click', (event) => {
    active = plant;
    for (let i = 0; i < picChips.length; i++) {
        picChips[i].style.backgroundImage = 'url("assets/31.png")';
    };
});

seven.addEventListener('click', (event) => {
    active = food;
    for (let i = 0; i < picChips.length; i++) {
        picChips[i].style.backgroundImage = 'url("assets/31.png")';
    };
});

six.addEventListener('click', (event) => {
    active = animal;
    for (let i = 0; i < picChips.length; i++) {
        picChips[i].style.backgroundImage = 'url("assets/31.png")';
    };
});

one.addEventListener('click', (event) => {
    size = 8;
    gameContent.style.display = 'none';
    gameContent2.style.display = 'flex';
});

two.addEventListener('click', (event) => {
    size = 18;
    gameContent2.style.display = 'none';
    gameContent.style.display = 'flex';
});


//............................................................МОДАЛЬНОЕ ОКНО - ОКОНЧАНИЕ ИГРЫ...................................................
const butOk = document.querySelector('.butOk');

butOk.addEventListener('click', (event) => {
    modal.style.display = 'none';
    minCount = 0;
    secCount = 0;
    timers.textContent = addZero(minCount) + ' : ' + addZeroSec(secCount);
    for (let i = 0; i < picChips.length; i++) {
        picChips[i].style.backgroundImage = 'url("assets/31.png")';
        picChips[i].style.opacity = '1';
    };
});