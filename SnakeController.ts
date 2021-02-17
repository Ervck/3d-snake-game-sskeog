import Snake from "./Snake"
import WorldModel from "./WorldModel"

class SnakeController { 

   snake: Snake;
   world: WorldModel;
   snakeWorld: void;
   slither: void;

  constructor (World: number, Snake: number) {
        
    this.snakeWorld ; void
    this.slither ; void
    
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