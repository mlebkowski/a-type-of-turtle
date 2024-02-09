import { Angle, Point } from "../../State";
import { LogicTurtle } from "../../Logic/LogicTurtle";
import { StatefulTurtle } from "../StatefulTurtle";

class StatefulTurtleScenario {
  constructor(
    private readonly turtle: StatefulTurtle = new StatefulTurtle(
      new LogicTurtle(),
    ),
  ) {}

  public andMovesForward(distance: number): StatefulTurtleScenario {
    this.turtle.moveForward(distance);
    return this;
  }

  public thenTheAngleIs(expected: Angle): StatefulTurtleScenario {
    expect(this.turtle.angle).toEqual(expected);
    return this;
  }

  public thenThePositionIs(expected: Point): StatefulTurtleScenario {
    expect(this.turtle.position).toEqual(expected);
    return this;
  }

  public whenTurtleTurnsLeft(degrees: number): StatefulTurtleScenario {
    this.turtle.turnLeft(degrees);
    return this;
  }
}

export function statefulTurtleScenario() {
  return new StatefulTurtleScenario();
}
