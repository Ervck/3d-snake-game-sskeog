import Snake from "./Snake"

class WorldModel { 
   sSnake:Snake;

 constructor (sSnake: Snake) {
    
    this.sSnake = sSnake;

 }

 update(steps: number) {

   this.sSnake.move(steps);

 }

 get snake () {

   return this.sSnake
 }




}


export default WorldModel;