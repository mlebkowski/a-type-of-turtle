import { LogicTurtle } from "../LogicTurtle";
import { Angle, initialStateFactory, Point, State } from "../../State";

class LogicTurtleScenario {
  private state: State = initialStateFactory();

  public givenTurtleIsFacing(angle: number): LogicTurtleScenario {
    this.state = { ...this.state, angle: new Angle(angle) };
    return this;
  }

  public whenTurtleTurnsLeft(degrees: number): LogicTurtleScenario {
    const sut = new LogicTurtle();

    this.state = sut.turnLeft(this.state, degrees);
    return this;
  }

  public whenTurtleMovesForward(distance: number): LogicTurtleScenario {
    const sut = new LogicTurtle();

    this.state = sut.moveForward(this.state, distance);
    return this;
  }

  public whenItMovesForward(distance: number): LogicTurtleScenario {
    return this.whenTurtleMovesForward(distance);
  }

  public andMovesForward(distance: number): LogicTurtleScenario {
    return this.whenTurtleMovesForward(distance);
  }

  public thenItArrivesAt(expected: Point): LogicTurtleScenario {
    expect(this.state.position).toEqual(expected);
    return this;
  }
}

export function logicTurtleScenario() {
  return new LogicTurtleScenario();
}
