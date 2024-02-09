import { State } from "./State";

export interface Turtle {
  penUp(state: State): State;
  penDown(state: State): State;
  moveForward(state: State, distance: number): State;
  turnLeft(state: State, degrees: number): State;
  turnRight(state: State, degrees: number): State;
}
