import Player from "./Player"

class AvoidWallsPlayer extends Player {

 constructor() {
    super();
  }

   makeTurn(): void {

    if (this.sc.snakeDirection == "Left" && this.sc.snakePosition.x == 0 && this.sc.snakePosition.y < this.sc.worldHeight)this.sc.turnSnakeLeft;
  }






















  }

export default AvoidWallsPlayer;