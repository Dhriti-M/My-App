class Level1{
    constructor(){
       this.aloebg=loadImage("images/Aloebg.png"); 
       this.mintbg=loadImage("images/Mintbg.png"); 
       this.eucabg=loadImage("images/Eucalyptusbg.png");
       this.drumbg=loadImage("images/Drumstickbg.png");
       this.neembg=loadImage("images/Neembg.png");
       this.hennabg=loadImage("images/hennabg.png");

       this.mint=loadImage("images/mint.png"); 
       this.aloe=loadImage("images/Aloe vera.png"); 
       this.eucalyptus=loadImage("images/Eucalyptus.png"); 
       this.drum=loadImage("images/Drumstick.png"); 
       this.neem=loadImage("images/neem.png"); 
       this.henna=loadImage("images/Henna.png"); 

       this.aloegroup=new Group();
       this.eucagroup=new Group();
       this.mintgroup=new Group();
       this.drumgroup=new Group();
       this.neemgroup=new Group();
       this.hennagroup=new Group();


    }
 
    display (){
       
      switch(leaf){
         case "aloe":background(this.aloebg);
                     break;
         case "mint":background(this.mintbg);
                     break;
         case "eucalyptus":background(this.eucabg); 
                     break;
        case "drum":background(this.drumbg);
                     break;
         case "neem":background(this.neembg);
                     break;
         case "henna":background(this.hennabg); 
                     break;
        default : background("white")
                  
      }
       
       //image(this.aloe,displayWidth-250,50,90,50)
       
       if (frameCount%speed===0){
       var randX=Math.round(random(100,displayWidth));
       var leaves=createSprite(randX,-1,20,20);
       leaves.velocityY=10;
       leaves.lifetime=200;
       
       var randleaf=Math.round(random(1,6))
       switch(randleaf){
           case 1:leaves.addImage(this.aloe) 
           this.aloegroup.add(leaves); 
                    break;

           case 2:leaves.addImage(this.eucalyptus)  
           this.eucagroup.add(leaves);  
                    break;  
                    
           case 3:leaves.addImage(this.mint)  
           this.mintgroup.add(leaves);  
                    break; 
          case 4:leaves.addImage(this.drum) 
           this.drumgroup.add(leaves); 
                    break;

           case 5:leaves.addImage(this.neem)  
           this.neemgroup.add(leaves);  
                    break;  
                    
           case 6:leaves.addImage(this.henna)  
           this.hennagroup.add(leaves);  
                    break; 

           default: break;         
       }
    }
       drawSprites();
       textSize(30);
       fill("white");
       text("score : "+ score +"/5",displayWidth-200,50);
       
    }
}