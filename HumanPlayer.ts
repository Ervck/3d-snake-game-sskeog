import PlayerInterface from "./PlayerInterface";
import InputHandler from "./InputHandler";
import SnakeController from "./SnakeController";



class HumanPlayer implements PlayerInterface {

 snake: SnakeController;
 input: InputHandler;

constructor (input: InputHandler, snake: SnakeController) {

  this.input = input;
  this.snake = snake;

}






}


export default HumanPlayer