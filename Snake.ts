import display from './display';

// place your code on line 5 above the export statement below

class Point {
  private xcoord: number;
  private ycoord: number;


 constructor(x = 0, y = 0) {
    this.xcoord = x;
    this.ycoord = y;

 }
get xc() {
    return this.xcoord;
 }
get yc() {
    return this.ycoord;

 }





}





class Snake {

private currentPosition: Point;
private currentDirection: number;
  constructor() {
    this.currentPosition = new Point (1,0);
    this.currentDirection = 1;

  }

public move(pos:number) {
   display("The Snake Slithers Sinisterly");
   if (this.currentDirection == 1) {this.currentPosition == this.currentPosition + pos, display("The snake has moved foward by: ", pos, "space(s). To A New Position Of: ", this.currentPosition);}

   else {this.currentPosition == this.currentPosition - pos, display("The snake has moved backwards by: ", pos, "space(s). To A New Position Of: ", this.currentPosition);}

  }
public turn() {
   if (this.currentDirection == 1) {this.currentDirection == this.currentDirection - 2, display("The Snake Whips It's Tail, Turning Backward. ");}

   else {this.currentDirection == this.currentDirection + 2, display("The Snake Whips It's Tail, Turning Foward. ");}

}


public get position() {
 return this.currentPosition
}

set pos2(newPosition:number) {
  this.currentPosition = newPosition; }

}

export default Snake;