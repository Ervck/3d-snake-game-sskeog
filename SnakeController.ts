import Snake from "./Snake"
import WorldModel from "./WorldModel"

class SnakeController { 

   snakeWorld: WorldModel;
   slither: Snake;

  constructor (world: WorldModel, snake: Snake) {
        
    this.snakeWorld = world;  
    this.slither = snake; 
    
 }

  turnSnakeLeft() {

   this.slither.turnLeft();

 }

  turnSnakeRight() {

   this.slither.turnRight();

 }

 get snakePosition () {

   return this.slither.currentPosition

 }

  get snakeDirection () {

   return this.slither.currentDirection

 }

 get worldWidth () {

   return this.snakeWorld.width
 }

get worldHeight () {

   return this.snakeWorld.height
 }

}


export default SnakeController;