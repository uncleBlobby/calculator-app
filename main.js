let firstNumberEntered;

let firstNumberArr = [];
let secondNumberArr = [];

let firstNumberInt;
let secondNumberInt;

let setOperator;
let storeFirstNum = false;

let operatorState = false;

let result;

let digitDisplay = document.getElementById("digitDisplay");
let clickSound = document.getElementById("buttonSound");

function memOverload(){
   
    if ((firstNumberArr.length > 16) || (secondNumberArr.length > 16) ||
        (firstNumberInt > 9999999999999999) || (secondNumberInt > 9999999999999999)){
        displayMemOL();
        setTimeout(callTechSup, 3000);
        
        }
}

function displayMemOL(){
    digitDisplay.innerText = "**MEM OVERLOAD**";
}
function callTechSup(){
    digitDisplay.innerText = "**CALL TECH SUPP**";
    setTimeout(techSupNum, 3000);
}
function techSupNum(){
    digitDisplay.innerText = "**1-800-UNKL-BLB**"
}


function numberButtonPress(number){
    clickSound.play();

    if(storeFirstNum == false){
    firstNumberArr.push(number);
    digitDisplay.innerText = firstNumberArr.join("");
    firstNumberInt = Number(firstNumberArr.join(""));
    memOverload();
    //console.log(firstNumberInt);
    }
    if(storeFirstNum == true){
    
    secondNumberArr.push(number);
    digitDisplay.innerText = secondNumberArr.join("");
    secondNumberInt = Number(secondNumberArr.join(""));
    memOverload();
    //console.log(secondNumberInt);
    }
    logMem();
}

function clearButtonPress(){
    clickSound.play();
    firstNumberArr.length = 0;
    firstNumberInt = undefined;
    secondNumberArr.length = 0;
    secondNumberInt = undefined;
    storeFirstNum = false;
    setOperator = undefined;
    digitDisplay.innerText = "";
    result = undefined;
    logMem();

}

function plusButton(){
    if(operatorState == true){
        equalsButton(firstNumberInt, secondNumberInt)
    }
    
    
    if(operatorState == false){
        clickSound.play();
        setOperator = "plus";
        storeFirstNum = true;
        operatorState = true;
        logMem();
    }
    
}

function subtractButton(){
    if(operatorState == true){
        equalsButton(firstNumberInt, secondNumberInt)
    }

    if(operatorState == false){
        clickSound.play();
        setOperator = "subtract";
        storeFirstNum = true;
        operatorState = true;
        logMem();
    }
}

function multiplyButton(){
    if(operatorState == true){
        equalsButton(firstNumberInt, secondNumberInt)
    }

    if(operatorState == false){
        clickSound.play();
        setOperator = "multiply";
        storeFirstNum = true;
        operatorState = true;
        logMem();
    }
}

function divideButton(){
    if(operatorState == true){
        equalsButton(firstNumberInt, secondNumberInt)
    }

    if(operatorState == false){
        clickSound.play();
        setOperator = "divide";
        storeFirstNum = true;
        operatorState = true;
        logMem();
    }
}

function equalsButton(firstNumberInt, secondNumberInt){
    clickSound.play();
    
    if(setOperator == "plus"){
        result = firstNumberInt + secondNumberInt;
        digitDisplay.innerText = result;
        memShift();
        
    }
    if(setOperator == "subtract"){
        result = firstNumberInt - secondNumberInt;
        digitDisplay.innerText = result;
        memShift();
        
    }
    if(setOperator == "multiply"){
        result = firstNumberInt * secondNumberInt;
        digitDisplay.innerText = result;
        memShift();
        
    }
    if(setOperator == "divide"){
        result = firstNumberInt / secondNumberInt;
        digitDisplay.innerText = result;
        memShift();
        
    }
    operatorState = false;
    logMem();
    memOverload();
}

function logMem(){
    console.log(`first number: ${firstNumberInt} operator: ${setOperator} second number: ${secondNumberInt} result: ${result} operator state: ${operatorState}`);
}

function memShift(){
    firstNumberInt = result;
    secondNumberArr.length = 0;
    secondNumberInt = undefined;
    setOperator = "undefined";
    result = undefined;
}

function numberCleaner(){
    
}