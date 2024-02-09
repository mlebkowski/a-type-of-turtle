import { Turtle } from "../Turtle";
import { initialStateFactory, State } from "../State";

export class StatefulTurtle {
  constructor(
    private readonly turtle: Turtle,
    private state: State = initialStateFactory(),
  ) {}

  get position() {
    return this.state.position;
  }

  get angle() {
    return this.state.angle;
  }

  moveForward(distance: number): void {
    this.state = this.turtle.moveForward(this.state, distance);
  }

  penDown(): void {
    this.state = this.turtle.penDown(this.state);
  }

  penUp(): void {
    this.state = this.turtle.penUp(this.state);
  }

  turnLeft(degrees: number): void {
    this.state = this.turtle.turnLeft(this.state, degrees);
  }

  turnRight(degrees: number): void {
    this.state = this.turtle.turnRight(this.state, degrees);
  }
}
