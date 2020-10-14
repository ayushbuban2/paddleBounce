var ball,ball_img,paddle,paddle_img;
function preload() {
  ball_img=loadImage("ball.png");
  paddle_img=loadImage("paddle.png");
  
}
function setup() {
  createCanvas(400, 400);
  ball=createSprite(40,200,20,20);
  ball.velocityX=9;
  ball.addImage(ball_img);
  paddle=createSprite(350,200,20,100);
  paddle.addImage(paddle_img);
  
}

function draw() {
  background(205,153,0);
  edges=createEdgeSprites();
  ball.bounceOff(edges[0]);
   ball.bounceOff(edges[2]);
   ball.bounceOff(edges[3]);
  ball.bounceOff(paddle,randomVelocity);
  
  
  
  /* Allow the ball sprite to bounceOff the left, top and bottom edges only, leaving the right edge of the canvas to be open. */
  

  /* Allow the ball to bounceoff from the paddle */
  /* Also assign a collision callback function, so that the ball can have a random y velocity, making the game interesting */
 
  /* Prevent the paddle from going out of the edges */ 
  paddle.collide(edges);
  
  if(keyDown(UP_ARROW))
  {
    paddle.velocityY=-5;
  }
  
  if(keyDown(DOWN_ARROW))
  {
    paddle.velocityY=5;
  }
  drawSprites();
  
}

function randomVelocity()
{
ball.velocityY=random(5,10)

}
