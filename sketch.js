var balloon,background;
function preload(){
backgroundImg=loadImage("images/1.png","images/4.png");
balloonImage=loadAnimation("images/2.png","images/3.png","images/4.png");

}

function setup(){
database=firebase.database();
console.log(database);
createCanvas(500,500);

balloon=createSprite(100,400,20,20);
balloon.addAnimation("balloon",ballonImage);
ballon.scale=0.4;

}

function draw(){
background(backgroundImg);

if(keyDow(LEFT_ARROW)){
balloon.x=balloon.x-10;
}
else if(keyDown(RIGHT_ARROW)){
balloon.x=balloon.x+10;
}

else if(keyDown(UP_ARROW)){
balloon.y=balloon.y-10;
}

else if(keyDown(DOWN_ARROW)){
    balloon.x=balloon.x-10;  
    }
    
drawSprites();
}