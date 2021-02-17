import Snake from "./Snake"

class WorldModel { 
   sSnake:Snake;
   width: number;
   height: number;

 constructor (sSnake: Snake) {
    
    this.sSnake = sSnake;

 }

 update(steps: number) {

   this.sSnake.move(steps);

 }

 get snake () {

   return this.sSnake
 }

get wWidth () {

   return this.width
 }

get hHeight () {

   return this.height
 }

}


export default WorldModel;