import React, { Component } from "react";
import { render } from "react-dom";
import Hello from "./Hello";
import "./style.css";
import display from "./display";
import Snake from "./Snake";
import SnakeTests from "./SnakeTests";
import WorldModel from "./WorldModel";
import SnakeController from "./SnakeController";
import AvoidWallsPlayer from "./AvoidWallsPlayer";
import CanvasView from "./CanvasView";
import Point from "./Point";

interface AppProps { }
interface AppState {
  name: string;
}

class App extends Component<AppProps, AppState> {
  constructor(props) {
    super(props);
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
        <Hello name={this.state.name} />
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
        <pre id="output">
          OUTPUT: <br />
        </pre>
        {
           // <SnakeTests />
        }
        {
          // <DuckTests />
        }
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));

// Add display statements below
display("Let's get started with React TypeScript!");

let snake = new Snake(new Point(5, 5), 3);
let world = new WorldModel(10, 10);
world.addSnake(snake);
let view = new CanvasView(50);
world.addView(view);
let sc = new SnakeController(world, snake);
world.update(1);