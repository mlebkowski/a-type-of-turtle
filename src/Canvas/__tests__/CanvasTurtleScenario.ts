import { StatefulTurtle } from "../../Stateful/StatefulTurtle";
import { CanvasTurtle } from "../CanvasTurtle";
import { CanvasSpy } from "./CanvasSpy";
import { LogicTurtle } from "../../Logic/LogicTurtle";

class CanvasTurtleScenario {
  constructor(
    private readonly canvas: CanvasSpy,
    private readonly turtle: StatefulTurtle,
  ) {}

  whenOddSidesOfRectangleAreDrawn(sideLength: number): CanvasTurtleScenario {
    this.turtle.moveForward(sideLength);
    this.turtle.turnRight(90);
    this.turtle.penUp();

    this.turtle.moveForward(sideLength);
    this.turtle.turnRight(90);
    this.turtle.penDown();

    this.turtle.moveForward(sideLength);
    this.turtle.turnRight(90);
    this.turtle.penUp();

    this.turtle.moveForward(sideLength);
    this.turtle.turnRight(90);
    this.turtle.penDown();

    return this;
  }

  thenCanvasLinesAreExpected(...lines: string[]) {
    const actual = this.canvas.lines.map(
      (line) => `${line.start.x}×${line.start.y} → ${line.end.x}×${line.end.y}`,
    );
    expect(actual).toEqual(lines);
  }
}

export function canvasTurtleScenario() {
  const canvas = new CanvasSpy();
  return new CanvasTurtleScenario(
    canvas,
    new StatefulTurtle(new CanvasTurtle(new LogicTurtle(), canvas)),
  );
}
