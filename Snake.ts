import display from './display';



class Point {
  
  private xcoord: number;
  private ycoord: number;


 constructor(x = 0, y = 0) {

    this.xcoord = x;
    
    this.ycoord = y;

 }

get x() {

    return this.xcoord;

 }

get y() {

    return this.ycoord;

 }

}


class Snake {

private snakeType: number;
private currentPosition: Point;
private currentDirection: string;

  constructor(snakeType: number) {

    this.currentPosition = new Point (0,0);
    this.currentDirection = "Front";
    this.snakeType = snakeType;
  }

public move(n: number) {

   display("The Snake Slithers Sinisterly");

   if (this.currentDirection == "Front") {this.currentPosition = new Point (this.currentPosition.x, this.currentPosition.y + n),
   
     display("The Snake Has Moved Foward To: ", JSON.stringify(this.currentPosition));}

   else if (this.currentDirection == "Back") {this.currentPosition = new Point (this.currentPosition.x, this.currentPosition.y - n), 
       
     display("The Snake Has Moved Foward To: ",JSON.stringify(this.currentPosition));}

   else if (this.currentDirection == "Left") {this.currentPosition = new Point (this.currentPosition.x - n, this.currentPosition.y), 
       
     display("The Snake Has Moved Foward To: ",JSON.stringify(this.currentPosition));}

   else if (this.currentDirection == "Right") {this.currentPosition = new Point (this.currentPosition.x + n, this.currentPosition.y), 
       
     display("The Snake Has Moved Foward To: ",JSON.stringify(this.currentPosition));}

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

 public snakeDesc() {
    if(this.snakeType === 0) display("The Snake Is Long.");
    else if(this.snakeType === 1) display("The Snake Is Short.");
 }

}

class WorldModel {

  private snakeType: Snake;

    constructor(snakeType: Snake) {

    this.snakeType = snakeType;

  }

  public update(steps: number) {
  
   return this.snake.move(steps);

  }

get snake() {

    return this.snakeType;

  }


}

export default Snake;