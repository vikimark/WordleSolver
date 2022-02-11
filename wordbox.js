class Wordbox{
    constructor(nChar, length, padding, x, y){
        this.nChar = nChar;
        this.length = length;
        this.padding = padding;
        this.x = x;
        this.y = y;

        this.wordlist = [];
        this.wordlistIndex = 0;
        this.answerIndex = 0;

        this.init();
    }

    init(){
        this.wordlist = [];
        for(let i=0; i<this.nChar; i++){
            this.wordlist.push(new WordChar('', i));
        }
        this.wordlistIndex = 0;
        this.answerIndex = 0;
    }

    draw(){
        stroke(0);
        fill(255);
        strokeWeight(2);
        for(let i=0; i<this.nChar; i++){
            rect(this.x + i*(this.length + this.padding), this.y, this.length, this.length)
        }

        for(let j=0; j<this.nChar; j++){
            if(this.wordlist[j].isGray){
                fill(121, 124, 126);
            }else if(this.wordlist[j].isGreen){
                fill(121, 168, 107);
            }else if(this.wordlist[j].isYellow){
                fill(197, 181, 102);
            }else fill(255);
            noStroke();
            rect(this.x + j*(this.length + this.padding), this.y, this.length, this.length);
        }

        // textFont(this.font, 16);
        textAlign(CENTER);
        noStroke();
        textSize(24);
        for(let j=0; j<this.wordlist.length; j++){
            if(this.wordlist[j].isYellow || this.wordlist[j].isGreen || this.wordlist[j].isGray){
                fill(255);
            }else fill(0);
            text(this.wordlist[j].value.toUpperCase(), (this.x + this.length/2) + j*(this.length + this.padding), this.y + this.length/2 + 9);
        }
    }

    isClick(){
        if(mouseX >= this.x && mouseX <= this.x + this.nChar * (this.padding + this.length) && mouseY >= this.y && mouseY <= this.y + this.length){
            return true;
        }else return false;
    }

    input(key){
        key = key.toLowerCase();
        if(this.wordlistIndex < this.nChar){
            this.wordlist[this.wordlistIndex].value = key;
            if(this.wordlistIndex < this.nChar - 1){ // make sure WLI not more than nChar
                this.wordlistIndex++;
            }    
        }
        if(this.wordlistIndex >= this.nChar - 1 && this.wordlist[this.wordlistIndex].value != ''){
            return 1;
        }
        else return 0;
    }

    delete(){
        if(this.wordlistIndex > 0){
            if(this.wordlist[this.wordlistIndex].value == ''){
                this.wordlistIndex--;
            }
            this.wordlist[this.wordlistIndex].value = '';
            return 0;
        }else {
            console.log("can not go back furthermore!");
            return 0;
        }
    }

    inAnswer(key){
        // if(this.answer.length < this.nChar){
        //     this.answer.push(key);
        // }
        // if(this.answer.length >= this.nChar){
        //     return 1;
        // }
        // else return 0;

        if(this.answerIndex < this.nChar){
            if(key == '1'){
                this.wordlist[this.answerIndex].isGray = true;
            }else if(key == '2'){
                this.wordlist[this.answerIndex].isGreen = true;
            }else if(key == '3'){
                this.wordlist[this.answerIndex].isYellow = true;
            }
            if(this.answerIndex < this.nChar - 1){ // make sure ALI not more than nChar
                this.answerIndex++;
            }
        }
        if(this.answerIndex >= this.nChar - 1 && (this.wordlist[this.answerIndex].isGray || this.wordlist[this.answerIndex].isGreen || this.wordlist[this.answerIndex].isYellow)){
            return 1;
        }else return 0;
    }

    deleteAnswer(){
        if(this.answerIndex > 0){
            if(this.answerIndex > 0){
                this.answerIndex--;
                this.wordlist[this.answerIndex].resetAns();
            }
            return 0;
        }else return -1;
    }
}