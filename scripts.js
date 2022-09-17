const squareList = document.querySelectorAll(".square");

squareList.forEach((item) => {
    item.onmouseover = function() {
        const rndCol = "rgb(" + random(255) + "," + random(255) + "," + random(255) + ")";
        item.style.backgroundColor = rndCol;
    }
})

function random(number) {
    return Math.floor(Math.random() * (number+1));
}

squareList.forEach((item) => {
    item.onmouseout = function() {
        item.style.backgroundColor = "#1d1d1d";
    }
})