import { Rectangle } from "../Rectangle";
import { BoundTurtle } from "../BoundTurtle";
import { LogicTurtle } from "../../Logic/LogicTurtle";
import { initialStateFactory, Point, State } from "../../State";

class BoundTurtleScenario {
  private actual: State | Error;

  constructor(
    private boundingBox: Rectangle = new Rectangle(
      { x: 1, y: 1 },
      { x: 0, y: 0 },
    ),
  ) {}

  givenBoundingBox(boundingBox: Rectangle): BoundTurtleScenario {
    this.boundingBox = boundingBox;
    return this;
  }

  whenTurtleMoves(distance: number): BoundTurtleScenario {
    const sut = new BoundTurtle(new LogicTurtle(), this.boundingBox);
    try {
      this.actual = sut.moveForward(initialStateFactory(), distance);
    } catch (exception) {
      this.actual = exception;
    }
    return this;
  }

  thenThePositionIs(expected: Point): BoundTurtleScenario {
    if (!("position" in this.actual)) {
      fail("SUT did not return a valid state");
    }

    expect(this.actual.position).toEqual(expected);
    return this;
  }

  thenOutOfBoundsExceptionIsExpected(message: string): BoundTurtleScenario {
    if (!("message" in this.actual)) {
      fail("SUT did not throw the expected error");
    }

    expect(this.actual.message).toEqual(message);
    return this;
  }
}

export function boundTurtleScenario() {
  return new BoundTurtleScenario();
}
