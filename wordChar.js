class WordChar{
    constructor(key, order){
        this.isGreen = false;
        this.isYellow = false;
        this.isGray = false;
        this.value = key;
        this.order = order;
    }

    resetAns(){
        this.isGreen = false;
        this.isYellow = false;
        this.isGray = false;
    }
}