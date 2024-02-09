import { Turtle } from "../Turtle";
import { Canvas } from "./Canvas";
import { State } from "../State";

export class CanvasTurtle implements Turtle {
  constructor(
    private readonly turtle: Turtle,
    private readonly canvas: Canvas,
  ) {}

  moveForward(state: State, distance: number): State {
    const start = state.position;
    const result = this.turtle.moveForward(state, distance);
    if (state.pen.isDown()) {
      this.canvas.draw({
        start: { x: start.x, y: start.y * -1 },
        end: { x: result.position.x, y: result.position.y * -1 },
      });
    }
    return result;
  }

  penDown(state: State): State {
    return this.turtle.penDown(state);
  }

  penUp(state: State): State {
    return this.turtle.penUp(state);
  }

  turnLeft(state: State, degrees: number): State {
    return this.turtle.turnLeft(state, degrees);
  }

  turnRight(state: State, degrees: number): State {
    return this.turtle.turnRight(state, degrees);
  }
}
