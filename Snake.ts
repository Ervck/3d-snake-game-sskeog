import display from './display';
import Point from './Point'


class Snake {


public currentPosition: Point;
public currentDirection: string;

  constructor() {

    this.currentPosition = new Point (0,0);
    this.currentDirection = "Front";
    
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


   get direction () {

   return this.currentDirection
 }

}

export default Snake;