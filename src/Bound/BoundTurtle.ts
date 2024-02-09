import { State } from "../State";
import { Turtle } from "../Turtle";
import { Rectangle } from "./Rectangle";
import { BoundingBoxAssertion } from "./BoundingBoxAssertion";

export class BoundTurtle implements Turtle {
  constructor(
    private readonly turtle: Turtle,
    private readonly boundingBox: Rectangle,
  ) {}

  penUp(state: State): State {
    return this.turtle.penUp(state);
  }

  penDown(state: State): State {
    return this.turtle.penDown(state);
  }

  moveForward(state: State, distance: number): State {
    const result = this.turtle.moveForward(state, distance);
    BoundingBoxAssertion.assertWithinBoundingBox(
      result.position,
      this.boundingBox,
    );
    return result;
  }

  turnLeft(state: State, degrees: number): State {
    throw new Error("Method not implemented.");
  }

  turnRight(state: State, degrees: number): State {
    throw new Error("Method not implemented.");
  }
}
