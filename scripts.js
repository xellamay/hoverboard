// INITIALIZATION

initApp();

function initApp() {
    initHoverBoard();
}


// HOVERBOARD 

function paintHoverBoard() {
    const ROWS = 5;
    const COLS = 5;
    const SQUARE_SIZE = 30;

    const hoverBoard = document.querySelector(".hoverboard");

    // TODO: отрисовка
}

function initHoverBoard() {
    const hoverBoard = document.querySelector(".hoverboard");

    hoverBoard.onmouseover = function(e) {
        if (e.target.className === "square") {
            e.target.style.backgroundColor = getRandomRgbColor();
        }   
    }

    hoverBoard.onmouseout = function(e) {
        if (e.target.className === "square") {
            e.target.style.backgroundColor = "#1d1d1d";
        }
    }
}


// UTILS

function getRandomNumber(number) {
    return Math.floor(Math.random() * (number+1));
}

function getRandomRgbColor() {
    return `rgb(${getRandomNumber(255)},${getRandomNumber(255)},${getRandomNumber(255)})`;
}
