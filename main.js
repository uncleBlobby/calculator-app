let firstNumberEntered;

let firstNumberArr = [];
let secondNumberArr = [];

let firstNumberInt;
let secondNumberInt;

let setOperator;
let storeFirstNum = false;

let result;

let digitDisplay = document.getElementById("digitDisplay");
let clickSound = document.getElementById("buttonSound");


function numberButtonPress(number){
    clickSound.play();

    if(storeFirstNum == false){
    firstNumberArr.push(number);
    digitDisplay.innerText = firstNumberArr.join("");
    firstNumberInt = Number(firstNumberArr.join(""));
    //console.log(firstNumberInt);
    }
    if(storeFirstNum == true){
    
    secondNumberArr.push(number);
    digitDisplay.innerText = secondNumberArr.join("");
    secondNumberInt = Number(secondNumberArr.join(""));
    //console.log(secondNumberInt);
    }

}

function clearButtonPress(){
    clickSound.play();
    firstNumberArr.length = 0;
    secondNumberArr.length = 0;
    digitDisplay.innerText = "";

}

function plusButton(){
    clickSound.play();
    setOperator = "plus";
    storeFirstNum = true;
}

function subtractButton(){
    clickSound.play();
    setOperator = "subtract";
    storeFirstNum = true;
}

function multiplyButton(){
    clickSound.play();
    setOperator = "multiply";
    storeFirstNum = true;
}

function divideButton(){
    clickSound.play();
    setOperator = "divide";
    storeFirstNum = true;
}

function equalsButton(firstNumberInt, secondNumberInt){
    clickSound.play();
    
    if(setOperator == "plus"){
        result = firstNumberInt + secondNumberInt;
        digitDisplay.innerText = result;
    }

}