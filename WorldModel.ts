import Snake from "./Snake"
import View from "./View";

class WorldModel { 
   sSnake:Snake;
   width: number;
   height: number;
   view: View;

 constructor (sSnake: Snake, height: number, width: number) {
    
    this.sSnake = sSnake;
    this.height = height;
    this.width = width;
    this.view = null;
 }

 update(steps: number) {

   this.sSnake.move(steps);

    if (this.view != null) this.view.display(this);

 }

 get snake () {

   return this.sSnake;
 }

get wWidth () {

   return this.width;
 }

get wHeight () {

   return this.height;
 }

set theView(view: View) {

   this.view = view;
  }
}


export default WorldModel;