import WorldModel from "./WorldModel"

interface View {

 display(a: null): void;
 scaf: number;
 canvas: null;
}



class CanvasView {
_world: WorldModel;
canvas: object;
scaf: number;


constructor (scaf, canvas) {

  this.scaf = 10;
  this.canvas = document.createElement("canvas"), document.body.appendChild(canvas);

}


display (world: WorldModel) {


}



}