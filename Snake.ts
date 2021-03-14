import display from './display';
import Point from './Point'


class Snake {


public currentParts: Point[] = [];
public currentDirection: string;
public size: number;

  constructor(startPosition: Point, size: number) {

    this.currentParts.push(startPosition);

      for (let i: number = 0; i < size - 2; i++)

    this.currentParts.push(new Point(startPosition.x, startPosition.y - i));

    this.currentDirection = "Front";
    
    this.size = size;
  }

public move(n: number) {

    for (let i = this.currentParts.length - 1; i > 0; i--) {
      this.currentParts[i] = new Point(

        this.currentParts[i - 1].x,

        this.currentParts[i - 1].y
      );

    }

    let x = this.currentParts[0].x;
    let y = this.currentParts[0].y;

    if (this.currentDirection == "Front") y -= n;
    if (this.currentDirection == "Back") x += n;
    if (this.currentDirection == "Left") y += n;
    if (this.currentDirection == "Right") x -= n;

    this.currentParts[0] = new Point(x, y);
    
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

get position() {
  return this.currentParts[0];
}

get parts() {
  return this.currentParts;
}

didCollide(s: Snake) {
  for (let p of s.parts.slice(1))
    if (p.x == this.currentParts[0].x && p.y == this.currentParts[0].y)
      return true;

  return false;
  }
  
}

export default Snake;