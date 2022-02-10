const screenWidth = 600;
const screenHeight = 600;
const wlength = 5;
const length = 50;
const x = 35;
const y = 40;
const padding = 5;

let isMouse = false;

let answerMode = false;
let wordbundle;

function setup(){
    createCanvas(screenWidth, screenHeight);
    wordbundle = new Wordbundle(6, wlength, length, padding, x, y);
    answerInputs = [];
    for(let i=0; i<3; i++){
        answerInputs.push(new AnswerInput(i+1, 0, 42 + 90 * i, 440, 70));
    }
    answerInputs[0].color = color(121, 124, 126);
    answerInputs[1].color = color(121, 168, 107);
    answerInputs[2].color = color(197, 181, 102);
    frameRate(60);
    
}

function draw(){
    background(255);
    wordbundle.show();
    textSize(16);
    textAlign(CENTER);
    text("Gain information : " + wordbundle.get_inf_gained_length() + " word(s)", 3 * width / 4, 12 * height / 100);
    text("Possible answer : " + wordbundle.get_pos_word_length() + " word(s)", 3 * width / 4, 60 * height/100);
    if(isMouse){
        text("Mouse Pressed", 50, 20);
    }
    if(answerMode){
        answerInputs.forEach(element => {
            element.draw();
        });
    }


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

function mousePressed(){
    if(wordbundle.wordboxes[wordbundle.index].isClick()){
        answerMode = false;
        wordbundle.wordboxes[wordbundle.index].init();
        let txt = prompt("Enter 5 letters word");
        if(txt == null || txt.length != 5){
            console.log("Invalid word");
        }
        else {
            txt = txt.toLowerCase();
            for(let i=0; i<txt.length; i++){
                let char = txt.charAt(i);
                answerMode = wordbundle.input(char);
            }
        }
    }   
    
    if(answerMode){
        answerInputs.forEach(element => {
            if(element.isClick()){
                answerMode = wordbundle.inAnswer(element.value);
            }
        });
    }
}