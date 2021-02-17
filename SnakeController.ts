import Snake from "./Snake"
import WorldModel from "./WorldModel"

class SnakeController { 

   snake: Snake;
   world: WorldModel;
   snakeWorld: null;
   slither: null;

  constructor (World: number, Snake: number) {
        
    this.snakeWorld = null;
    this.slither = null;
    
 }

  turnSnakeLeft() {

   this.slither.turnLeft();

 }

  turnSnakeRight() {

   this.slither.turnRight();

 }

 get snakePosition () {

   return this.snake.currentPosition

 }

  get snakeDirection () {

   return this.snake.currentDirection

 }

 get worldWidth () {

   return this.world.width
 }

get worldHeight () {

   return this.world.height
 }

}


export default SnakeController;