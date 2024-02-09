import type { Turtle } from "../Turtle";
import { Angle, Pen, Point, State } from "../State";

export class LogicTurtle implements Turtle {
  moveForward(state: State, distance: number): State {
    const angle = state.angle.rad * -1;
    const xFactor = Math.cos(angle);
    const yFactor = Math.sin(angle);
    const xDistance = Math.round(distance * xFactor);
    const yDistance = Math.round(distance * yFactor);
    const vector = new Point(xDistance, yDistance);
    return { ...state, position: state.position.add(vector) };
  }

  penDown(state: State): State {
    return { ...state, pen: Pen.down() };
  }

  penUp(state: State): State {
    return { ...state, pen: Pen.up() };
  }

  turnLeft(state: State, degrees: number): State {
    return { ...state, angle: state.angle.sub(new Angle(degrees)) };
  }

  turnRight(state: State, degrees: number): State {
    return { ...state, angle: state.angle.add(new Angle(degrees)) };
  }
}
