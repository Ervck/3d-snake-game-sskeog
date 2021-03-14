import Snake from "./Snake"
import View from "./View";

class WorldModel { 
   sSnake:Snake[] = [];
   width: number;
   height: number;
   view: View[] = [];

 constructor (height: number, width: number) {
    
    this.height = height;
    this.width = width;
 }

   public addSnake(s: Snake) {

      this.sSnake.push(s);
  }

  public addView(v: View) {

      this.view.push(v);
  }



 public update(steps: number) {

    for (let snake of this.sSnake) snake.move(steps);

    for (let view of this.view) view.display(this);

    const snakeCollisions = [null];

 }

  public get allSnakes() {
    return this.sSnake;

  }

get wWidth () {

   return this.width;
 }

get wHeight () {

   return this.height;
 }

}


export default WorldModel;