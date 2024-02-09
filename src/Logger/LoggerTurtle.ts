import { Turtle } from "../Turtle";
import { Logger } from "./Logger";
import { State } from "../State";

export class LoggerTurtle implements Turtle {
  constructor(
    private readonly turtle: Turtle,
    private readonly logger: Logger,
  ) {}

  moveForward(state: State, distance: number): State {
    this.logger.log(
      `[${state.position.x}×${state.position.y}] Move forward by ${distance} units at an angle ${state.angle.degrees} degrees`,
    );
    return this.turtle.moveForward(state, distance);
  }

  penDown(state: State): State {
    this.logger.log(`[${state.position.x}×${state.position.y}] Pen down`);
    return this.turtle.penDown(state);
  }

  penUp(state: State): State {
    this.logger.log(`[${state.position.x}×${state.position.y}] Pen up`);
    return this.turtle.penUp(state);
  }

  turnLeft(state: State, degrees: number): State {
    this.logger.log(
      `[${state.position.x}×${state.position.y}] Turn left by ${degrees} degrees`,
    );
    return this.turtle.turnLeft(state, degrees);
  }

  turnRight(state: State, degrees: number): State {
    this.logger.log(
      `[${state.position.x}×${state.position.y}] Turn right by ${degrees} degrees`,
    );
    return this.turtle.turnRight(state, degrees);
  }
}
