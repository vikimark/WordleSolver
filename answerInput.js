class AnswerInput{
    constructor(value, colors, x, y, length){
        this.x = x;
        this.y = y;
        this.width = length;
        this.height = length;
        this.value = String(value);
        this.color = color(colors);

    }

    draw(){
        fill(this.color);
        rect(this.x, this.y, this.width, this.height);
    }

    isClick(){
        if(mouseX >= this.x && mouseX <= this.x + this.width && mouseY >= this.y && mouseY <= this.y + this.height){
            return true;
        }else return false;
    }

}