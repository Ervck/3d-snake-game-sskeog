import SnakeController from "./SnakeController"

abstract class Player {
  abstract makeTurn: () => void;
  sc: SnakeController;

 constructor (sc: SnakeController) {
    
    this.sc = sc;

  }

 

 






















}

export default Player;