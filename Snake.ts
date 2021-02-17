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

private snek: string;
private currentPosition: Point;
private currentDirection: string;

  constructor() {

    this.currentPosition = new Point (0,0);
    this.currentDirection = "Front";
    this.snek = "Momo";
  }

public move(n: number) {

   display("The Snake Slithers Sinisterly");

   if (this.currentDirection == "Front") {this.currentPosition = new Point (this.currentPosition.x, this.currentPosition.y + n),
   
     display("The Snake Has Moved To:", JSON.stringify(this.currentPosition));}

   else if (this.currentDirection == "Back") {this.currentPosition = new Point (this.currentPosition.x, this.currentPosition.y - n), 
       
     display("The Snake Has Moved To:", JSON.stringify(this.currentPosition));}

   else if (this.currentDirection == "Left") {this.currentPosition = new Point (this.currentPosition.x - n, this.currentPosition.y), 
       
     display("The Snake Has Moved To:", JSON.stringify(this.currentPosition));}

   else if (this.currentDirection == "Right") {this.currentPosition = new Point (this.currentPosition.x + n, this.currentPosition.y), 
       
     display("The Snake Has Moved To:", JSON.stringify(this.currentPosition));}

  }


public turnLeft() {
 
  if (this.currentDirection == "Front") {this.currentDirection = "Left",
   
      display("The Snake Whips It's Tail, Turning To The", this.currentDirection, "Side. ");}

  else if (this.currentDirection == "Left") {this.currentDirection = "Back",
  
      display("The Snake Whips It's Tail,Turning To The", this.currentDirection, "Side. ");}

  else if (this.currentDirection == "Back") {this.currentDirection = "Right",
  
      display("The Snake Whips It's Tail, Turning To The", this.currentDirection, "Side. ");}
  
  else {this.currentDirection = "Front",
  
      display("The Snake Whips It's Tail, Turning To The", this.currentDirection, "Side. ");}

  }

public turnRight() {

  if (this.currentDirection == "Front") {this.currentDirection = "Right",
   
      display("The Snake Whips It's Tail, Turning To The", this.currentDirection, "Side. ");}

  else if (this.currentDirection == "Right") {this.currentDirection = "Back",
  
      display("The Snake Whips It's Tail,Turning To The", this.currentDirection, "Side. ");}

  else if (this.currentDirection == "Back") {this.currentDirection = "Left",
  
      display("The Snake Whips It's Tail, Turning To The", this.currentDirection, "Side. ");}
  
  else {this.currentDirection = "Front",
  
      display("The Snake Whips It's Tail, Turning To The", this.currentDirection, "Side. ");}

  }

}

class WorldModel {

  private snek: Snake;

    constructor(snek: Snake) {

    this.snek = snek;

  }

  public update(steps: number) {
  
   this.snek.move(steps);

  }

  get snake() {

    return this.snek;

  }


}

export default Snake;