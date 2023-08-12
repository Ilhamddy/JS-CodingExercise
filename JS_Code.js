/**
 * Welcome to the Stanford Karel IDE.
 * This is a free space for you to 
 * write any Karel program you want.
 **/
function main(){
   putBeeperLeft();
   turnUpLeft();
   putBeeperRight();
   turnUpRight();
   putBeeperLeft();
   turnUpLeft();
   putBeeperRight();
   turnUpRight();
   putBeeperLeft();
}

function turnUpLeft(){
    turnLeft();
   move();
   turnLeft();
   }
   

function turnUpRight(){
    turnRight();
   move();
   turnRight();
   }
   
   
function putBeeperRight(){
   putBeeper();
   move();
   move();
   putBeeper();
   move();
   move();
   putBeeper();
   }


function putBeeperLeft(){
   move();
   putBeeper();
   move();
   move();
   putBeeper();
   move();
  
   
   }
