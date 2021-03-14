class Point {
  
  private xcoord: number;
  private ycoord: number;


 constructor(x: number, y: number) {

    this.xcoord = x;
    
    this.ycoord = y;

 }

get x() {

    return this.xcoord;

 }

get y() {

    return this.ycoord;

 }

public equals(p: Point): boolean {

    return this.xcoord == p.x && this.ycoord == p.y;
    
  }

}


export default Point;