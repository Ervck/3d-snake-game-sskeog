import Player from "./Player";
import SnakeController from "./SnakeController";
import WorldModel from "./WorldModel";
import display from "./display";


class AvoidWallsPlayer extends Player {
  constructor(sc: SnakeController) {
    super(sc);
  }

  public makeTurn() {
    

    if (

      this.sc.snakeDirection == "Front" && this.sc.snakePosition.y == 0) {
      
     
      if (

        this.sc.snakePosition.x == this.sc.snakeWorld.width)
        
        this.sc.turnSnakeLeft();

      else this.sc.turnSnakeRight();

    }

    if (

      this.sc.snakeDirection == "Back" &&
      this.sc.snakePosition.y == this.sc.snakeWorld.height
    ) {
      

      if (

        this.sc.snakePosition.x == this.sc.snakeWorld.width)
        
        this.sc.turnSnakeRight();

      else this.sc.turnSnakeLeft();
    }

    if (

      this.sc.snakeDirection == "Left" && this.sc.snakePosition.x == 0) {
      
      if (

        this.sc.snakePosition.y == this.sc.snakeWorld.height)
        
        this.sc.turnSnakeRight();

      else this.sc.turnSnakeLeft();
    }

    if (

      this.sc.snakeDirection == "Right" &&
      this.sc.snakePosition.x == this.sc.snakeWorld.width
    ) {

      if (

        this.sc.snakePosition.y == this.sc.snakeWorld.height)

        this.sc.turnSnakeLeft();
        
      else this.sc.turnSnakeRight();
    }
  }
}

export default AvoidWallsPlayer;