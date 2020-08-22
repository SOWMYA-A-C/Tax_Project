//Create variables here
var soldier, soldierImg;
var farmer1, farmer1Img;
var s1, s2, s3, s4, s5, s6, s7, s8, s9;
var s1Img, s2Img, s3Img, s4Img, s5Img, s6Img, s7Img, s8Img, s9Img;
var p1, p2, p3, p4, p5, p6, p7, p8;
var p1Img, p2Img, p3Img, p4Img, p5Img, p6Img, p7Img, p8Img;
//added with initial value
var flag="initial";

function preload(){
soldierImg = loadImage("images/soldier.png");
farmer1Img = loadImage("images/farmer1.png");

  s1Img = loadImage("images/s1.png");
  s2Img = loadImage("images/s2.png");
  s3Img = loadImage("images/s3.png");
  s4Img = loadImage("images/s4.png");
  s5Img = loadImage("images/s5.png");
  s6Img = loadImage("images/s6.png");
  s7Img = loadImage("images/s7.png");
  s8Img = loadImage("images/s8.png");
  s9Img = loadImage("images/s9.png");

  p1Img = loadImage("images/p1.png");
  p2Img = loadImage("images/p2.png");
  p3Img = loadImage("images/p3.png");
  p4Img = loadImage("images/p4.png");
  p5Img = loadImage("images/p5.png");
  p6Img = loadImage("images/p6.png");
  p7Img = loadImage("images/p7.png");
  p8Img = loadImage("images/p8.png");
}

function setup(){
  createCanvas(1450, 600);
  soldier = createSprite(100, 450);
  soldier.addImage("soldier",soldierImg);
  soldier.scale = 0.4;

  farmer1 = createSprite(1000, 500);
  farmer1.addImage("farmer", farmer1Img);
  farmer1.scale = 0.4;

  s1 = createSprite(850, 200);
  s1.addImage("s1", s1Img);
  s1.scale = 0.5;
  s1.visible = false;

  s2 = createSprite(850, 200);
   s2.addImage("s2", s2Img);
  s2.scale = 0.5;
  s2.visible = false;

  s3 = createSprite(850, 200);
  s3.addImage("s3", s3Img);
  s3.scale = 0.5;
  s3.visible = false;

  s4 = createSprite(850, 200);
 s4.addImage("s4", s4Img);
  s4.scale = 0.5;
  s4.visible = false;

  p1 = createSprite(1000, 400);
  p1.addImage("p1", p1Img);
  p1.scale = 0.5;
  p1.visible = false;

  p2 = createSprite(1000, 400);
  p2.addImage("p2", p2Img);
  p2.scale = 0.5;
  p2.visible = false;
}

function draw(){
  background(183, 44, 97)

  if(keyWentDown(RIGHT_ARROW)){
    soldier.x = soldier.x + 50;
  }

  if(keyWentDown(LEFT_ARROW)){
    soldier.x = soldier.x - 50;
  }

  if(soldier.x > 800 && flag==="initial"){
     s1.visible = true;
     flag="s1";
  }

  if (mousePressedOver(s1)&& flag==="s1" ) {
    s1.destroy();
   // s1.visible = false;
    p1.visible = true;
    flag="p1"
    p1.debug=true
    //p1.scale=1.5
  }
  console.log(flag)

  if (mousePressedOver(p1) && flag==="p1") {
   // p1.visible = false;
    p1.destroy();
    s2.visible = true;
    flag="s2"
 }

  if (mousePressedOver(s2) && flag==="s2") {
    s2.destroy();
    p2.visible = true;
  }
  drawSprites();
  
  textSize(20);
  fill(0);
  text("Press Arrow Keys to move the Soldier", 500, 50);
  
  drawSprites();
}