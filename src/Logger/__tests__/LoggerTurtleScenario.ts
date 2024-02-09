import { LoggerSpy } from "../LoggerSpy";
import { TurtleSpy } from "../../__tests__/TurtleSpy";
import { StatefulTurtle } from "../../Stateful/StatefulTurtle";
import { LoggerTurtle } from "../LoggerTurtle";

class LoggerTurtleScenario {
  constructor(
    private readonly logger: LoggerSpy,
    private readonly spy: TurtleSpy,
    private readonly turtle: StatefulTurtle,
  ) {}

  whenTurtleTurnsLeft(degrees: number) {
    this.turtle.turnLeft(degrees);
    return this;
  }

  whenTurtleTurnsRight(degrees: number) {
    this.turtle.turnRight(degrees);
    return this;
  }

  whenTurtleMovesForward(distance: number) {
    this.turtle.moveForward(distance);
    return this;
  }

  thenMessageIsLogged(...expected: string[]) {
    expect(this.logger.messages).toEqual(expected);
    return this;
  }

  andTurtleReceivedInstruction(expected: string) {
    expect(this.spy.calls.pop()).toEqual(expected);
    return this;
  }
}

export function loggerTurtleScenario() {
  const spy = new TurtleSpy();
  const logger = new LoggerSpy();
  const turtle = new StatefulTurtle(new LoggerTurtle(spy, logger));
  return new LoggerTurtleScenario(logger, spy, turtle);
}
