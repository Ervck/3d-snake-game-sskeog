import Player from "./Player"

class AvoidWallsPlayer extends Player {

 constructor() {
    super();
  }                         /**I also struggled a bit in this section aswell. */

   makeTurn(): void {

    if (this.sc.snakeDirection == "Left" && this.sc.snakePosition.x == 0 && this.sc.snakePosition.y < this.sc.worldHeight){this.sc.turnSnakeLeft;}

    else if (this.sc.snakeDirection == "Right" && this.sc.snakePosition.x > this.sc.worldWidth)
   {this.sc.turnSnakeLeft}

  }






















  }

export default AvoidWallsPlayer;