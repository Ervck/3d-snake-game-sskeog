import View from "./View";
import WorldModel from "./WorldModel";


class CanvasView implements View{
context: CanvasRenderingContext2D;
canvas: HTMLCanvasElement;
scalef: number;


constructor (scalef: number) {

  this.scalef = scalef;
  this.canvas = document.createElement("canvas"); document.body.appendChild(this.canvas);
  this.context = this.canvas.getContext("2d");

}


display (world: WorldModel): void {

this.canvas.width = world.width * this.scalef;
this.canvas.height = world.height * this.scalef;
}



}

export default CanvasView;