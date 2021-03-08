import SnakeController from "./SnakeController";

interface ImputHandler {

  madeLeftMove(controller: SnakeController): void;
  madeRightMove(controller: SnakeController): void;
  resetLeftMove(controller: SnakeController): void;
  resetRightMove (controller: SnakeController): void;

}


export default ImputHandler