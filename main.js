let firstNumberEntered;

let firstNumberArr = [];
let secondNumberArr = [];

let digitDisplay = document.getElementById("digitDisplay");


function numberButtonPress(number){

    firstNumberArr.push(number);
    digitDisplay.innerText = firstNumberArr.join("");

}

function clearButtonPress(){

    firstNumberArr.length = 0;
    secondNumberArr.length = 0;
    digitDisplay.innerText = "";

}