const screenWidth = 600;
const screenHeight = 600;
const wlength = 5;
const length = 50;
const x = 35;
const y = 40;
const padding = 5;

let answerMode = false;
let wordbundle;

function setup(){
    createCanvas(screenWidth, screenHeight);
    wordbundle = new Wordbundle(6, wlength, length, padding, x, y);
    
}

function draw(){
    background(255);
    wordbundle.show();

}

function keyPressed(){
    if(answerMode && key >= '1' && key <= '3'){
        answerMode = wordbundle.inAnswer(key);
        console.log("answerPressed : index " + wordbundle.index);
    }
    if(key >= 'a' && key <= 'z' && !answerMode){
        answerMode = wordbundle.input(key);
        console.log("keypressed : index" + wordbundle.index);
    }

    if(keyCode == BACKSPACE){
        answerMode = wordbundle.delete(answerMode);
        console.log("backspacePressed : answerMode " + answerMode);
    }
}