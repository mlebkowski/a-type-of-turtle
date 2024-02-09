import { Turtle } from "../Turtle";
import { State } from "../State";

export class TurtleSpy implements Turtle {
  public calls: string[] = [];

  moveForward(state: State, distance: number): State {
    this.calls.push(`moveForward(${distance})`);
    return state;
  }

  penDown(state: State): State {
    this.calls.push(`penDown()`);
    return state;
  }

  penUp(state: State): State {
    this.calls.push(`penUp()`);
    return state;
  }

  turnLeft(state: State, degrees: number): State {
    this.calls.push(`turnLeft(${degrees})`);
    return state;
  }

  turnRight(state: State, degrees: number): State {
    this.calls.push(`turnRight(${degrees})`);
    return state;
  }
}
