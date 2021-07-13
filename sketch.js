var archer
var monster1, monster2, monster3, monster4, monster5
var arrow
var score
var archerImage, monsterImg, arrowImage
var arrowsGroup

var monstersGroup

function preload() {
  arrowImage = loadImage("Images/Arrow.png");
  monsterImg = loadImage("Images/Monster.gif");
  archerImage = loadImage("Images/Archer.png");
}

function setup() {
  createCanvas(displayWidth, displayHeight);
  
  monsterGroup = new Group()

  monster1 = new Monsters(50)
  monster1.body.addImage(monsterImg);
  monster1.body.scale = 0.2;
  
  monsterGroup.add(monster1.body)
  

  monster2 = new Monsters(170)
  monster2.body.addImage(monsterImg);
  monster2.body.scale = 0.2;

  monsterGroup.add(monster2.body)
  
  monster3 = new Monsters(width-250);
  monster3.body.addImage(monsterImg);
  monster3.body.scale = 0.2;

  monsterGroup.add(monster3.body)
  
  monster4 = new Monsters(width-350)
  monster4.body.addImage(monsterImg);
  monster4.body.scale = 0.2;

  monsterGroup.add(monster4.body)
  
  monster5 = new Monsters(width-430)
  monster5.body.addImage(monsterImg);
  monster5.body.scale = 0.2;

  monsterGroup.add(monster5.body)
  
  archer = createSprite(750,800)
  archer.addImage(archerImage);
  score = 0
  
  arrowsGroup = new Group()

}

function draw() {
  background(255,255,255); 
  monster1.display() 
  monster2.display()
  monster3.display()
  monster4.display()
  monster5.display()

  /*console.log(displayWidth, displayHeight);

  console.log(mouseX, mouseY);*/

  if (keyDown("LEFT_ARROW")){
    archer.x = archer.x -10
  }

  if (keyDown("RIGHT_ARROW")){
    archer.x = archer.x +10
  }
if (keyDown("SPACE")){
  createArrow();
}

    for(var i = 0; i < arrowsGroup.length;i++){
      for(var j = 0; j < monsterGroup.length;j++){
        if (arrowsGroup.get(i).isTouching(monsterGroup.get(j))){
          monsterGroup.get(j).destroy();
          arrowsGroup.get(i).destroy();
          score=score+1
      }
      }
  }

  drawSprites();
  text("Score: "+ score, 500,50);

}

function createArrow(){
    arrow= createSprite(archer.x, archer.y, 30, 30);
    arrow.addImage(arrowImage);
    arrow.x = archer.x;
    arrow.velocityY = -25
    arrow.lifetime = 150;
    arrow.scale = 0.4;
    arrowsGroup.add(arrow)
  }

