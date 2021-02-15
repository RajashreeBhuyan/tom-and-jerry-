
var cat,cat_running;
var mouse,mouse_running;


function preload() {
    //load the images here9

 mouse_running = loadAnimation("tomOne.png","tomTow.png","tomThree.png","tomFour.png");
cat_running = loadAnimation("jerryOne.png","jerryTow.png","jerryThree.png","jerryFour.png")
 
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
  mouse=createSprite(60,325,10,10);  
  mouse.addAnimation("run",mouse_running);
  //Scaling to adjust the animation
  mouse.scale=0.1;
  //monkey.debug=true;
  //To make monkey look like it is on the ground not outside it
  mouse.setCollider("rectangle",0,0,550,400);


    //create tom and jerry sprites here
  cat=createSprite(60,325,10,10);  
  cat.addAnimation("run",cat_running);
  //Scaling to adjust the animation
  cat.scale=0.1;
  //monkey.debug=true;
  //To make cat look like it is on the ground not outside it
  cat.setCollider("rectangle",0,0,550,400);


if(cat.x - mouse.x < (cat.width - mouse.width)/2)
{
    
    //write code here to change animation
cat.addAnimation("catLastImage",cat)
cat.changeaddAnimation("catLastImage");

}

}


function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide
  
    








    drawSprites();
}


function keyPressed(){

//For moving and changing animation write code here

if(keyDown === LEFT_ARROW){
  cat.velocityX = -5;
  cat.addAnimation("catRunning",catImg2)
  cat.changeAnimation("catRunning");

}







}

