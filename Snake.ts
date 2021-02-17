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
    this.currentDirection = "Front";

  }

public move() {

   display("The Snake Slithers Sinisterly");

   if (this.currentDirection == "Front") {this.currentPosition = new Point (this.currentPosition.x, this.currentPosition.y + 1),
   
     display("The Snake Has Moved Foward To: ", this.currentPosition);}

   else {this.currentPosition = new Point (this.currentPosition.x, this.currentPosition.y - 1), 
       
     display("The Snake Has Moved Backwards To: ",this.currentPosition);}

  }

public turn() {
  
  if (this.currentDirection == "Front") {this.currentDirection = "Back",
  
     display("The Snake Whips It's Tail, Turning To The ", this.currentDirection," Side. ");}
     
  else

     display("The Snake Whips It's Tail, Turning To The ", this.currentDirection," Side. ");

  }

public turnLeft() {
 
  if (this.currentDirection == "Front") {this.currentDirection = "Left",
   
      display("The Snake Whips It's Tail, Turning To The ", this.currentDirection, " Side. ");}

  else if (this.currentDirection == "Left") {this.currentDirection = "Back",
  
      display("The Snake Whips It's Tail,Turning To The ", this.currentDirection, " Side. ");}

  else if (this.currentDirection == "Back") {this.currentDirection = "Right",
  
      display("The Snake Whips It's Tail, Turning To The ", this.currentDirection, " Side. ");}
  
  else {this.currentDirection = "Front",
  
      display("The Snake Whips It's Tail, Turning To The ", this.currentDirection, " Side. ");}

  }

public turnRight() {

  if (this.currentDirection == "Front") {this.currentDirection = "Right",
   
      display("The Snake Whips It's Tail, Turning To The ", this.currentDirection, " Side. ");}

  else if (this.currentDirection == "Right") {this.currentDirection = "Back",
  
      display("The Snake Whips It's Tail,Turning To The ", this.currentDirection, " Side. ");}

  else if (this.currentDirection == "Back") {this.currentDirection = "Left",
  
      display("The Snake Whips It's Tail, Turning To The ", this.currentDirection, " Side. ");}
  
  else {this.currentDirection = "Front",
  
      display("The Snake Whips It's Tail, Turning To The ", this.currentDirection, " Side. ");}

  }

  



}

export default Snake;