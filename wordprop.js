class WordProp{
    constructor(word, x, y){
        this.value = word;
        this.possibleValue = 0;
        this.score = 0;
        this.x = x;
        this.y = y;
        // tx, ty stand for target position
        this.tx = this.x;
        this.ty = this.y;
        this.idx;
        this.fcolor = color(0);

    }

    setNewPos(nx, ny){
        this.tx = nx;
        this.ty = ny;
    }

    update() {
        // move towards the target by 10% each time
        this.x = lerp(this.x, this.tx, 0.1);
        this.y = lerp(this.y, this.ty, 0.1);
    }

    display(){
        fill(this.fcolor);
        textSize(18);
        noStroke();
        textAlign(LEFT);
        text(this.value, this.x, this.y);
    }
}