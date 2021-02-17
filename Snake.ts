import display from './display';

// place your code on line 5 above the export statement below

class Point {
  private xcoord: number;
  private ycoord: number;


 constructor(x = 0, y = 0) {
    this.xcoord = x;
    this.ycoord = y;

 }
get x() {
    return this.x;
 }
get y() {
    return this.y;

 }





}





class Snake {

private currentPosition: Point;
private currentDirection: string;
  constructor() {
    this.currentPosition = new Point (0,0);
    this.currentDirection = "Foward";

  }

public move() {

   display("The Snake Slithers Sinisterly");

   if (this.currentDirection == "Foward") {this.currentPosition = new Point (this.currentPosition.x, this.currentPosition.y + 1),
   
     display("The Snake Has Moved Foward To: ", this.currentPosition);}

   else {this.currentPosition = new Point (this.currentPosition.x, this.currentPosition.y - 1), 
       
     display("The Snake Has Moved Backwards To: ",this.currentPosition);}

  }

public turn() {
  
  if (this.currentDirection == "Foward") {this.currentDirection = "Backward",
  
     display("The Snake Whips It's Tail, Turning Backward. ");}
     
  else

     display("The Snake Whips It's Tail, Turning Foward. ");

  }

public turnLeft() {
 
  if (this.currentDirection == "Foward") {this.currentDirection = "Left",
   
      display("The Snake Whips It's Tail, Facing The Left Side. ");}

  else if (this.currentDirection == "Left") {this.currentDirection = "Backward",
  
      display("The Snake Whips It's Tail, Facing Back Side. ");}

  else if (this.currentDirection == "Backward") {this.currentDirection = "Right",
  
      display("The Snake Whips It's Tail, Facing The Right Side. ");}

  }

public turnRight() {
  
if (this.currentDirection == "Foward") {this.currentDirection = "Right",
   
      display("The Snake Whips It's Tail, Turning Right. ");}

  else
  
      display("The Snake Whips It's Tail, Turning Foward. ");

  }



}

export default Snake;