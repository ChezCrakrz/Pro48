class Monsters{
    constructor(x){
        this.x = x;
        this.body = createSprite(x, 353, 100, 100)
    }
    display(){
        drawSprites();
    }
}