import View from "./View";
import WorldModel from "./WorldModel";
import Snake from "./Snake";


class CanvasView implements View {
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

this.context.fillStyle = "gray";
this.context.fillRect(
  0,
  0,
  world.height * this.scalef,
  world.width * this.scalef
);

this.context.fillStyle = "blue";

for (let snake of world.allSnakes) {
  for (let pos of snake.parts) {
    this.context.fillRect(pos.x*this.scalef, pos.y * this.scalef, this.scalef, this.scalef);

      }
    }
  }
}

export default CanvasView;