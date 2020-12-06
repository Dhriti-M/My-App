var bg1img;
var gamestate=0;
var playbutton;
var skipbutton;
var introduction;
var level1;
var basket,basketimg;
var score;
var leaf = "aloe";
var victorysound;
var speed =30 ;

function preload(){
  bg1img=loadImage("images/bg1.png")
  introduction=loadImage("images/Page 2.png")
  basketimg=loadImage("images/Basket.png")
  victorysound=loadSound("Sounds/Victory.mp3")

}

function setup(){
  createCanvas(displayWidth,displayHeight);
  playbutton=createButton("PLAY");
  skipbutton=createButton("SKIP");
  level1=new Level1();
  
  basket=createSprite(200,200,10,10);
  basket.addImage(basketimg);
  basket.scale=0.5
  score = 0;

  

}

function draw(){
  if(gamestate===0){
    background(bg1img);
    textSize(72);
    fill("darkgreen");
    textFont('Georgia');
    text("THE TREE  HUGGER",displayWidth-1100,displayHeight/2);
    
   
    playbutton.style('width','150px');
    playbutton.style('height','70px');
    playbutton.style('font-family','georgia')
    playbutton.style('background','darkgreen')
    playbutton.style('color','white');
    playbutton.style('font-size','48px')
    playbutton.position(displayWidth-850,displayHeight-350);


    playbutton.mousePressed(()=>{
      clear();
      playbutton.hide();
      gamestate=1;
    })
  }

  else if(gamestate===1){
   imageMode(CENTER);
   image(introduction,730,450,displayWidth,displayHeight);
    skipbutton.position(1100,150);
    skipbutton.style('width','100px');
    skipbutton.style('height','50px');
    skipbutton.style('font-family','georgia')
    skipbutton.style('font-size','38px')
    skipbutton.mousePressed(()=>{
      clear();
      skipbutton.hide();
      gamestate=2;
    })
  }

  else if(gamestate===2){
    if(leaf==="aloe"){
    level1.display();
    basket.x=mouseX;
    basket.y=mouseY;
    if(level1.aloegroup.isTouching(basket)){
      console.log("clickedonaloe");
      level1.aloegroup.destroyEach();
      score = score+1;
      text(score,150,50,50,50);
      console.log(score);
      if (score===5){
        leaf="mint";
        score=0;
        victorysound.play();
        speed=25;
      }
    }
  }
  else if(leaf==="mint"){
    level1.display();
    basket.x=mouseX;
    basket.y=mouseY;
    if(level1.mintgroup.isTouching(basket)){
      console.log("clickedonmint");
      level1.mintgroup.destroyEach();
      score = score+1;
      text(score,150,50,50,50);
      console.log(score);
      
      if (score===5){
        
        leaf="eucalyptus";
        score=0;
        victorysound.play();
        speed=20;
      }
  }
    
  }
  else if(leaf==="eucalyptus"){
    level1.display();
    basket.x=mouseX;
    basket.y=mouseY;
    if(level1.eucagroup.isTouching(basket)){
      
      level1.eucagroup.destroyEach();
      score = score+1;
      text(score,150,50,50,50);
      console.log(score);
      
      if (score===5){
        leaf="neem";
        score=0;
        victorysound.play();
        speed=15;
      }
  }
    
  }
  else if(leaf==="neem"){
    level1.display();
    basket.x=mouseX;
    basket.y=mouseY;
    if(level1.neemgroup.isTouching(basket)){
      
      level1.neemgroup.destroyEach();
      score = score+1;
      text(score,150,50,50,50);
      console.log(score);
      
      if (score===5){
        leaf="henna";
        score=0;
        victorysound.play();
        speed=10;
      }
  }
    
  }
  else if(leaf==="henna"){
    level1.display();
    basket.x=mouseX;
    basket.y=mouseY;
    if(level1.hennagroup.isTouching(basket)){
      
      level1.hennagroup.destroyEach();
      score = score+1;
      text(score,150,50,50,50);
      console.log(score);
      
      if (score===5){
        gamestate=3;
        
      }
  }
    
  }

  


  }
  else if (gamestate===3){
    clear();
    background("white");
        textSize(50);
        fill("black");
        text("YOU WON",displayWidth/2,displayHeight/2);
  }
}