class Level2{
    constructor(){
       
      this.aloe=loadImage("images/Aloe vera.png"); 
      this.eucalyptus=loadImage("images/Eucalyptus.png"); 
     
      this.mintgroup=new Group();

    }
 
    display (){

       background(this.mintbg);
       image(this.aloe,displayWidth-250,50,90,50)
       if (frameCount%50===0){
       var randX=Math.round(random(100,displayWidth));
       var leaf=createSprite(randX,-1,20,20);
       leaf.velocityY=5;
       leaf.lifetime=200;
       
       var randleaf=Math.round(random(1,3))
       switch(randleaf){
           case 1:leaf.addImage(this.mint) 
           this.mintgroup.add(leaf); 
                    break;

           case 2:leaf.addImage(this.eucalyptus)   
                    break;  
                    
           case 3:leaf.addImage(this.aloe)   
                    break; 

           default: break;         
       }
    }
       drawSprites();
    }
}