import { Point } from "../../State";
import { logicTurtleScenario } from "./LogicTurtleScenario";

describe("logic turtle", () => {
  test.each([
    [10, 0, new Point(10, 0)],
    [10, 90, new Point(0, -10)],
    [10, 180, new Point(-10, 0)],
    [10, 270, new Point(0, 10)],
    [10, -45, new Point(7, 7)],
    [10, -30, new Point(9, 5)],
    [10, -30 - 90, new Point(-5, 9)],
    [10, -30 - 180, new Point(-9, -5)],
    [10, -30 - 270, new Point(5, -9)],
  ])(
    "it moves forward",
    (distance: number, angle: number, expectedPosition: Point) => {
      logicTurtleScenario()
        .givenTurtleIsFacing(angle)
        .whenItMovesForward(distance)
        .thenItArrivesAt(expectedPosition);
    },
  );
});
